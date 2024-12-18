# Project Name

This project contains both the backend API (Node.js) and the frontend application (Vite) within a single repository.

## Project Structure

The repository has the following structure:

```
/project-root
  ├── /api               # Node.js API backend
  ├── /app               # Frontend client-side app using Vite
  ├── /node_modules      # Installed npm packages
  └── README.md          # Project documentation
```

- **/api**: Contains the Node.js backend API that serves data to the frontend.
- **/app**: Contains the frontend application built with Vite.
  
## Setup and Running the API (Backend)

### 1. Navigate to the API folder:
```bash
cd api
```

### 2. Install dependencies:
Run the following command to install the necessary dependencies for the Node.js backend:

```bash
npm install
```

or if you’re using Yarn:

```bash
yarn install
```

### 3. Run the backend API:
Once dependencies are installed, start the Node.js server:

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

This will start the server, usually accessible at `http://localhost:5000`. The server will handle API requests, such as fetching data for the frontend.

## Setup and Running the Frontend (Vite App)

### 1. Navigate to the app folder:
```bash
cd app
```

### 2. Install dependencies:
Run the following command to install the necessary dependencies for the frontend application:

```bash
yarn install
```

### 3. Run the Vite development server:
Once dependencies are installed, you can start the Vite development server with:

```bash
yarn dev
```

This will start the frontend client, usually accessible at `http://localhost:5173`. The client will make requests to the API running on `http://localhost:5000`.
