$(function(){
    //用于判断只触发一次
    if( (document.body.clientWidth > 990)){
         fullpage_state = 1;
    $('#dowebok').fullpage({
        scrollingSpeed: 600,
        // navigation: true,
        //滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad:function(anchorLink,nextIndex, index){
            
        },
        
            
            
        //滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
        // nextIndex 是滚动到的“页面”的序号，从1开始计算；
        // direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave:function(index,nextIndex, direction){
        }
    })
    }

    //
    //
    $('.sidebar').click(function(){
        var oper=$('.moibleMask');
        if(oper.hasClass('moibleMaskHide')){
            oper.addClass('moibleMaskShow').removeClass('moibleMaskHide');
             $('html, body').css('overflow', 'hidden');
        }
        else{
            oper.addClass('moibleMaskHide').removeClass('moibleMaskShow');
            $('html, body').css('overflow', '');
        }
    })
    $('.moibleMask').click(function(){
        var oper=$('.moibleMask');
        if(oper.hasClass('moibleMaskHide')){
            oper.addClass('moibleMaskShow').removeClass('moibleMaskHide');
             $('html, body').css('overflow', 'hidden');
        }
        else{
            oper.addClass('moibleMaskHide').removeClass('moibleMaskShow');
            $('html, body').css('overflow', '');
        }
    })
   
   $('.nav_bar li').click(function() {
    var eq = $('.nav_bar li').index($(this));
    // console.log(eq);
    if(eq == 0){
        $('#dowebok').fullpage.moveTo(1, 0);
    }
    if(eq == 1){
        $('#dowebok').fullpage.moveTo(2, 0);
    }
    if(eq == 2){
        $('#dowebok').fullpage.moveTo(3, 0);
    }
    if(eq == 3){
        $('#dowebok').fullpage.moveTo(4, 0);
    }
    if(eq == 4){
        $('#dowebok').fullpage.moveTo(5, 0);
    }
    if(eq == 5){
        $('#dowebok').fullpage.moveTo(6, 0);
    }
    if(eq == 7){
        $('#dowebok').fullpage.moveTo(7, 0);
    }
    
});
            
//    $('.cb-about-sale-counter').each(function () {
    var cnt = $('.cb-about-sale-counter')
    dateStart = new Date('19 Nov 2017 12:00:00 GMT'),
    dateNow=new Date()
    // dateNow = new Date('Wed, 15 Nov 2017 06:18:40 GMT'),
    dateEnd = new Date('19 Dec 2017 12:00:00 GMT');
    var xhr = new XMLHttpRequest();  
    if( !xhr ){  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
    }  
    xhr.open("HEAD",location.href,true);  
    xhr.onreadystatechange=function(){  
        if( xhr.readyState == 4 && xhr.status == 200 ){  
             dateNow=xhr.getResponseHeader("Date");  
        }  
    }  
    xhr.send(null);  
            if (dateEnd > dateNow) {

                var cntDays,
                    cntHours,
                    cntMins,
                    cntSecs;

                cntGetTime();
                cntRenderTime();
                cntRenderPath();

                setInterval(function () {
                    cntGetTime();
                    cntRenderTime();
                }, 1000);

                setInterval(function () {
                    cntRenderPath();
                }, 60000);

                function cntGetTime() {
                    // Now
                    var dateNow = new Date();
                    // Remain
                    var dateDiff = dateEnd - dateNow;
                    // Days
                    cntDays = parseInt(dateDiff / (60 * 60 * 1000 * 24));
                    if (cntDays < 10) cntDays = '0' + cntDays;
                    cntDays = cntDays.toString();
                    // Hours
                    cntHours = parseInt(dateDiff / (60 * 60 * 1000)) % 24;
                    if (cntHours < 10) cntHours = '0' + cntHours;
                    cntHours = cntHours.toString();
                    // Mins
                    cntMins = parseInt(dateDiff / (1000 * 60)) % 60;
                    if (cntMins < 10) cntMins = '0' + cntMins;
                    cntMins = cntMins.toString();
                    // Secs
                    cntSecs = parseInt(dateDiff / 1000) % 60;
                    if (cntSecs < 10) cntSecs = '0' + cntSecs;
                    cntSecs = cntSecs.toString();

                }

                function cntRenderTime() {
                    cnt.find('.cb-days .cb-num').text(cntDays);
                    cnt.find('.cb-hours .cb-num').text(cntHours);
                    cnt.find('.cb-mins .cb-num').text(cntMins);
                    cnt.find('.cb-secs .cb-num').text(cntSecs);
                }

                function cntRenderPath() {
                    var dateNow = new Date(),
                        cntProgress = (dateNow - dateStart) / (dateEnd - dateStart),
                        cntLength = -647;
                    cnt.find('.fill').css('stroke-dashoffset', (cntLength * (1 - cntProgress)) + 'px');
                }
            }
        // });
        // 

})
        //中文
      function zh(){
        //    console.log($("[data-lang]") )
           $("[data-lang]").each(function(v){
            
                $(this).text($(this).attr('data-ch'))
               console.log($("[data-lang]").length)
           })
       }
       //英文
       function eh(){
        $("[data-lang]").each(function(v){
                $(this).text($(this).attr('data-en'))
               
           })
       }  
       function switchLanguage(self){
        var text=$(self).text();
            if($(self).attr('data-en')==text){
                zh()
            }
            if($(self).attr('data-ch')==text){
                eh()
            }
       }
       //发送联系方式
       function submit(self){
        $('.cb-fields ').removeClass('invalid');
        $('.cb-invalid').hide();
        $('.cb-sent').hide();
        $('.cb-notsent').hide();
        var telValue=$(self).prev().val();
        var reg=/^\d{5,}$/;
        if(telValue==''||!reg.test(telValue)){
            
            $('.cb-invalid').show();
            $('.cb-fields ').addClass('invalid')
            return;
        }else{
            
            
            $('.cb-fields button').attr('disabled', 'disabled')
        }
            $.ajax({
              type: 'POST',
              url: 'http://admin.hlqqg168.com/message',
              data: {
                'content':telValue
              },
              success: function(data){
                $('.cb-fields button').removeAttr('disabled');
                $('.cb-sent').show();
              },
              error:function(err) {
                  $('.cb-notsent').text(err)
                  $('.cb-notsent').show();
              },
              dataType: 'json'
            });
       }
        


// function moveUp(){
//     var del = 50;
//     var dur = 200;
//     $('.header').show();
//     $('.section2 .part').eq(0).stop().clearQueue().delay(1 * del).animate({ height: '100%' }, dur, "linear", function () {});
//     $('.section2 .part').eq(1).stop().clearQueue().delay(2 * del).animate({ height: '100%' }, dur, "linear", function () {});
//     $('.section2 .part').eq(2).stop().clearQueue().delay(3 * del).animate({ height: '100%' }, dur, "linear", function () {});
//     $('.section2 .part').eq(3).stop().clearQueue().delay(4 * del).animate({ height: '100%' }, dur, "linear", function () {});
//     $('.section2 .part').eq(4).stop().clearQueue().delay(5 * del).animate({ height: '100%' }, dur, "linear", function () {});
// }
// function moveDown(){
//     var del = 100;
//     var dur = 200;
//     $('.section2 .part').eq(0).stop().clearQueue().delay(5 * del).animate({ height: 0 }, dur, "linear", function () {});
//     $('.section2 .part').eq(1).stop().clearQueue().delay(4 * del).animate({ height: 0 }, dur, "linear", function () {});
//     $('.section2 .part').eq(2).stop().clearQueue().delay(3 * del).animate({ height: 0 }, dur, "linear", function () {});
//     $('.section2 .part').eq(3).stop().clearQueue().delay(2 * del).animate({ height: 0 }, dur, "linear", function () {});
//     $('.section2 .part').eq(4).stop().clearQueue().delay(1 * del).animate({ height: 0 }, dur, "linear", function () {});
//     $('.shadow_bg').hide();

//     // $('.shadow_bg').hide();
//     $('.header').show();
//     $('.section2 .part').css("z-index","1");
//     $('.section2 .part').find('.text').animate({"opacity":"1"},300).show();
//     $('.section2 .part').find('.num').animate({"opacity":"1"},300).show();
//     $('.detail_list .detail_box').animate({"width":"0","opacity":"0","padding":"0"},500);
// }

