import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ElementsPage } from "../../pages/ElementsPage";
import { employee } from "./employeeData";
import { updatedEmployee } from "./updateEmployeeData"

test("Verify user can enter new data into the table", async ({ page }) => {
  const homepage = new HomePage(page);
  const elementsPage = new ElementsPage(page);

  await homepage.goToHomePage();
  await homepage.elementsButton.click();
  await elementsPage.goToWebTables();

  await elementsPage.addEmployee(
    employee.firstName,
    employee.lastName,
    employee.email,
    employee.age,
    employee.salary,
    employee.department
  );
  await elementsPage.filterAddedEmployeeByEmail(employee.email);
  await elementsPage.checkAddedEmployee(
    employee.firstName,
    employee.lastName,
    employee.email,
    employee.age,
    employee.salary
  );
});

test("Verify user can edit the row in a table", async ({ page }) => {
  const homepage = new HomePage(page);
  const elementsPage = new ElementsPage(page);

  await homepage.goToHomePage();
  await homepage.elementsButton.click();
  await elementsPage.goToWebTables();

  await elementsPage.editEmployee(
    updatedEmployee.firstName,
    updatedEmployee.lastName
  );
  await elementsPage.checkEditedEmployee(
    updatedEmployee.firstName,
    updatedEmployee.lastName
  );
});
