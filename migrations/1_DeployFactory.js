const Factory = artifacts.require("AdenaFactory");

module.exports = async function (deployer,network, addresses) {
    deployer.then(async () => {
    
    const [admin, _] = addresses;
    let wethAddress = "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a";


    await deployer.deploy(Factory, admin);
    
    
})
};
