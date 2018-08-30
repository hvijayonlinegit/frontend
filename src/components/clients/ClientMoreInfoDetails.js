import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import RequirementDetails from './RequirementDetails'
const styles = theme => ({
  root: {

  },
  wrapper: {

  },
  paper: {

    padding: theme.spacing.unit * 2,
  },
});

function AutoGridNoWrap(props) {
  const { classes } = props;
  const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  // if(isEmpty(props.moreinfo.client.requirements)){
  //   return (<div> something went wrong</div>);
  // }
  // else{
    return (
      <Card className={classes.paper}>
        <CardContent>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item xs={3}>
              <Typography variant="subheading" gutterBottom>Client Details</Typography>
              <Typography variant="body2" gutterBottom>Name:  {props.moreinfo.client.name}</Typography>
              <Typography variant="body2" gutterBottom>Type:  {props.moreinfo.client.type}</Typography>
              <Typography variant="body2" gutterBottom>Address:  {props.moreinfo.client.address}</Typography>
              <Typography variant="body2" gutterBottom>Phone:  {props.moreinfo.client.phone}</Typography>
              <Typography variant="body2" gutterBottom>Team Assigned To:  {props.moreinfo.client.team}</Typography>

            </Grid>
            {/* <Grid item xs={8}>
              <Typography variant="subheading" gutterBottom>Associated Requirements: {props.moreinfo.client.requirements.requirementses.length}</Typography>
                <RequirementDetails requirements={props.moreinfo.client.requirements} ></RequirementDetails>
            </Grid> */}
          </Grid>
        </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Update
            </Button>
            <Button size="small" color="primary">
              Add Requirement
            </Button>
          </CardActions>
      </Card>
    );
  // }

}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
  moreinfo: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
