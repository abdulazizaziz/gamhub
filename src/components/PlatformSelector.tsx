import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import GameQueryContext from "../providers/GameProdiver/GameContext";
import { useContext } from "react";

const PlatformSelector = () => {
  const { gameQuery, dispatch } = useContext(GameQueryContext);
  const { data, isLoading, error } = usePlatforms();
  if (error) return null;
  const platform = usePlatform(gameQuery.platformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform ? platform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((item) => (
          <MenuItem
            bgColor={platform?.id == item.id ? "gray.800" : ""}
            color={platform?.id == item.id ? "white" : ""}
            onClick={() =>
              dispatch({ type: "CHANGE_PLATFORM", platformId: item.id })
            }
            key={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
