//template_is98rs9
// service_u9pd5bk




let ismodalopen=false;
let contrastToggle=false;
function tooglecontrast(){
    contrastToggle= !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark--theme"
    }
    else{
   
    document.body.classList.remove("dark--theme")
    }
}
function contact(event){
    event.preventDefault();
   const loading=document.querySelector('.modal__overlay--loading');
    const success=document.querySelector('.modal__overlay--success');
    loading.classList +=" modal__overlay--visible";
    emailjs
    .sendForm(
        'service_2dee82p',
        'template_c0wfeot',
        event.target,
        'O4uiWlK5ENXQEV0ca'
        ).then(()=>{
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(()=>{
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable.please contact me directly on asparshraaz177@gmail.com"
            );
        }) } 

let ismodelopen=false;
function toggleModal(){

    if(ismodelopen){
        ismodelopen=false;
        return document.body.classList.remove("modal--open");
    }
    ismodelopen=true;
    
   document.body.classList +=" modal--open";
}
