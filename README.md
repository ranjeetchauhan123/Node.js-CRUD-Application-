# Node.js CRUD Application (Without Express)

This project is a **Node.js backend practice project** where different core concepts of Node.js are implemented such as **modules, routing, file system operations, terminal input handling, and form data processing**.

The application demonstrates how to build backend functionality **using only Node.js core modules** without any framework.

---

## 🚀 Features

* CRUD operations using Node.js
* Terminal based input handling
* Modular code structure
* Basic routing implementation
* HTML form data handling
* Form data saved into a text file
* Dynamic file creation using user name
* File system operations using `fs` module

---

## 🛠 Technologies Used

* Node.js
* Core Modules

  * `http`
  * `fs`
  * `path`
  * `querystring`

---


## ⚙️ How It Works

### 1. Terminal CRUD Operations

The application can take **input from terminal** to perform CRUD operations.

Example:

```
node app.js create
node app.js read
node app.js update
node app.js delete
```

---

### 2. Form Data Handling

The HTML form sends user data to the Node.js server.

Example form submission:

```
/submit?name=Ranjeet
```

The server:

1. Receives the request
2. Extracts form data
3. Creates a new file using the user's name

Example file created:

```
Ranjeet.txt
```

Inside the file:

```
Data Submitted Successfully
```

---

## 📌 Learning Concepts

This project helped in understanding:

* Node.js HTTP server
* Request and response handling
* Data streaming and chunks
* Query string parsing
* File system operations
* Modular coding structure

---

## 🎯 Purpose of This Project

The main goal of this project is to **practice Node.js core concepts and understand how backend works without using frameworks like Express.js**.

---

## 👨‍💻 Author

**Ranjeet Chauhan**

Aspiring **Full Stack MERN Developer**
Focused on learning **Backend Development and System Design**.

