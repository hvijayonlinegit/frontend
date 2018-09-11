import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';

class ClientModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			saving: false
		};
	}
	render() {
		
		return (
			<Dialog
				open={this.props.open}
				onClose={this.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullWidth={true}
			>
				<DialogTitle id="alert-dialog-title">{"Add a Requirement"}</DialogTitle>
				<DialogContent>
				<TextField
						autoFocus
						margin="dense"
						disabled= "true"
						name="id"
						label="Account Id "
						fullWidth
						defaultValue={this.props.requirement.id}
						onChange={this.props.onChange}
					/>
				<TextField
						autoFocus
						margin="dense"
						placeholder="Enter Client name"
						name="title"
						label="Title"
						fullWidth
						defaultValue={this.props.requirement.title}
						onChange={this.props.onChange}
					/>
					<TextField
						margin="dense"
						placeholder="Account Type"
						name="type"
						label="Type"
						fullWidth
						defaultValue={this.props.requirement.type}
						onChange={this.props.onChange}
					/>
					<TextField
						margin="dense"
						placeholder="Enter Client Address"
						name="description"
						label="Description"
						fullWidth
						defaultValue={this.props.requirement.description}
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
					/>
					<TextField
						margin="dense"
						label="Experience Required"
						name="exp_required"
						fullWidth
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.exp_required} />
					<TextField
						margin="dense"
						label="Primary Skills"
						placeholder="Synergy"
						name="primary_skills"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.primary_skills} />
					<TextField
						margin="dense"
						label="Secondary Skills"
						placeholder="Synergy"
						name="secondary_skills"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.secondary_skills} />
					<TextField
						margin="dense"
						label="Seniority Level"
						placeholder="Synergy"
						name="seniority_level"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.seniority_level} />
					<TextField
						margin="dense"
						label="Seniority Level"
						placeholder="Synergy"
						name="seniority_level"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.seniority_level} />
					<TextField
						margin="dense"
						label="Account Manager"
						placeholder="Synergy"
						name="account_manager"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.account_manager} />
					<TextField
						margin="dense"
						label="Candidate Availability"
						placeholder="Synergy"
						name="candidate_availability"
						fullWidth
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.candidate_availability} />
					<TextField
						margin="dense"
						label="Pay Rate"
						placeholder="Synergy"
						name="pay_rate"
						fullWidth
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.pay_rate} />
					<TextField
						margin="dense"
						label="Rate"
						placeholder="Synergy"
						name="rate"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.rate} />
					<TextField
						margin="dense"
						label="Recruiter Name"
						placeholder="Synergy"
						name="recruiter_name"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.requirement.recruiter_name} />
				</DialogContent>
				<DialogActions>
					<Button
						color="primary"
						onClick={this.props.close}
					>Cancel </Button>
					<Button
						color="primary"
						onClick={this.props.onSave}> Submit </Button>
				</DialogActions>
			</Dialog>
		)
	}

}
ClientModal.propTypes = {
	requirement: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};
export default withMobileDialog()(ClientModal);
