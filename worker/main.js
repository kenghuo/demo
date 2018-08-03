let worker = new Worker('work.js');

worker.postMessage({name:'Kenghuo', title: 'Hello'});

worker.onmessage = function(event){
    console.log(event);

    document.getElementById('title').innerHTML = event.data;
}

worker.onerror = function(error){
    console.log(error);
}