import { expect, type Locator, type Page } from "@playwright/test";

export class WidgetsPage {
  readonly page: Page;
  readonly progressBarButton: Locator;
  readonly startButton: Locator;
  readonly stopButton: Locator;
  readonly resetButton: Locator;
  readonly progressBar: Locator;
  readonly toolTipButton: Locator;
  readonly hoverToSeeMe: Locator;
  readonly hoverAppeared: Locator;

  constructor(page: Page) {
    this.page = page;
    this.progressBarButton = page.getByText("Progress Bar");
    this.startButton = page.getByText("Start");
    this.stopButton = page.getByText("Stop");
    this.resetButton = page.getByText("Reset");
    this.progressBar = page.locator("#progressBar");
    this.toolTipButton = page.getByText("Tool Tips");
    this.hoverToSeeMe = page.getByText("Hover me to see");
    this.hoverAppeared = page.getByText("You hovered over the Button");

  }
  async goToProgressBar() {
    await this.progressBarButton.click();
  }

  async startProgress() {
    await this.startButton.click();
  }
  async checkProgressBar() {
    await this.stopButton.isVisible();
    await this.resetButton.isVisible();
    await this.page.waitForSelector("//*[text()='100%']");
    await expect(this.progressBar).toHaveText("100%");
  }
}
