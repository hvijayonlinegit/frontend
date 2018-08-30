import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Save from '@material-ui/icons/Save';
// import classNames from 'classnames';
const styles = theme => ({
    root: {
        width: '100%',
       // height: '100vh',
        backgroundColor: theme.palette.background.paper,
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
        overflowY:'auto',
       
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
        return (<div> something went wrong</div>);
      }
      else{
        return (
            <div className={classes.root}>
              <form className={classes.container} noValidate autoComplete="off">
              {/* <h4 className={classes.header}>requirement Details: </h4> */}
              <div className={classes.padder}>
              <TextField
                     margin="dense"
                     placeholder="Enter requirement name"
                     name="account_name"
                     label="name"
                     fullWidth
                     className={classes.textField}
                     value = { this.props.requirements.id }
                     onChange={ this.handleChange('name')} />
                
                
                <TextField
                        id="name"
                        label="phone"
                        className={classes.textField}
                        value={ this.props.requirements.title }
                        onChange={ this.handleChange('name')} 
                        margin="normal"
                    />
                
                <TextField
                     margin="dense"
                     placeholder="Enter requirements type"
                     name="account_type"
                     label="address"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.description }
                     onChange={ this.handleChange('name')} />
                    
                    
        
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements phone"
                     name="account_phone"
                     label="Phone"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.rate }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements team"
                     name="account_team"
                     label="Team"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.primary_skills }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter requirements Address"
                     name="account_address"
                     label="type"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.requirements.secondary_skills }
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
