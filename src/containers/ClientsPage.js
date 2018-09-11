import React from 'react'

import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as courseActions from '../actions/clientActions';
import * as moreinfoActions from '../actions/moreinfoActions';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as docmoreinfoActions from '../actions/docmoreinfoActions';
import AddRequirementModal from '../components/requirements/CreateRequirementModal'
import AddClientModal from '../components/clients/CreateClientModal'
import ClientsWrapper from '../components/clients/ClientsWrapper';

class ClientsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client: {name: '', type: '', phone: '', team: '', address: ''},
      requirement:{
				account_manager: 'string',
				candidate_availability: 'string',
				description: 'string',
				exp_required: 'string',
				id: 0,
				pay_rate: 'string',
				primary_skills: 'string',
				rate: 'string',
				recruiter_name: 'string',
				secondary_skills: 'string',
				seniority_level: 'string',
				title: 'string',
				type: 'string'
			  },
      modal: false,
      reqmodal: false
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.handleReqModalOpen = this.handleReqModalOpen.bind(this);
    this.handleReqModalClose = this.handleReqModalClose.bind(this);
    this.updateReqState = this.updateReqState.bind(this);
    this.saveRequirement = this.saveRequirement.bind(this);


    this.redirect = this.redirect.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    
    this.handleRequirements = this.handleRequirements.bind(this);
    this.handleCandidates = this.handleCandidates.bind(this);
    this.handleDocuments = this.handleDocuments.bind(this);
    this.handleDeleteClient = this.handleDeleteClient.bind(this);
    this.handleMoreInfo = this.handleMoreInfo.bind(this);
   
  }
  componentWillMount(){
    this.props.actions.loadClients();
  }

  updateReqState(event) {
    const field = event.target.name;
    const requirement = this.state.requirement;
    console.log(field+event.target.value);
    requirement[field] = event.target.value;
    return this.setState({requirement: requirement});
  }
  updateCatState(event) {
    const field = event.target.name;
    const client = this.state.client;
    console.log(field+event.target.value);
    client[field] = event.target.value;
    return this.setState({client: client});
  }

  redirect(client) {
    browserHistory.push(`/clients`);
  }
  saveRequirement(event) {
    event.preventDefault();

    this.props.moreinfoactions.createRequirement(this.state.requirement).then((requirement) => {
     this.setState({ modal: false });
     this.redirect(requirement);
    });

  }

  saveCat(event) {
    event.preventDefault();

    this.props.actions.createCat(this.state.client).then((cat) => {
     this.setState({ modal: false });
     this.redirect(cat);
    });

  }
  handleReqModalOpen(id) {
    console.log(id+'viay');
    //let req= Object.assign([], this.state.requirement)
    //req.id= id
    this.setState({ requirement:{id:id}, reqmodal: true });
  
  }
  handleReqModalClose() {
		this.setState({ reqmodal: false });
  }

	handleModalOpen() {
    this.setState({ modal: true , client: {name: '', type: '', phone: '', team: '', address: ''}});
		
//  browserHistory.push(`/clients/new`);
	}
	handleModalClose() {
		this.setState({ modal: false });
  }
  handleDocuments(id , client,token, e){
    this.props.docmoreinfoactions.downloadDoc(id,client,token);
  }
  handleCandidates(link ,client, e){
    console.log('onclic'+link);
    this.props.candmoreinfoactions.loadCandMoreinfo(link,client);
    //store.dispatch(loadRequirements(text));
  }
handleRequirements(link ,client, e){
  console.log('onclic'+link);
  this.props.reqmoreinfoactions.loadReqMoreinfo(link,client);
  //store.dispatch(loadRequirements(text));
}
handleDeleteClient(link ,client, e ){
  //alert('Are you sure you want to delete the Client'+ client.name);
  this.props.actions.deleteCat(client, link);
}
handleMoreInfo(link ,client, e ){
  console.log("super parent called");
  this.props.moreinfoactions.loadMoreinfo(link,client);
}
  render() {
    const clients = this.props.clients;
    const moreinfo =this.props.moreinfo;
    const reqmoreinfo = this.props.reqmoreinfo;
    const candmoreinfo = this.props.candmoreinfo;
    return (
      <div >  
          <ClientsWrapper
          clients={clients}
          moreinfo={moreinfo}
          reqmoreinfo={reqmoreinfo}
          candmoreinfo={candmoreinfo}
          onRequirements={this.handleRequirements}
          onCandidates={this.handleCandidates}
          onDocuments={this.handleDocuments}
          onDelete={this.handleDeleteClient}
          onMoreInfo={this.handleMoreInfo}
          handleModalOpen={this.handleModalOpen}
          handleReqModalOpen={this.handleReqModalOpen}
          />
          <AddClientModal
            client={this.state.client}
            onSave={this.saveCat}
            onChange={this.updateCatState}
            open={ this.state.modal }
            close={ this.handleModalClose }
          />
           <AddRequirementModal
            requirement={this.state.requirement}
            onSave={this.saveRequirement}
            onChange={this.updateReqState}
            open={ this.state.reqmodal }
            close={ this.handleReqModalClose }
          /> 
      </div>
    );
  }
}

ClientsPage.propTypes = {
  clients: PropTypes.object.isRequired,
  children: PropTypes.object,
  actions: PropTypes.object.isRequired,
  moreinfoactions: PropTypes.object.isRequired,
  moreinfo: PropTypes.object.isRequired,
  reqmoreinfo: PropTypes.object.isRequired,
  reqmoreinfoactions: PropTypes.object.isRequired,
  candmoreinfo: PropTypes.object.isRequired,
  candmoreinfoactions: PropTypes.object.isRequired,
  docmoreinfoactions:PropTypes.object.isRequired
  

};

function mapStateToProps(state, ownProps) {
  return {
    clients: state.clients,
    moreinfo : state.moreinfo,
    reqmoreinfo : state.reqmoreinfo,
    candmoreinfo : state.candmoreinfo,

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
    moreinfoactions: bindActionCreators(moreinfoActions, dispatch),
    reqmoreinfoactions: bindActionCreators(reqmoreinfoActions, dispatch),
    candmoreinfoactions: bindActionCreators(candmoreinfoActions, dispatch),
    docmoreinfoactions: bindActionCreators(docmoreinfoActions, dispatch )
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (ClientsPage);
