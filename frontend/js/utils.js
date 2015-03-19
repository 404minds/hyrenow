require(
    [
        "../bower_components/jquery/dst/jquery.min.js",
    ],


    function( _jquery_) {

		var utilsPrototype = {};

		utilsPrototype.ajax = function(obj) {
			data= obj.request_data;
			url=obj.url;
			if(obj.type){
				type = obj.type;
			}
			else {
				type = "GET";
			}
			$.ajax({
				url: url,
				type: type,
				data: JSON.stringify(data, null, '\t'),
				contentType: 'application/json;charset=UTF-8',
				success: function(msg){
					console.log(msg);
				}
			})			
		}
		
		var Utils = function(){
			function F() {};
			F.prototype = utilsPrototype;
			return new F;
		}

		utils = new Utils();

}

);

