$(function(){
  $('#info').on('mouseover', function(){
    $('#info').animate({
        opacity: 0,
        fontSize: '0px'
    },
    1500
    );
  })
  $('#info').on('mouseout', function(){
    $('#info').animate({
        opacity: 1.0,
        fontSize: '110px'
    },
    1500
    );
  })
});
