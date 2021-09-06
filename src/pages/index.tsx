import { useQuery } from '@apollo/client';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { ENZYME } from '../apollo/queries';
import { Layout } from '../components/layout/Layout';

// markup
const IndexPage = (): JSX.Element => {
  const { loading, error, data } = useQuery(ENZYME);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>An error has occured</AlertDescription>
      </Alert>
    );
  }

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Gatsby Vault Page Starter
      </Heading>
      <div>
        {loading ? (
          <Skeleton />
        ) : (
          data.assets.map((asset) => (
            <Text key={asset.id} mb="4">
              {asset.name}
            </Text>
          ))
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
