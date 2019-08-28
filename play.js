const net = require('net');

const {connect} = require('./client');

const setupInput = function (){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}
function handleUserInput(stdin){
  stdin.on('data',(key)=>{
    if (key === '\u0003'){
      process.exit();
    }
  })
}
console.log('connecting...');
setupInput();
connect();
