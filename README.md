# Web Crawler Code Challenge
A code challenge where the Internet is defined as test data (Internet 1 and Internet 2), and a web crawler as software that requests pages from the Internet, parses the content to extract all the links in the page, and visits the links to crawl those pages.

## Goal

### Code
The first step was to create a solution in JavaScript where the following arrays were outputted for Internet 1 and Internet 2 as follows (order is not important):

Internet 1:
```
Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p4", "http://foo.bar.com/p5", "http://foo.bar.com/p6"]

Skipped: ["http://foo.bar.com/p2", "http://foo.bar.com/p1", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]

Error: ["http://foo.bar.com/p7", "http://foo.bar.com/p3"]
```

Internet 2:
```
Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]

Skipped: ["http://foo.bar.com/p1"]

Error: []
```
The function, called webCrawler, loops through a given parameter and returns an array for success, skipped, and error.

The test data, as well as the requirements for this project, can be viewed in the [prompt.md](prompt.md) file.

### Unit Testing: Jasmine
Once I found a solution that works, the next step was to create a spec folder to run unit tests with [Jasmine](https://jasmine.github.io/).

The webCrawler function is called back in the unit test and is given two parameters. These two parameters grab the data stored for each internet in the lib folder so that the webCrawler function can loop through and crawl!

I compared the arrays that are returned from the webCrawler function with the expected outputs given by GE. In the lib folder, there are two different files which have the test data for Internet 1 and Internet 2 with their expected outputs. The test itself has 6 specs, each checking to see if the arrays from the function equal the expected arrays.

## Conslusion
I was able to successfully complete the code challenge. According to the unit test, I was able to create a function that outputs the expected arrays for success, skipped, and error. View my code [here](web-crawler.js)!

### Test Code
To test my solution, fork and clone this repository and run ```npm install``` in your terminal. Once all dependencies are installed, run ```jasmine``` to run the test. You should see ```3 specs, 0 failures``` outputted in your terminal with the expected outputs. Note that the test only runs through Internet 1. To test for internet 2, refer to the comment in the `spec/web-crawler/WebCrawlerSpec.js` file.

(Note you may need to run ```npm install -g jasmine``` to run command)
