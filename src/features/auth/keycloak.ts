import Keycloak from "keycloak-js";
import { env } from "@/app/config/env";

const keycloak = new Keycloak({
  url: env.authUrl,
  realm: env.authRealm,
  clientId: env.authClientId,
});

export default keycloak;