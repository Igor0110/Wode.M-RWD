window.addEventListener("load",function(){

    // 淡入視口
    let oth = $(window).innerHeight();
    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        let all = sct+oth;
        $(".slideIn").each(function(){
            let sld = $(this).offset().top;
            if(all >sld){
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });
    });



    // <!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

})