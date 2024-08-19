// Script start (npm start  OR node index.js)
const http = require("http");
const fs = require("fs");
const url = require("url");
// const { url } = require("inspector");
const { Url } = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  const log = `${Date.now()} : ${req.url} : ${req.method} New User Req Something \n `;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Welcome To Home Page");
        break;
      case "/about-us":
        const username = myUrl.query.myname;
        res.end(`Hi,${username}`);
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here Are Your Results \n" + search);
        break;
      case "/contact-us":
        res.end("We Are Available 24/7 Toll Free Number");
        break;
      case "/add-to-cart":
        res.end("Stay Tuned For Latest Discounts And Coupons ");
        break;
      default:
        res.end("404 Page Not Found");
            break;
        case "/signup":
            if (req.method === "GET") res.end("This is Your Signup form")
            else if (req.method === "POST") {
                res.end("Sucessfully Created")
            }
            
    }
  });
});
console.log("New User Req Something");
// res.end("Welcome From Rahman");
// console.log(req.headers)
myServer.listen("8000", console.log("Server Started"));
