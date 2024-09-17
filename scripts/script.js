var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');
 var body = document.body;
 var menu = document.getElementsByClassName('sidebar');



// javascript for quick view button
var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
    body.classList.add('noscroll');
    menu[0].style.display = "none";
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
            menu[0].style.display = "block";
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


document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links da barra de navegação
    const links = document.querySelectorAll('.nav li');

    // Adiciona o evento de clique em cada link
    links.forEach(function(link, i) {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            links.forEach(function(item) {
                item.classList.remove('active');
            });

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
            // popup(i);
        });
    });
});