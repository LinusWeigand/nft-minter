const main = async () => {
    const keyboardContractFactory = await hre.ethers.getContractFactory("Keyboards");
    const keyboardsContract = await keyBoardsContractFactory.deploy();
    await keyboardContract.deploy();

    console.log("Contract deployed to:", keyboardsContract.address);

    const keyboards = await keyboardContract.getKeyboards();
    console.log("We got the keyboards!", keyboards);
}

const runMain = async () => {
    try {
        main();
        process.exit(0);
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();