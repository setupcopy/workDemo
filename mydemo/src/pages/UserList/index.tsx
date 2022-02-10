import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useUserList } from "./hooks/useUserList";
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { IColumn } from "../../models/TableModels";
import { IUser } from "../../models/userModels";
import { CustmoerTableHead } from "../../components/CustomerTableHead/CustomerTableHead";
import { CustmoerTableFooter } from "../../components/CustomerTableFooter/CustomerTableFooter";

const columns: IColumn[] = [
  { id: "id", lable: "Id", minWidth: 50 },
  { id: "email", lable: "Email", minWidth: 150 },
  { id: "role", lable: "Role", minWidth: 150 },
  { id: "nickName", lable: "NickName", minWidth: 150 },
  { id: "createdAt", lable: "CreateDate", minWidth: 150 },
  { id: "updatedAt", lable: "UpdateDate", minWidth: 150 },
];

export const UserList = () => {
  const {handleDeleteButtonClick} = useUserList();
  const result = useSelector(
    (state: RootState) => state.usersearch.usersWithPagnation
  );

  return (
    <Paper sx={{ width: "70%", overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <CustmoerTableHead columns={columns} />
          <TableBody>
            {result.users.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Button variant="outlined" onClick={()=> handleDeleteButtonClick(row.id)}>delete</Button>
                  </TableCell>
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align="center">
                        {row[column.id as keyof IUser]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          <CustmoerTableFooter repUsers={result} />
        </Table>
      </TableContainer>
    </Paper>
  );
};
