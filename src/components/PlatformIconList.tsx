import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

const PlatformIconList = ({
  platforms,
}: {
  platforms: { platform: Platform }[];
}) => {
  const iconMap: any = {
    pc: FaWindows,
    playstationn: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={2}>
      {platforms &&
        platforms.map(({ platform }) => (
          <Icon
            as={iconMap[platform.slug]}
            color="gray.500"
            key={platform.id}
          />
        ))}
    </HStack>
  );
};

export default PlatformIconList;
