jQuery(document).ready(function () {

    //2차메뉴
    $('.gnb>li').mouseover(function (){
        $(this).find('.depth02').stop().slideDown(500);
        $('#menu_bg').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.depth02').stop().slideUp(500);
        $('#menu_bg').stop().slideUp(500);
    });
    $('.gnb>li:first-child').mouseover(function () {
        $('#menu_bg').stop();
    });
    $('.gnb>li:last-child').mouseover(function () {
        $('#menu_bg').stop();
    });

    window.onload = () => { // 실행 코드: () =>
        let menuBtn = document.querySelector('.menu_btn ul li:first-child')
        //  let: 변수 선언 (코드가 짧아지도록 이름 변경)
        let mobileNav = document.querySelector('.nav_mobile')

        //menuBtn 클릭했을 때 이벤트 실행
        menuBtn.addEventListener('click', () => {
            //mobile_nav에게 클래스명 active 추가&삭제
            mobileNav.classList.toggle('active'); // classList: 클래스 제어
        });
    } //script end
});