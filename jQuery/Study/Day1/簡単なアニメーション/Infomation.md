## ���e

* �}�E�X�J�[�\�����G�ꂽ�瓧���x��0�ɂ���
* �}�E�X�J�[�\�����G�ꂽ�當���T�C�Y��0�ɂ���
* �}�E�X�J�[�\�������ꂽ�瓧���x��1.0�ɂ���
* �}�E�X�J�[�\�������ꂽ�當���T�C�Y��80px�ɂ���


## jQuery�R�[�h


```javascript
$(function(){

//	�N���Xinfo�Ƀ}�E�X�J�[�\�����G�ꂽ�ۂ̏���
  $('#info').on('mouseover', function(){
    $('#info').animate({
        opacity: 0,
        fontSize: '0px'
    },
    1500
    );
  })

//	�N���Xinfo����}�E�X�J�[�\�������ꂽ�ۂ̏���
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

[!]:�f�����G��A����A�G��A������J��Ԃ��Ɠ��삪�x��ČJ��Ԃ����B�����ŁAstop(true)��t���������ƂŁA�A�j���[�V�������r���ŃL�����Z���ł���B

```javascript
$(function(){

//	�N���Xinfo�Ƀ}�E�X�J�[�\�����G�ꂽ�ۂ̏���
  $('#info').on('mouseover', function(){
    $('#info').stop((true).animate({
        opacity: 0,
        fontSize: '0px'
    },
    1500
    );
  })

//	�N���Xinfo����}�E�X�J�[�\�������ꂽ�ۂ̏���
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