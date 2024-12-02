// start up button

let aboutoffset=$('#about').offset().top;

function staybgcolornavbar(){
    let scrolltop=$(window).scrollTop();
    
    if(scrolltop>aboutoffset){
        $('#main-nav').css('background-color','grey');
        $('#btnup').fadeIn(10);
    }
    else{
        $('#main-nav').css('background-color','transparent');
        $('#btnup').fadeOut(10);
    }
}
staybgcolornavbar();
$(window).scroll(()=>{
    staybgcolornavbar();
    
})
$(window).scroll(()=>{
    moveup();
    
})
$('#btnup').click(()=>{
    $('body,html').animate({scrollTop:0},10)
})

// end up button