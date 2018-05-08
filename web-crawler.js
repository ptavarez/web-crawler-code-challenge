const pages = [
  {
    "address":"http://foo.bar.com/p1",
    "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
  },
  {
    "address":"http://foo.bar.com/p2",
    "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
  },
  {
    "address":"http://foo.bar.com/p4",
    "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
  },
  {
    "address":"http://foo.bar.com/p5",
    "links": []
  },
  {
    "address":"http://foo.bar.com/p6",
    "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
  }
]

let success = []
let skipped = []
let error = []

const webCrawler = function () {
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0})
  }
  
  function unique(value, index, self) {
      return self.indexOf(value) === index;
  }
  
  let addressArr = []
  let linksArr = []
  let skippedDup = []
  
  for (let i = 0; i < pages.length; i++) {
    let address = pages[i].address
    let links = pages[i].links
    
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
  
}
