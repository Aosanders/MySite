window.addEventListener("DOMContentLoaded", function(){
    let flipPanels = document.querySelector(".hero").children;

    panelDown(0);

    function panelDown(index){
        if(index < flipPanels.length){
            setTimeout(function(){flipPanels[index].classList.add("move-panel");}, 200);
            setTimeout(function(){panelDown(++index);}, 200);
        }
    }


});