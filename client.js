const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);

  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: vvv");

  });
  // conn.on('connect', () => {
  //   conn.write("Move: up");

  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 100);
  // })
  return conn;
}
module.exports = { connect };