import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SortOrder } from "../hooks/useGames";
import { useContext } from "react";
import GameQueryContext from "../providers/GameProdiver/GameContext";

const SortSelector = () => {
  const { gameQuery, dispatch } = useContext(GameQueryContext);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "metacritic", label: "Not Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By:{" "}
        {gameQuery.sortOrder ? gameQuery.sortOrder?.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            bgColor={gameQuery.sortOrder?.value == item.value ? "gray.800" : ""}
            color={gameQuery.sortOrder?.value == item.value ? "white" : ""}
            key={item.value}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT_ORDER", sortOrder: item })
            }
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
