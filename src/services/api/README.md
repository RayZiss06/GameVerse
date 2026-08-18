# API (`api`)

## Purpose

The `api` directory contains the shared HTTP communication infrastructure used by the GameVerse frontend.

It provides the foundation through which frontend services communicate with the GameVerse backend and API Gateway.

## Responsibilities

This directory is responsible for:

- HTTP client configuration
- Common request configuration
- Common response handling
- API error normalization
- Request timeouts
- HTTP interceptors
- Shared API communication behavior

## Structure

```text
api/
├── client.ts
└── README.md