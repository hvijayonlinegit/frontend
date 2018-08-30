import React from 'react';
import TextField from '@material-ui/core/TextField';
import {white, blue500} from '@material-ui/core/colors/';

import PropTypes from 'prop-types';
const styles = {
  iconButton: {
    float: 'left',
    paddingTop: 17
  },
  textField: {
    color: white,
    backgroundColor: blue500,
    borderRadius: 2,
    height: 35
  },
  inputStyle: {
    color: white,
    paddingLeft: 5
  },
  hintStyle: {
    height: 16,
    paddingLeft: 5,
    color: white
  }
};
class SearchBox extends React.Component {
  
render(){
  return (
    <div>
      <TextField
        hintText="Search..."
        placeholder="Search..."
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
        onChange={this.props.onSearch}
      />
    </div>
  );
}
  
}
SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired
};
export default SearchBox;
