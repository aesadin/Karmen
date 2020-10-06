import React from 'react';
import AddFundForm from './AddFundForm';
import FundList from './FundList';
import FundDetails from './FundDetails';
import EditFundForm from './EditFundForm';
import Header from "./Header";
import Hero from "./Hero";
import Layout from "./Layout"
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase'
import '../styles/index.css';
import '../styles/main-content.css';
import '../styles/footer.css';

class AppControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFund: null,
      visibleOnPage: "fundList" // set default state to showing the fundList because it will trigger the else statement in the render method
      }
    };

    handleAddClick = () => { 
      this.setState({visibleOnPage: "addFund"})
    }

    handleAddingFund = () => {
      this.setState({
        visibleOnPage: "fundList"
      });
    }

    handleAddVerify = (id) => {
      
    }

    handleDeletingFund = (id) => {
      this.props.firestore.delete({collection: 'fundraisers', doc: id});
      this.setState({selectedFund: null});
    }

    handleChangingSelectedFund = (id) => { // pass fund id
      this.props.firestore.get({collection: 'fundraisers', doc: id}).then((fund) => { //grab the fund with that id from the firestore collection, then pass that fund as a parameter
        const firestoreFund = { // create variable
          fundTitle: fund.get("fundTitle"), // grab the values to these properties
          city: fund.get("city"),
          description: fund.get("definition"),
          url: fund.get("url"),
          id: fund.id
        }
        this.setState({selectedFund: firestoreFund}); // set the state to the selected flash card with those new properties
      });
    }
    
    handleEditClick = () => { // this method is called on when the user clicks the edit button in details
      this.setState({visibleOnPage: 'editing'}); // this triggers the if statement in the render to show the editfund form
    }

    handleEditingFund = () => {
      this.setState({
        visibleOnPage: "fundList",
        selectedFund: null
      });
    }

    render(){
      const auth = this.props.firebase.auth(); 
      if (!isLoaded(auth)) {
        return (
          <Layout>
            <div class="app-control">
              <h1>Loading...</h1>
            </div>
          </Layout>
        )
      }
      if ((isLoaded(auth)) && (auth.currentUser == null)) {
        return (
          <Layout>
            <div className="landing-pg-control">
              <h1 className="landing-pg">Karmen</h1>
            </div>
          </Layout>
        )
      } 
        // formSubmissionHandler from reusable form
      if ((isLoaded(auth)) && (auth.currentUser != null)) {

        let currentlyVisibleState = null;
        if (this.state.visibleOnPage === "editing") { // if we are editing then show the edit fund form
          currentlyVisibleState = <EditFundForm fund = {this.state.selectedFund} onEditFund = {this.handleEditingFund} />
        } else if (this.state.selectedFund != null) { // if the selected fund is not empty, then show the selected fund's detail page
          currentlyVisibleState = <FundDetails fund = {this.state.selectedFund} onClickingDelete = {this.handleDeletingFund} onClickingEdit = {this.handleEditClick} />
        } else if (this.state.visibleOnPage === "addFund") { // 
          currentlyVisibleState = <AddFundForm onFundCreation = {this.handleAddingFund} />
        } else { // otherwise show the list of fundraisers
          currentlyVisibleState = <FundList onFundSelection = {this.handleChangingSelectedFund} onAddFundClick = {this.handleAddClick} onVerifyClick = {this.handleAddVerify}/>
        }
        return (
          <Layout>
            <div className="app-control">
              {currentlyVisibleState}
            </div>
          </Layout>
        );
      }
    }
}

export default withFirestore(AppControl);


