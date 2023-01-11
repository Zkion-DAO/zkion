import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';
import { CreativeTimLogo } from '../icons/Icons';
import { Separator } from '../separator/Separator';
import { SidebarHelp } from './SidebarHelp';
import React from 'react';
import { appName } from '../../../utils/constants';

// this function creates the links and collapses that appear in the sidebar (left menu)

const SidebarContent = ({}) => {
  return (
    <>
      <Box pt={'25px'} mb="12px">
        <Link
          href={`${process.env.PUBLIC_URL}/#/`}
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
      <Stack direction="column" mb="40px">
        <Box>{}</Box>
      </Stack>
      <SidebarHelp />
    </>
  );
};

export default SidebarContent;
