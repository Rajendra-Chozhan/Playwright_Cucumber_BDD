// tests/pages/loginpage.js
import CommonUtils from '../../utils/CommonUtils.js';

export class HomePage {
  constructor(page) {
    this.page = page;

    // Locators must be created from this.page (NOT from raw "page")
    this.drag_element = this.page.locator('//div[contains(@id,"draggable")]');
    this.drop_element = this.page.locator('//div[contains(@id,"droppable")]');
    this.dropped_text = this.page.locator('//*[@id="droppable"]/p[contains(text(),"Dropped!")]');
    this.draganddrop_text = this.page.locator('//h2[contains(text(),"Drag and Drop")]');
  }

  async drag_drop() {
    
    const source = this.drag_element;      // already a Locator
    const target = this.drop_element;      // already a Locator
    await source.dragTo(target);
    await this.dropped_text.waitFor({ state: 'visible' });
  }

  async scroll_to_drag_drop_text() {
    await CommonUtils.scrollToElement(this.page, this.draganddrop_text);
  }
}
