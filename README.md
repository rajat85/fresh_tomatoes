fresh_tomatoes is developed on top of node.js and its framework called sails.js.
Below are the list of steps you need to follow to run this application locally.

Steps:

1. Install node.js and sails.js.
2. Install mysql server with mysql client.
3. Create database called fresh_tomatoes.
4. Clone this application from github
6. Change user name and password for database connection as per your local mysql configuration. Typically the configuration for database connection is available under fresh_tomatoes/config/connections.js. Please refer the below code excerpt to change the connection parameters:

	freshTomatoesDB: {
    	adapter: 'sails-mysql',
    	host: 'localhost',
    	port: '3306',
    	user: 'root',
    	password: '',
    	database: 'fresh_tomatoes'
  	}
7. run 'npm install'
8. run 'sails lift'


Now, you are good to access http://localhost:1337 from your browser.


Also, I have developed a REST service which will allow me to do some CRUD operations: like 

1. http://localhost:1337/movies
2. http://localhost:1337/movies/:id


Note: I am consuming the data for this application from the REST service which I have implemented.
	  Also, I made the REST URL public as its a prototype application.


Please do let me know incase you face any difficulties to run this application.