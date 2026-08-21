# Infrastructure

## Purpose

The `infrastructure` directory contains the local infrastructure required to run the GameVerse ecosystem.

GameVerse is designed as a production-like system while remaining completely local for development. Infrastructure that would normally be provided by cloud platforms will be replicated locally using open-source technologies and containers.

## Responsibilities

This directory contains configuration for:

- Containerized infrastructure
- Databases
- Messaging systems
- Caching
- Identity and authentication infrastructure
- Object storage
- Observability
- Local networking
- Persistent storage
- Infrastructure-level configuration

## Structure

```text
infrastructure/
├── docker/
└── README.md
```


```
docker commands

docker compose --env-file infrastructure/docker/.env -f infrastructure/docker/compose/docker-compose.yml config
docker compose --env-file infrastructure/docker/.env -f infrastructure/docker/compose/docker-compose.yml ps

docker compose --project-directory . -f infrastructure/docker/compose/docker-compose.yml config
docker compose --project-directory .  -f infrastructure/docker/compose/docker-compose.yml up -d 
docker compose --project-directory .  -f infrastructure/docker/compose/docker-compose.yml ps

