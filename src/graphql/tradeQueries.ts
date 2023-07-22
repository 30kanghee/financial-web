import { gql, useQuery } from '@apollo/client';

export const FIND_TRADES = gql`
  query FindTrades {
    trades {
      price
      amount
      asset
      createdAt
    }
  }
`;

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
