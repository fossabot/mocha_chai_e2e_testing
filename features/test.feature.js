const { expect } = require('chai');
const BrowserHelpers = require('../dist/pupeteerHelpers.js')
const browser = new BrowserHelpers()

context('Your Description of the tes scenario', () => {
  // Initialize a browser and visit the server's root path
  before( async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async ()=>{
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after( () => {
    browser.close();
  });

  // Exapmple test
  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('Puppeteer Mocha');
  });
});