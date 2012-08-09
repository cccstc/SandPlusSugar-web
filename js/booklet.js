/* Author:

*/







$(function() {
    $.ajax({
         url:"http://sand-plus-sugar.herokuapp.com/booklets/recent/10.json",
         dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
         success:function(json){
             var mainContainer = $("#mainContainer");
             var hasHero = false;
             $.each(json, function(index, booklet) {
                 if (hasHero) {
                     var unit = $("<div></div>").addClass("span2 well");
                      $(unit).append($("<h2></h2>").text(booklet["title"]))
                             .append($("<p></p>").text(booklet["subtitle"]))
                             .append($("<p></p>").css("text-align", "right").append(
                                 $("<a></a>").attr("href", booklet["bookletUrl"])
                                             .addClass("btn")
                                             .html("下載 &raquo;")
                                 )
                             );
                      $(mainContainer).append($(unit));
                 } else {
                     var heroUnit = $("<div></div>").addClass("hero-unit");
                     $(heroUnit).append($("<h2></h2>").text(booklet["title"]))
                                .append($("<p></p>").text(booklet["subtitle"]))
                                .append($("<p></p>").append(
                                    $("<a></a>").attr("href", booklet["bookletUrl"])
                                                .addClass("btn")
                                                .addClass("btn-primary")
                                                .addClass("btn-large")
                                                .html("下載 &raquo;")
                                    )
                                );
                     $(mainContainer).append($(heroUnit));
                     hasHero = true;
                 }
             });
         },
         error:function(){
             alert("Error");
         },
    });
});