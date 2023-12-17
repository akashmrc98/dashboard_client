import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { MonthlyTransactionResponse } from "../services/transaction.interface";
import { GET_MONTHLY_TRANSACTIONS } from "../services/transactions";

interface Input {
  month: number;
  filter: string;
}

export const useMonthlyTransactions = ({ filter, month }: Input) => {
  const [monthlyTransactions, setMonthlyTransactions] =
    useState<MonthlyTransactionResponse>();

  const transactionsApi = useQuery(GET_MONTHLY_TRANSACTIONS, {
    variables: {
      filter: filter,
      month: month,
    },
  });

  useEffect(() => {
    if (transactionsApi.data) {
      const t = transactionsApi.data.monthlyTransactions;
      setMonthlyTransactions(t);
    }
  }, [transactionsApi]);

  return monthlyTransactions;
};
