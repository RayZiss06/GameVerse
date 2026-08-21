
### `infrastructure/docker/compose/README.md`

```md
# Docker Compose

## Purpose

The `compose` directory contains Docker Compose configurations used to orchestrate GameVerse's local infrastructure.

## Responsibilities

Docker Compose will eventually manage services such as:

- PostgreSQL
- Keycloak
- Redis
- MongoDB
- Neo4j
- RabbitMQ
- Kafka
- MinIO
- Supporting infrastructure

Services will be introduced incrementally as the corresponding application capabilities are implemented.

## Design Principles

- Services should be independently configurable.
- Persistent data should use named Docker volumes.
- Infrastructure services should communicate through dedicated Docker networks.
- Health checks should be defined where supported.
- Secrets and environment-specific values should not be committed to Git.
- The Compose configuration should remain reproducible on another development machine.