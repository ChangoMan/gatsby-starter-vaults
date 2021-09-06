import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEthers } from '@usedapp/core';
import { Buffer } from 'buffer';
import React, { useEffect } from 'react';
import coinbaseLogo from '../images/logo-coinbase.jpg';
import metaMaskLogo from '../images/logo-metamask.png';
import walletConnectLogo from '../images/logo-walletconnect.svg';
import { walletconnect, walletlink } from '../lib/connectors';

export function ConnectWallet(): JSX.Element {
  const { activate, activateBrowserWallet } = useEthers();

  const { onOpen, isOpen, onClose } = useDisclosure();

  // Buffer is needed by the `walletlink` connector.
  useEffect(() => {
    window.Buffer = Buffer;
  }, []);

  return (
    <>
      <Box
        order={[-1, null, null, 2]}
        textAlign={['left', null, null, 'right']}
      >
        <Button colorScheme="teal" variant="outline" onClick={onOpen}>
          Connect to a wallet
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect to a wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image maxWidth="20px" src={metaMaskLogo} alt="MetaMask" />
              }
              onClick={() => {
                activateBrowserWallet();
              }}
            >
              MetaMask
            </Button>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image
                  maxWidth="20px"
                  src={walletConnectLogo}
                  alt="WalletConnect"
                />
              }
              onClick={() => {
                activate(walletconnect);
              }}
            >
              WalletConnect
            </Button>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image
                  maxWidth="20px"
                  src={coinbaseLogo}
                  alt="Coinbase Wallet"
                />
              }
              onClick={() => {
                activate(walletlink);
              }}
            >
              Coinbase Wallet
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
