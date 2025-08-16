# Turbo + React + TypeScript + RSbuild

A modern monorepo setup:
Turbo for build optimization,
React with TypeScript,
RSbuild for fast bundling.

## Project Structure

```
├── apps/
│   └── app-one/                 # React TypeScript app with RSbuild
│   └── app-two/                 # React TypeScript app with RSbuild
├── packages/
│   └── api-client/              # Shared axios instance configuration
│   └── eslint-config/           # Shared ESlint configuration
│   └── typescript-config/       # Shared TypeScript configuration
├── package.json                 # Root package.json with workspace config
├── turbo.json                   # Turbo configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

This will start the React app at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development servers for all apps
- `npm run build` - Build all apps and packages
- `npm run lint` - Lint all apps and packages
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean all build outputs

## Features

- 🚀 **Turbo** - Fast, incremental builds and caching
- ⚛️ **React 18** - Latest React with TypeScript
- 📦 **RSbuild** - Fast Rust-based bundler (Rspack)
- 🎯 **TypeScript** - Full type safety
- 🔧 **ESLint** - Code linting and formatting
- 📁 **Monorepo** - Organized workspace structure

## Development

### Adding New Apps

1. Create a new directory in `apps/`
2. Add the app configuration to the workspace
3. Update `turbo.json` if needed

### Adding New Packages

1. Create a new directory in `packages/`
2. Add shared utilities, components, or configurations
3. Reference from apps as needed

## Tech Stack

- **Build System**: Turbo
- **Frontend**: React + TypeScript
- **Bundler**: RSbuild (Rspack)
- **Linting**: ESLint + TypeScript ESLint
- **Package Manager**: npm (workspaces)
