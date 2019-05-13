importScripts('func.js');

onmessage = (event) => {
    // console.log(event);
    
    postMessage(add(event.data.title + ' ' + event.data.name));
}
