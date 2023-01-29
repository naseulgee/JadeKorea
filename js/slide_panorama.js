/* slide_panorama.js
슬라이드 파노라마
*/
let clients = [
    {
        "구글코리아":"google",
        "발렌티노":"valentino",
        "디스커버리":"discovery",
        "녹십자":"gcgreenCross",
        "SAP":"sap",
        "푸마":"puma",
        "유투브":"youtube",
        "래미안":"raemian",
        "로레알":"loreal",
        "3M":"3m",
        "반얀트리":"banyanTree"
    },
    {
        "LH주택공사":"lh",
        "서울시립미술관":"seoulM",
        "국립고궁박물관":"nationalPalaceM",
        "한국교육평가원":"kice",
        "대전지방법원":"deajeonCOK",
        "울산북구청":"bukguUlsan",
        "동작구청":"dongjackgu",
        "기후변화센터":"ccc",
        "경기관광공사":"gyeonggiTourism",
        "질병관리본부":"kcdc",
        "토지주택박물관":"lhM"
    },
    {
        "서울대학교":"seoulUniversity",
        "카이스트":"kaist",
        "연세대학교":"yonseiUniversity",
        "고려대학교":"koreaUniversity",
        "경희대학교":"kyungheeUniversity",
        "이화여자대학교":"ewhaWomansUniversity",
        "아주대학교":"ajouUniversity",
        "한국외국어대학교":"hankukUniversity",
        "서울시립대학교":"universityOfSeoul",
        "선화예고":"sunhwaArtsHS",
        "서울예고":"seoulArtHS"
    }
];

function _slidePanorama() {
    let _sw = document.querySelector("#slideWrap");
    for (let i = 0; i < clients.length; i++) {//슬라이드만큼 반복
        let _liCount = Object.keys(clients[i]).length;
        let _showLiCount = Math.ceil(window.innerWidth / 300);//한번에 보여지는 이미지 개수 정수화
        let is_slide = (_liCount > _showLiCount) ? true : false;//추가될 li 수가 한번에 보여지는 개수보다 많은지 여부
        let _time = "50s";//재생시간
        let str = "";//바뀔 HTML
        let add_str = "";//마지막에 한번에 보여지는 개수만큼 li 추가

        if(is_slide){
            //키프레임 세팅: 100 - 1개당 백분율 * 한번에 보여지는 개수
            document.styleSheets[0].insertRule("@keyframes moveSlideshow { 100% { transform: translateX(" + -(100 - ( 100 / (_liCount+_showLiCount) * _showLiCount )) + "%); } }");
            //ul에 키프레임 선언: 키프레임명 + 시간 + 등속 + 무한반복
            str = "<ul class='logoSlide displayFlex' style='animation: moveSlideshow " + _time + " linear infinite'>";
        }else{
            str = "<ul class='logoSlide displayFlex'>";
        }
        //li추가 로직
        let client = clients[i];
        let j = 0;
        for (const key in client) {
            str += "<li><img src='./images/client/"+client[key]+".jpg' alt='"+key+"'><span>"+key+"</span></li>";
            if(is_slide && j < _showLiCount){
                add_str += "<li><img src='./images/client/"+client[key]+".jpg' alt='"+key+"'><span>"+key+"</span></li>";
            }
            j++;
        }
        str += add_str;
        str += "</ul>";
        _sw.innerHTML += str;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    _slidePanorama();
});