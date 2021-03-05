ttFMNtargetNode = document.querySelector('.chat .messages');
ttFMNtargetNodeconfig = { attributes: true, childList: true, subtree: true, characterData: true };

ttFMNcallback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    
    if (mutation.type === "childList" && mutation.addedNodes.length === 1) {
      if (mutation.addedNodes[0].childNodes.length === 2 && mutation.addedNodes[0].childNodes[0].classList.length === 1 && mutation.addedNodes[0].childNodes[0].classList[0] === "subject") {
        let elem2 = document.querySelector('.awesome-button');
        var evt = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
var moveCont=document.querySelector("#maindiv");
var move= new MouseEvent('mousemove', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        
moveCont.dispatchEvent(move);
moveCont.dispatchEvent(move);


        var timeout = Math.floor(Math.random() * 1000) + 100;
        setTimeout(function () {
          var canceled = !elem2.dispatchEvent(evt);
        }, timeout);
      }
    }
  }
};
ttFMNobserver = new MutationObserver(ttFMNcallback);
ttFMNobserver.observe(ttFMNtargetNode, ttFMNtargetNodeconfig);
console.log('TTFM Extras Loaded!');