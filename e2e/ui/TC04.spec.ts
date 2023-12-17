import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { WidgetsPage } from "../../pages/WidgetPage";

test("Verify the progress bar", async ({ page }) => {
  const homepage = new HomePage(page);
  const widgetsPage = new WidgetsPage(page);

  await homepage.goToHomePage();
  await homepage.interactionsButton.click();
  await widgetsPage.goToProgressBar();
  await widgetsPage.startProgress();
  await widgetsPage.checkProgressBar();
});
