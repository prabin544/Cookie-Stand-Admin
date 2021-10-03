import React from "react";

function Reporttable(props) {
  return (
    <table className="mx-auto w-3/4 bg-gray-200 ">
      <thead>
        <tr>
          <th>Location</th>
          {props.hours.map((hour) => {
            return <th key={Math.random()}>{hour}</th>;
          })}
          <th>Total</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default Reporttable;
