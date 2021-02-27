$(document).ready(function(){

    $(".closeBtn").click(function(){

      $(".alert").slideUp("slow");

    });

    //Flickity Listview Elements
    $('.listElement-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

  });