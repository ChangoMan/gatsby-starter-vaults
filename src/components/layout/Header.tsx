import {
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEthers } from '@usedapp/core';
import { Link } from 'gatsby';
import React from 'react';
import { Balance } from '../Balance';
import { ConnectWallet } from '../ConnectWallet';

// Takes a long hash string and truncates it.
function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...');
}

export function Header(): JSX.Element {
  const { account, deactivate } = useEthers();
  return (
    <header>
      <Container maxWidth="container.xl">
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          alignItems="center"
          justifyContent="space-between"
          py="8"
        >
          <Flex py={[4, null, null, 0]}>
            <Link to="/">Home</Link>
          </Flex>
          {account ? (
            <Flex
              order={[-1, null, null, 2]}
              alignItems="center"
              justifyContent={['flex-start', null, null, 'flex-end']}
            >
              <Balance />
              <Menu placement="bottom-end">
                <MenuButton as={Button} ml="4">
                  {truncateHash(account)}
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      deactivate();
                    }}
                  >
                    Disconnect
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <ConnectWallet />
          )}
        </SimpleGrid>
      </Container>
    </header>
  );
}
