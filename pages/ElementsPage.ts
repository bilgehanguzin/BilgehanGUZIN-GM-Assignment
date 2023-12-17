import { expect, type Locator, type Page } from "@playwright/test";

export class ElementsPage {
  readonly page: Page;
  readonly webTablesButton: Locator;
  readonly addButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userEmail: Locator;
  readonly age: Locator;
  readonly salary: Locator;
  readonly department: Locator;
  readonly submitButton: Locator;
  readonly searchBox: Locator;
  readonly editButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.webTablesButton = page.getByText("Web Tables");
    this.addButton = page.getByRole("button", { name: "Add" });
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.userEmail = page.locator("#userEmail");
    this.age = page.locator("#age");
    this.salary = page.locator("#salary");
    this.department = page.locator("#department");
    this.submitButton = page.locator("#submit");
    this.searchBox = page.locator("#searchBox");
    this.editButton = page.locator("#edit-record-2");
  }
  async goToWebTables() {
    await this.webTablesButton.click();
  }

  async addEmployee(
    firstName: string,
    lastName: string,
    userEmail: string,
    age: string,
    salary: string,
    department: string
  ) {
    await this.addButton.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.userEmail.fill(userEmail);
    await this.age.fill(age);
    await this.salary.fill(salary);
    await this.department.fill(department);
    await this.submitButton.click();
  }
  async filterAddedEmployeeByEmail(userEmail: string) {
    await this.searchBox.fill(userEmail);
  }

  async checkAddedEmployee(
    firstName: string,
    lastName: string,
    userEmail: string,
    age: string,
    salary: string
  ) {
    await expect(this.page.getByText(firstName)).toBeVisible();
    await expect(this.page.getByText(lastName)).toBeVisible();
    await expect(this.page.getByText(userEmail)).toBeVisible();
    await expect(this.page.getByText(age)).toBeVisible();
    await expect(this.page.getByText(salary)).toBeVisible();
    await expect(this.page.locator("//div[text()='QA']")).toBeVisible(); // did not check with getByText because of 2 QA appears - also DEMOQA
  }
  async editEmployee(firstName: string, lastName: string) {
    await this.editButton.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.submitButton.click();
  }
  async checkEditedEmployee(firstName: string, lastName: string){
    await expect(this.page.getByText(firstName)).toBeVisible();
    await expect(this.page.getByText(lastName)).toBeVisible();
  }
}
