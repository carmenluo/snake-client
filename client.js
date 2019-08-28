const net = require('net');
const {ip, port} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: ip,
    port: port
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