window.addEventListener("DOMContentLoaded", function(){
    let flipPanels = document.querySelector(".hero").children;

    panelDown(0);


    function panelDown(index){
        if(index === flipPanels.length){
            turnPanel((flipPanels.length-1));
            return;
        }
        setTimeout(function(){flipPanels[index].classList.add("move-panel");}, 200);
        setTimeout(function(){panelDown(++index);}, 200);
    }

    function turnPanel(index){
        if(index >= 0){
            setTimeout(function(){flipPanels[index].classList.add("blinds-panel");}, 200);
            setTimeout(function(){turnPanel(--index);}, 200);
        }
    }


});