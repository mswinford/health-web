import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

const RequiresAuth = ({ children }: React.PropsWithChildren<{}>) => {
  useMsalAuthentication(InteractionType.Redirect);

  return (
    <div className="App">
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div>Unauthenticated</div>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default RequiresAuth;
