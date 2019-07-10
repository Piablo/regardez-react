import React from "react";
import { connect } from "react-redux";
import * as upliftmentActions from "../../redux/actions/upliftmentActions";
import PropTypes from "prop-types";

class AddUpliftmentPage extends React.Component {
  state = {
    upliftment: {
      id: ""
    }
  };

  // using arrow functions on lass fields binds to the class
  handleChange = event => {
    const upliftment = { ...this.state.upliftment, id: event.target.value };
    this.setState({ upliftment });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      upliftmentActions.createUpliftment(this.state.upliftment)
    );
    console.log(this.state.upliftment.id);
  };

  render() {
    return (
      // adding handleSubmit to the form tag means the function will be run even on user hitting enter
      <form onSubmit={this.handleSubmit}>
        <h2>Add Upliftment</h2>
        <h3>New Upliftment</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.upliftment.id}
        />
        <input type="submit" value="Save" />
        {this.props.upliftments.map(upliftment => (
          <div key={upliftment.id}>{upliftment.id}</div>
        ))}
      </form>
    );
  }
}

AddUpliftmentPage.propTypes = {
  upliftments: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    upliftments: state.upliftments
  };
}

export default connect(mapStateToProps)(AddUpliftmentPage);
