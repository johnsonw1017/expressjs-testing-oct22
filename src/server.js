const express = require('express');

const app = express();

// Enable requests to have JSON data on their body (e.g request.body)
app.use(express.json());


//catch errors from async and promises
void process.on('unhandledRejection', (reason, p) => {
    console.log(`Things got pretty major here! Big error: \n` + JSON.stringify(p));
    console.log(`That error happened because of :\n` + reason)
})

app.use((request, response, next) =>{

    if (request.errors) {
        next();
    } else {
        request.errors = [];
        next();
    }
})

app.get("/", (request, response) => {

    response.json({
        message:"Hello world"
    })
});

const UserRouter = require("./controllers/UserController");
app.use("/users", UserRouter);

module.exports = {
    app
}