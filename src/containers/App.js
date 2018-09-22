import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToApp from '@material-ui/icons/ExitToApp'


import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { browserHistory} from 'react-router';
import {connect} from 'react-redux'


import { compose } from '../../node_modules/redux';
import 'font-awesome/css/font-awesome.min.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../components/theme';
import * as authenticationActions from '../actions/authenticationActions';

import {bindActionCreators} from 'redux';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflowY: 'hidden',
    overflowX: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    overflow: 'auto'
  },
  flex: {
    flex: 1,
  },
  user: {
    width: 'auto',
  }
  
});


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: 'home',
      isAuthenticated: false,
      anchorEl: null,
    };
    
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  componentWillMount(){
    //this.props.actions.fetchUser();
    this.renderUserName()
  }
  renderUserName() {

    if (this.props.userdetails) {

      return (
        
        <Typography variant="caption" noWrap = "true" color="inherit" >
           Welcome {this.props.userdetails}
          </Typography>
      );
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
    switch(value) {
    case 'clients':
        browserHistory.push(`/clients`);
        break;
    case 'home':
        browserHistory.push(`/`);
        break;
    case 'requirements':
        browserHistory.push(`/requirements`);
        break;
    case 'candidates':
        browserHistory.push(`/candidates`);
        break;
    default:
        browserHistory.push(`/`);
      }
  };
  
  handleLogout =() =>{
    browserHistory.push(`/signout`);
  }
  handleSignin =() =>{
    browserHistory.push(`/signin`);
  }
  handleSignup = () =>{
    browserHistory.push(`/signup`);
  }
  
  handleClients = () => {
    browserHistory.push(`/clients`);
    this.setState({ anchorEl: null });
  };
  handleRequirements = () =>{
    browserHistory.push(`/requirements`);
    this.setState({ anchorEl: null });
  }
  handleCandidates = () =>{
    browserHistory.push(`/candidates`);
    this.setState({ anchorEl: null });
  }
  handleHome=() =>{
    browserHistory.push(`/`);
    this.setState({ anchorEl: null });
  }
  

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
      const { value } = this.state;
      const {  anchorEl  } = this.state;
     let username = this.props.userdetails;
      console.log(username+'>>>>>')
    const open = Boolean(anchorEl);
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
      
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            {
          this.props.authenticated ? (
          <div className={classes.flex} >
              <Tabs  value={value} onChange={this.handleChange}>
                <Tab value="home" label="Home" />
                  <Tab value="clients" label="Clients" />
                <Tab value="requirements" label="Requirements" />
                <Tab value="candidates" label="Candidates" />
            </Tabs>
          </div>
        ):(
          <Typography variant="title" color="inherit" className={classes.flex}>
              Recupro
            </Typography>
        )
      }
            {
          (!this.props.userdetails && !this.props.authenticated )? ( 
            <div>
              
           <Button onClick={this.handleSignin} color="inherit">
           
                Signin
              </Button>
           <Button onClick={this.handleSignup} color="inherit">Signup</Button>
           </div>
          ):(
            <div>
              
                <IconButton
                    color="inherit"
                  >
                <AccountCircle />
                </IconButton>
                <IconButton
                    color="inherit"
                    label="true"
                    className={classes.user}
                  >
                  
                {this.renderUserName()} 
                 
                </IconButton>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <ExpandMore />
                </IconButton>
                <IconButton
                  onClick={this.handleLogout}
                  color="inherit"
                >
                  <ExitToApp />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  
                </Menu>
              </div>
          )
        }
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
      </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
function mapStateToProps(state, ownProps) {
  return {
    clients: state.clients,
    moreinfo : state.moreinfo,
    authenticated: state.auth.authenticated,
    userdetails: state.auth.userdetails
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}
export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
) (App);
