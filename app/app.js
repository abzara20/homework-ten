import * as MODEL from "../model/model.js";

function init(){
    $(".logo-black").css("display","none");

    $("nav a").click(function(e){
        let navID = this.id;
        let pageID = navID + "Content";
        if(navID == "home"){

            $(".top").addClass("hero");
            $(".heading").css("display","block");
            $(".links a").removeClass("black-text");
            $("nav").removeClass("black");

            // this makes the white logo appear and the black logo disappear
            $(".logo-white").css("display","block");
            $(".logo-black").css("display","none");

        }else{

            $(".top").removeClass("hero");
            $(".heading").css("display","none");
            $(".links a").addClass("black-text");
            $("nav").addClass("black");

             // this does the opposite for the logos from the home page
             $(".logo-black").css("display","block");
             $(".logo-white").css("display","none");
        }
        MODEL.getPageContent(pageID);
    });
};

$(document).ready(function(){
    init();
    // adding the homepage here
    MODEL.getPageContent("homeContent");
});