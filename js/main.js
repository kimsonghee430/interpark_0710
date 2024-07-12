window.onload = function(){
    // 헤더의 상단의 마이페이지 리스트 기능
    const mypagelist = document.querySelector(".mypage-list")
    const mypageBT = document.querySelector(".mypage-bt")
    mypageBT.onclick = function(){
        mypagelist.classList.toggle("active")
    }
    //스와이퍼===============
    
    const swPromotion = new Swiper(".sw-promotion" , {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            480 : {
                slidesPerView: 2
            },
            760 : {
                slidesPerView: 3.5
            },
        },
        navigation:{
            nextEl: ".promotion .sw-next",
            prevEl: ".promotion .sw-prev",
        },
        loop : true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

    })
};
