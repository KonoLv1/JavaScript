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