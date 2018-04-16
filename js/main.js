window.addEventListener("DOMContentLoaded", function(){
    let flipPanels = document.querySelector(".hero");

    panelDown(0);


    function panelDown(index){
        if(index === flipPanels.children.length){
            setTimeout(()=>turnPanel((flipPanels.children.length-1)), 500);
            return;
        }
        setTimeout(()=>flipPanels.children[index].classList.add("move-panel"), 200);
        setTimeout(()=>panelDown(++index), 200);
    }

    function turnPanel(index){
        if(index >= 0){
            setTimeout(()=>flipPanels.children[index].classList.add("blinds-panel"), 200);
            setTimeout(()=>turnPanel(--index), 200);
        }

        else{
            removePanels();
        }
    }

    function removePanels(){
       let panels = flipPanels.getElementsByClassName("flip-panel");
       setTimeout(()=>{
            while(panels.length != 0){
                flipPanels.removeChild(panels[0]);
            }
        },400);
    }


});