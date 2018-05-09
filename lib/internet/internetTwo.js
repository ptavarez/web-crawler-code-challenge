const pages = [
  {
    "address":"http://foo.bar.com/p1",
    "links": ["http://foo.bar.com/p2"]
  },
  {
    "address":"http://foo.bar.com/p2",
    "links": ["http://foo.bar.com/p3"]
  },
  {
    "address":"http://foo.bar.com/p3",
    "links": ["http://foo.bar.com/p4"]
  },
  {
    "address":"http://foo.bar.com/p4",
    "links": ["http://foo.bar.com/p5"]
  },
  {
    "address":"http://foo.bar.com/p5",
    "links": ["http://foo.bar.com/p1"]
  },
  {
    "address":"http://foo.bar.com/p6",
    "links": ["http://foo.bar.com/p1"]
  }
]

const succeed = [
  "http://foo.bar.com/p1",
  "http://foo.bar.com/p2",
  "http://foo.bar.com/p3",
  "http://foo.bar.com/p4",
  "http://foo.bar.com/p5"
]

const skip = [
  "http://foo.bar.com/p1"
]

const fail = []


module.exports = {
  pages,
  succeed,
  skip,
  fail
}
