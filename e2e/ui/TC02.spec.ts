import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test("Verify broken image", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goToHomePage();
  await homepage.elementsButton.click();
  await homepage.brokenLinksButton.click();
  const images = page.locator("img");
  console.log(await images.count());
  const allImages = await images.all();
  for await (const img of allImages) {
    const imgSrc = await img.getAttribute("src");
    expect.soft(imgSrc?.length).toBeGreaterThan(1);
    //@ts-ignore
    if (imgSrc?.length > 1) {
      const res = await page.request.get("https://demoqa.com/images/" + imgSrc);
      expect.soft(res.status()).toBe(200);
    }
  }
});
