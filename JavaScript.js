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



  // product
  
  $(function(){
    // let clicked = false;
    let btnSelect = $(".btn-select")

    let filter =$(".filter")   //篩選器
    let wrapperGridMain = $('.wrapper-grid-main')  //外面大框
    let productCards = $(".product-cards")   //卡片
    
    btnSelect.on('click',function(){
        $(filter).toggleClass('-open')
        $(wrapperGridMain).toggleClass('-open')
        $(productCards).toggleClass('-open')
        console.log(btnSelect)
    })
    

})

})