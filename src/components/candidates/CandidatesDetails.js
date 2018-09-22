import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Save from '@material-ui/icons/Save';
// import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import MySnackbarContentWrapper from '../../common/MySnackContent';
const styles = theme => ({
    root: {
        width: '100%',
        overflowY:'auto',
        maxHeight: '50vh',
        minHeight: '50vh'
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
  card: {
    border: '1px solid lightgrey',
    width: '100%',
    boxShadow: 'none',
    marginBottom: '10px'
  },
  afterEle: {
    '&::after':  {
      marginTop: '2px',
      borderTop: '2px solid #698591',
      display: 'block',
      width: '30px',
      content: '""'
    },
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
    
      if(isEmpty(this.props.candidate.documents)){
        return (
          <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="There are no Candidate details  to Show , Please add a candidate!"
        />
        );
      }
      else{
        return (
            <div className={classes.root}>
              <form className={classes.container} noValidate autoComplete="off">
              {/* <h4 className={classes.header}>requirement Details: </h4> */}
              <Card className={classes.card}>
               {/* <CardHeader className={classes.hoverEle}  subheader="Client Information" 
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                    Candidate Info
                </Typography>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="First Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.firstname }
                      onChange={ this.handleChange('name')}
                      required />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Middle Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.firstname }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Last Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.lastname }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Email"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      required
                       />
                        <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Mobile"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Phone"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Country</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-readonly">State</InputLabel>
                        <Select
                          value="asha richards"
                          onChange={this.handleChange}
                          input={<Input name="name" id="name-readonly" readOnly />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Asha Richards">Asha Richards</MenuItem>
                          <MenuItem value="Raj">Raj</MenuItem>
                          <MenuItem value="kevin">Srikaanth</MenuItem>
                        </Select>
                       
                      </FormControl>
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="City"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Address"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Preferred Location1 "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Preferred Location2 "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Zip Code "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Skype Id  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Linkedin Id  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                      
                       />
                    <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
               {/* <CardHeader subheader="Address Information"
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                Additional Information
                </Typography>
                <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Sourced From</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Source Information "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Sourcing "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Sourced By</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Available From "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Notice Period</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Fax"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="License No"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Passport No"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Visa Status</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                         <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Date of Birth "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Candidate Status</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                     
                     
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
               {/* <CardHeader subheader="Address Information"
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                Personal Information
                </Typography>
                <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Gender</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Father Name "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Mother Name "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Nationality  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Hobbies  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailaddress }
                      onChange={ this.handleChange('name')}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Marital Status</InputLabel>
                        <NativeSelect
                          //value={ this.props.moreinfo.client.name }
                          onChange={this.handleChange('age')}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              {/* <div className={classes.padder}>
                <TextField
                     margin="dense"
                     placeholder="Enter requirement name"
                     name="account_name"
                     label="name2"
                     fullWidth
                     className={classes.textField}
                     value = { this.props.candidate.firstname }
                     />
                <TextField
                        id="name"
                        label="phone"
                        className={classes.textField}
                        value={ this.props.candidate.lastname }
                        onChange={ this.handleChange('name')} 
                        margin="normal"
                    />
                
                <TextField
                     margin="dense"
                     placeholder="Enter candidate type"
                     name="account_type"
                     label="address"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.candidate.emailaddress }
                     onChange={ this.handleChange('name')} />
                    
                    
        
                    <TextField
                     margin="dense"
                     placeholder="Enter candidate phone"
                     name="account_phone"
                     label="Phone"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.candidate.overallexperience }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter candidate team"
                     name="account_team"
                     label="Team"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.candidate.relevantexperience }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter candidate Address"
                     name="account_address"
                     label="type"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.candidate.workingstatus }
                     onChange={ this.handleChange('name')}  />
                     
               </div> */}
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
  candidate: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
