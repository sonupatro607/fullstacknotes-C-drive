// steps to create a server
/* 
1- require http
2- createServer
3- when user send some request to our server before that there we should have server's listener with a particular port number, At that port our user request will have been get hit.

how to start the server 
1- first run the file 
2- then hit that server at their port number through the browser be like - localhost:8000(you can see the output on your terminal)
*/
const http = require("http"); // http is require to create a server
const fs = require("fs"); // fs is file system it is require to create a file, write something in file and read the file.

// function request_handler() {
//   console.log("request_handled");
//   process.exit(); // this statement is use to exit the server.
// }
// function request_handler(request, response) {
//   console.lopg(request);
//   console.lopg(request.url);
//   console.lopg(request.header);
// }
function request_handler(request, response) {
  const url = request.url; // from this we get user request url --> (localhost:8000/url)
  fs.writeFileSync("info.txt", "the request has been recieved"); // fs.writeFileSync("filename", "message which you want to write into the file")
  return prepareResponse(response, url);
}

function prepareResponse(response, url) {
  if (url === "/login") {
    response.setHeader("content-type", "text/html");
    response.write("<html>");
    response.write('<head><title>Node Discussion"</title></head>');
    response.write("<body><h1>user get their login response</h1></body>");
    response.write("</html>");
    return response.end();
  }
  if (url === "/logout") {
    response.setHeader("content-type", "text/html");
    response.write("<html>");
    response.write('<head><title>Node Discussion"</title></head>');
    response.write("<body><h1>user get their logout response</h1></body>");
    response.write("</html>");
    return response.end();
  }
  response.setHeader("content-type", "text/html");
  response.write("<html>");
  response.write('<head><title>Node Discussion"</title></head>');
  response.write("<body><h1>user get their default response</h1></body>");
  response.write("</html>");
  return response.end();
}
const server = http.createServer(request_handler);

server.listen(8000);

/*
Note: 
Node--> it runs at REPL Principle
REPL --> Read the request, evalualte the request, print the request, listen/loop the request

javascript--> it is a single threaded language.
event loop--> it allows the javascript to run asyncronised code / it allows the javascript to run on multi threaded.

****what is single or multiple thread concept?*****
suppose karo humane javascript se ek application  banaya jo jismai hum song, 
video, news ka feature javascript single threaded hone ke karan hum iss
application mai at a same time kisi doo chijo ko run nhi kr skte jaise 
agar main chahta hu ki song or news dono suionana toh wo possible he nhi
ha isliye event loop laaya jo javascript ko bola agat ap at a same time
do yeh more then 2 chijo ko run krana chahte ho toh event loop ka help
le lo fir ap do yeh usse jada chije ko at a same time chala skte ho.
*/
