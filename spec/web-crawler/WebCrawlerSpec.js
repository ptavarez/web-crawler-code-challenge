describe('Web Crawler for internet one', function () {
  
  // To test between Internet 1 and 2, change the required route for the
  // internet variable to end with the desired crawl...
   
  // Internet 1 = '/internetOne'
  // Internet 2 = '/internetTwo'
  const internet = require('../../lib/internet/internetOne')
  
  const crawl = require('../../web-crawler.js')
  
  const startPage = internet.pages[0].address
  
  crawl.webCrawler(startPage, internet.pages)
  
  it('Success Output for the Internet',
  function () {
    expect(crawl.succeed).toEqual(internet.succeed)
    console.log('Succeed =', crawl.succeed)
  })
  
  it('Skipped Output for the Internet',
  function () {
    expect(crawl.skip).toEqual(internet.skip)
    console.log('Skip =', crawl.skip)
  })
  
  it('Error Output for the Internet',
  function () {
    expect(crawl.error).toEqual(internet.fail)
    console.log('Error =', crawl.error)
  })
})
