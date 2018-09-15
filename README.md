# Burger

### Overview:

The objective of this assignment was to build a web application in which the user was able to choose from a list of burgers, created by a mySQL database, and devour them. This would in effect transfer the burgers from the uneaten column to the eaten one. In order to do this, a home-build orm, model and controller setup was utilized to manipulate the database information and then direct traffic so that the backend JS could determine where the new data needed to go. A handlebars template was also used so that backend JS wasn't responsible for generating HTML elements.

### Design Notes:

* Eat-da-Burger had to include:
    *A connection to mySQL Database
    *An orm to interact with mySQL
        *Was able to insert and update values
    *A controller
        *Used routing and functions imported from other JS files to execute get/put/post funcitons and direct traffic appropriately
        *Rendered data on page
    *Handlebars
        *Used a template to generate dynamic HTML

### Technologies Used:

* Javascript
* Node
* Express
* Body-Parser
* Server
* mySQL
* Handlebars
* ORM

###Deployed Link
https://github.com/tywi6665/burger
https://tranquil-meadow-63448.herokuapp.com/