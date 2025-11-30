// utils/CommonUtils.js
class CommonUtils {
  static async scrollToElement(page, element, block = 'center') {
    await element.scrollIntoViewIfNeeded(); // Playwright-native scroll

    // Pass `block` into browser context explicitly
    await element.evaluate((el, b) => {
      el.scrollIntoView({ behavior: 'auto', block: b });
    }, block);
  }
}

export default CommonUtils;
