# Application Configuration (`config`)

## Purpose

The `config` directory contains frontend application configuration that is required across the GameVerse application.

## Responsibilities

This directory is responsible for:

* Environment variable access
* Application configuration
* Configuration validation
* Configuration defaults
* Environment-specific application settings

## Example Structure

```text
config/
├── env.ts
└── README.md
```

## What Belongs Here

Configuration that is shared across multiple areas of the frontend application.

Examples include:

* API base URLs
* WebSocket URLs
* Application environment
* Authentication configuration
* Feature configuration

## What Does Not Belong Here

Do not place:

* Secrets
* API implementation logic
* React components
* Feature-specific configuration
* Database configuration
* Backend configuration

Frontend environment variables are not a secure location for secrets because values exposed to the browser can be inspected by users.

## Design Principle

Application configuration should be accessed through a centralized, typed configuration layer rather than reading `import.meta.env` throughout the application.
