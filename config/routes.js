exports.routes = function (map) {
    //map.resources('posts');
	//map.resources('about');
	map.namespace('stock',function(stock){
		stock.get("/mystock","index#mystock");
		stock.get("/about","index#about");
		stock.get("/search","index#search");
		stock.get("/query","index#query");
		//stock.resources('about');
	});
	map.namespace('nuva',function(nuva){
		//nuva.get("/","nuva#index");
		nuva.get("/about","nuva#about");
		nuva.get("/pool","nuva#pool");
		nuva.post("/addpool","nuva#addpool");
	});
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
	map.get('stock','stock/index');
	map.get('nuva','nuva/nuva#index');
	//map.get('new','test#new');
	//map.get('add','test#add');
	//map.get('/','home#index');
};
