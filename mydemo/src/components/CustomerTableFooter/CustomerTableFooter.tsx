import React, { memo } from "react";
import { TableFooter, TableRow, TablePagination } from "@mui/material";
import { IUserSearchRespons } from "../../models/userModels";
import {TablePaginationActions} from '../TablePaginationActions/TablePaginationActions';

interface ICustomerTableFooterProps {
  repUsers: IUserSearchRespons;
}

export const CustmoerTableFooter = memo((props: ICustomerTableFooterProps) => {
  const { repUsers } = props;

  const onchange = () => {
  }

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[repUsers.pageSize]}
          count={repUsers.totalCount}
          rowsPerPage={repUsers.pageSize}
          page={repUsers.currentPage - 1 === -1 ? 0:repUsers.currentPage - 1}
          onPageChange={onchange}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
});
