# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## How to Use

1. **Start the API Server:**
   Ensure you have the API server running. The API server should be configured to handle the following endpoints:
   - `GET /weather-api/weather`: Retrieves the current weather for a specified location.
   - `GET /weather-api/weather/all`: Retrieves historical weather details for a specified location.

2. **API Server Configuration:**
   - The API server should be running on `http://localhost:8080`.
   - Ensure CORS is enabled on the server to allow requests from the Angular application.

3. **Parameters Needed:**
   - `latitude` (required): The latitude of the location.
   - `longitude` (required): The longitude of the location.

4. **Example Requests:**
   - Current Weather: `curl -X GET "http://localhost:8080/weather-api/weather?latitude=-33.4489&longitude=-70.6693"`
   - Historical Weather: `curl -X GET "http://localhost:8080/weather-api/weather/all?latitude=-33.4489&longitude=-70.6693"`

## Main Functionalities

1. **Current Weather Display:**
   - The application fetches and displays the current weather for a specified location.
   - Displays information such as temperature, wind speed, wind direction, and weather condition.

2. **Historical Weather Display:**
   - The application fetches and displays historical weather data for a specified location in a table format.
   - Displays information such as temperature, wind speed, wind direction, local time, and UTC time for each historical record.

3. **User Input:**
   - Users can input latitude and longitude to fetch weather data for different locations.

## Example Usage

1. **Start the Angular Application:**
   ```sh
   ng serve

Navigate to the Application: Open your browser and navigate to http://localhost:4200/.

Enter Coordinates: Enter the latitude and longitude for the desired location (e.g., Santiago, Chile: Latitude -33.4489, Longitude -70.6693).

Fetch Weather Data: Click the "Get Weather" button to fetch and display the current and historical weather data for the specified location.

Additional Information
Ensure you have Node.js and Angular CLI installed on your machine.
The application uses Angular Material for UI components.
The API server should be configured to handle CORS requests from http://localhost:4200.