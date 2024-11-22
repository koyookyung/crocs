jQuery(document).ready(function () {

    //2차메뉴 - pc
    $('.menu_pc .gnb>li').mouseover(function () {
        $('.depth02').stop().slideUp(500);
        $(this).find('.depth02').stop().slideDown(500);
        $('#menu_bg').stop().slideDown(500);
    }); 
    $('.menu_pc').mouseleave(function () {
        $('.depth02').stop().slideUp(500);
        $('#menu_bg').stop().slideUp(500);
    });
   
    $('.menu_pc .gnb>li:first-child').mouseover(function () {
        $('#menu_bg').stop().slideUp();
    });
    $('.menu_pc .gnb>li:last-child').mouseover(function () {
        $('#menu_bg').stop().slideUp();
    });

    //2차메뉴 - mobile
    $('.nav_mobile .gnb > li:nth-child(n+2):nth-child(-n+7)').click (function () {
        $(this).siblings('li').toggleClass('on')
        $('.gnb') .toggleClass('on');
        /* $('.nav_mobile .depth01').css({'text-align': 'center'}); */
    });

});//jQuery end

window.onload = () => {

    // 2차메뉴 - mobile
    let menuBtn = document.querySelector('.menu_btn ul li:first-child');
    let mobileNav = document.querySelector('.nav_mobile');
    let body = document.querySelector('body');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        body.classList.toggle('on');
    });

    //탭메뉴 - 지비츠
    let tabMenu = document.querySelectorAll('.jibbitz .tag ul li');
    let itemWrap = document.querySelectorAll('.jibbitz .pc_item_wrap');
    let itemWrapMobile = document.querySelectorAll('.jibbitz .mobile_item_wrap');

    for(let i = 0; i < tabMenu.length; i++) {

        tabMenu[i].addEventListener('click', () => {

            tabMenu.forEach(menuItem => {
                menuItem.classList.remove('active');
            })
            tabMenu[i].classList.add('active');

            itemWrap.forEach(item => {
                item.classList.remove('active');
            })
            itemWrap[i].classList.add('active');

            itemWrapMobile.forEach(item => {
                item.classList.remove('active');
            })
            itemWrapMobile[i].classList.add('active');
        });
    }
    
};//script end
