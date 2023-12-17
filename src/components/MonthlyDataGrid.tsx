import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Transaction } from "../services/transaction.interface";
import { Box, Typography } from "@mui/material";

interface Props {
  selectedRows: Transaction[];
  monthlyTransactions: Transaction[];
  setSelectedRows: (e: Transaction[]) => void;
}

export default function MonthlyDataGrid({
  selectedRows,
  monthlyTransactions,
  setSelectedRows,
}: Props) {
  function getSum() {
    let sum = 0;
    selectedRows.map((s) => (sum += s.totalPrice));
    return sum;
  }

  return (
    <Box>
      <Typography color="primary">Total {getSum()}</Typography>

      <DataGrid
        rows={monthlyTransactions}
        getRowId={(e) => e.id}
        onRowSelectionModelChange={(e) => {
          const p: Transaction[] = [];
          e.filter((e) => {
            if (typeof e === "number") {
              monthlyTransactions.map((i) => {
                if (i.id === e) p.push(i);
              });
            }
          });
          setSelectedRows([...p]);
        }}
        checkboxSelection={true}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </Box>
  );
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 10 },
  {
    field: "date",
    headerName: "Date",
    width: 90,
  },
  {
    field: "item",
    headerName: "Item",
    editable: true,
    width: 200,
  },
  {
    field: "category",
    headerName: "Category",
    editable: true,
    width: 120,
  },
  { field: "subCategory", headerName: "Sub Category", width: 120 },
  {
    field: "totalPrice",
    headerName: "Total Price",
    type: "number",
    valueFormatter: (e) => e.value + "₹",
    editable: true,
  },
];
