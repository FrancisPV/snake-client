const net = require('net');
const { IP, PORT } = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Hello player, you are now in my game. Good luck and have fun!');

    conn.write('Name: FPV');
   /*  conn.write('Move: down');
    conn.write('Move: down');
    conn.write('Move: left');
    conn.write('Move: left'); 
    setInterval(() => {
      conn.write('Move: up');
    }, 1000) */
  });



  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
}

module.exports = { connect };