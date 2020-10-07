import React from 'react';
import TableField from "./TableField";

const Table = ({ books }) => {
    return(
        <div className="table">
            <div className="tableHeading">
              <TableField fieldName="Title" />
              <TableField fieldName="Author" />
              <TableField fieldName="ISBN" />
              <TableField fieldName="Settings" />
            </div>
        </div>
    )
}

export default Table;
