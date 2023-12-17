// import { useQuery } from "@apollo/client";
// import { useState, useEffect } from "react";
// import { TransactionResponse } from "../services/transaction.interface";
// import { GET_YEARLY_TRANSACTIONS } from "../services/transactions";

// interface Input {
//   category: string;
//   subCategory: string;
//   filter: string;
// }

// export const useYearlyTransactions = (props: Input) => {
//   const [yearlyTransactions, setYearlyTransactions] =
//     useState<TransactionResponse[]>();

//   const transactionsApi = useQuery(GET_YEARLY_TRANSACTIONS, {
//     variables: {
//       category: props.category,
//       subCategory: props.subCategory,
//       filter: props.filter,
//     },
//   });

//   useEffect(() => {
//     if (transactionsApi.data) {
//       const t = transactionsApi.data.transactions.months;
//       setYearlyTransactions(t);
//     }
//   }, [transactionsApi]);

//   return yearlyTransactions || [];
// };
