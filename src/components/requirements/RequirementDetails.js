import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import MySnackbarContentWrapper from '../../common/MySnackContent';

// import Button from '@material-ui/core/Button';
// import Save from '@material-ui/icons/Save';
// import classNames from 'classnames';
const styles = theme => ({
  root: {
      width: '100%',
      overflowY:'auto',
      maxHeight: '50vh',
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
  menu: {
    width: 200,
  },
  
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    marginLeft: '1px',
    backgroundColor: '#2196f3',
      '&:hover':{
  backgroundColor: '#1976d2',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  header: {
    width: '100%',
    backgroundColor: 'aliceblue',
    padding: '20px',
  },
  padder: {
      paddingLeft: '10px',
  },
  card:{
    border: '1px dotted grey'
  }
});



class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
    
      if(isEmpty(this.props.requirements.candidates)){
        return (

          <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="There are no Requirements to Show , Please click/add a requirement!"
        />
                );
      }
      else{
        return (
            <div className={classes.root}>
           
              <form className={classes.container} noValidate autoComplete="off">
             
              <div className={classes.padder}>
              <TextField
                     margin="dense"
                     placeholder="Enter requirement name"
                     name="account_name"
                     label="Title"
                     fullWidth
                     className={classes.textField}
                     value = { this.props.requirements.title }
                     onChange={ this.handleChange('name')} />
                
                
                <TextField
                        id="name"
                        label="Type"
                        className={classes.textField}
                        value={ this.props.requirements.type }
                        onChange={ this.handleChange('name')} 
                        margin="normal"
                    />
                
                <TextField
                     margin="dense"
                     placeholder="Enter requirements type"
                     name="account_type"
                     label="Description"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.description }
                     onChange={ this.handleChange('name')} />
                    
                    
        
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements phone"
                     name="account_phone"
                     label="Rate"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.rate }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements team"
                     name="account_team"
                     label="Primary Skills"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.primary_skills }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="Secondary Skills"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.secondary_skills }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="Account Manager "
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.account_manager }
                     onChange={ this.handleChange('name')}  />
                     <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="Seniority Level "
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.seniority_level }
                     onChange={ this.handleChange('name')}  />
                      <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="Experience Required "
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.exp_required }
                     onChange={ this.handleChange('name')}  />
                     <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="Candidate Availability"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.candidate_availability }
                     onChange={ this.handleChange('name')}  />
                     <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="Pay Rate"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.pay_rate }
                     onChange={ this.handleChange('name')}  />
                     
               </div>
               {/* <Button variant="contained"  className={classes.button}>
                            Update
                    </Button>
                    <Button variant="contained" size="small" className={classes.button}>
                            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                            fffSave
                        </Button> */}
              </form>
           
             </div>
            );
      }
    
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  requirement: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
