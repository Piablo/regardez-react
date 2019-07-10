import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UpliftmentList = ({ upliftments }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Upliftment</th>
        <th>Client</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {upliftments.map(upliftment => {
        return (
          <tr key={upliftment.id}>
            <td>{upliftment.number}</td>
            <td>{upliftment.clientName}</td>
            <td>{upliftment.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

UpliftmentList.propTypes = {
  upliftments: PropTypes.array.isRequired
};

export default UpliftmentList;
