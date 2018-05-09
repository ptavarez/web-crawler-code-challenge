Array.prototype.diff = function(a) {
  return this.filter(function(i) {return a.indexOf(i) < 0})
}

const unique = function (value, index, self) {
      return self.indexOf(value) === index;
}

const webCrawler = function (internet) {
  
  let addressArr = []
  let linksArr = []
  let skippedDup = []
  
  for (let i = 0; i < internet.length; i++) {
    let address = internet[i].address
    let links = internet[i].links
    
    addressArr.push(address)
    
    for (let j = 0; j < links.length; j++) {
      linksArr.push(links[j])
    }
  
    success = addressArr.diff(addressArr.diff(linksArr))
    error = (linksArr.diff(success))
    
    for (let k = 0; k < links.length; k++) {
      if (success.indexOf(links[k]) > -1) {
        skippedDup.push(links[k])
      }
    }
    
    skipped = skippedDup.filter(unique)
  }
  return [success, skipped, error]
}

module.exports = webCrawler
