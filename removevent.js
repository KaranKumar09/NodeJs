const EventEmitter=require('events');
const myEmitter=new EventEmitter();

const eventHandler=(arg1,arg2)=>{
    console.log('Event occured with arguments: ',arg1,arg2);
};
//add the event handler
myEmitter.on('firstevent',eventHandler);
for(var i=0;i<3;i++){
    myEmitter.emit('firstevent','Hello','Hii');
    //remove listner by once event 
    if(i==2){
        myEmitter.removeAllListeners('firstevent');
    }

}