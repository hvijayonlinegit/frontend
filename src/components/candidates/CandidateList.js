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
    this.state = { indexOfClickedItem: 0};
    
}
  handleMoreinfo(link , n, index ){
    console.log('child method'+ n.name);
    this.setState({indexOfClickedItem: index});
    this.props.onCandidates(link, n);
  }
  
  render() {
    const {  to } = this.props;
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
      if(isEmpty(this.props.candidates)){
        return (
          // <Loader fullPage loading={true} />
          <div> </div>
        );
      }
    else{
    return (
        <List component="div" disablePadding>
            {
                this.props.candidates.candidates.map((n,index) => {
                const link= 'http://localhost:8090/list'
                //let boundClick = this.props.onRequirements.bind(this, link);
                const selflink= n._links.self.href
                const id = selflink.split('/').pop(-1);
                let clientid= "Candidate id: " +id;
                let fullName = n.firstname+ ' ' +n.lastname;
                //let boundDeleteClick = this.props.onDelete.bind(this, selflink, n);
                let boundMoreInfo = this.handleMoreinfo.bind(this, link, n, index);
                return(
                  
                  <ListItem button  to={to} style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  key= {id} divider= {true} onClick={boundMoreInfo}>
                    <ListItemText primary={fullName} secondary={clientid} />
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
  candidates: PropTypes.object.isRequired,
  onCandidates: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
