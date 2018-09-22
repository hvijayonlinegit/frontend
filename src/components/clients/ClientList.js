import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';


import {white, blue500} from '@material-ui/core/colors/';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
 root: {
  maxHeight: '37vh',
    overflow: 'auto',
    minHeight: '37vh'
 },
  button: {
    margin: theme.spacing.unit,
    marginLeft: '24%'
  },
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
});

class NestedList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: 0,search:''};
    
}
updateSearch(event){

  this.setState({search:event.target.value.substr(0,20)});
}
  handleMoreinfo(link , n, index ){
    console.log('child method'+ n.name);
    this.setState({indexOfClickedItem: index});
    this.props.onMoreInfo(link, n);
  }
  handleModalOpen(){
    this.props.handleModalOpen();
  }
  render() {
    const { classes, to } = this.props;
    
    const styles = {
      listItem: {
        // paddingBottom: '5px',
        // paddingTop: '5px'
    },
    listItemClicked: {
      border: '1px solid lightgreen',
      //borderBottom: '2px solid gray',
      paddingTop: '5px',
      paddingBottom: '5px',
      borderLeft: '12px solid lightgreen'
    },
    textField: {
      color: white,
      backgroundColor: blue500,
      borderRadius: 2,
      height: 35,
      marginBottom: '5%'
    },
    };
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      if(isEmpty(this.props.clients)){
        return (
          <Loader fullPage loading={true} />
        );
      }
    else{
      // sort the list to show recently added client at the top
      let sortedClients = this.props.clients.accountses.sort(
        (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      //Apply search filters to search by name or id for the client list
      let filteredClients= sortedClients.filter(
        (client) =>{
          const selflink= client._links.self.href
          const id = selflink.split('/').pop(-1);
          if(client.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1){
            return true;
          }
          if(id.indexOf(this.state.search)!== -1){
            return true;
          }
          return false;
        }
  
      );
    return (
        <div >
          <TextField
            hintText="Search..."
            placeholder="Search..."
            underlineShow={false}
            
            style={styles.textField}
            value={this.state.search} 
            inputStyle={styles.inputStyle}
            hintStyle={styles.hintStyle}
            onChange={this.updateSearch.bind(this)}
            />
            <Tooltip title="Add a Client" classes={{ tooltip: classes.lightTooltip }}>
              <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button} onClick={ this.props.handleModalOpen } >
                <AddIcon />
              </Button>
            </Tooltip>
        {/* <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/> */}
          <List component="div" disablePadding className={classes.root}>
              {
                  filteredClients.map((n,index) => {
                  const link= n._links.requirements.href
                  //let boundClick = this.props.onRequirements.bind(this, link);
                  const selflink= n._links.self.href
                  const id = selflink.split('/').pop(-1);
                 // let clientid= "client id: " +id;
                  //let boundDeleteClick = this.props.onDelete.bind(this, selflink, n);
                  let boundMoreInfo = this.handleMoreinfo.bind(this, link, n, index);
                  return(
                    <div>
                      <ListItem button={true} style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem} to={to}  key= {id} divider= {true} onClick={boundMoreInfo} >
                        {/* <ListItemText primary={n.name} secondary={clientid} /> */}
                        <ListItemText color="inherit" primary= {id}/>
                        <ListItemText  primary= {n.name} />
                        {/* <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                          <DeleteIcon />
                        </IconButton> */}
                      </ListItem>
                      
                    </div>
                  );
                })
              }
            </List>
        </div>
      );
    }
  }
}
NestedList.propTypes = {
  clients: PropTypes.object.isRequired,
  onMoreInfo: PropTypes.func.isRequired,
  handleModalOpen: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
