const buttons = document.querySelectorAll('button');
console.log(buttons)
const fullScreen = document.getElementsByClassName('floating-button');
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        button.classList.toggle('active');
        let myEvent = button.dataset['command'];
        console.log(myEvent)
        document.execCommand(myEvent, false, null);
    })
})


fullScreen[0].addEventListener('click', ()=>{
    let title = document.getElementsByClassName('title')[0];
    let mainEditor = document.getElementsByClassName('text-editor-main')[0];
    let outputContent = document.getElementsByClassName('contentOutput')[0];
    title.classList.toggle('fullscreen-title');
    mainEditor.classList.toggle('fullscreen-text-editor');
    outputContent.classList.toggle('fullscreen-output');
})