import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icon.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import GameQueryContext from "../providers/GameProdiver/GameContext";

const NavBar = () => {
  const { dispatch } = useContext(GameQueryContext);
  return (
    <HStack padding="10px 20px">
      <Image src={logo} width="60px" />
      <SearchInput
        onSearch={(query) => dispatch({ type: "CHANGE_SEARCH", search: query })}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
