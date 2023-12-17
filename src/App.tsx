import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import MonthlyDataGrid from "./components/MonthlyDataGrid";

import {
  MonthlyTransactionResponse,
  Transaction,
} from "./services/transaction.interface";
import { useMonthlyTransactions } from "./hooks/useMonthlyTranscations.hook";
import MonthlyCategoryExpense from "./components/MonthlyCategoryExpense";

function App() {
  const [month, setMonth] = useState(11);
  const [selectedRows, setSelectedRows] = useState<Transaction[]>([]);

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);

  const monthlyTransactions: MonthlyTransactionResponse =
    useMonthlyTransactions({
      filter: "ALL",
      month: month,
    });

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ minHeight: "100vh", color: "white", background: "#000000" }}
      p={4}
      m={0}
    >
      <Grid container>
        <Grid item xs={12} lg={7}>
          <MonthlyDataGrid
            selectedRows={selectedRows}
            setSelectedRows={(e: Transaction[]) => setSelectedRows(e)}
            monthlyTransactions={
              monthlyTransactions ? monthlyTransactions.transactions : []
            }
          />
        </Grid>
        <Grid justifyContent={"center"} item xs={12} lg={5}>
          <Box px={4} mt={4}>
            <MonthlyCategoryExpense
              category={
                monthlyTransactions
                  ? monthlyTransactions.categoryBasedExpense
                  : []
              }
            />
          </Box>
        </Grid>
        <Grid justifyContent={"center"} item xs={12} lg={5}>
          <Box px={4} mt={4}>
            <MonthlyCategoryExpense
              category={
                monthlyTransactions
                  ? monthlyTransactions.subCategoryBasedExpense
                  : []
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
