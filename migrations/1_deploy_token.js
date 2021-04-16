// deploy POLAR token

const GODToken = artifacts.require('GODToken');

module.exports = function (deployer) {
    deployer.deploy(GODToken);
}
