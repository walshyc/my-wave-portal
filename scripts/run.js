const main = async () => {
    const ballContractFactory = await hre.ethers.getContractFactory('BallPortal');
    const ballContract = await ballContractFactory.deploy();
    await ballContract.deployed();
//    console.log(ballContract)
    console.log("Contract depolyed to: ", ballContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();