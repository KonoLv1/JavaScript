## ���e

* �}�E�X�J�[�\�����G�ꂽ�當����ω�������
* �}�E�X�J�[�\�������ꂽ�當����ω�������
* �N���b�N�A�_�u���N���b�N������w�i�F���ω�����

## jQuery�R�[�h


```javascript
$(function(){

//	�N���Xinfo�Ƀ}�E�X�J�[�\�����G�ꂽ�ۂ̏���
  $('#info').on('mouseover', function(){
    $('#info').css('color', '#eeeeee');
    $('#info').text("�}�E�X���G��Ă��܂��B");
  });

//	�N���Xinfo����}�E�X�J�[�\�������ꂽ�ۂ̏���
  $('#info').on('mouseout', function(){
    $('#info').css('color','white');
    $('#info').text("�}�E�X�͐G��Ă��܂���");
  });

//	�N���Xinfo���N���b�N�����ۂ̏���
  $('#info').on('click', function(){
    $('#info').css('background-color', 'red');
  });

//	�N���Xinfo���_�u���N���b�N�����ۂ̏���
  $('#info').on('dblclick', function(){
    $('#info').css('background-color', 'blue');
  });

});

```