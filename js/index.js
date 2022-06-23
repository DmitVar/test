function app(){
    let callMeButton = document.getElementById('phone__button');
    let mobileCallMeButton = document.getElementById('mobile-phone__button');
    let modalWindowCallMe = document.querySelector('.modalWindowCallMe');
    let modalWindaowCallBack = document.querySelector('.modalWindowCallBack');
    let checkbox = document.getElementById('checkbox');
    let closeModalWindow = document.querySelector('.close');
    let sendApplication = document.querySelector('#send__application');

    let burger = document.getElementById('burger');
    let mobileMenu = document.getElementById('menu');


    function showModalWindowCallMe(){
        modalWindowCallMe.classList.toggle('modal__invisible');
    }
    
    
    callMeButton.addEventListener('click', showModalWindowCallMe);
    mobileCallMeButton.addEventListener('click', showModalWindowCallMe);
    closeModalWindow.addEventListener('click', showModalWindowCallMe);
    sendApplication.addEventListener('click', () =>{
        if(checkbox.checked == true){
            showModalWindowCallMe();
            modalWindaowCallBack.classList.toggle('modal__invisible');
            setTimeout(() =>{
                modalWindaowCallBack.classList.toggle('modal__invisible');
            }, 2000)
        }
    })
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile__invisible');
        mobileMenu.classList.contains('mobile__invisible') ? burger.setAttribute("src", "image/burger.svg") : burger.setAttribute("src", "image/close.svg");
    })
}
app();
