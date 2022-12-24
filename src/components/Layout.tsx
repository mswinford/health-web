import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useMsal } from "@azure/msal-react";

const Layout = ({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) => {
  const { instance } = useMsal();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor={"#EDF2F4"}
      overflowY="scroll"
    >
      <VStack spacing={3} padding={3}>
        <Container maxWidth="container.xl">
          <Card bgColor="white">
            <CardBody paddingTop={3} paddingBottom={3}>
              <Flex justifyContent="end" alignItems="center">
                <Button onClick={() => instance.logout()} size="sm">
                  Logout
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Container>
        {children}
      </VStack>
    </Box>
  );
};

export default Layout;
