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
