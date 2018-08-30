import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
  if(isEmpty(props.requirements)){
    return (<div> something went wrong</div>);
  }
  else{
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell >Title</CustomTableCell>
              <CustomTableCell >Desciption</CustomTableCell>
              <CustomTableCell >Rate</CustomTableCell>
              <CustomTableCell >PrimarySkills</CustomTableCell>
              <CustomTableCell >SecondarySkills</CustomTableCell>
              <CustomTableCell >Candidates</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props.requirements.requirementses.map(n => {
                const link= n._links.candidates.href
                let boundCandidateClick = props.onCandidates.bind(this, link);

                return (
                  <TableRow className={classes.row} key={n._links.self.href} data={n}>
                    <CustomTableCell >{n.title}</CustomTableCell>
                    <CustomTableCell >{n.description}</CustomTableCell>
                    <CustomTableCell >{n.rate}</CustomTableCell>
                    <CustomTableCell >{n.primary_skills}</CustomTableCell>
                    <CustomTableCell >{n.secondary_skills}</CustomTableCell>
                    <CustomTableCell ><Button  className={classes.button} onClick={boundCandidateClick}>
                    Candidates
                    </Button> </CustomTableCell>
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
  requirements: PropTypes.object.isRequired,
  onCandidates: PropTypes.func.isRequired,

};

export default withStyles(styles)(CustomizedTable);
