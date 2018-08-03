onmessage = (event) => {
    console.log(event);
    
    postMessage(event.data.title + ' ' + event.data.name);
}

