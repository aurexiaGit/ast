import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

// Configuration d'ADAL
export const adalConfig = {
  tenant: "ca76a4e5-bb6c-49ae-95c2-f47e4f47e59a", // id ou url du tenant Azure
  clientId: "a7a58e18-392a-4e46-8b57-d2277aea1f80", // id de l'application créé ci-dessus
  endpoints: {
    api: "ca76a4e5-bb6c-49ae-95c2-f47e4f47e59a"
  },
  cacheLocation: 'localStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

// Méthode permettant d'exécuter un appel via la librairie ADAL
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext,adalConfig.endpoints.api);