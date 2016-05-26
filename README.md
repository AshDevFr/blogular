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
* Use event to add the new article


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



## TODO

### Step 0 - Gulp

* Setup a gulp task to serve an application


### Step 22 - Provider

* Transform the service into a provider and create a method to set the api URL


### Step 23 - UI-Router

* Replace ngRouter by ui-router
* Setup a view header and put the navbar inside it
* Use ui-router event to to display a loading animation


### Step 24 - Optimization

* Use optimization mechanisms to reduce the amount of watchers


### Step 25 - Filters

* Use filters in controllers instead of views


### Step 26 - Promises

* Add a new route to display an article
* In the resolve, chain promises to get all informations from an article 

* GET: **/api/articles/:id** to get the title, author, categories and date
* GET: **/api/articles/:id/content** to get the content
* GET: **/api/articles/:id/picture** to get the picture url


### Step 27 - Create a directive with transclude

* Create a directive to display the list of categories
* Use transclusion to give the template


### Step 28 - Form element

* Transform your directive to use it as a form element
* Create a sync validator to check the author name (should have a firstname and a lastname)
* Create an async validator to check (for new articles) if the title is already used


### Step 29 - Translation

* Use angular-translate to display the site in two language (json files provided)
* Allow to change the language by clicking on the flag in the navbar


### Step 30 - REST

* The API is in the wrong format, use transformers to make the application works


### Step 31 - Interceptors

* When getting a 401 http error, display the login modal


### Step 32 - CSRF

* The server ask for a csrf, change headers to make the form work


### Step 33 - Unit test: Controller

* Create a unit test for the ArticleController


### Step 34 - Unit test: Directive

* Create a unit test for both validators


### Step 35 - Unit test: Filter

* Create a unit test for the picture filter


### Step 36 - Unit test: Service

* Create a unit test for the Article service


### Step 37 - E2E test

* Create an e2e test for the Articles page



## Credits

Training created by [Sylvain CAU](https://github.com/AshDevFr)

Follow me on Twitter [@SylvainCau](https://twitter.com/SylvainCau)
