/**
 * A component that renders a switch to toggle between light and dark mode.
 * Uses Chakra UI's `useColorMode` hook to toggle the color mode.
 * @returns JSX.Element
 */
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text whiteSpace="nowrap" className="m-0">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
