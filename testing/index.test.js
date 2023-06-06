const request = require("supertest");

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

        expect(response.body).toBe({"object"});
    });
});