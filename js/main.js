window.onload = function(){
    // 헤더의 상단의 마이페이지 리스트 기능
    const mypagelist = document.querySelector(".mypage-list")
    const mypageBT = document.querySelector(".mypage-bt")
    mypageBT.onclick = function(){
        mypagelist.classList.toggle("active")
    }
};