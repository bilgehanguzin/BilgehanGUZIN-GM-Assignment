import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { WidgetsPage } from "../../pages/WidgetPage";

test("Verify the tooltip", async ({ page }) => {
  const homepage = new HomePage(page);
  const widgetsPage = new WidgetsPage(page);
  await homepage.goToHomePage();
  await homepage.widgetsButton.click();
  await widgetsPage.toolTipButton.click();
  await widgetsPage.hoverToSeeMe.hover();
  await expect(widgetsPage.hoverAppeared).toBeVisible();
});
