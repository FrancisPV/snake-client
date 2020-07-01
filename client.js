const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Hello player, you are now in my game. Good luck and have fun!');
  }); 
  
  conn.on('connect', () => {
    conn.write('Name: FPV');
  });

  conn.on('data', (data) => {
    /* console.log('You ded cause you idled'); */
    console.log(data);
  });
  
  return conn;
}

module.exports = connect;