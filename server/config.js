module.exports = {
  // ip: getIp(),
  host: 'localhost',
  apiPort: 3030,
  devPort: 7070,
  webpackDevServerPort: 7071,
  prodPort: 6060
}

function getIp () {
  var os = require('os');
  var ifaces = os.networkInterfaces();
  var IPv4s = [];

  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        IPv4s.push(iface.address)
      }
      ++alias;
    })
  })
  return IPv4s[0] || '127.0.0.1'
}