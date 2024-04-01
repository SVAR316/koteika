

function switchPanel(id){

    let panels = ['editor', 'number', 'bid', 'reservation']
    let buttons = ['editorButton', 'numberButton', 'reservationButton', 'bidButton']

    for(let i = 0; i < panels.length; i++){
        let panel = document.getElementById(panels[i])
        if(i == id){
            panel.setAttribute('style', 'display: block;')
        }else{
            panel.setAttribute('style', 'display: none;')
        }
    }

    for(let i = 0; i < panels.length; i++){
        let button = document.getElementById(buttons[i])
        if(i == id){
            button.classList.add('sidebar__active')
        }else{
            button.classList.remove('sidebar__active')
        }
    }
}