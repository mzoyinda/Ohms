const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const auth = require("./auth");
const { uniq } = require("lodash");
const generator = require("generate-password");
require("dotenv").config();


// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const port = process.env.PORT || 5001;

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register endpoint
app.post("/register", (request, res) => {
  const data = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    role: request.body.role,
  };

  console.log(data);

  bcrypt
    .hash(request.body.password, 10)
    .then((response) => {
      const hashedPassword = response;

      console.log(hashedPassword);

      // create a new user instance and collect the data
      const user = new User({
        companyName: request.body.name,
        companyEmail: request.body.email,
        password: hashedPassword,
        role: request.body.role,
      });

      // save the new user
      user
        .save()

        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(200).send({
            message: "User Created Successfully",
            result,
          });
        })

        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error hashing password",
        error,
      });
    });
});

// login endpoint
app.post("/login", (request, res) => {
  // check if email exists
  User.findOne({ companyEmail: request.body.email })

    // if email exists
    .then((user) => {
      console.log(user);

      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)
        .then((response) => {
          const passwordCheck = response;

          console.log(user);

          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              companyId: user._id,
              companyName: user.companyName,
              companyEmail: user.companyEmail,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            companyName: user.companyName,
            token,
          });
        })
        // catch error if email does not exist
        .catch((e) => {
          res.status(500).send({
            message: "incorrect username or password",
            e,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

//admin register endpoint
app.post("/admin/register", (request, res) => {
  const data = {
    name: request.body.name,
    email: request.body.email,
    role: request.body.role,
  };

  console.log(data);

  const passcode = generator.generate({
    length: 10,
    numbers: true,
  });

  console.log(passcode);

  bcrypt
    .hash(passcode, 10)
    .then((response) => {
      const hashedPassword = response;

      console.log(hashedPassword);

      // create a new user instance and collect the data
      const user = new User({
        companyName: request.body.name,
        companyEmail: request.body.email,
        password: hashedPassword,
        role: request.body.role,
      });

      // save the new user
      user
        .save()

        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(200).send({
            message: "User Created Successfully",
            password: passcode,
            email: data.email
          });
        })

        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error hashing password",
        error,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth", auth, (request, response) => {
  const user = request.user;
  response.json({
    message: "You are authorized to access me",
    companyEmail: user.companyEmail,
    companyName: user.companyName,
  });
});

app.listen(port, () => {
  console.log(`port connected at http://localhost:${port}`);
});
