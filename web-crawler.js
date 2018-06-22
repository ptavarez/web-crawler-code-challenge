let succeed = []
let skip = []
let error = []

const webCrawler = function (address, internet) {
  
  for (let i = 0; i < internet.length; i++) {
  
    if (address === internet[i].address) {
      // If the address originally invoked is the current address on the internet,
      // add it to the list of successes.
      succeed.push(address)
      
      let links = internet[i].links
      
      // Given the list of links on that address,
      // check them.
      for (let j = 0; j < links.length; j++) {
        // If this link isn't the current address we're iterating, and it's not
        // already on the list of successes...
        if (links[j] !== internet[i].address && succeed.indexOf(links[j]) === -1) {
          // Check  to see if any address matches it.
          // If not, add it to the list of errors.
          if (internet.find((current) => {
            return current.address === links[j]
          }) === undefined && error.indexOf(links[j]) === -1) {
            error.push(links[j])
            // Otherwise, it must exist on the internet but not be listed on the succeses,
            // so call web crawler on it.
          } else {
            webCrawler(links[j], internet)
          }
          // Check to see if it's already on the list of succeses.
          // If so, add it to the list of skips.
        } else if (succeed.indexOf(links[j]) !== -1 && skip.indexOf(links[j]) === -1) {
          skip.push(links[j])
        }
      }
    }
  }
  return [succeed, skip, error]
}

module.exports = {
  webCrawler,
  succeed,
  skip,
  error
}
