// window.addEventListener("load",function(){

    // 淡入視口
    let oth = $(window).innerHeight();
    $(function(){
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
    })




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




  //收藏 愛心
  //加入收藏 或 取消收藏
function switchFavorite(collect){
  let heart = collect.target;
  console.log("heart");

  if(heart.title == "加入收藏"){
    heart.src = "heart_red.png";
    heart.title = "取消收藏";
  }else{
    heart.src = "heart_white.png";
    heart.title = "加入收藏";
  }
  // document.getElementById("heart").src = "heart_red.png"
}

function init(){
  //設定[加入收藏 或 取消收藏]的點按事件
  //什麼事? 發生在哪一個物件上? 做什麼?
  document.getElementById("regular_heart").onclick = switchFavorite;
 
}//init
window.addEventListener("load", init, false);

// })