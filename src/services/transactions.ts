import { gql } from "@apollo/client";

export const GET_MONTHLY_TRANSACTIONS = gql`
  query Transactions($filter: String, $month: Int) {
    monthlyTransactions(filter: $filter, month: $month) {
      categoryBasedExpense {
        key
        percent
        value
      }
      subCategoryBasedExpense {
        key
        percent
        value
      }
      transactions {
        id
        date
        item
        metric
        units
        quantity
        price
        totalPrice
        category
        subCategory
        paymentMethod
        bank
        retailer
      }
    }
  }
`;

export const GET_YEARLY_TRANSACTIONS = gql`
  query ExampleQuery($category: String, $subCategory: String, $filter: String) {
    transactions(
      category: $category
      subCategory: $subCategory
      filter: $filter
    ) {
      totalSpend
      months {
        transactions {
          _id
          units
          totalPrice
          retailer
          subCategory
          quantity
          price
          paymentMethod
          metric
          item
          date
          category
          bank
        }
        month
        totalExpense
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query ExampleQuery {
    categories {
      categories
    }
  }
`;
