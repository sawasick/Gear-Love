(function(d) {
    var config = {
      kitId: 'fge0uxc',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

//画面トップからのスクロール量をコンソールに表示
$(function() {
 
  // スクロールしたら発動
  $(window).scroll(function() {
 
    // スクロール量を変数に格納
    var sc = $(this).scrollTop();
    var opa_top = 1 - sc / 15225 ;
    var opa_middle = 1 - (sc-15225) / 15225 ;
    var opa_gear = 1 - ((sc-30500) / 4450) ;
    var opa_bottom = 1 - ((sc-36150) / 2500) ;
 
    // HTMLにスクロール量を表示
    console.log("sc"+sc) ;

    if(opa_top>=0){
        $('.bg_top').css({'opacity': opa_top}) ;
        //console.log("opa_top"+opa_top) ;  
    }    

    if(opa_middle>=0){
        $('.bg_middle').css({'opacity': opa_middle}) ;
        //console.log("opa_middle"+opa_middle) ;  
    }

    if(opa_gear>=0){
        $('.gear').css({'opacity': opa_gear}) ;

        $('.gear13').css({'opacity': opa_gear}) ;
        //console.log("opa_gear13は"+opa_gear) ; 

        $('.gear21').css({'opacity': opa_gear}) ;
        //console.log("opa_gear21は"+opa_gear) ; 
    }

    if(opa_bottom>=0){
        $('.bg_bottom').css({'opacity': opa_bottom}) ;
        //console.log("opa_bottomは"+opa_bottom) ; 
    }
    if(5350<=sc){
        $('.con1').css({'opacity': 1 - ((sc-5350)/430)}) ;
    }

  });
});


//openingの背景色の変化
$(function(){
    $(".opening").scrollingBackgroundColor({
        from: "#666666" ,
        to: "#c6c6c6" ,
        target: '.opening' ,
        watch: 'body' ,
    }) ;
}) ;

//openingの背景の透明度
$(window).on('scroll', function(){
    // スクロール時に実行する処理
    var sc = $(window).scrollTop() ;
    //scが1500から減少して2500で完全透明
    if(1500<=sc && sc<=2500){
        var opacity = 1 - ((sc - 1500) / 1000) ;
        $('.opening').css({'opacity': opacity}) ;
    }
    else if(sc==0){
        $('.opening').css({'opacity': 1}) ;
    }
  });

//opening_titleの文字の透明度
// コントローラー
$(function(){
    //位置を一定で固定
    var controller = new ScrollMagic();
    var oh = window.outerHeight ;
    var dur = oh / 1080 ;///opening_introのheight分足す
    var off = oh / 1080 ;

    var scene1 = new ScrollScene({
        duration: 1300,  // スタートから まで
        offset: off * 970      // スタートは
    })
    .setPin(".opening_title") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene2 = new ScrollScene({
        duration: 1000,  // スタートから まで
        offset: 4350      // スタートは
    })
    .setPin(".con1") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene3 = new ScrollScene({
        duration: 1000,  // スタートから まで
        offset: 7700      // スタートは
    })
    .setPin(".con2") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene4 = new ScrollScene({
        duration: 1000,  // スタートから まで
        offset: 10550     // スタートは
    })
    .setPin(".con3") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene5 = new ScrollScene({
        duration: 1000,  // スタートから まで
        offset: 12600     // スタートは
    })
    .setPin(".con4") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene6 = new ScrollScene({
        duration: 1000,  // スタートから まで
        offset: 15600     // スタートは
    })
    .setPin(".con5") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene7 = new ScrollScene({
        duration: 1000,  // スタートから まで
        offset: 17700     // スタートは
    })
    .setPin(".con6") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene8 = new ScrollScene({
        duration: 4000,  // スタートから まで
        offset: 20600     // スタートは
    })
    .setPin(".con7") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene9 = new ScrollScene({
        duration: 1250,  // スタートから まで
        offset: 23200     // スタートは
    })
    .setPin(".con8") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene10 = new ScrollScene({
        duration: 4000,  // スタートから まで
        offset: 27700     // スタートは
    })
    .setPin(".con9") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene11 = new ScrollScene({
        duration: 1200,  // スタートから まで
        offset: 30500     // スタートは
    })
    .setPin(".con10") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene12 = new ScrollScene({
        duration: 1200,  // スタートから まで
        offset: 34950     // スタートは
    })
    .setPin(".con11") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    var scene13 = new ScrollScene({
        duration: 1200,  // スタートから まで
        offset: 38650     // スタートは
    })
    .setPin(".con12") // どの要素を止めるか
    .addTo(controller); // コントローラーに渡す

    //透明度
    var $basicMove = $(".opening_title");
    var scene2= new ScrollScene({
        triggerElement: ".opening_title",
        duration: dur ,
        triggerHook : "onLeave"
    })
    .on("progress", function (prog) {
        var p = prog.progress;
        $basicMove.css({
            opacity: 2 * p - 1 ,
            top : 200 - (200 * p)
        });
    })
    .addTo(controller);
}) ;

//歯車の回転
var speed13 = -0.05 ;
var speed21 = (speed13 * 13 / 21 * (-1))  ;

$(function() {
 var rotate = function(gear_13, angle) {
  gear_13.css({
  "transform" : "rotate("+angle+"deg)"
  });
 }
 $(window).scroll(function(){
  rotate($(".gear_13"), $(window).scrollTop() * speed13);
 })
});

$(function() {
    var rotate = function(gear_21, angle) {
     gear_21.css({
     "transform" : "rotate("+angle+"deg)"
     });
    }
    $(window).scroll(function(){
     rotate($(".gear_21"), $(window).scrollTop() * speed21);
    })
   });

   var onoff = 0 ;

$(function () {
    var audioBtn = $('.audio_button'),
    audioWrap = $('.audio_wrap'),
    audio = document.getElementById('audio');
  
    audioBtn.on('click', function () {
      if( audioWrap.hasClass('play') ) {
        audio.pause();
        audioWrap.removeClass('play');
        onoff = 0 ;
      } else {
        audio.play();
        audioWrap.addClass('play');
        onoff = 1 ;
      }
    });
  });

$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});

  $(function(){
        $('.audio_button').click(function(){

            console.log("onoffは"+onoff);
            if(onoff==0){
                sc = 0 ;
                window.location.reload();
            }
            else if(onoff==1){
                var speed = 35000;
                var position = 3550;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 7000 ; position = 6800 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 5000 ; position = 9550 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 2500 ; position = 11500 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 5000 ; position = 14450 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 2000 ; position = 16000 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 3000 ; position = 18800 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 6000 ; position = 21700 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 6000 ; position = 24500 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 6000 ; position = 28000 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 6000 ; position = 31000 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                speed = 17000 ; position = 39000 ;
                $("html, body").animate({scrollTop:position}, speed, "swing");

                onoff = 0 ;
            }
            return false;
        });
    });
    