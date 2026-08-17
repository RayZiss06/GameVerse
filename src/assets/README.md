# Assets (`assets`)

## Purpose

The `assets` directory contains static frontend assets that are imported and used by the GameVerse React application.

These assets are part of the application's source-controlled frontend resources and are processed by Vite when they are imported into application code.

## Responsibilities

This directory may contain:

* Images
* SVG files
* Icons
* Fonts
* Illustrations
* Background graphics
* Other static assets required by frontend components

## Example Structure

```text
assets/
├── images/
├── icons/
├── fonts/
├── illustrations/
└── README.md
```

The internal structure will be introduced only when the application actually requires these asset categories.

## What Belongs Here

Assets that are:

* Used by the React application
* Imported from frontend source code
* Part of the application's visual design
* Version-controlled as part of the project

Examples include:

* GameVerse logos
* UI illustrations
* Game-related interface graphics
* Custom fonts
* Feature-specific visual assets

## What Does Not Belong Here

Do not place the following in this directory:

* User-uploaded images
* User-uploaded videos
* Game recordings
* Large runtime-generated files
* Application logs
* Temporary files
* Secrets
* Backend assets
* Build output

Runtime-generated and user-uploaded media will eventually be handled through the application's media/storage architecture, using the local object-storage infrastructure.

## `public` vs `assets`

GameVerse will use both `public/` and `src/assets/`, but they serve different purposes.

### `src/assets/`

Use for assets imported by application code:

```text
src/assets/
```

These assets are processed by Vite during the build.

### `public/`

Use for files that need to be served directly without being imported through JavaScript or TypeScript:

```text
public/
```

For example:

* Static favicon files
* Public manifest files
* Files requiring stable public paths

## Design Principle

Keep source-controlled application assets organized and reasonably sized.

Large media files and user-generated content should not be committed to the Git repository. They will eventually be stored through the GameVerse local object-storage system.
