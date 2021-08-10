function empty_value_test_login(){//비어있는 값에 대한 검사
  if(document.querySelector('#userid').value=="") alert('아이디를 입력하세요.');
  else if(document.querySelector('#password').value=="") alert('비밀번호를 입력하세요.');

}
