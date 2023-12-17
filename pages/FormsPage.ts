import { expect, type Locator, type Page } from "@playwright/test";

export class FormsPage {
  readonly page: Page;
  readonly practiceFromButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userEmail: Locator;
  readonly genderMale: Locator;
  readonly userNumber: Locator;
  readonly dateOfBirthInput: Locator;
  readonly subjectsContainer: Locator;
  readonly hobbiesReading: Locator;
  readonly uploadPicture: Locator;
  readonly currentAddress: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly submitButton: Locator;
  readonly searchBox: Locator;
  readonly editButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.practiceFromButton = page.getByText("Practice Form");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.userEmail = page.locator("#userEmail");
    this.genderMale = page.locator("(//*[text()='Male'])[1]");
    this.userNumber = page.locator("#userNumber");
    this.dateOfBirthInput = page.locator("#dateOfBirthInput");
    this.subjectsContainer = page.locator("#subjectsContainer");
    this.hobbiesReading = page.locator("(//*[text()='Reading'])[1]");
    this.uploadPicture = page.locator("#uploadPicture");
    this.currentAddress = page.locator("#currentAddress");
    this.state = page.locator("(//*[@id='state']/div/div[2]/div)[1]");
    this.city = page.locator("(//*[@id='city']/div/div[2])[1]");
    this.submitButton = page.getByText("Submit");
  }
  async goToPracticeForm() {
    await this.practiceFromButton.click();
  }
  async fillForm(
    firstName: string,
    lastName: string,
    userEmail: string,
    userNumber: string,
    dateOfBirthInput: string,
    subjectsContainer: string,//Playwright Assignment is not in list so i ignore this step
    currentAddress: string,
    state: string,
    city: string
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.userEmail.fill(userEmail);
    await this.genderMale.click();
    await this.userNumber.fill(userNumber);
    await this.dateOfBirthInput.fill(dateOfBirthInput);
    // await this.subjectsContainer.fill(subjectsContainer);
    await this.hobbiesReading.click();
    // Start waiting for file chooser before clicking. Note no await.
    await this.page.setInputFiles('input[type="file"]', './cat.jpg')
    await this.currentAddress.fill(currentAddress);
    // await this.state.click();
    // await this.page.getByText(state).click();
    // await this.city.click();
    // await this.page.getByText(city).click();
    await this.submitButton.click();
  }
}
