import { Container } from '@chakra-ui/react';
import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="container.xl">{children}</Container>
      </main>
    </>
  );
}
