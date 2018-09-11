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
			client: { name: '', type: '', address: '', phone: '', team: '' },
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
				<DialogTitle id="alert-dialog-title">{"Add a Client"}</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						placeholder="Enter Client name"
						name="name"
						label="Name"
						fullWidth
						defaultValue={this.props.client.name}
						onChange={this.props.onChange}
					/>
					<TextField
						margin="dense"
						placeholder="Account Type"
						name="type"
						label="Type"
						fullWidth
						defaultValue={this.props.client.type}
						onChange={this.props.onChange}
					/>
					<TextField
						margin="dense"
						placeholder="Enter Client Address"
						name="address"
						label="Address"
						fullWidth
						defaultValue={this.props.client.address}
						onChange={this.props.onChange}
						errorText={this.state.invalid_url && 'Please enter a valid URL.'}
					/>
					<TextField
						margin="dense"
						label="Phone Number"
						placeholder="210210210121"
						name="phone"
						fullWidth
						onChange={this.props.onChange}
						errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.client.phone} />
					<TextField
						margin="dense"
						label="Team"
						placeholder="Synergy"
						name="team"
						fullWidth
						onChange={this.props.onChange}
						errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.client.team} />

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
	client: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default withMobileDialog()(ClientModal);
