import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
let createdUserId = "";
let firstRandom = faker.number.int();
let userNameRandom = `Gerimedica2${firstRandom}`;
test.describe("api tests", () => {
  test("create valid user account", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/Account/v1/User`, {
      data: {
        userName: userNameRandom,
        password: "Gerimedica*1999",
      },
    });
    const body = await response.text();
    const parsedBody = JSON.parse(body);
    const statusCode = response.status();
    console.log(parsedBody);
    const userName = parsedBody.username;
    createdUserId = parsedBody.userID;
    expect(userName).toContain(userNameRandom);
    expect(statusCode).toEqual(201);
  });
  test("try to create existed user account", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/Account/v1/User`, {
      data: {
        userName: "Gerimedica1",
        password: "Gerimedica*1999",
      },
    });
    const statusCode = response.status();
    expect(statusCode).toEqual(406);
  });
  test("add book to existed user account", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/BookStore/v1/Books`, {
      data: {
        userId: "1a5d1c41-5fde-44b0-9b32-5ecc50a122ac",
        collectionOfIsbns: [
          {
            isbn: "9781449337711",
          },
        ],
      },
    });
    const body = await response.text();
    const parsedBody = JSON.parse(body);
    const statusCode = response.status();
    console.log(parsedBody);
    const isbn = parsedBody.books[0].isbn;
    expect(isbn).toContain("9781449337711");
    expect(statusCode).toEqual(201);
  });
  test("add invalid book to existed user account", async ({
    request,
    baseURL,
  }) => {
    const response = await request.post(`${baseURL}/BookStore/v1/Books`, {
      data: {
        userId: createdUserId,
        collectionOfIsbns: [
          {
            isbn: "invalid",
          },
        ],
      },
    });
    const body = await response.text();
    const parsedBody = JSON.parse(body);
    const statusCode = response.status();
    console.log(parsedBody);
    expect(parsedBody.message).toHaveText(
      "ISBN supplied is not available in Books Collection!"
    );
    expect(statusCode).toEqual(400);
  });
  test("delete user books", async ({ request, baseURL }) => {
    const response = await request.delete(
      `${baseURL}/BookStore/v1/Books?UserId=1a5d1c41-5fde-44b0-9b32-5ecc50a122ac`
    );
    const statusCode = response.status();
    expect(statusCode).toEqual(204);
  });
});
