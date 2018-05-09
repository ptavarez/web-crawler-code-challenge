describe('Web Crawler', function () {
  
  const internetOne = require('../../lib/internet/internetOne')
  const internetTwo = require('../../lib/internet/internetTwo')
  const webCrawler = require('../../web-crawler.js')
  
  it('Should output correct links for success, skipped, and error.',
  function () {
    webCrawler(internetOne)
  })
})
