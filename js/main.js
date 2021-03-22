$(document).ready(function(){

    $(".closeBtn").click(function(){

      $(".alert").slideUp("slow");

    });

    //EDIT TRANSACTION DETAILS COMPONENT
    $(".activityComponent .editTransactionDetails").hide();
    $(".activityComponent .editTransactionDetails #close").click(function(){
      var componentHeight = $(".activityComponent").height();
      $(".activityComponent .editTransactionDetails").css({"height": componentHeight});
      $(".activityComponent .editTransactionDetails").slideToggle();

    });
    $(".activityComponent .editTransactionDetails #saveAndClose").click(function(){
      var componentHeight = $(window).height();
      $(".activityComponent .editTransactionDetails").css({"height": componentHeight});
      $(".activityComponent .editTransactionDetails").slideToggle();

    });
    $(".activityComponent .individualTransaction button").click(function(){
      var componentHeight = $(window).height();
      $(".activityComponent .editTransactionDetails").css({"height": componentHeight});
      $(".activityComponent .editTransactionDetails").slideToggle();

    });
    //END: EDIT TRANSACTION DETAILS COMPONENT





    var showMenuToggle = false;
    
    $("#menuToggleBtn").click(function(){

      var menuHeight = $(window).height();

      if(showMenuToggle == false) {

        $(".navWrapper").animate({"height": menuHeight});

        $(".navWrapper").css("background", "linear-gradient(0deg, rgba(248,249,248,0) 0%, rgba(249,248,248,1) 50%");

        showMenuToggle = true;

      } else {

        $(".navWrapper").animate({"height": "35px"});
        setTimeout(function() { 
          $(".navWrapper").css("background", "transparent");
      }, 400);

        showMenuToggle = false;

      }
    });

 

    //Flickity Listview Elements
    $('.listElement-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });


    $('.bankSettingsSlider').flickity({
      groupCells: false,
      percenterPosition: false,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: true

    });

    //Muuri Grid Controls
    // var grid = new Muuri('.grid', {
    //   items: '.item',
    //   dragEnabled: true
    // });


    //Navigation Controls
    $( "#navigationToggle" ).click(function() {

      $(".backgroundOverlay").fadeIn();
      $("#mySidenav").css("left","0");


    });

    $( ".openPopupMenu" ).click(function() {
      $(".backgroundOverlay").fadeIn();
      $(".popup").css("bottom","30px");


    });


    $( ".closeMenu" ).click(function() {

      $(".backgroundOverlay").fadeOut();
      $("#mySidenav").css("left","-9999px");
      $(".popup").css("bottom","-9999px");

    });
 
    
  });