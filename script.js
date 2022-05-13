$(".town-button").dblclick(function() {
    $(".partone").hide();
    $(".parttwo").show();
});

$(".request").dblclick(function() {
    $(".partone").hide();
    $(".parttwo").hide();
    $(".partthree").show();
});

$(".jobBoard").click(function() {
    $(".partthree").hide();
    $(".partfour").show();
});

$(".three").dblclick(function() {
    $(".partfour").hide();
    $(".partfive").show();
});

$(".fight").dblclick(function() {
    $(".partfive").hide();
    $(".partsix").show();
});
    
$("html").keydown(function() {
    $(".Part-Five-Text").text("OH! You won? How? Oh well. Good job Hero.");
});
    

   
    
                              

$(".yes").dblclick(function() {
    $(".partsix").hide();
    $(".partone").show();
});

$(".run").dblclick(function() {
    $(".partfive").hide();
    $(".partseven").show();
});

$(".again").dblclick(function() {
    $(".partseven").hide();
    $(".partone").show();
});

$(".parttwo").hide();

$(".partthree").hide();

$(".partfour").hide();

$(".partfive").hide();

$(".partsix").hide();

$(".partseven").hide();