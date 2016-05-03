var request = require("supertest"),
    cfenv = require("cfenv");

var appName = process.env.IDS_PROJECT_NAME;
var url = "http://" + appName + ".stage1.mybluemix.net";

console.log("Request url: " + url);

console.log(process.env);

console.log(cfenv.getAppEnv());

request = request(url);

describe("GET /", function () {
    it("respond with html", function (done) {
        request
            .get("/")
            .expect("Content-Type", /html/)
            .expect(200, done);
    });
});
