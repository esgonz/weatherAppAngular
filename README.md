including setup, usage, and API integration:

markdown

# WeatherApp

WeatherApp is a web application developed with Angular that displays current and historical weather data for specified locations. It interacts with a backend API to fetch and present weather information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Table of Contents

- [Project Setup](#project-setup)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Running Tests](#running-tests)
- [How to Use](#how-to-use)
- [Main Functionalities](#main-functionalities)
- [Example Usage](#example-usage)
- [Additional Information](#additional-information)

## Project Setup

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/weatherapp.git
   cd weatherapp
```
Install Dependencies:
```sh
npm install
Development Server
Run the following command to start the development server:
```
```sh

ng serve
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.
```
Code Scaffolding
Generate new components, directives, pipes, services, classes, guards, interfaces, enums, or modules using:

```sh

ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
Build
```
To build the project for production, run:

```sh

ng build
The build artifacts will be stored in the dist/ directory.
```
Running Tests
Execute unit tests via Karma:

```sh

ng test
```

Running End-to-End Tests
To run end-to-end tests, first add a package that implements end-to-end testing capabilities and then run:

```sh

ng e2e
```
How to Use
Start the API Server: Ensure you have the API server running. The API server should handle the following endpoints:
```

GET /weather-api/weather: Retrieves the current weather for a specified location.
GET /weather-api/weather/all: Retrieves historical weather details for a specified location.
GET /weather-api/weather/all/csv: Retrieves weather details in CSV format for a specified location.
```

API Server Configuration:

The API server should be running on http://localhost:8080.
Ensure CORS is enabled on the server to allow requests from the Angular application.
Parameters Needed:

latitude (required): The latitude of the location.
longitude (required): The longitude of the location.
Example Requests:

Current Weather:
```sh

curl -X GET "http://localhost:8080/weather-api/weather?latitude=-33.4489&longitude=-70.6693"
```

Historical Weather:
```sh

curl -X GET "http://localhost:8080/weather-api/weather/all?latitude=-33.4489&longitude=-70.6693"
```

Weather Details (CSV):
```sh

curl -X GET "http://localhost:8080/weather-api/weather/all/csv?latitude=33.0000&longitude=-70.0000" -o weather_details.csv
```
Main Functionalities
Current Weather Display:

Fetches and displays the current weather for a specified location.
Shows information such as temperature, wind speed, wind direction, and weather condition.
Historical Weather Display:

Fetches and displays historical weather data in a table format.
Includes details such as temperature, wind speed, wind direction, local time, and UTC time for each record.
User Input:

Allows users to enter latitude and longitude to fetch weather data for different locations.
CSV Download:

Retrieves weather details in CSV format for specified coordinates.
Example Usage
Start the Angular Application:

```sh

ng serve
```
Navigate to the Application: Open your browser and go to http://localhost:4200/.

Enter Coordinates: Input the latitude and longitude for the desired location (e.g., Santiago, Chile: Latitude -33.4489, Longitude -70.6693).

Fetch Weather Data: Click the "Get Weather" button to display current and historical weather data for the specified location.

Download CSV Data: Click the "Download CSV" button to retrieve weather details in CSV format.

Additional Information
Ensure you have Node.js and Angular CLI installed on your machine.
The application uses Angular Material for UI components.
Ensure the API server is configured to handle CORS requests from http://localhost:4200.
