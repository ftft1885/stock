action('index',function(){
	console.log("stock/index");
});

action('about#index',function(){
	console.log("/stock/about");
	send("/stock/about");
});
