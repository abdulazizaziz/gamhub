import {
  HStack,
  List,
  ListItem,
  Image,
  Skeleton,
  SkeletonText,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

const GenreList = ({
  selectedGenre,
  onChange,
}: {
  selectedGenre: Genre | null;
  onChange: (genre: Genre) => void;
}) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List padding={0}>
        {isLoading && (
          <ListItem paddingY="5px" fontSize="20px">
            Loading ....
          </ListItem>
        )}
        {/* ------------ Skeletons ------------ */}
        {isLoading &&
          !data.length &&
          skeletons.map((item) => (
            <ListItem key={item} paddingY="10px">
              <HStack>
                <Skeleton height="32px" width="32px" borderRadius={8} />
                <button className="m-0">
                  <SkeletonText
                    width="100px"
                    noOfLines={1}
                    skeletonHeight={3}
                  />
                </button>
              </HStack>
            </ListItem>
          ))}
        {/* ------------ Skeletons ------------ */}
        {data.map((item) => (
          <ListItem key={item.id} paddingY="10px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(item.image_background)}
              />
              <Button
                whiteSpace="normal"
                variant="link"
                fontWeight={selectedGenre?.id == item.id ? "bold" : ""}
                onClick={() => onChange(item)}
                className="m-0"
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
