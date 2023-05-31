const http = require("http");
const fs = require("fs");

const requestListner = (req, res) => {
  const body = [];
  /*
  request data would be listen by event listener
  ("on" is used as a addeventListener in node) and fetch that data through
  chunk, chunk is inroduced with node chunk is nothing but the length of buffer
  which help us to load quickly the page/file or big data.
*/
  req.on("data", (chunk) => {
    body.push(chunk);
    // console.log(body);
  });

  /*
   end request would be listen by event listener
  ("on" is used as a addeventListener in node) and once request has been end, call the call back function.
  */

  req.on("end", () => {
    const url = req.url;
    if (url === "/message") {
      const result = Buffer.concat(body).toString();
      // console.log(result); --->(message=avinashpatro(user input))
      var finalresult = result.split("=")[1];
      console.log(finalresult);
      fs.writeFileSync("info.txt", finalresult);
      res.write("file has been generated");
      return res.end();
    }
  });

  /*
  req.on("end", () => {
    const result = Buffer.concat(body).toString();
    // console.log(result); --->(message=avinashpatro(user input))
    var finalresult = result.split("=")[1];
    console.log(finalresult);
  });

  if (url === "/message") {
    fs.writeFileSync("info.txt", finalresult);
    res.write("file has been generated");
    return res.end();
  }
  */

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node training</title></head>");
  res.write("<body>");
  res.write("<form action='/message' method='post'>");
  res.write(
    "<input type='text' placeholder='enter something' name='message'></input>"
  ); // key(name attribute in input field : value(user input into the input field))
  res.write("<button type='submit'>Search</button>");
  res.write("</form>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

const server = http.createServer(requestListner);

server.listen(8000);
