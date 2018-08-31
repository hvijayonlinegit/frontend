import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Spinner Imports
//import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
  active: {
    backgroundColor: 'red',
  },
});

class NestedList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: -1};
    
}

  
  handleMoreinfo(id , docname,token, index ){
    this.setState({indexOfClickedItem: index});
    this.props.onDocuments(id, docname,token);
  }
  
  
  render() {
    const { to } = this.props;
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
          //  <Loader fullPage loading={true} />
          <div> </div>
        );
      }
    else{
    return (
        <List component="div" disablePadding>
            {
                this.props.candidate.documents.map((n,index) => {
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
      );
    }
  }
}
NestedList.propTypes = {
  candidate: PropTypes.object.isRequired,
  onDocuments: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
