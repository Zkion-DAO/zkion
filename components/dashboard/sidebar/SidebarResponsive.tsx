import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { CreativeTimLogo } from '../icons/Icons';
import { Separator } from '../separator/Separator';
import { SidebarHelp } from './SidebarHelp';
import React from 'react';
import { appName, publicUrl } from '../../../utils/constants';

export default function SidebarResponsive(props: { [x: string]: any; secondary?: any; logoText?: any; routes?: any }) {
  let hamburgerColor = useColorModeValue('gray.500', 'gray.200');
  if (props.secondary === true) {
    hamburgerColor = 'white';
  }
  const brand = (
    <Box pt={'35px'} mb="8px">
      <Link
        href={`${publicUrl}`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo w="32px" h="32px" me="10px" />
        <Text fontSize="sm" mt="3px">
          {appName}
        </Text>
      </Link>
      <Separator></Separator>
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <HamburgerIcon color={hamburgerColor} w="18px" h="18px" onClick={onOpen} />
      <Drawer isOpen={isOpen} onClose={onClose} placement={document.documentElement.dir === 'rtl' ? 'right' : 'left'}>
        <DrawerOverlay />
        <DrawerContent
          w="250px"
          maxW="250px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          borderRadius="16px"
        >
          <DrawerCloseButton _focus={{ boxShadow: 'none' }} _hover={{ boxShadow: 'none' }} />
          <DrawerBody maxW="250px" px="1rem">
            <Box maxW="100%" h="100vh">
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                <Box>{}</Box>
              </Stack>
              <SidebarHelp></SidebarHelp>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
