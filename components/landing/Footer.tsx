'use client';
import { Flex, Text } from '@chakra-ui/react';
import Logo from '../common/Logo';
import { appName } from '../../utils/constants';

export default function Footer() {
  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={0}
        p={0}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      >
        <Logo />
        <Text>© 2023 {appName}. All Rights Reserved.</Text>
      </Flex>
    </div>
  );
}
