const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
 console.log(`🌀 "Event"'ler kullanıma hazır`);
  client.on('message', reqEvent('message'));
  
};
