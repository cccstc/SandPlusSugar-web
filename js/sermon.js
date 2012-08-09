/* Author:

*/







var fetchSermonInto = function(section, el) {
    $.ajax({
         url:"http://sand-plus-sugar.herokuapp.com/sermons/"+section+"/recent/10.json",
         dataType: 'jsonp',
         success:function(json){
             var hasHero = false;
             $.each(json, function(index, sermon) {
                 if (hasHero) {
                      var unit = $("<div></div>").addClass("span3 well");
                       $(unit).append($("<h2></h2>").text(sermon["title"]))
                              .append($("<p></p>").text(sermon["speaker"] + " " + sermon["date"]))
                              .append($("<p></p>").css("text-align", "right").append(
                                  $("<a></a>").attr("href", sermon["audio"])
                                              .addClass("btn")
                                              .html("收聽 &raquo;")
                                  )
                              );
                       $(el).append($(unit));
                  } else {
                      var heroUnit = $("<div></div>").addClass("hero-unit");
                      $(heroUnit).append($("<h2></h2>").text(sermon["title"]))
                                 .append($("<p></p>").text(sermon["speaker"] + " " + sermon["date"]))
                                 .append($("<p></p>").append(
                                     $("<a></a>").attr("href", sermon["audio"])
                                                 .addClass("btn")
                                                 .addClass("btn-primary")
                                                 .addClass("btn-large")
                                                 .html("收聽 &raquo;")
                                     )
                                 );
                      $(el).append($(heroUnit));
                      hasHero = true;
                  }
              });
         },
         error:function(){
         }
    });
};

$(function() {
    fetchSermonInto("週六午堂", $("#satAfternoonMain"));
    $("#btnSatAfternoon").on("click", function(event) {
        fetchSermonInto("週六午堂", $("#satAfternoonMain"));
    });
    $("#btnSatEvening").on("click", function(event) {
        fetchSermonInto("週六晚堂", $("#satEveningMain"));
    });
    $("#btnSunMorning").on("click", function(event) {
        fetchSermonInto("週日早堂", $("#sunMorningMain"));
    });
    $("#btnSunNoon").on("click", function(event) {
        fetchSermonInto("週日午堂", $("#sunNoonMain"));
    });
});