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

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import MenuItem from '@material-ui/core/MenuItem';
const styles = theme => ({
  root: {
      width: '100%',
      overflowY:'auto',
        maxHeight: '50vh',
        minHeight: '50vh',
        display: 'flex',
    flexWrap: 'wrap',
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  textFieldMax: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    width: 200,
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
  
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
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
              <Card className={classes.card}>
               {/* <CardHeader  subheader="Requirement Information" 
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                Requirement Information
                </Typography>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Requirement Title"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.requirements.title }
                      onChange={ this.handleChange('name')}
                      required />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Requirement Id"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                      required />
                      
                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Account owner</InputLabel>
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
                        <InputLabel htmlFor="name-readonly">Primary Recruiteer</InputLabel>
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
                      
                      

                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Access</InputLabel>
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
                        <InputLabel htmlFor="age-native-helper">End Client</InputLabel>
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
                      label="Required Skills"
                      fullWidth
                      //className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Required Experience"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="Bill Rate($)"
                      label="Bill Rate($)"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="Pay Rate($)"
                      label="Pay Rate($)"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                      required />
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
                        <InputLabel htmlFor="age-native-helper">State</InputLabel>
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
                      label="City"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Zip Code"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Number of Openings"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Maximum Resumes allowed"
                      fullWidth
                      className={classes.textFieldMax}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Local Indicator"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                        id="multiline-static"
                        multiline
                        rows="4"
                        label=" Brief Description"
                        margin="normal"
                        fullWidth
                      />
                      <TextField
                        id="multiline-static"
                        multiline
                        rows="4"
                        label="  Description"
                        margin="normal"
                        fullWidth
                      />
                       
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
               {/* <CardHeader  subheader="Duration & Type" 
                  > 
                
                 </CardHeader> */}
                 
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                 Duration & Type
                </Typography>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Duration"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                      required />
                      
                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Category</InputLabel>
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
                        <InputLabel htmlFor="name-readonly">Sub Category</InputLabel>
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
                      
                      

                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Employement Type</InputLabel>
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
                        <InputLabel htmlFor="age-native-helper">Status</InputLabel>
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
                        <InputLabel htmlFor="age-native-helper">Experience Level</InputLabel>
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
                        <InputLabel htmlFor="age-native-helper">Position Type</InputLabel>
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
                        <InputLabel htmlFor="age-native-helper">Interview Type</InputLabel>
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
                        <InputLabel htmlFor="age-native-helper">Visa Type</InputLabel>
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
                      label="Project Start Date"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                     <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Project End Date"
                      fullWidth
                      className={classes.textField}
                      //value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                        <TextField
                        id="multiline-static"
                        multiline
                        rows="4"
                        label="  Notes"
                        margin="normal"
                        fullWidth
                      />
                       
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <div className={classes.padder}>
              {/* <TextField
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
                     onChange={ this.handleChange('name')}  /> */}
                     
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
