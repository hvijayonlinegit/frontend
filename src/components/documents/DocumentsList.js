import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
  root: {
    maxHeight: '37vh',
      overflow: 'auto',
      minHeight: '37vh'
   },
   button: {
    margin: theme.spacing.unit,
   // marginLeft: '24%'
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
    this.state = { indexOfClickedItem: -1 , search:''};
    
}

updateSearch(event){

  this.setState({search:event.target.value.substr(0,20)});
}
  handleMoreinfo(id , docname,token, index ){
    this.setState({indexOfClickedItem: index});
    this.props.onDocuments(id, docname,token);
  }
  
  
  render() {
    const {classes, to } = this.props;
    const styles = {
      listItem: {
    },
    listItemClicked: {
      backgroundColor: '#f0f8ff',
      borderBottom: '1px solid red'
    },
    };
    
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      if(isEmpty(this.props.candidate.documents)){
        return (
           <Loader fullPage loading={true} />
          //<div> </div>
        );
      }
    else{
      let filteredDocuments= this.props.candidate.documents.filter(
        (document) =>{
          if(document.bucketName.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1){
            return true;
          }
          if(document.key.indexOf(this.state.search)!== -1){
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
        <Tooltip title="Add a Document" classes={{ tooltip: classes.lightTooltip }}>
          <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button} onClick={ this.props.handleModalOpen } >
            <AddIcon />
          </Button>
        </Tooltip>
        <List component="div" disablePadding className={classes.root} >
            {
                filteredDocuments.map((n,index) => {
                  let id = n.key.split('/',1);
                  var  docname = n.key.split('/').pop();
                  let token = localStorage.getItem('token');
                  let boundMoreInfo = this.handleMoreinfo.bind(this, id, docname,token,index);
                return(
                  
                  <ListItem button style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  to={to}  divider= {true} onClick={boundMoreInfo} >
                     <ListItemText primary={n.bucketName} secondary={n.key} /> 
                  </ListItem>
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
  candidate: PropTypes.object.isRequired,
  onDocuments: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
