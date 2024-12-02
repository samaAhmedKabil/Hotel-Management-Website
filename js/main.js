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

// start active link
$('a[href^="#"]').click(function(){
    $("li a").removeClass('active');
    $(this).addClass('active');
})
// End active link

// type Effect
let text="Rest and Relaxation";
let index=1;
function autoType(){
    document.getElementById('auto-type').textContent=text.slice(0,index);
    index++;
    if(index>text.length){
        index=0;
    }
}
setInterval(function() {
    autoType()
    
},100)


let index1=1;
function autoSecType(){
    document.getElementById('sec-type').textContent=text.slice(0,index);
    index1++;
    if(index1>text.length){
        index1=0;
    }
}
setInterval(function() {
    autoSecType()
    
},100)


let index2=1;
function autoThirdType(){
    document.getElementById('third-type').textContent=text.slice(0,index);
    index2++;
    if(index2>text.length){
        index2=0;
    }
}
setInterval(function() {
    autoThirdType()
    
},100)