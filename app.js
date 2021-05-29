//This code is having same action in all Http method so if you run them you actually don't find any difference, it is for the understand purpose that we can perform any action with any method.

const express = require("express");
const app = express();
app.use(express.json());
require("./db/conn");
const User = require("./model/Schema");

//GET requests are the most common and widely used methods in APIs and websites. Simply put, the GET method is used to retreive data from a server at the specified resource. For example, say you have an API with a /users endpoint. Making a GET request to that endpoint should return a list of all available users.

app.get("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

//In web services, POST requests are used to send data to the API server to create or udpate a resource. The data sent to the server is stored in the request body of the HTTP request.The simplest example is a contact form on a website. When you fill out the inputs in a form and hit Send, that data is put in the response body of the request and sent to the server. This may be JSON, XML, or query parameters (there's plenty of other formats, but these are the most common).
// It's worth noting that a POST request is non-idempotent. It mutates data on the backend server (by creating or updating a resource), as opposed to a GET request which does not change any data.

app.post("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// Simlar to POST, PUT requests are used to send data to the API to update or create a resource. The difference is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly make have side effects of creating the same resource multiple times.

app.put("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// The DELETE method is exactly as it sounds: delete the resource at the specified URL. This method is one of the more common in RESTful APIs so it's good to know how it works.
// If a new user is created with a POST request to /users, and it can be retrieved with a GET request to /users/{{userid}}, then making a DELETE request to /users/{{userid}} will completely remove that user.

app.delete("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// OPTIONS request should return data describing what other methods and operations the server supports at the given URL.
// OPTIONS requests are more loosely defined and used than the others, making them a good candidate to test for fatal API errors. If an API isn't expecting an OPTIONS request, it's good to put a test case in place that verifies failing behavior.

app.options("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

app.listen(8000, () => console.log("Server started on port 8000"));
