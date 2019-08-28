let connection;
const setupInput = function (conn){
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

 // stdin.resume();
 handleUserInput(stdin);
  // console.log(input);
  // stdin.on('input',(input)=>{
  //   connection.write(input);
  // })
  return stdin;
}
function handleUserInput(stdin){
  stdin.on('data',(key)=>{
    if (key === '\u0003'){
      process.exit();
    }
    if (key === 'w'){
      connection.write("Move: up");
    };
    if (key === 'a'){
      connection.write("Move: left");
    };
    if (key === 'd'){
      connection.write("Move: right");
    }
    if (key === 's'){
      connection.write("Move: down");
    }
    if (key === 'i'){
      connection.write("Say: Iwin");
    }
    if (key === 'u'){
      connection.write("Say: lose");
    }
  })
}
module.exports = {setupInput};