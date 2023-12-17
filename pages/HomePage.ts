import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  readonly elementsButton: Locator;
  readonly webTablesButton: Locator;
  readonly addButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userEmail: Locator;
  readonly age: Locator;
  readonly salary: Locator;
  readonly department: Locator;
  readonly submitButton: Locator;
  readonly brokenLinksButton: Locator;
  readonly formsButton: Locator;
  readonly widgetsButton: Locator;
  readonly interactionsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementsButton = page.getByText("Elements");
    this.brokenLinksButton = page.getByText("Broken Links - Images");
    this.formsButton = page.getByText("Forms");
    this.widgetsButton = page.getByText("Widgets");
    this.interactionsButton = page.getByText("Interactions");
  }

  async goToHomePage() {
    await this.page.goto("https://demoqa.com/");
  }
}
