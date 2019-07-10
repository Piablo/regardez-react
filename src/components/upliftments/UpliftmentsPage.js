import React from "react";
import { connect } from "react-redux";
import * as upliftmentActions from "../../redux/actions/upliftmentActions";
import * as clientActions from "../../redux/actions/clientActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import UpliftmentList from "./UpliftmentList";

class UpliftmentsPage extends React.Component {
  componentDidMount() {
    const { upliftments, clients, actions } = this.props;

    if (upliftments.length === 0) {
      actions.loadUpliftments().catch(error => {
        alert("Loading upliftments failed" + error);
      });
    }

    if (clients.length === 0) {
      actions.loadClients().catch(error => {
        alert("Loading clients failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Upliftments</h2>
        <UpliftmentList upliftments={this.props.upliftments} />
      </>
    );
  }
}

UpliftmentsPage.propTypes = {
  clients: PropTypes.array.isRequired,
  upliftments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    upliftments:
      state.clients.length === 0
        ? []
        : state.upliftments.map(upliftment => {
            return {
              ...upliftment,
              clientName: state.clients.find(c => c.id === upliftment.clientId)
                .name
            };
          }),
    clients: state.clients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUpliftments: bindActionCreators(
        upliftmentActions.loadUpliftments,
        dispatch
      ),
      loadClients: bindActionCreators(clientActions.loadClients, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpliftmentsPage);
