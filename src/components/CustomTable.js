import React from 'react';
import './CustomTable.css'; // Importing the CSS file

function CustomTable() {
  // Directly adding data in the component
  const tableData = {
    header: ["Heading 1", "Comparison 1", "Comparison 2"],
    rows: [
      ["Data 1", "Comparison A", "Comparison B"],
      ["Data 2", "Comparison C", "Comparison D"],
      ["Data 3", "Comparison E", "Comparison F"],
      ["Data 4", "Comparison G", "Comparison H"],
    ]
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableData.header.map((heading, index) => (
              <th key={index} data-column={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-column={tableData.header[cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function App() {
  return <CustomTable />;
}
