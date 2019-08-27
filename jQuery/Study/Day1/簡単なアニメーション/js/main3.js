$(function(){

  $('#info').on('mouseover', function(){
    $('#info').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    1500
    );
  })

  $('#info').on('mouseout', function(){
    $('#info').stop(true).animate({
        opacity: 1.0,
        fontSize: '80px'
    },
    1500
    );
  })

  $('#info2').on('mousedown', function(){
    $('#info2').stop(true).animate({
        opacity: 0,
        fontSize: '0px'
    },
    1500,'linear'
    );
  })

  $('#info2').on('mouseup', function(){
    $('#info2').stop(true).animate({
        opacity: 1.0,
        fontSize: '80px'
    },
    1500,'linear'
    );
  })



});
