import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import red from '@material-ui/core/colors/red';
//Spinner Imports
//import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
  active: {
    backgroundColor: red,
  }
  
});

class NestedList extends React.Component {
  
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: 0};
    
}
  handleMoreinfo(link , n, index ){
    console.log('child method'+ n.name);
    this.setState({indexOfClickedItem: index});
    this.props.onRequirements(link, n);
  }
  
  render() {
    //const { classes, to } = this.props;
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
      if(isEmpty(this.props.requirements)){
        return (
          // <Loader fullPage loading={true} />
          <div> No requirements to Show  </div>
        );
      }
    else{
    return (
        <List>
            {
                this.props.requirements.requirementses.map((n,index) => {
                const link= n._links.candidates.href
                const selflink= n._links.self.href
                const id = selflink.split('/').pop(-1);
                let clientid= "Requirement id: " +id;
                let boundMoreInfo = this.handleMoreinfo.bind(this, link, n, index);
                return(
                  <ListItem button style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem} key= {id} divider= {true} onClick={boundMoreInfo}>
                    <ListItemText primary={n.type} secondary={clientid} />
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
  requirements: PropTypes.object.isRequired,
  onRequirements: PropTypes.func.isRequired
  
};
export default withStyles(styles)(NestedList);
