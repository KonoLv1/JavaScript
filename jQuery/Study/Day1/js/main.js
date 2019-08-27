$(function(){
  $('#info').on('mouseover', function(){
    $('#info').css('color', '#eeeeee');
    $('#info').text("マウスが触れています。");
  });

  $('#info').on('mouseout', function(){
    $('#info').css('color','white');
    $('#info').text("マウスは触れていません");
  });
  $('#info').on('click', function(){
    $('#info').css('background-color', 'red');
  });
  $('#info').on('dblclick', function(){
    $('#info').css('background-color', '');
  });
});
