
# SWAPI CLI Tool

A command-line tool that fetches data from the **Star Wars API (SWAPI)**, built using **TypeScript** and bundled with **Vite**. The tool supports global installation and can be used to fetch information about characters, planets, starships, and more.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/swapi-cli.git
cd swapi-cli
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the CLI

```bash
npx vite build
```

### 4. Link the CLI Globally

```bash
npm link
```

### 5. Run the CLI

```bash
swapi-cli people 1
```

## Development

### Directory Structure

- **`src/commands/swapiCommand.ts`**: CLI command setup.
- **`src/api/swapiFetcher.ts`**: Fetches data from SWAPI.
- **`src/cli.ts`**: Main entry point.

### Build and Test

- **Build**: `npm run build`
- **Test**: `swapi-cli people 1` (after linking)

### Unlink the CLI

To remove the global link:

```bash
npm unlink -g swapi-cli
```

---

