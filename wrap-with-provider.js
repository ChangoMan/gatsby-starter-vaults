/* eslint-disable react/jsx-filename-extension */
import { ApolloProvider } from '@apollo/client';
import { ChainId, DAppProvider } from '@usedapp/core';
import React from 'react';
import { client } from './src/apollo/client';

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/460f40a260564ac4a4f4b3fffb032dad',
  },
};

export default ({ element }) => (
  <DAppProvider config={config}>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </DAppProvider>
);
