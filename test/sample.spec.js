describe('sample UI test', () => {
    let page;
  
    before (async () => {
      page = await browser.newPage();
      await page.goto('http://localhost:8080/');
    });
  
    after (async () => {
      await page.close();
    })
  
    it('should have the correct page title', async () => {
      expect(await page.title()).to.eql('Puppeteer Mocha');
    });
  
    it('should have a heading', async () => {
      const HEADING_SELECTOR = 'h1';
      let heading;
      heading = await getContent(page, HEADING_SELECTOR)
      expect(heading).to.eql('Page Title');
    });
  
    it('should have a single content section', async () => {
      const BODY_SELECTOR = '.main-content';
      await page.waitFor(BODY_SELECTOR);
      expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1);
    });

    it('should display hello message', async () => {
        await fill_in(page, "input[name='name']", "Thomas")
        await click(page, "input[value='Click me']")
        let content = await getContent(page, "div[id='output']")
        expect(content).to.eql('Hello Thomas');
      });
  });

