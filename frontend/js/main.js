console.log("Mainjs is loading");

require(
    [
        "../bower_components/jquery/dist/jquery.min.js",
        "../bower_components/foundation/js/foundation.js",
        "../node_modules/requirejs-text/text!../app/templates/login.html",
        "utils",
    ],
    function( _jquery_, _foundation_, loginHTML,_utils_ ) {
        $('head').append(loginHTML);
        login = true;
        if(login){
            $("body").append($("#login_base").html());
            
            $("#sign-up-manual").on("submit", function(e){
                e.stopPropagation();
                e.preventDefault();
                
                name = $("#sign-up-name").val();
                email = $("#sign-up-email").val();
                password = $("#sign-up-password").val();
                utils.ajax({url:"/signup",
                    request_data:{name:name,email:email,password:password},
                    type:"POST"
                });
            });


        }
        else {
            window.location = "/index.html";
        }
    }
 

);