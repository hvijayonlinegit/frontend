import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import TextField from '@material-ui/core/TextField';

import {white, blue500} from '@material-ui/core/colors/';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  active: {
    backgroundColor: 'red',
  },
  button: {
    margin: theme.spacing.unit,
  },
  
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
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
  
  render() {
    const { classes, to } = this.props;
    
    const styles = {
      listItem: {
    },
    listItemClicked: {
      backgroundColor: '#f0f8ff',
      borderBottom: '1px solid red'
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
      let filteredClients= this.props.clients.accountses.filter(
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
        <div>
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
            <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button}>
              <AddIcon />
            </Button>
        {/* <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/> */}
          <List component="div" disablePadding>
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
                        <ListItemText  primary= {id}/>
                        <ListItemText  primary= {n.name} />
                        <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                          <DeleteIcon />
                        </IconButton>
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
  onMoreInfo: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
