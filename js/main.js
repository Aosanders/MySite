window.addEventListener("DOMContentLoaded", function(){
    let flipPanels = document.querySelector(".hero");

    panelDown(0, flipPanels);


    function panelDown(index, panels){
        if(index === panels.children.length){
            setTimeout(()=>turnPanel((panels.children.length-1), panels), 500);
            return;
        }
        setTimeout(()=>{
            panels.children[index].classList.add("move-panel");
            panelDown(++index, panels);
        }, 200);
    }

    function turnPanel(index, panels){
        if(index < 0){
            removePanels(panels);
            return;
        }

            setTimeout(()=>{
                panels.children[index].classList.add("blinds-panel");
                turnPanel(--index, panels);
            }, 200);
    }

    function removePanels(panels){
       let panelChildren = panels.getElementsByClassName("flip-panel");
       setTimeout(()=>{
            while(panelChildren.length != 0){
                panels.removeChild(panelChildren[0]);
            }
        },400);
    }


});