function copy_url_to_clipboard(){//현재 페이지 url을 클립보드에 복사
	var url = document.getElementById("text_url");
  url.value = window.document.location.href;
	url.select();
	document.execCommand("copy");
	alert("현재 페이지 주소가 복사되었습니다.");
}
function open_chat(){//채팅하기 창을 열어줌
  window.open('chat.html','_blank','width=570,  height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes');return false;
}
function show_comment_box(){//모바일 버전에서 가독성을 높이기 위해 댓글창 크기를 최소화시킴. input 클릭 시 댓글 창 크기가 커짐
	const hide_comment=document.querySelector(".hide_comment");
	const text=document.querySelector(".write_comment textarea");
	const button=document.querySelector(".write_comment button");
	if(hide_comment.style.display=='none'){//댓글박스가 보인다면
		hide_comment.style.display='block';
		text.style.display='none';
		button.style.display='none'
	}else{//댓글박스가 닫혀있다면
			hide_comment.style.display='none';
			text.style.display='block';
			button.style.display='block';

	}
}
function modify_comment(){//댓글 수정 누르면 해당댓글 수정폼으로 바뀜
	const txt=document.querySelector(".cmt");
	if(txt.disabled==true){
		txt.disabled=false;
		txt.style.outline="1px solid";
		document.querySelector(".edit_cmt button").style.display="block";

			if (window.matchMedia("(min-width: 768px)").matches){// 768px 이상
			txt.style.width="90%";
		}
		else{
			txt.style.width="97%";
			txt.style.marginLeft="2.3%";
		}
}
}
function submit_comment(){//제출버튼 누르면 수정폼이 사라짐
	const txt=document.querySelector(".cmt");
	if(txt.disabled==false){
		txt.disabled=true;
		txt.style.outline="none";
		txt.style.width="92%";
		document.querySelector(".edit_cmt button").style.display="none";
}
}

function show_reply_box(){//가독성을 높이기 위해 댓글창 크기를 최소화시킴. input 클릭 시 댓글 창 크기가 커짐
	const hide_reply=document.querySelector(".hide_reply");
	const box=document.querySelector(".write_reply");
	const text=document.querySelector(".write_reply textarea");
	const button=document.querySelector(".write_reply button");

	if (window.matchMedia("(min-width: 768px)").matches){// 768px 이상
		if(hide_reply.style.display=='none'){//댓글박스가 보인다면
			hide_reply.style.display='block';
			box.style.display='none';
		}else{//댓글박스가 닫혀있다면
			hide_reply.style.display='none';
			box.style.display='block';
		}
}else{//모바일 버전
		if(hide_reply.style.display=='none'){//댓글박스가 보인다면
			hide_reply.style.display='block';
			text.style.display='none';
			button.style.display='none';
			box.style.backgroundColor="transparent";
		}else{//댓글박스가 닫혀있다면
			hide_reply.style.display='none';
			text.style.display='block';
			button.style.display='block';
			box.style.backgroundColor="white";
			console.log(matchMedia("screen and (min-width:769px)".matches));

		}
	}
}
function show_reply(){
	const reply=document.querySelector(".reply");
	if(reply.style.display=='none'){
		reply.style.display='block';
	}else{
		reply.style.display='none';
	}
}
function hide_reply_list(){
	const reply=document.querySelector(".reply");
	const arrow=document.querySelector('.reply_arrow');
	if(reply.style.display==''){
		reply.style.display='block';
		arrow.innerHTML='<i class="fa fa-chevron-up" aria-hidden="true"></i>';
	}
	else if(reply.style.display=='none'){
		reply.style.display='block';
		arrow.innerHTML='<i class="fa fa-chevron-up" aria-hidden="true"></i>';
	}else{
		reply.style.display='none';
		arrow.innerHTML='<i class="fa fa-chevron-down" aria-hidden="true"></i>';
	}
}
/*function click_anywhere(){//외부클릭시 설정창 닫힘
	const a_o_category=document.querySelector(".a_o_category");
	if(a_o_category.style.display=='block'){
		a_o_category.style.display='none';
}*/

window.addEventListener('scroll', () => {//스크롤 다운 시, header shadow 발생
	let scroll_location = document.documentElement.scrollTop; // 현재 스크롤바 위치
	var header = document.getElementById("header");
	if(scroll_location==0){
		header.style.boxShadow='none';
	}else{
		header.style.boxShadow='1px 1px 8px #555555';}
});
