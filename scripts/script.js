var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');
 var body = document.body;



// javascript for quick view button
var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
    body.classList.add('noscroll');
    // popupViews[popupClick].style.overflowY= "scroll";
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () =>{
        popup(i);
    });
});

// javascript for close btn
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
            popupView.style.overflowY= "hidden";
            body.classList.remove('noscroll');
        });
    });
});

// javascript for close btn


// // Adiciona um listener de evento para cada 'popup-view'
// popupViews.forEach((popupView) => {
//     popupView.addEventListener("click", () => {
//         // Remove a classe 'active' e ajusta o estilo apenas para o popup específico clicado
//         popupView.classList.remove('active');
//         popupView.style.overflowY = "hidden";
        
//         // Remove a classe 'noscroll' do corpo
//         document.body.classList.remove('noscroll');
//     });
// });




AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    offset: 0, // offset (in px) from the original trigger point
    once: true, // whether animation should happen only once - while scrolling down

});
