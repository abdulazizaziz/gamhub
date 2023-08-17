import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <p>
          {isRouteError
            ? "This Page Does Not Exists"
            : "An unexpected error occured"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
