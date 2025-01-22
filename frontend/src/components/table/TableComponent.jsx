import React from "react";
import styles from "./TableComponent.module.css";

const TableComponent = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Name}</td>
              <td>{row.Email}</td>
              <td>{row.Phone}</td>
              <td>{row.Status}</td>
              <td>
                <button className={styles.viewButton}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
