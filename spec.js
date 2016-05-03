var request = require("supertest");

var appName = process.env.IDS_PROJECT_NAME;
var url = "http://" + appName + ".stage1.mybluemix.net";

console.log("Request url: " + url);

request = request(url);

describe("GET /", function () {
    it("respond with html", function (done) {
        request
            .get("/")
            .expect("Content-Type", /html/)
            .expect(200, done);
    });
});
