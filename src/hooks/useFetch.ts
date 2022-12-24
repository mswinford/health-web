import { useCallback } from "react";
import config from "../config";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/msal-config";

const useFetch = () => {
  const { instance, accounts } = useMsal();

  return useCallback(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const { accessToken } = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });

      return fetch(config.healthApiBaseUrl + input, {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }).then(response => response.json());
    },
    [instance, accounts]
  );
};

export default useFetch;
