import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { formData } from "./formData";
import { FormsPage } from "../../pages/FormsPage";

test("Verify user can enter new data into the table", async ({ page }) => {
  const homepage = new HomePage(page);
  const formsPage = new FormsPage(page);

  await homepage.goToHomePage();
  await homepage.formsButton.click();
  await formsPage.goToPracticeForm();

  await formsPage.fillForm(
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.mobile,
    formData.dataOfBirth,
    formData.subjects,
    formData.currentAdress,
    formData.state,
    formData.city
  );
});
