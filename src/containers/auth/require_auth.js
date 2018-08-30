import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { browserHistory} from 'react-router';

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                browserHistory.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                browserHistory.push('/signin');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
