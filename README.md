# In-Memory Hospital 🏥

In-Memory Hospital is a simple Node.js project that simulates a hospital system for managing kidney health data using Express.js.

## Features

- **GET Endpoint**: Retrieve kidney statistics (total, healthy, unhealthy) for a particular user.
- **POST Endpoint**: Add a new kidney with health status for a particular user.
- **PUT Endpoint**: Update the health status of all kidneys to healthy for a particular user.
- **DELETE Endpoint**: Remove all unhealthy kidneys for a particular user.

## Technologies Used

- **Express.js**: Handling server requests and routes.
- **Node.js**: JavaScript runtime environment.
- **Postman**: Testing the endpoints.

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js installed on your local machine.
- Postman or any API testing tool.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/not-adarsh/InMemoryHospitalExpressApplication-Backend-Only.git
   ```
2. Navigate into the project directory
   ```sh
   cd InMemoryHospitalExpressApplication-Backend-Only
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   node index.js
   ```

## Usage

Use Postman or any API testing tool to send requests to the endpoints:

### GET Endpoint

Retrieve kidney statistics (total, healthy, unhealthy) for the user.

- **URL**: `http://localhost:3000/`
- **Method**: `GET`

### POST Endpoint

Add a new kidney with health status for the user.

- **URL**: `http://localhost:3000/`
- **Method**: `POST`
- **Body**: JSON with `isHealthy` field (true/false)

Example:
```json
{
  "isHealthy": true
}
```

### PUT Endpoint

Update the health status of all kidneys to healthy for the user.

- **URL**: `http://localhost:3000/`
- **Method**: `PUT`

### DELETE Endpoint

Remove all unhealthy kidneys for the user.

- **URL**: `http://localhost:3000/`
- **Method**: `DELETE`

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

For any questions or feedback, please feel free to reach out:
- [GitHub Profile](https://github.com/not-adarsh)
- [In Memory Hospital Express Application](https://github.com/not-adarsh/InMemoryHospitalExpressApplication-Backend-Only)
