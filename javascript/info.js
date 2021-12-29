function edit_pw(){
	document.querySelector(".hidden_profile").style.display="inline-block";
}
function loadFile(input) {
    var file = input.files[0];
    var newImage = document.querySelector('.profile_img');
    newImage.src = URL.createObjectURL(file);
    newImage.style.visibility = "visible";
    newImage.style.objectFit = "contain";
};
function submit_profile(){
	  if(document.querySelector('.nickname').length==0) alert('변경할 닉네임을 입력해주세요.');
	  else if(document.querySelector('.info_list .pw').value=="") alert('기존 비밀번호를 확인해주세요.');
		else if(document.querySelector('#mem_password').value=="") alert('변경힐 비밀번호를 입력하세요.');
		else if(document.querySelector('#cor_mem_password').value=="") alert('비밀번호 확인을 입력하세요.');
}

function nick_length_test(){//아이디 길이 제한
  var nick=document.querySelector('.nickname').value;
  if(nick.length<2||nick.length>12){
    document.getElementById('nickname_txt').innerHTML="닉네임을 2자리 이상 12자리 이하로 입력하세요.";
  }
  else{
    document.getElementById('nickname_txt').innerHTML="";
  }
}
function open_secession(){//탈퇴하기 창을 열어줌
  window.open('secession.html','_blank','width=570,  height=300, toolbar=no, menubar=no, scrollbars=no, resizable=yes');return false;alert('g');
}
function secession_cb(){//탈퇴에 동의하는지 확인
	var check= document.getElementById('scb').checked;
	if(!check) alert('안내사항에 동의해주세요.');
}
