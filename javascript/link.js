const alarm=document.querySelector(".alarm_list");
const chat=document.querySelector(".chat_list");
const post=document.querySelector(".post_list");
function show_alarm(){
  if(alarm.style.display=="none"){
    alarm.style.display="block";
    chat.style.display="none";
  	post.style.display="none";
  }
  else  alarm.style.display="none";
}
function show_chat(){
  if(chat.style.display=="none"){
    alarm.style.display="none";
    chat.style.display="block";
  	post.style.display="none";
  }
  else chat.style.display="none";
}
function show_post(){
  if(post.style.display=="none"){
    alarm.style.display="none";
    chat.style.display="none";
  	post.style.display="block";
  }
  else post.style.display="none";
}
