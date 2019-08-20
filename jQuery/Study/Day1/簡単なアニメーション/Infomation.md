## 内容

* マウスカーソルが触れたら透明度を0にする
* マウスカーソルが触れたら文字サイズを0にする
* マウスカーソルが離れたら透明度を1.0にする
* マウスカーソルが離れたら文字サイズを110pxにする


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
        fontSize: '110px'
    },
    1500
    );
  })

});
```

注意：素早く触れ、離れ、触れ、離れを繰り返すと動作が遅れて繰り返される。