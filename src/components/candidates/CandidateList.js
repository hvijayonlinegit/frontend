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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//Spinner Imports
//import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

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
    this.props.onCandidates(link, n);
  }
  
  render() {
    const { classes, to } = this.props;
    const styles = {
      listItem: {
    },
    listItemClicked: {
      border: '1px solid orange',
      //borderBottom: '2px solid gray',
      paddingTop: '5px',
      paddingBottom: '5px',
      borderLeft: '12px solid orange'
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
      let filteredCandidates= this.props.candidates.candidates.filter(
        (candidate) =>{
          const selflink= candidate._links.self.href
          const id = selflink.split('/').pop(-1);
          let fullName = candidate.firstname+ ' ' +candidate.lastname;
          if(fullName.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1){
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
            <Tooltip title="Add a Candidate" classes={{ tooltip: classes.lightTooltip }}>
              <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button} onClick={ this.props.handleModalOpen } >
                <AddIcon />
              </Button>
            </Tooltip>
        <List component="div" disablePadding>
            {
                filteredCandidates.map((n,index) => {
               // const link= 'http://localhost:8090/list'
               const link =''
                //let boundClick = this.props.onRequirements.bind(this, link);
                const selflink= n._links.self.href
                const id = selflink.split('/').pop(-1);
                let clientid=  id;
                let fullName = n.firstname+ ' ' +n.lastname;
                //let boundDeleteClick = this.props.onDelete.bind(this, selflink, n);
                let boundMoreInfo = this.handleMoreinfo.bind(this, link, n, index);
                return(
                  <ListItem button  to={to} style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  key= {index} divider= {true} onClick={boundMoreInfo}>
                    <ListItemText primary={clientid} />
                    <ListItemText primary={fullName} />
                    {/* <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                          <DeleteIcon />
                        </IconButton> */}
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
  candidates: PropTypes.object.isRequired,
  onCandidates: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
