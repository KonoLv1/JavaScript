## 内容

* マウスカーソルが触れたら透明度を0にする
* マウスカーソルが触れたら文字サイズを0にする
* マウスカーソルが離れたら透明度を1.0にする
* マウスカーソルが離れたら文字サイズを80pxにする


## jQueryコード


```javascript
$(function(){

//	クラスinfoにマウスカーソルが触れた際の処理
  $('#info').on('mouseover', function(){
    $('#info').animate({
        opacity: 0,
        fontSize: '0px'
    },
    1500
    );
  })

//	クラスinfoからマウスカーソルが離れた際の処理
  $('#info').on('mouseout', function(){
    $('#info').animate({
        opacity: 1.0,
        fontSize: '80px'
    },
    1500
    );
  })

});
```

[!]:素早く触れ、離れ、触れ、離れを繰り返すと動作が遅れて繰り返される。そこで、stop(true)を付け足すことで、アニメーションが途中でキャンセルできる。

```javascript
$(function(){

//	クラスinfoにマウスカーソルが触れた際の処理
  $('#info').on('mouseover', function(){
    $('#info').stop((true).animate({
        opacity: 0,
        fontSize: '0px'
    },
    1500
    );
  })

//	クラスinfoからマウスカーソルが離れた際の処理
  $('#info').on('mouseout', function(){
    $('#info').stop(true).animate({
        opacity: 1.0,
        fontSize: '80px'
    },
    1500
    );
  })

});
```

[!]:マウスをクリックしているとき、離しているときにイベントを起こすことも可能。

```javascript
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
```

```javascript
$(function(){
var speed = 500;
var size = 40;
  $('#info').on('mouseover', function(){
    $('#info').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info').on('mouseout', function(){
    $('#info').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info2').on('mouseover', function(){
    $('#info2').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info2').on('mouseout', function(){
    $('#info2').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info3').on('mouseover', function(){
    $('#info3').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info3').on('mouseout', function(){
    $('#info3').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info4').on('mouseover', function(){
    $('#info4').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info4').on('mouseout', function(){
    $('#info4').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info5').on('mouseover', function(){
    $('#info5').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info5').on('mouseout', function(){
    $('#info5').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info6').on('mouseover', function(){
    $('#info6').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info6').on('mouseout', function(){
    $('#info6').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info7').on('mouseover', function(){
    $('#info7').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info7').on('mouseout', function(){
    $('#info7').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info8').on('mouseover', function(){
    $('#info8').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info8').on('mouseout', function(){
    $('#info8').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info9').on('mouseover', function(){
    $('#info9').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info9').on('mouseout', function(){
    $('#info9').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info10').on('mouseover', function(){
    $('#info10').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info10').on('mouseout', function(){
    $('#info10').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info11').on('mouseover', function(){
    $('#info11').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info11').on('mouseout', function(){
    $('#info11').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info12').on('mouseover', function(){
    $('#info12').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info12').on('mouseout', function(){
    $('#info12').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

  $('#info13').on('mouseover', function(){
    $('#info13').stop(true).animate({
    opacity: 0,
    fontSize: '0px'
    },
    speed
    );
  })

  $('#info13').on('mouseout', function(){
    $('#info13').stop(true).animate({
        opacity: 1.0,
        fontSize: size
    },
    speed
    );
  })

});
```
