import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
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
const styles = theme => ({
    root: {
        width: '100%',
       // height: '100vh',
        backgroundColor: theme.palette.background.paper,
        //borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
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
  float: {
     float: 'right'
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
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  content: {
    padding: '16px'
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
    
      if(isEmpty(this.props.moreinfo.client.requirements)){
        return (<div> something went wrong</div>);
      }
      else{
        const selflink= this.props.moreinfo.client._links.self.href
        const id = selflink.split('/').pop(-1);
        console.log('details' +id);
        return (
            <div className={classes.root}>
              <form className={classes.container} noValidate autoComplete="off">
             
              <Card className={classes.card}>
               {/* <CardHeader className={classes.hoverEle}  subheader="Client Information" 
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                    Client Information
                </Typography>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Account Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                      required />
                      
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
                        <InputLabel htmlFor="name-readonly">Account Owner</InputLabel>
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
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Website"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                     
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
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Account Code"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                      required />
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
                Address Information
                </Typography>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Phone Number1 "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Phone Number2"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
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
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Street"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Zipcode"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Fax"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Email1"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="account_name"
                      label="Email2"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.moreinfo.client.name }
                      onChange={ this.handleChange('name')}
                       />
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
               {/* <CardHeader subheader="Description"
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                Description
                </Typography>
                       <TextField
                        id="multiline-static"
                        multiline
                        rows="4"
                        margin="normal"
                        fullWidth
                      />
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              {/* <div className={classes.padder}>
             
              <TextField
                     margin="dense"
                     placeholder="Enter Client name"
                     name="account_name"
                     label="Account Name"
                     fullWidth
                     className={classes.textField}
                     value = { this.props.moreinfo.client.name }
                     onChange={ this.handleChange('name')}
                     required />
                
                
                <TextField
                        id="name"
                        label="phone"
                        className={classes.textField}
                        value={ this.props.moreinfo.client.phone }
                        onChange={ this.handleChange('name')} 
                        margin="normal"
                    />
                
                <TextField
                     margin="dense"
                     placeholder="Enter Client type"
                     name="account_type"
                     label="address"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.moreinfo.client.address }
                     onChange={ this.handleChange('name')} />
                    
                    <TextField
                     margin="dense"
                     placeholder="Enter Client team"
                     name="account_team"
                     label="Team"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.moreinfo.client.team }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter Client Address"
                     name="account_address"
                     label="type"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.moreinfo.client.type }
                     onChange={ this.handleChange('name')}  />
                     
               </div> */}
               {/* <Button variant="contained"  className={classes.button}>
                            Update
                    </Button>
                    <Button variant="contained" size="small" className={classes.button}>
                            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                            Save
                        </Button> */}
              </form>
                {/* <Button variant="contained" value= {id } className={classes.button} onClick={() => this.props.handleReqModalOpen(id)}>
                  Add requirement
                </Button> */}
             </div>
            );
      }
    
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  moreinfo: PropTypes.object.isRequired,
 
};

export default withStyles(styles)(TextFields);
