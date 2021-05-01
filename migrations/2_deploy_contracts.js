const Factory = artifacts.require("IndaswapFactory.sol");

module.exports = async function (deployer) {
  await deployer.deploy(Factory, "0xa291190c69f360E8969F62047de98c3Dc0b87D59");
  const factory = await Factory.deployed()

  console.log('Factory address: ', factory.address)
  console.log('INIT_CODE_PAIR_HASH:', await factory.methods['INIT_CODE_PAIR_HASH()'].call())
};
