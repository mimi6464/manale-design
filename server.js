var express = require("express");
var app = express();
var router = express.Router(),
	path = require('path'),
	pathdir = __dirname + '/views/';
console.log(pathdir);

app.set('views', path.join(__dirname, 'views'));
app.use('views', express.static(path.join(__dirname, 'public')));



app.use(express.static('public'));
app.use(express.static('files'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});////////////////////




app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get("/",function(req,res){
  res.sendFile(path.join(pathdir + "index.html"));
});
// POST method route
app.post('/', function (req, res) {
  res.send(path.join(pathdir + "index.html"));
});

app.use('/', function(req,res){
  res.send(path.join(pathdir + "imagies"));
});//is not working ????????////////////////////



// app.use(express.static(path.join(__dirname, 'images')));
  
  


// app.get("/about",function(req,res){
//   res.sendFile(path.join(pathdir +  "history.html"));
// });

app.get("/contact",function(req,res){
  res.sendFile(path.join(pathdir +  "contact.html"));
});

// app.get("/earrings", function(req, res) {
//   res.sendFile(path.join(pathdir + "earringImage.html"))
// }

//<img src=""/>

//app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path.join(pathdir +  "404.html"));
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});