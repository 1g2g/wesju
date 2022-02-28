function id_length_test(){//아이디 길이 제한
  var id=document.getElementById('mem_userid').value;
  if(id.length<4||id.length>12){
    document.getElementById('id_txt').innerHTML="아이디를 4자리 이상 12자리 이하로 입력하세요.";
  }
  else{
    document.getElementById('id_txt').innerHTML="";
  }
}
function check_pw(){//비밀번호 영문 숫자 검사
  var pw = document.getElementById('mem_password').value;
  var pt = /[a-zA-Z]/;
  var pt2=/[0-9]/;
  if(!pt.test(pw)||!pt2.test(pw)||pw.length<4||pw.length>12){
    document.getElementById('pw_txt').innerHTML = "영문+숫자를 4자리 이상 12자리 이하로 입력하세요";
  }
  else{
    document.getElementById('pw_txt').innerHTML = "";
  }

}

function check_cor_pw(){  //비밀번호 재입력 검사
    var pw = document.getElementById('mem_password').value;
    var cor_pw = document.getElementById('cor_mem_password').value;

    if (pw!=cor_pw) {
      document.getElementById('cor_pw_txt').innerHTML = "비밀번호가 달라요. 다시 입력해주세요.";
    }
    else {
        document.getElementById('cor_pw_txt').innerHTML = "";
    }
    if (cor_pw=="") {
      document.getElementById('cor_pw_txt').innerHTML = "";
    }
 }
 function check_email(){
   var email = document.getElementById('mem_email').value;
   var pt = /[@]/;
   if(pt.test(email)){
     document.getElementById('email_txt').innerHTML = "도메인은 입력하지 마세요";
   }
   else{
     document.getElementById('email_txt').innerHTML = "";
   }

 }
function nickname_length_test(){//닉네임 길이 제한
    var nickname=document.getElementById('mem_nickname').value;
    if(nickname.length<2||nickname.length>12){
      document.getElementById('nickname_txt').innerHTML="닉네임을 2자리 이상 12자리 이하로 입력하세요.";
    }
    else{
      document.getElementById('nickname_txt').innerHTML="";
    }
}
function check_studentID(){//학번 길이 검사
    var s_id=document.getElementById('mem_studentID').value;

    if(s_id.length!=8){
      document.getElementById('studentID_txt').innerHTML = "잘못된 학번입니다.";
    }
    else {
      document.getElementById('studentID_txt').innerHTML = "";
    }
}
function empty_value_test(){//비어있는 양식에 대한 검사
  if(!document.querySelector('#agreement').checked) alert('개인정보약관에 동의해주세요.');
  else if(document.querySelector('#mem_userid').value=="") alert('아이디를 입력하세요.');
  else if(document.querySelector('#mem_password').value=="") alert('비밀번호를 입력하세요.');
  else if(document.querySelector('#cor_mem_password').value=="") alert('비밀번호 확인을 입력하세요.');
  else if(document.querySelector('#mem_email').value=="") alert('이메일을 입력하세요.');
  else if(document.querySelector('#nickname_input').value=="") alert('닉네임을 입력하세요.');
  else if(document.querySelector('#studentID_input').value=="") alert('학번을 입력하세요.');

}
function email_certi(){//이메일 인증
  var email = document.getElementById('mem_email').value;
  var pt = /[@]/;
  if(pt.test(email)){
    alert('도메인을 삭제해주세요');
  }else if(email==""){
    alert('이메일을 입력해주세요');
  }else{
  alert('인증메일이 발송되었습니다.');
  const email=document.querySelector('#cor_mem_email');
  const btn=document.querySelector('.email_cert_btn');
  const junk=document.querySelector('#junk');
  email.style.display="block";
  btn.style.display="block";
  junk.style.display="block";
  timer();
}
}
