describe('Web Crawler', function () {
  
  const internetOne = require('../../lib/internet/internetOne')
  const internetTwo = require('../../lib/internet/internetTwo')
  const webCrawler = require('../../web-crawler.js')
  
  it('Success Output for Internet 1',
  function () {
    expect(webCrawler(internetOne.pages)[0]).toEqual(internetOne.succeed)
  })
  
  it('Skipped Output for Internet 1',
  function () {
    expect(webCrawler(internetOne.pages)[1]).toEqual(internetOne.skip)
  })
  
  it('Error Output for Internet 1',
  function () {
    expect(webCrawler(internetOne.pages)[2]).toEqual(internetOne.fail)
  })
  
  it('Success Output for Internet 2',
  function () {
    expect(webCrawler(internetTwo.pages)[0]).toEqual(internetTwo.succeed)
  })
  
  it('Skipped Output for Internet 2',
  function () {
    expect(webCrawler(internetTwo.pages)[1]).toEqual(internetTwo.skip)
  })
  
  it('Error Output for Internet 2',
  function () {
    expect(webCrawler(internetTwo.pages)[2]).toEqual(internetTwo.fail)
  })
})
