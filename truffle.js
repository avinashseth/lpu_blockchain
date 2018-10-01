module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1", // your blockchain host
      port: 7545, // from ganache
      network_id: "*" // Match any network id
    }
  }
};
