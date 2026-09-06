import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "gameverse",
  clientId: "gameverse-web",
});

export default keycloak;
