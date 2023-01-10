'use client';
import Link from 'next/link';
import { Box, Flex, Text, Button, FlexProps, OmitCommonProps } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';
import Logo from './Logo';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const MenuItem = (props: { [x: string]: any; children: any; isLast: any; to?: '/' | undefined }) => {
  const { children, isLast, to = '/', ...rest } = props;
  return (
    <Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} display="block" {...rest}>
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FlexProps> &
    FlexProps & { as?: 'div' | undefined },
) => {
  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={4}
        p={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
        {...props}
      >
        <Flex align="center">
          <Logo />
        </Flex>

        <Box flexBasis={{ base: '100%', md: 'auto' }}>
          <Flex
            align={['center', 'center', 'center', 'center']}
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem href="/" isLast={false}>
              Home
            </MenuItem>
            <MenuItem href="/how" isLast={false}>
              How It works{' '}
            </MenuItem>
            <Link href={'/features'}>
              <MenuItem isLast={false}>Features </MenuItem>
            </Link>
            <MenuItem href="/pricing" isLast={false}>
              Pricing{' '}
            </MenuItem>
            <MenuItem href="/signup" isLast={false}>
              <Button
                size="sm"
                rounded="md"
                _hover={{
                  bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
                }}
              >
                Dashboard
              </Button>
            </MenuItem>
            <MenuItem isLast={true}>
              <ColorModeSwitcher aria-label={'Mode'} />
            </MenuItem>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Header;
