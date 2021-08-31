function open_chat(){//채팅하기 창을 열어줌
  window.open('chat.html','_blank','width=570,  height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes');return false;alert('g');
}
function show() {
  document.querySelector(".background").className = "background show";
}

function close() {
  document.querySelector(".background").className = "background";
}

document.querySelector("#show").addEventListener("click", show);
document.querySelector("#close").addEventListener("click", close);
