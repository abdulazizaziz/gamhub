import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return <div className="d-flex justify-content-center">{children}</div>;
  // return <Box>{children}</Box>;
};

export default GameCardContainer;
