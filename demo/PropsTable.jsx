import React from 'react';

function PropsTable({ propsData }) {
  return (
    <div>
      <h2 className="h2">Properties</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {propsData.map((prop, i) => (
            <tr key={i}>
              <td>{prop.name}</td>
              <td>{prop.type}</td>
              <td>{prop.default}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

PropsTable.propTypes = {
  propsData: React.PropTypes.array.isRequired,
};

export default PropsTable;
