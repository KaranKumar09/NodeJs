const EventEmitter=require('events');
const myEmitter=new EventEmitter();
myEmitter.on('firstevent',(arg1,arg2)=>{
    console.log('Event occurred with arguments: ',arg1,arg2);
});
//once method
myEmitter.once('firstevent',(arg1,arg2)=>{
    console.log('This listener will be executed only once.');
});
for(let i=0;i<2;i++){
    myEmitter.emit('firstevent','Hello','Hi');
}

