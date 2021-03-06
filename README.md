# Flight Multitracker

Allows tracking of multiple flights from different airlines

## Setup

1. Clone code from GitHub
   ```shell
   $ npm install
   ```
2. API Setup
   1. Get an API Key from _aviationstack.com_
   2. Save key in **client/src/API_KEY_Example.js**
   3. Rename **API_KEY_Example.js** to **API_KEY.js**
3. Database Setup
   1. Insert correct MySQL credentials in **database/config_example.js**
   2. Rename **config_exampl.js** to **config.js**
   ```shell
   $ npm run db
   ```
4. In the terminal run:
   ```shell
   $ npm run client
   $ npm run server
   ```
5. Application runs on port :3000

## Usage

##### To add a new flight to the tracker (Max: 5)

1. Enter an iata flight code (e.g., DL2759) into the flight code field
2. Enter a date into the date field
3. Click the **Add Flight** button

##### To change the name of a flight

1. Click the name of the flight
2. Enter the new name into the pop-up prompt

##### To remove a flight from the tracker

1. Click the **X** button in the upper left corner of the flight

## Attributions

- Flight information provided by AviationStack (https://aviationstack.com/)
- Airline Logos provided by the Airline Logo Scraper (https://github.com/calda/Airline-Logos)
- Icon made by FlatIcon.com (https://www.flaticon.com/authors/pause08)