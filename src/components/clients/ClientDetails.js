import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Save from '@material-ui/icons/Save';
// import classNames from 'classnames';
const styles = theme => ({
    root: {
        width: '100%',
       // height: '100vh',
        backgroundColor: theme.palette.background.paper,
        //borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
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
  float: {
     float: 'right'
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
              {/* <h4 className={classes.header}>Client Details: </h4> */}
              <div className={classes.padder}>
              {/* <Typography variant="Subheading"   >Name:</Typography>
              <Typography variant="body1"   className={classes.float}>{ this.props.moreinfo.client.name }</Typography>
              <Typography variant="Subheading"  className={classes.heading} >Phone:</Typography>
              <Typography variant="body1"  className={classes.heading} >{ this.props.moreinfo.client.phone }</Typography>
              <Typography variant="Subheading"  className={classes.heading} >Address:</Typography>
              <Typography variant="body1"  className={classes.heading} >{ this.props.moreinfo.client.address }</Typography>
              <Typography variant="Subheading"  className={classes.heading} >Team:</Typography>
              <Typography variant="body1"  className={classes.heading} >{ this.props.moreinfo.client.team }</Typography>
              
              <Typography variant="Subheading"  className={classes.heading} >Type:</Typography>
              <Typography variant="body1"  className={classes.heading} >{ this.props.moreinfo.client.type }</Typography>
               */}
              <TextField
                     margin="dense"
                     placeholder="Enter Client name"
                     name="account_name"
                     label="name"
                     fullWidth
                     className={classes.textField}
                     value = { this.props.moreinfo.client.name }
                     onChange={ this.handleChange('name')} />
                
                
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
                     
               </div>
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
