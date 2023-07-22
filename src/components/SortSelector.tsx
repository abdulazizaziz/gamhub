import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SortOrder } from "../hooks/useGames";

interface Props {
  onSelect: (sortOrder: SortOrder | null) => void;
  selectedSortOrder: SortOrder | null;
}

const SortSelector = ({ onSelect, selectedSortOrder }: Props) => {
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
        Sort By: {selectedSortOrder ? selectedSortOrder?.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            bgColor={selectedSortOrder?.value == item.value ? "gray.800" : ""}
            color={selectedSortOrder?.value == item.value ? "white" : ""}
            key={item.value}
            onClick={() => onSelect(item)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
