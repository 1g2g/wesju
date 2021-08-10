//검색 focus 시, submit 버튼 색상 변환
function focus_on_search_box(){
  const submit_btn=document.querySelector('.board_list_search_btn');
  submit_btn.style.backgroundColor='#c3002e';
}
function focus_out_search_box(){
  const submit_btn=document.querySelector('.board_list_search_btn');
  submit_btn.style.backgroundColor='#555555';
}
