import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { browserHistory} from 'react-router'
import * as courseActions from '../../actions/clientActions';
import ClientForm from './ClientForm';

class NewClientPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client: {account_name: '', account_type: '', account_phone: '', account_team: '', account_address: ''},
      saving: false,
      model : true
    };
    this.redirect = this.redirect.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);


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

  saveCat(event) {
    event.preventDefault();
    this.props.actions.createCat(this.state.client)
    // .then((cat) => {
    //   this.redirect(cat);
    // });

  }

  render() {
    return (
      <div className="col-md-12">
      <ClientForm
          client={this.state.client}
          onSave={this.saveCat}
          onChange={this.updateCatState}
        />

      </div>
    );
  }
}

NewClientPage.propTypes = {

  actions: PropTypes.object.isRequired,

};
function mapStateToProps(state, ownProps) {
    return {
         client: state.client
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewClientPage);
