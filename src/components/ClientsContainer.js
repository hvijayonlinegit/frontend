import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Material Imports
import Grid from '@material-ui/core/Grid';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

//Spinner Imports

import ClientList from './clients/ClientList'
import ClientDetails from './clients/ClientDetails';
import RequirementList from './requirements/RequirementList'
import CandidateList from './candidates/CandidateList'
import RequirementDetails from './requirements/RequirementDetails'
import CandidateDetails from './candidates/CandidatesDetails'
import DocumentsList from './documents/DocumentsList'
const styles = theme => ({
    card: {
        marginTop: '30%',
        marginRight: '10%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    button: {
        backgroundColor: 'lightBlue',
        margin: '10%'
    },
    pos: {
        //backgroundColor: 'lightBlue',
        border: '1px'
    },
    root: {
        //overflow:'auto'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class ExampleGrid extends React.Component {

    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {

        const { classes } = this.props;
        const clients = this.props.clients;
        const requirements= this.props.moreinfo.client.requirements;
        const candidates= this.props.reqmoreinfo.requirement.candidates;
        return (
            <div className={classes.root}>
                <Grid container spacing={32}>
                    <Grid item xs={12} sm={12}>
                        <ExpansionPanel expanded={true} onChange={this.handleChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Clients</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={3} className={classes.pos}>
                                        <ClientList
                                            clients={clients}
                                            onRequirements={this.handleRequirements}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <ClientDetails moreinfo={this.props.moreinfo}></ClientDetails>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ExpansionPanel expanded={true} onChange={this.handleChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Requirements</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={3} className={classes.pos}>
                                    <RequirementList
                                            requirements={requirements}
                                            onRequirements={this.props.onRequirements}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <RequirementDetails 
                                        requirements={this.props.reqmoreinfo.requirement}
                                        ></RequirementDetails>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ExpansionPanel expanded={true} onChange={this.handleChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Candidates</Typography>

                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={3} className={classes.pos}>
                                    <CandidateList
                                            candidates={candidates}
                                            onCandidates={this.props.onCandidates}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <CandidateDetails 
                                            candidate={this.props.candmoreinfo.candidate}
                                            ></CandidateDetails>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ExpansionPanel expanded={true} onChange={this.handleChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Documents</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={12} className={classes.pos}>
                                    <DocumentsList
                                            candidate={this.props.candmoreinfo.candidate}
                                            onDocuments={this.props.onDocuments}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                        />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ExampleGrid.propTypes = {
    clients: PropTypes.object.isRequired,
    onRequirements: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMoreInfo: PropTypes.func.isRequired,
    moreinfo: PropTypes.object.isRequired,
    reqmoreinfo: PropTypes.object.isRequired,
    candmoreinfo: PropTypes.object.isRequired,
    onCandidates: PropTypes.func.isRequired,
    onDocuments:PropTypes.func.isRequired

};

export default withStyles(styles)(ExampleGrid);
