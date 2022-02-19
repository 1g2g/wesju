function rating_limit() {
    var num = document.querySelector('.rating_star').value;
    console.log(num);
    if (num < 0||num > 4.5) {
        alert("0과 4.5사이의 숫자를 입력해주세요");
    }
}
