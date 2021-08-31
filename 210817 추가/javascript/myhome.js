function edit_nickname(){
	const nickname=document.querySelector(".nickname");
  const btn=document.querySelector(".check_nick");
  const pw=document.querySelector(".pw");
  const label=document.querySelector(".info_list label");
	const file=document.querySelector(".choose_file");
	const nick=document.querySelector(".check_nick");


  nickname.disabled = false;
	nickname.style.border="1px solid #C7695E";
	nickname.style.outline="none";
	nickname.style.padding="3px";
	nickname.style.borderRadius="5px";
  document.getElementById("pw_").innerHTML="기존 비밀번호";
  btn.style.display="inline-block";
	nick.style.display="inline-block";
	//file.style.display="inline-block";
	file.disabled = false;
	document.querySelector(".hidden_profile").style.display="inline-block";
  document.querySelector(".info_list button").style.display="inline-block";
document.querySelector(".submit_profile").style.zIndex="100";
}
function show_chat(){
const alarm=document.querySelector(".alarm_list");
const chat=document.querySelector(".chat_list");
const post=document.querySelector(".post_list");
	alarm.style.display="none";
	chat.style.display="block";
	post.style.display="none";
}
function show_alarm(){
const alarm=document.querySelector(".alarm_list");
const chat=document.querySelector(".chat_list");
const post=document.querySelector(".post_list");
	alarm.style.display="block";
	chat.style.display="none";
	post.style.display="none";
}
function show_post(){
const alarm=document.querySelector(".alarm_list");
const chat=document.querySelector(".chat_list");
const post=document.querySelector(".post_list");
	alarm.style.display="none";
	chat.style.display="none";
	post.style.display="block";
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
