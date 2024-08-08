// Script start (npm start  OR node index.js)
const http = require("http")
const fs = require("fs");
const { url } = require("inspector");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Req Received \n `
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/": res.end("Welcome To Home Page");
                break;
            case "/about-us": res.end("Read Our Latest Blogs At About Us ");
                break;
            case "/contact-us": res.end("We Are Available 24/7 Toll Free Number");
                break;
            case "/add-to-cart": res.end("Stay Tuned For Latest Discounts And Coupons ");
                break;
            default: res.end("404 Page Not Found")
                break;    
        }
        })
        
    })
    console.log("New Req Rec");
    // res.end("Welcome From Rahman");
    // console.log(req.headers)
;
myServer.listen("8000", console.log("Server Started"))
