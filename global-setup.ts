import { test } from "@playwright/test";
import fs from "fs";
test("generate token", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/Account/v1/GenerateToken`, {
    data: {
      userName: "Gerimedica1",
      password: "Gerimedica*1999",
    },
  });
  const body = await response.text();
  const parsedBody = JSON.parse(body);
  console.log(parsedBody);
  const token = parsedBody.token;
  fs.writeFileSync("./auth.json", token);
});
