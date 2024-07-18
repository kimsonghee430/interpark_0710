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
        pagination:{
            el:".sw-promotion-pg",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

    })
    // 쇼핑의 스와이퍼 기능 적용
    const swShopping = new Swiper(".sw-shopping",{
        navigation:{
            nextEl: ".shopping .sw-next",
            prevEl: ".shopping .sw-prev",
        },
        loop: true,
        slidesPerView: 1.1,
        grid:{
            rows : 1,
            fill:"row"
        },
        spaceBetween: 10,
        breakpoints:{
            900 : {
                spaceBetween: 32,
                slidesPerView: 4,
                slidesPerGroup: 3,
                grid:{
                    rows : 1,
                },
            },
            1024:{
                spaceBetween: 32,
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid:{
                    rows : 1,
                },
            },
            1280:{
                spaceBetween: 26,
                slidesPerView: 4,
                slidesPerGroup: 4,
                grid:{
                    rows : 1,
                },
            },
        }
    })
// 투어의 스와이퍼 기능
    const swTour = new Swiper(".sw-tour",{
        navigation:{
            nextEl: ".tour .sw-next",
            prevEl: ".tour .sw-prev",
        },
        loop: true,

        // 모바일버전
        slidesPerView: 1.2,
        spaceBetween : 10,
        grid:{
            rows : 1,
            fill : "row",
        },

        breakpoints:{
            480:{
                spaceBetween: 32,
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid:{
                    rows : 2,
                },
            },
            1024:{
                spaceBetween: 32,
                slidesPerView: 3,
                slidesPerGroup: 2,
                grid:{
                    rows : 1,
                },
            },
            1280:{
                spaceBetween: 26,
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid:{
                    rows : 1,
                },
            },
        }
    })


// 티켓 스와이퍼 기능
    const swTicket = new Swiper(".sw-ticket",{
        navigation:{
            nextEl: ".ticket .sw-next",
            prevEl: ".ticket .sw-prev",
        },
        loop: true,
        

        // 모바일버전
        slidesPerView: 1.2,
        spaceBetween : 10,
        grid:{
            rows : 1,
            fill : "row",
        },

        breakpoints:{
            480:{
                spaceBetween: 32,
                slidesPerView: 2,


            },
            1024:{
                spaceBetween: 32,
                slidesPerView: 3,


            },
            1280:{
                spaceBetween: 26,
                slidesPerView: 4,


            },
        }
    })

// live스와이퍼
const swLive = new Swiper(".sw-live" , {
    slidesPerView: 1.3,
    spaceBetween: 27,

    navigation:{
        nextEl: ".live .sw-next",
        prevEl: ".live .sw-prev",
    },
    loop: true,
    
    breakpoints:{
        480:{
            spaceBetween: 32,
            slidesPerView: 1.5,


        },
        1024:{
            spaceBetween: 32,
            slidesPerView: 3,


        },
        1280:{
            spaceBetween: 26,
            slidesPerView: 4,


        },
    }
  })


};




