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

    this.tabs_text = this.page.locator('//h2[contains(text(),"Tabs")]');
    this.search_section = this.page.locator('//div[contains(@class,"wikipedia-searchtable")]');
    
    this.search_field = this.page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]');

    this.popup_element = this.page.locator('//*[@id="PopUp"]');

     this.searchResult = (kw) => this.page.locator(`text=${kw}`);

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


  
   async verifyPopupElement() {    
      await CommonUtils.scrollToElement(this.page, this.popup_element);
       await this.popup_element.waitFor({ state: 'visible' });  
    
  }


   async click_popup_element() {    
      await this.popup_element.click();
    
  }

   async verify_Tabs() {    
    await this.tabs_text.waitFor({ state: 'visible' });
    await this.search_section.waitFor({ state: 'visible' });    
    
  }

  async enter_search_term(searchterm) {
    await this.search_field.fill(searchterm);
    await this.search_field.press('Enter');
  }

   async clickSearchResult(keyword) {
    const item = this.page.locator(`text=${keyword}`);
    await item.waitFor();
    await item.click();     // this click triggers new tab
  }
}
