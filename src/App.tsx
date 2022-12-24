import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./config/msal-config";

const msalInstance = new PublicClientApplication(msalConfig);

const App = () => (
  <ChakraProvider>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </ChakraProvider>
);

export default App;
