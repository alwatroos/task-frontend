/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Browser, executablePath, launch, Page } from "puppeteer-core";
jest.setTimeout(15000);

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("End To End Tests", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await launch({
      headless: false,
      executablePath: executablePath("chrome"),
    });
    page = await browser.newPage();
    await page.goto("http://localhost:5000");
  });

  it("Contains Splash Screen With Logo", async () => {
    const splashLabel = await page.waitForSelector(".AppSplash__label");
    expect(splashLabel).not.toBeNull();
  });

  it("Balance Card Rendered Correctly", async () => {
    const balanceCard = await page.waitForSelector("#balanceCard");
    const text = await page.$eval("#balanceLabel", (e) => e.textContent);
    expect(balanceCard).not.toBeNull();
    expect(text).toContain("Your balance:");
    expect(text).toContain("200000");
  });

  it("TransactionForm Rendered and Works Correctly", async () => {
    const transactionForm = await page.waitForSelector("#TransactionForm");
    const transactionFieldAccount = await page.waitForSelector(
      "#TransactionForm_account",
    );
    const transactionFieldBeneficiary = await page.waitForSelector(
      "#TransactionForm_beneficiary",
    );
    const transactionFieldAddress = await page.waitForSelector(
      "#TransactionForm_address",
    );
    const transactionFieldAmount = await page.waitForSelector(
      "#TransactionForm_amount",
    );
    const transactionFieldDescription = await page.waitForSelector(
      "#TransactionForm_description",
    );
    const sendMoneyButton = await page.waitForSelector("#sendMoneyButton");

    expect(transactionForm).not.toBeNull();
    expect(transactionFieldAccount).not.toBeNull();
    expect(transactionFieldBeneficiary).not.toBeNull();
    expect(transactionFieldAddress).not.toBeNull();
    expect(transactionFieldAmount).not.toBeNull();
    expect(transactionFieldDescription).not.toBeNull();
    expect(sendMoneyButton).not.toBeNull();

    await transactionFieldAccount?.focus();
    await page.keyboard.type("12345678909876543212345678");

    await transactionFieldBeneficiary?.focus();
    await page.keyboard.type("Test User");

    await transactionFieldAddress?.focus();
    await page.keyboard.type("Some Address 1");

    await transactionFieldAmount?.focus();
    await page.keyboard.type("15000");

    await transactionFieldDescription?.focus();
    await page.keyboard.type("Some Test Description");

    await sendMoneyButton?.click();

    await wait(1000);

    const text = await page.$eval("#balanceLabel", (e) => e.textContent);
    expect(text).toContain("Your balance:");
    expect(text).toContain("185000");
  });

  it("FiltersForm Rendered and Works Correctly", async () => {
    const filtersForm = await page.waitForSelector("#FiltersForm");

    const filtersFieldBeneficiary = await page.waitForSelector(
      "#TransactionForm_beneficiary",
    );
    const filtersFieldDescription = await page.waitForSelector(
      "#FiltersForm_description",
    );
    const searchButton = await page.waitForSelector("#searchButton");

    expect(filtersForm).not.toBeNull();
    expect(filtersFieldBeneficiary).not.toBeNull();
    expect(filtersFieldDescription).not.toBeNull();
    expect(searchButton).not.toBeNull();

    await filtersFieldBeneficiary?.focus();
    await page.keyboard.type("Test User");

    await filtersFieldDescription?.focus();
    await page.keyboard.type("Some Test Description");

    await searchButton?.click();

    await wait(1000);
    const [tableCell] = await page.$x(
      '//*[@id="root"]/div/div[3]/div/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[2]/td[1]',
    );
    const text = await page.evaluate(
      (e) => e?.textContent,
      tableCell.asElement(),
    );
    expect(text).toContain("Test User");
  });

  afterAll(() => browser?.close());
});
