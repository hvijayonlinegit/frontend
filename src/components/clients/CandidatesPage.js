import React from 'react'

import {connect} from 'react-redux'

import CandidatesList from './CandidatesList'
import PropTypes from 'prop-types';


import Hidden from '@material-ui/core/Hidden';

import {bindActionCreators} from 'redux';

import * as candidateActions from '../../actions/candidateActions';
class CandidatesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidate: {account_name: '', account_type: '', account_phone: '', account_team: '', account_address: ''},
      modal: false
    //  candidate: ''
    };
  }
  componentWillMount(){
    this.props.actions.loadCandidates();
  }
render() {
    const candidates = this.props.candidates;

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
                <h3>List of all  Candidates</h3>
                <CandidatesList candidates={candidates} />
              </div>
            </Hidden>
            <div className="col-md-8">
              {this.props.children}
            </div>

        </div>
      );
  }
}

CandidatesPage.propTypes = {
  candidates: PropTypes.object.isRequired,
  children: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    candidates: state.candidates
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(candidateActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (CandidatesPage);
