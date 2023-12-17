import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { InteractionsPage } from "../../pages/InteractionsPage";
test("Verify user can drag and drop", async ({ page }) => {
  const homepage = new HomePage(page);
  const interactionsPage = new InteractionsPage(page);
  await homepage.goToHomePage();
  await homepage.interactionsButton.click();
  await interactionsPage.goToDroppable();
  await interactionsPage.dragAndDrop();
  await expect(interactionsPage.droppedText).toBeVisible();
});
