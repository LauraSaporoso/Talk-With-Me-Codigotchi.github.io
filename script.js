// condizione per far funzionare Speech..(comando esistente in javascript) in base al browser, alcuni hanno bisogno di webkit
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = document.getElementById('microphone');
const screen = document.getElementById('screen');
const panelData = document.getElementById('panels-data');

const commands = ['mangia', 'balla', 'dormi'];
const recog = new SpeechRecognition();

mic.addEventListener('click', onStartListening);
 
recog.addEventListener('result', onResult);


function onStartListening() {
    console.log('Start listening..');
    recog.start();
    panelData.classList.add('listening');
}

function onResult(e) {
    const testo = e.results[0][0].transcript;
    console.log(testo);
    const action = commands.find(function(commando) { 
        return testo.toLowerCase().includes(commando); 
    });
    const actionClassname = 'codigotchi-screen_' + action; 
    screen.classList.add(actionClassname); 
    panelData.classList.remove('listening'); 
    setTimeout(function()
    {
      screen.classList.remove(actionClassname);
    }, 3000);
}