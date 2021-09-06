import { gql } from '@apollo/client';

export const ENZYME = gql`
  query BasicAssets {
    assets(first: 10, orderBy: symbol, orderDirection: asc) {
      id
      name
      symbol
      decimals
      derivativeType
    }
  }
`;
