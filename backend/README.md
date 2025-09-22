# Backend Application

This is a backend application for managing authentication, card data, and map functionalities. It is built using Node.js and TypeScript, utilizing Express for handling HTTP requests.

## Features

- User authentication (sign up and sign in)
- Card data management (uploading and retrieving card information)
- Map functionalities (fetching address lists and coordinates)

## Project Structure

```
backend-app
├── src
│   ├── controllers        # Contains controllers for handling requests
│   ├── routes.ts             # Defines routes for the application
│   ├── app.ts             # Entry point of the application
│   └── types.ts              # TypeScript interfaces and types
├── package.json           # NPM dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd backend-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Usage

To start the application, run:

```
npm start
```

The server will start on the specified port (default is 4000). You can then access the API endpoints for authentication, card data, and map functionalities.

## API Endpoints

- **Authentication**

  - `POST /api/auth/signup` - Sign up a new user
  - `POST /api/auth/signin` - Sign in an existing user

- **Card Data**

  - `POST /api/card/upload` - Upload card data
  - `GET /api/card` - Retrieve card information

- **Map Functionalities**
  - `GET /api/map/addresses` - Fetch address list
  - `GET /api/map/coordinates` - Get coordinates based on provided locations

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
