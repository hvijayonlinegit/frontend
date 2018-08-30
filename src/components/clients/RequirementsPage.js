import React from 'react'

import {connect} from 'react-redux'
import RequirementsList from './RequirementsList'
import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import {bindActionCreators} from 'redux';

import * as requirementActions from '../../actions/requirementActions';
class RequirementsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requirement: {account_name: '', account_type: '', account_phone: '', account_team: '', account_address: ''},
      modal: false
    //  requirement: ''
    };

    this.handleCandidates = this.handleCandidates.bind(this);
  }
  componentWillMount(){
    this.props.actions.loadRequirements();
  }

  handleCandidates(text , e){
    console.log('onclic'+text);
    this.props.actions.loadCandidates(text);
    //store.dispatch(loadRequirements(text));
  }

  render() {
    const requirements = this.props.requirements;

      return (
        <div className="col-md-12">
            <Hidden mdUp >
              <div className="col-md-4">
                  <h3> Mobile View </h3>
                  <h1> OOOPS .....! Some thing went wrong , please try in desktop for viewing the details</h1>
              </div>

            </Hidden>
            <Hidden smDown>
              <div className="col-md-4" >
                <h3>List of all  Requirements</h3>
                <RequirementsList requirements={requirements}  onCandidates={this.handleCandidates}/>
              </div>
            </Hidden>
            <div className="col-md-8">
              {this.props.children}
            </div>

        </div>
      );
  }
}

RequirementsPage.propTypes = {
  requirements: PropTypes.object.isRequired,
  children: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    requirements: state.requirements
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(requirementActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (RequirementsPage);
