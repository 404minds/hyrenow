console.log("Mainjs is loading");

require(
    [
        "bower_components/jquery/dist/jquery.min.js",
        "./node_modules/requirejs-text/text!./app/templates/login.html"
    ],
    function( _jquery_,loginHTML ) {
        console.log( "jQuery", $.fn.jquery, "loaded!" );
        // console.log(loginHTML);
        $('head').append(loginHTML);
        $("body").append($("#login_base").html());
    }
 

);