## 内容

* マウスカーソルが触れたら文字を変化させる
* マウスカーソルが離れたら文字を変化させる
* クリック、ダブルクリックしたら背景色が変化する

## jQueryコード


```javascript
$(function(){

//	クラスinfoにマウスカーソルが触れた際の処理
  $('#info').on('mouseover', function(){
    $('#info').css('color', '#eeeeee');
    $('#info').text("マウスが触れています。");
  });

//	クラスinfoからマウスカーソルが離れた際の処理
  $('#info').on('mouseout', function(){
    $('#info').css('color','white');
    $('#info').text("マウスは触れていません");
  });

//	クラスinfoをクリックした際の処理
  $('#info').on('click', function(){
    $('#info').css('background-color', 'red');
  });

//	クラスinfoをダブルクリックした際の処理
  $('#info').on('dblclick', function(){
    $('#info').css('background-color', 'blue');
  });

});

```