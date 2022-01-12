document.querySelector('.info_chat_list').addEventListener('scroll',function(){

      let scrollLocation =document.querySelector('.info_chat_list').scrollTop;
      let fullHeight = document.querySelector('.info_chat_list table').scrollHeight;
      console.log("위치"+scrollLocation+"높이"+fullHeight);

      if(scrollLocation+801>=fullHeight){
        setTimeout(function(){
          const table = document.querySelector('.info_chat_list table');

          const newRow = table.insertRow();//행 추가
          const newCell1 = newRow.insertCell(0);//newRow에 열추가
          const newCell2 = newRow.insertCell(1);
        }, 1000)
      }
});
document.querySelector('.info_alarm_list').addEventListener('scroll',function(){

      let scrollLocation =document.querySelector('.info_alarm_list').scrollTop;
      let fullHeight = document.querySelector('.info_alarm_list table').scrollHeight;
      console.log("위치"+scrollLocation+"높이"+fullHeight);

      if(scrollLocation+801>=fullHeight){
        setTimeout(function(){
          const table = document.querySelector('.info_alarm_list table');

          const newRow = table.insertRow();//행 추가
          const newCell1 = newRow.insertCell(0);//newRow에 열추가
          const newCell2 = newRow.insertCell(1);
          newCell1.innerText = '새로운 댓글이 달렸습니다.';
          newCell2.innerText = '2014.04.21';
        }, 1000)
      }
});

document.querySelector('.info_post_list').addEventListener('scroll',function(){

          let scrollLocation =document.querySelector('.info_post_list').scrollTop;
          let fullHeight = document.querySelector('.info_post_list table').scrollHeight;
          console.log("위치"+scrollLocation+"높이"+fullHeight);

          if(scrollLocation+801>=fullHeight){
            setTimeout(function(){
              const table = document.querySelector('.info_post_list table');

              const newRow = table.insertRow();//행 추가
              const newCell1 = newRow.insertCell(0);//newRow에 열추가
              const newCell2 = newRow.insertCell(1);
              newCell1.innerText = '이전 공지';
              newCell2.innerText = '2014.04.21';
            }, 1000)
          }
});
