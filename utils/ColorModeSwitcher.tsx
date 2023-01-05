'use client';
import React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps, OmitCommonProps } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof IconButtonProps> &
    IconButtonProps & { as?: 'button' | undefined },
) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      aria-label={`Switch to ${text} mode`}
    />
  );
};
