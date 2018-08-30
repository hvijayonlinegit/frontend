import React from 'react'

import {connect} from 'react-redux'

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import {bindActionCreators} from 'redux';

import * as moreinfoActions from '../../actions/moreinfoActions';
//import AutoGridNoWrap from './ClientMoreInfoDetails';
import AutoGridNoWrap from './ExampleForm';
class ClientsMoreInfoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleCandidates = this.handleCandidates.bind(this);
  }


  handleCandidates(text , e){
    console.log('onclic'+text);
    this.props.actions.loadCandidates(text);
    //store.dispatch(loadRequirements(text));
  }

  render() {
      return (
        <div >
            <Hidden mdUp >
              <div >
                  <h3> Mobile View </h3>
              </div>
            </Hidden>
            <Hidden smDown>
              <AutoGridNoWrap moreinfo={this.props.moreinfo}></AutoGridNoWrap>
            </Hidden>
        </div>
      );
  }
}

ClientsMoreInfoPage.propTypes = {
  moreinfo: PropTypes.object.isRequired,
  children: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    moreinfo: state.moreinfo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moreinfoActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (ClientsMoreInfoPage);
