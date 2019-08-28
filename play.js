const net = require('net');

const connect = function() {
  const conn =net.creatConnect({
    host: '',
    port: 50541
  });
  conn.setEncoding('utf8');
  return conn;
}
console.log('connecting...');
connect();