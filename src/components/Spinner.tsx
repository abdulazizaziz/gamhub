import { HStack } from "@chakra-ui/react";
import React from "react";

const Spinner = () => {
  return (
    // <HStack
    //   width="100%"
    //   height="100px"
    //   marginY={5}
    //   justifyContent="center"
    // >
    //   <Spinner />
    //   <span>Loading </span>
    // </HStack>
    <HStack justifyContent="center" marginY={5}>
      {/* <div className="d-flex justify-content-center my-5"> */}
      <div className="loading-container">
        <div className="loading-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
      {/* </div> */}
    </HStack>
  );
};

export default Spinner;
