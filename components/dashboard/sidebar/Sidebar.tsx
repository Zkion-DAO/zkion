import { Box, useColorModeValue } from '@chakra-ui/react';
import SidebarContent from './SidebarContent';

export default function Sidebar({}) {
  const variantChange = '0.2s linear';

  //  BRAND
  //  Chakra Color Mode
  const sidebarBg = useColorModeValue('white', 'gray.700');
  const sidebarRadius = '16px';
  const sidebarMargins = '16px 0px 16px 16px';

  // SIDEBAR
  return (
    <Box>
      <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <SidebarContent />
        </Box>
      </Box>
    </Box>
  );
}
