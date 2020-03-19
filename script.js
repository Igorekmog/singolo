const NAV_MENU = document.getElementById('nav-menu');
const IMG_BORD = document.getElementById('portfolio-img');
const TAGS_ACT = document.getElementById('portfolio-tags');
const Slider = document.getElementById('slider');
const Slider1 = document.getElementById('slider-1');
const Slider2 = document.getElementById('slider-2');
const LEFT = document.getElementById('left');
const Right = document.getElementById('right');
const imgArray = document.getElementById('portfolio-img');
const SubButton = document.getElementById('submit-btn');
const ClsButton = document.getElementById('close-btn');
let currentPage = 0;
let horPhoneDisplay = 0;
let vertPhoneDisplay = 0;
let ActiveSlide = document.getElementById('slider-1');
window.onload = () => {
Slider2.style.display='none';
document.getElementById('horiz-disp').style.display="none";
document.getElementById('vert-disp').style.display="none";
}
// Header
NAV_MENU.addEventListener('click',(event) =>{
NAV_MENU.querySelectorAll('a').forEach(el => {
    el.classList.remove('active')});
event.target.classList.add('active');
});

document.addEventListener('scroll', onScroll);

function onScroll(event){
  const Pos =  window.scrollY;
  document.querySelectorAll('.wrapper>div').forEach((el)=>{
      el.getAttribute('id');
        if(el.offsetTop <= Pos  && (el.offsetTop+el.offsetHeight) > Pos){
        NAV_MENU.querySelectorAll('a').forEach(a =>
            {if(el.getAttribute('id')==null){}else{
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');}
            }    
            });

    }
    });
}


// Slider
LEFT.addEventListener('click',(event) =>{
    let slider1left = 0;
    let slider2left = 0;
    if(currentPage==1) {
        Slider1.style.left = '1020px';
        Slider1.style.display = "";
        Slider2.style.left = '0px';
        ActiveSlide = document.getElementById('slider-2');
        currentPage=0;
        slider1left = 1020;
        slider2left = 0;
    }
    else {
    if(currentPage==0) {
        Slider2.style.left = '1020px';
        Slider2.style.display = "";
        Slider1.style.left = '0px';
        ActiveSlide = document.getElementById('slider-1');
        currentPage=1;
        slider2left = 1020;
        slider1left = 0; 
    }}
    let interval = setInterval(function(){
            if(ActiveSlide.style.left==='-1020px') {
                ActiveSlide.style.left='0px';
                ActiveSlide.style.display='none';
                clearInterval(interval);
            return;
           }
           slider1left -=20;
           slider2left -=20;
           Slider1.style.left = `${slider1left}px`;
           Slider2.style.left = `${slider2left}px`;
    }, 1);});

    Right.addEventListener('click',(event) =>{
        let slider1left = 0;
        let slider2left = 0;
        if(currentPage==1) {
            Slider1.style.left = '-1020px';
            Slider1.style.display = "";
            Slider2.style.left = '0px';
            ActiveSlide = document.getElementById('slider-2');
            currentPage=0;
            slider1left = -1020;
            slider2left = 0;
        }
        else {
        if(currentPage==0) {
            Slider2.style.left = '-1020px';
            Slider2.style.display = "";
            Slider1.style.left = '0px';
            ActiveSlide = document.getElementById('slider-1');
            currentPage=1;
            slider2left = -1020;
            slider1left = 0; 
        }}
        let interval = setInterval(function(){
                if(ActiveSlide.style.left==='1020px') {
                    ActiveSlide.style.left='0px';
                    ActiveSlide.style.display='none';
                    clearInterval(interval);
                return;
               }
               slider1left +=20;
               slider2left +=20;
               Slider1.style.left = `${slider1left}px`;
               Slider2.style.left = `${slider2left}px`;
        }, 1);});

        document.getElementById('home-horiz').addEventListener('click',(event) =>{ 
            if(document.getElementById('horiz-disp').style.display==="none")
                document.getElementById('horiz-disp').style.display="";
                else 
                document.getElementById('horiz-disp').style.display="none";
        });

        document.getElementById('home-vert').addEventListener('click',(event) =>{ 
            if(document.getElementById('vert-disp').style.display==="none")
                document.getElementById('vert-disp').style.display="";
                else 
                document.getElementById('vert-disp').style.display="none";
        });
  
// Portfolio
TAGS_ACT.addEventListener('click',(event) =>{
    TAGS_ACT.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
    event.target.classList.add('tag_selected');
    let images = imgArray.querySelectorAll('img');
    for(let i = images.length-1; i>0;i--)
    {   let j = Math.floor(Math.random()*(i+1));
        // [images[i],images[j]] = [images[j], images[i]];
        imgArray.insertBefore(images[j], images[i]);
    }
});

IMG_BORD.addEventListener('click',(event) =>{
    IMG_BORD.querySelectorAll('img').forEach(el => el.classList.remove('img-border'));
    event.target.classList.add('img-border');
    });

// Form
SubButton.addEventListener('click', checkForm, true);
   function checkForm(event)     {
    event.preventDefault();
    let formName = document.querySelector('#name').value;
    let formEmail = document.querySelector('#email').value;
    if (formName == '' || formEmail == '') {
        return false;
    }
    document.querySelector('#message-block').classList.remove('hidden-msg');
    let subject = document.querySelector('#subject').value;
    let description = document.querySelector('#description').value;
    if(subject=='')
    document.getElementById("result-subject").innerText='No subject';
    else
    document.getElementById("result-subject").innerText='Subject: '+subject;
    if(description=='')
    document.getElementById("result-description").innerText='No description';
    else
    document.getElementById("result-description").innerText='Description: '+description;

    }

ClsButton.addEventListener('click',(event) =>{
    document.querySelector('#message-block').classList.add('hidden-msg');
    document.querySelector('.content__form').reset();
    });