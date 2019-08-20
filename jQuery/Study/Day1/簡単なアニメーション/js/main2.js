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
});
