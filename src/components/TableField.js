import React from 'react';

const TableField = ({ fieldName }) => {

    return(
        <div className="tableField">
          {fieldName}
          <i className="far fa-edit"></i>
          <i className="far fa-trash-alt"></i>
        </div>
    )
}

export default TableField;