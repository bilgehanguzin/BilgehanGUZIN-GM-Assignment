import { expect, type Locator, type Page } from "@playwright/test";

export class InteractionsPage {
  readonly page: Page;
  readonly droppableButton: Locator;
  readonly dragMeButton: Locator;
  readonly dropHereButton: Locator;
  readonly droppedText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.droppableButton = page.getByText("Droppable");
    this.dragMeButton = page.locator("#draggable");
    this.dropHereButton = page.locator("(//*[@id='droppable'])[1]");
    this.droppedText = page.getByText("Dropped!");
  

  }
  async goToDroppable() {
    await this.droppableButton.click();
  }

  async dragAndDrop() {
    await this.dragMeButton.dragTo(this.dropHereButton);
 
}
}
