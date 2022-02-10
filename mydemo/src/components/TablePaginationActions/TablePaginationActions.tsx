import React, { memo } from 'react';
import {
  Box,IconButton
} from '@mui/material';
import {KeyboardArrowLeft,KeyboardArrowRight} from '@mui/icons-material'
import {useTablePaginationActions} from './hooks/useTablePaginationActions';

interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
}

export const TablePaginationActions = memo((props:ITablePaginationActionsProps) => {
  const { count, page, rowsPerPage } = props;
  const {handleBackButtonClick,handleNextButtonClick} = useTablePaginationActions(page);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleBackButtonClick} disabled={page===0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
});
