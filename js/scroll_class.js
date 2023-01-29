/* scroll_class.js
scroll 클래스를 가지고 있는 객체 모두, 스크롤과 맞닿을 때 scrollAction 클래스 추가
*/

document.addEventListener("scroll", function(){
    _scrollAction();
});

function _scrollAction() {
    let _scrollEvent = document.querySelectorAll(".scroll");
    if (!_scrollEvent) { return false };
    for(let _scroll of _scrollEvent) {
        let _scrollHeight = _scroll.getBoundingClientRect().top + 0;
        if(window.innerHeight > _scrollHeight) { _scroll.classList.add("scrollAction"); } else { _scroll.classList.remove("scrollAction"); }
    }
}