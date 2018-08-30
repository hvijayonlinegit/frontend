import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Save from '@material-ui/icons/Save';
import classNames from 'classnames';
// const CustomTableCell = withStyles(theme => ({
//   head: {
//     //backgroundColor: theme.palette.common.black,
//   //  color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

const styles = theme => ({
  
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    overflowY:'auto',
    marginTop: theme.spacing.unit * 3
   
  },
container: {
display: 'flex',
flexWrap: 'wrap',
padding: theme.spacing.unit * 1,
},
textField: {
marginLeft: theme.spacing.unit,
marginRight: theme.spacing.unit,
width: 200,
},
button: {
  margin: theme.spacing.unit,
  color: '#fff',
  backgroundColor: '#2196f3',
    '&:hover':{
backgroundColor: '#1976d2',
  },
},
header: {
  width: '100%',
  backgroundColor: 'aliceblue',
  padding: '20px',
},

});
function CustomizedTable(props) {
  const { classes } = props;
  
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


  if(isEmpty(props.requirements)){
    return (<div> something went wrong</div>);
  }
  else{
    return (
      <form className={classes.container} noValidate autoComplete="off">
              <h4 className={classes.header}>Associated Requirements: {props.requirements.requirementses.length}</h4>
            {
              props.requirements.requirementses.map((n,index) => {


                return (
                  <div>
                    <h5>Requirement: {index+1}</h5>
                  <TextField
                          margin="dense"
                          placeholder="Enter Client name"
                          name="account_name"
                          label="Type"
                          fullWidth
                          className={classes.textField}
                          value = {n.type} 
                           />
                      
                      
                      <TextField
                              id="name"
                              label="Title"
                              className={classes.textField}
                              value= {n.title}
                             
                              margin="normal"
                          />
                      
                      <TextField
                          margin="dense"
                          placeholder="Enter Client type"
                          name="account_type"
                          label="Description"
                          fullWidth
                          className={classes.textField}
                          value={n.description}
                           />
                          
                          
              
                          <TextField
                          margin="dense"
                          placeholder="Enter Client phone"
                          name="account_phone"
                          label="Rate"
                          fullWidth
                          className={classes.textField}
                          value={n.rate}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client team"
                          name="account_team"
                          label="Candidate Availability"
                          fullWidth
                          className={classes.textField}
                          value={n.candidate_availability}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Pay Rate"
                          fullWidth
                          className={classes.textField}
                          value={n.pay_rate}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Primary Skills"
                          fullWidth
                          className={classes.textField}
                          value={n.primary_skills}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Secondary Skills"
                          fullWidth
                          className={classes.textField}
                          value={n.secondary_skills}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Account Manager"
                          fullWidth
                          className={classes.textField}
                          value={n.account_manager}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Recruiter Name"
                          fullWidth
                          className={classes.textField}
                          value={n.recruiter_name}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Seniority Level"
                          fullWidth
                          className={classes.textField}
                          value={n.seniority_level}
                            />
                          <TextField
                          margin="dense"
                          placeholder="Enter Client Address"
                          name="account_address"
                          label="Experience Required"
                          fullWidth
                          className={classes.textField}
                          value={n.exp_required}
                            />
                      <Button variant="contained"  className={classes.button}>
                          Update
                      </Button>
                      <Button variant="contained" size="small" className={classes.button}>
                          <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                          Save
                      </Button>
                  </div>
                );
              })
            }
          </form>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  onCandidates: PropTypes.func.isRequired,

};

export default withStyles(styles)(CustomizedTable);
