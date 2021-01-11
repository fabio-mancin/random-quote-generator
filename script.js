$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  

$("#get").click(function(){
  $.getJSON("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(data) {
    var quote = data[0].content.rendered;
    var quoteA = quote.replace("<p>", " ");
    var quoteB = quoteA.replace("</p>", " ");
    var who = data[0].title.rendered;
    var whoA = who.replace("<p>", " ");
    var whoB = whoA.replace("</p>", " ");
    $(".title").html('<i class="fa fa-quote-left" aria-hidden="true"></i>' + quote + '<i class="fa fa-quote-right" aria-hidden="true" style="float: right"></i>');
    $("#quote-author").html("- "+ who);
    $("#tweet").attr("href", "http://twitter.com/share?text="+quoteB+" - "+ whoB);
  });
});
});

$(document).ready(function() {
  $("#about").tooltip();
});