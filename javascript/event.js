function collect_personal() {//개인정보 제공 동의
  if (document.querySelector('.inrow .agree').checked) {
    document.querySelector(".turn_next").style.display = "block"
  }
}
function select_personnel() {
  const selection = document.querySelector('.personnel');
  console.log(selection.options[selection.selectedIndex].value);
  const personnel = selection.options[selection.selectedIndex].value;
  var last = 1;
  let second = document.querySelector('.chk2').style;
  let third = document.querySelector('.chk3').style;
  let fourth = document.querySelector('.chk4').style;
  console.log(last);
  if (personnel == '1') {
    second.display = 'none';
    third.display = 'none';
    fourth.display = 'none';
  }
  else if (personnel == 2) {
    second.display = 'flex';
    third.display = 'none';
    fourth.display = 'none';
    /* console.log(last);
     let inrow=document.createElement("div");
     let p = document.createElement("input");
     let chk=document.createElement("i");
     chk.setAttribute("class","fa-solid fa-check");
     p.style.margin="5px";
     document.querySelector('.info').appendChild(p);
     inrow.appendChild(p);
     inrow.appendChild(chk);*/
  }
  else if (personnel == 4) {
    second.display = 'flex';
    third.display = 'flex';
    fourth.display = 'flex';
  }

}
function mm_submit() {//개인 정보 제공 동의, 성별 선택 없으면 alert
  if (!document.querySelector('input[name="gender"]').checked) alert('성별을 선택해주세요.');
  else if (!document.querySelector('.inrow .agree').checked) alert('개인 정보 제공 동의에 체크해주세요.');
}