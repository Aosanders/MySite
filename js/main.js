window.addEventListener("DOMContentLoaded", function(){
    let flipPanels = document.querySelector(".hero");

    panelDown(0);


    function panelDown(index){
        if(index === flipPanels.children.length){
            return setTimeout(()=>turnPanel((flipPanels.children.length-1)), 500);
        }
        setTimeout(()=>flipPanels.children[index].classList.add("move-panel"), 200);
        setTimeout(()=>panelDown(++index), 200);
    }

    function turnPanel(index){
        if(index >= 0){
            setTimeout(()=>flipPanels.children[index].classList.add("blinds-panel"), 200);
            setTimeout(()=>turnPanel(--index), 200);
        }
    }


});