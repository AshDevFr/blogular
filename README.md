# blogular

Blogular is a simple set of exercises to learn how to develop a web application using AngularJS

## Run the project

### With Docker

```$ docker-compose up```


### Without Docker 

#### Prerequisite

```
$ npm i -g gulp bower nodemon
$ npm i
$ bower install
```


#### Commands

* Run the app: **npm start**


## Steps 

### Step 1 - Databinding

* Change Hello World to add your name using databinding
* Add a text input to set the name
* You do not need to use a js file


### Step 2 - Create a controller

* Create your first controller to define your name in the home page


### Step 3 - Scope inheritance

* Test the scope inheritance creating another controller


### Step 4 - Load data from JS

* Replace the hard coded list of articles by a dynamically loaded list using ng-repeat


### Step 5 - Form usage

* Use the databinding to get the data from the form to the controller
* Display the created object in the console


### Step 6 - Article creation

* Add the new article in the list of articles
* Use the controller inheritance to add the new article


### Step 7 - ControllerAs

* Use controllerAs in the HTML


### Step 8 - Event

* Add the new article in the list of articles
* Use eventq to add the new article


### Step 9 - http 

* Fetch data from http
* Create new articles using POST requests

* GET: **/api/articles** to get the list of articles
* POST: **/api/articles** to create a new article


### Step 10 - Router 

* Use ngRoute to define your routes 
  * **/** for the home (and by default)
  * **/articles** for the list of articles


### Step 11 - Delete an article

* Use the delete button to delete the article

* DELETE: **/api/articles/:id** to delete an existing article


### Step 12 - Edit an article

* Create a new route to visualize and edit an article

* GET: **/api/articles/:id** to get one article using its id
* PUT: **/api/articles/:id** to update an existing article


### Step 13 - Form validation

* Add form validation on the modal
  * title required
  * content between 10 and 300 chars
  * disable the create button when the form is invalid


### Step 14 - Create a service

* Create a service for the CRUD of articles


### Step 15 - Use $resource

* Change the article service to use $resource
* Implement the update function using the PUT method


### Step 16 - Filters

* Add filter do display date using a usual format
* Add a filter to display the title in uppercase


### Step 17 - Search

* Use the search input to filter the list of articles
* Bind category buttons to filter by category


### Step 18 - Sort 

* Use sort buttons to sort by title or by date
* Reverse the sort when clicking a second time on the same button


### Step 19 - Create a filter

* Create a filter to display a default picture when the article has no picture set


### Step 20 - ngSwitch

* Use the ngSwitch directive to select the display mode (list / table)


### Step 21 - Create a directive

* Create a custom directive to display articles in the list
