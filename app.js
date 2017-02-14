var express=require('express');
var app=express();
app.get('/',function(request,response){
	response.sendFile(__dirname+'/index.html');
});
app.get('/queryproducts',function(request,response){
	response.json([{name:'Nirupama'},{name:'B'}]);
});
app.post('/login',function(req,res){
	res.end("Login succesful");
});
var port=process.env.PORT ||8080
app.listen(port,function(){
	console.log("Server running on port"+port);
});
console.log("a-quote-a-day application started");