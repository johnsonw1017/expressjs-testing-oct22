const request = require("supertest");

const {app} = require("../src/server");

// test suite
describe("Has a homepage...", () => {
    
    // test 1
    it("...it responds with status 200.", async () => {

        //    response = await request(serverInstance).HTTPmethod("someRoute")
        const response = await request(app).get("/");

        expect(response.statusCode).toEqual(200);
    });

    //test 2
    it("...it responds with a JSON object.", async () => {

        //    response = await request(serverInstance).HTTPmethod("someRoute")
        const response = await request(app).get("/");

        const responseBodyDataType = typeof(response.body);
        console.log(responseBodyDataType);

        expect(responseBodyDataType).toBe("object");
    });
});

//user signup test
describe("User...", () => {

    describe("...can sign up...", () => {
        it("...with a valid email address", async () => {
            //expect an object on the response with user data
            const response = await request(app)
            .post("/users/signup")
            .send({
                email:"user@email.com",
                password: "blahblah"
            })

            expect(response.body).toEqual({message:"Sign up success!"});
        });

    });

    describe("...can NOT sign up...", () => {
        it("...with an invalid email address", async () => {
            //expect one error on the response

            const response = await request(app)
            .post("/users/signup")
            .send({
                email:"blahblah",
                password: "blahblah"
            })

            expect(response.body.errors).toEqual(["Email is not valid"]);
            expect(response.statusCode).toEqual(400);
        });

        it("...with an invalid email address",  async () => {
            //expect one error on the response
        });

        it("...with an invalid email address", async () => {
            //expect two error on the response
        });
    });



})