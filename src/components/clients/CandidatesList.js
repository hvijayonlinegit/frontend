import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    //backgroundColor: theme.palette.common.black,
  //  color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});
function CustomizedTable(props) {
  const { classes } = props;
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
  if(isEmpty(props.candidates)){
    return (<div> something went wrong</div>);
  }
  else{
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <CustomTableCell >Candidate ID</CustomTableCell>
              <CustomTableCell >First Name</CustomTableCell>
              <CustomTableCell >Last Name</CustomTableCell>
              <CustomTableCell >Associated Requirements</CustomTableCell>
              <CustomTableCell >More Details</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.candidates.candidates.map(n => {
                const selflink= n._links.self.href
                const id = selflink.split('/').pop(-1);
                return (
                  <TableRow className={classes.row} key={n._links.self.href} data={n}>
                    <CustomTableCell >{id}</CustomTableCell>
                    <CustomTableCell >{n.firstname}</CustomTableCell>
                    <CustomTableCell >{n.lastname}</CustomTableCell>
                    <CustomTableCell >{n.rate}</CustomTableCell>
                    <CustomTableCell >{n.primary_skills}</CustomTableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  candidates: PropTypes.object.isRequired,
  onCandidates: PropTypes.func.isRequired,

};

export default withStyles(styles)(CustomizedTable);
