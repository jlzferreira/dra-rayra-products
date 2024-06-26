var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');


// javascript for quick view button
var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
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
        });
    });
});



AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    offset: 0, // offset (in px) from the original trigger point
    once: true, // whether animation should happen only once - while scrolling down

});
