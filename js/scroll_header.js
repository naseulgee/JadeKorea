/* scroll_header.js
스크롤이 top 0 보다 아래에 위치할 경우 header에 on 클래스 추가
*/

document.addEventListener("scroll", function(){
    let _h = document.getElementById("header");
    if (window.scrollY > 0) { _h.classList.add("on"); } else { _h.classList.remove("on"); }
});