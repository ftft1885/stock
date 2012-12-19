load('application');

action('index',function(){
	this.titile = "about";
	console.log("about action");
	send("success");
	//render({title:"about"});
});
action('show',function(){
	this.title ='add';
	console.log('/about/add');
	render({title:"/about/add"});
});
action('test',function(){
	console.log(".about/test");
	render({title:"/about/test"});
});
