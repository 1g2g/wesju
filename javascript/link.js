//상단 메뉴바 드롭다운
function drop_down_monitor_menu(){
      let click = document.querySelector(".row");
      if(click.style.display === "none"){
          click.style.display = "block";

      }else{
          click.style.display = "none";

    }
}
//모바일 버전 메뉴바 보이기
function drop_down_mobile_menu(){
      let click = document.querySelector(".sidebar");
      const overlay=document.querySelector('.overlay');
      click.style.marginLeft="80%";
      if(click.style.display === "none"){
          click.style.display = "block";
          overlay.style.display="block";

      }else{
          click.style.display = "none";
          overlay.style.display="none";

    }
}
//사이드바 외부영역 클릭 시 사이드 바 닫음
document.querySelector('.overlay').addEventListener('click',function(){
    document.querySelector('.overlay').style.display="none";
    document.querySelector(".sidebar").style.display = "none";
});

//메뉴바의 소메뉴 숨기기+보이기
document.querySelector('.features').addEventListener('click',function(){
    let click = document.querySelector(".sub1");
    if(click.style.display === "none"){
        click.style.display = "block";
    }else{
        click.style.display = "none";
  }
});
document.querySelector('.Dashboard').addEventListener('click',function(){
    let click = document.querySelector(".sub2");
    if(click.style.display === "none"){
        click.style.display = "block";
    }else{
        click.style.display = "none";
  }
});
document.querySelector('.Information').addEventListener('click',function(){
    let click = document.querySelector(".sub3");
    if(click.style.display === "none"){
        click.style.display = "block";
    }else{
        click.style.display = "none";
  }
});
document.querySelector('.Guide').addEventListener('click',function(){
    let click = document.querySelector(".sub4");
    if(click.style.display === "none"){
        click.style.display = "block";
    }else{
        click.style.display = "none";
  }
});
window.onload = function(){
  // 참고사이트 : https://www.youtube.com/watch?v=wdDqs6kadec , extension consider https://grace-go.tistory.com/95
  // 메인화면에서 학생회 홈페이지, 과홈페이지 링크걸어놓은 부분 slide기능입니다.
  // 한줄에 3개씩 보이게 했습니다.
  var current = 0; //First Image Position
  var max =0;     //image 개수입니다.
  var maximage = 3;   //한화면에 보일 이미지 개수입니다.
  var imagewidth=300; //한 이미지당 가로길이를 237로 임의로 설정하였습니다.
  function init(){
       container =document.querySelector('.slide ul');
       max = container.childElementCount; //image 개수
  }
  document.querySelector('.prev').addEventListener('click',function(){
    if(current <= 0) {return;}
    current-=1;
    const tunnel = document.querySelector('.slide ul');
    var compute = window.getComputedStyle(tunnel);
    var left=parseInt(compute.marginLeft, 10);
    left+=300;
    console.log(left);
    tunnel.style.marginLeft=left+"px";

  });
  document.querySelector('.next').addEventListener('click',function(){
    if(current > max-maximage-1) {return;}
    current+=1;
    const tunnel = document.querySelector('.slide ul');
    var compute = window.getComputedStyle(tunnel);
    var right=parseInt(compute.marginLeft, 10);
    right-=300;
    console.log(right);
    tunnel.style.marginLeft=right+"px";
  });

  init();
}

//header의 알람,채팅,내가쓴글 모달창 보이기
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


//메인에 걸리는 이미지 마우스 오버 시 동영상재생
/*document.querySelector('.col1 img').addEventListener('mouseover',()=>{
  const img=document.querySelector('.col1 img');
  const video=document.querySelector('.col1 iframe');
  img.style.display='none';
  video.style.display='block';
});
*/
//스크롤 이벤트에 따른 cont_right의 이동
document.querySelector('.parallax_page').addEventListener('scroll',function(){
        let scrollLocation =document.querySelector('.parallax_page').scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 스크린 창
        let fullHeight = document.body.scrollHeight;
        let windowWidth = window.innerWidth;
        const nav=document.getElementById('cont_right');
        //content의 너비보다 창이 넓으면 cont_right가 스크롤 이동에 따라 움직임
        if(scrollLocation>=469&&windowWidth>=1162){
            nav.style.position="fixed";
            nav.style.right="calc((100% - 1150px)/2)";
            nav.style.bottom="0";
            if(scrollLocation>=1550)   nav.style.bottom="60px";//1522+1588/2, footer높이 60
            console.log(scrollLocation);
        //  alert('3');
        }
        //content의 너비보다 창이 좁으면cont_right가 스크롤 이동에 따라 움직임
        else if(scrollLocation>=469&&windowWidth>=768){
            nav.style.position="fixed";
            nav.style.left="900px";
            nav.style.bottom="0";
            if(scrollLocation>=1550)   nav.style.bottom="60px";
        }
        //상단으로 올라가거나 모바일 버전이면 원래 위치로 이동
        else{
            nav.style.position="static";

        }
});
