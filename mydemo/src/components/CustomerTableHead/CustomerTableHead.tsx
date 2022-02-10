import React, { memo } from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { IColumn } from "../../models/TableModels";

interface ICustomerTableHeadProps {
  columns: IColumn[];
}

export const CustmoerTableHead = memo((props: ICustomerTableHeadProps) => {
  const { columns } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ width: 10 }}></TableCell>
        {columns.map((column) => {
          return (
            <TableCell
              key={column.id}
              align="center"
              style={{ minWidth: column.minWidth }}
            >
              {column.lable}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
});
