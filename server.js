var http=require("http");
http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/plain"});
   res.write("Node Demo ,Ok!")
   res.end();
}).listen(18080);

console.log("start here  port 18080");
