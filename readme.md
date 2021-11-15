## WORKFLOW
The required working flow :
- Create a post endpoint to create a user (name, email unique, password, first name and last name), 
- A Post endpoint to login
- A POST endpoint that receives the incident report.
- The report should have the following data :
`{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string }`
- The endpoint receives the report, adds weather data and stores it in a table “incidents”.
- The weather report should be fetched from the API service of https://openweathermap.org/current
- The stored object should be then as follow :
`{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string, “date”: date, “weather_report”: object }`
- A GET endpoint that lists all the incidents.
- A Get endpoint to get user incidents 
- Note only a registered user should be able to create a report.
- For the create a user endpoint, you don't need the name, just email, password, first name and last name.

