const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("should return HTTP 200 and the correct JSON message", async () => {
    const response = await request(app).get("/");

    // Test 1: Check HTTP Status Code
    expect(response.statusCode).toBe(200);

    // Test 2: Check returned JSON payload
    expect(response.body).toEqual({
      message: "Hello! This API is running inside a Docker container Edited.",
    });
  });
});