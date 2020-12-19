const buttons = document.querySelectorAll('button');
const fullScreen = document.getElementsByClassName('floating-button');
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        let myEvent = button.dataset['command'];
        if(myEvent === "insertImage" || myEvent === "createLink"){
            let url = prompt("Enter your Link Here: ");
            document.execCommand(myEvent, false, url);
        }
        else if(myEvent === "formatBlock"){
            let formattingValue = button.dataset['block'];
            document.execCommand(myEvent, false, formattingValue);
        }
        else{
        document.execCommand(myEvent, false, null);
        }
    })
})

// for (let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', ()=>{
        
        
//         let myEvent = buttons[i].dataset['command'];
//         console.log(myEvent);

//         if(buttons[i].name === "active"){
//             buttons[i].classList.toggle('active');
//         }

//         if(myEvent === "insertImage" || myEvent === "createLink"){
//             let url = prompt("Enter your Link Here: ");
//             document.execCommand(myEvent, false, url);
//         }
//         else{
//         document.execCommand(myEvent, false, null);
//         }
//     })
// }


fullScreen[0].addEventListener('click', ()=>{
    let title = document.getElementsByClassName('title')[0];
    let mainEditor = document.getElementsByClassName('text-editor-main')[0];
    let outputContent = document.getElementsByClassName('contentOutput')[0];
    title.classList.toggle('fullscreen-title');
    mainEditor.classList.toggle('fullscreen-text-editor');
    outputContent.classList.toggle('fullscreen-output');
    if (outputContent.classList.contains('fullscreen-output')){
        fullScreen[0].childNodes[0].classList.remove('fa-expand-arrows-alt');
        fullScreen[0].childNodes[0].classList.add('fa-compress-arrows-alt');
    }
    else{
        fullScreen[0].childNodes[0].classList.add('fa-expand-arrows-alt');
        fullScreen[0].childNodes[0].classList.remove('fa-compress-arrows-alt');
    }
})