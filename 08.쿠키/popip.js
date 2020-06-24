//쿠키 확인 함수
function getCookie(name) {
    //쿠키를 얻는다
    var cookies = document.cookie.split("; ");

    for (var i in cookies) {
        if (cookies[i].search(name) != -1) {
            return true;//찾은 의미로 true를 반환 한다.
        }
    }

}


 //쿠키생성함수()-매개변수를 받아서 해당 이름으로 1일단 유지되는 쿠키 생성
            // 날짜 , 키값 , 유지 
            function createCookie(ddong) {
                var date = new Date();
                date.setDate(date.getDate() + 1);

                //쿠키문자열
                var cookie = "";
                cookie += ddong + "=" + "1;";
                //만료 
                cookie += "expires=" + date.toUTCString();
                //document cookie 에 문자열 넣어주기 
                document.cookie = cookie;
                console.log("document.cookie: " + document.cookie);
            }
        