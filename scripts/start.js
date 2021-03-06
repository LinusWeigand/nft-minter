const main = async () => {
    const [owner, somebodyElse] = await hre.ethers.getSigners();
    const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
    const keyboardsContract = await keyboardsContractFactory.deploy();
    await keyboardsContract.deployed();

    console.log("Contract deployed to:", keyboardsContract.address);

    let keyboards = await keyboardsContract.getKeyboards();
    console.log("We got the keyboards!", keyboards);

    const keyboardTxn = await keyboardsContract.create("A really great keyboard!");
    await keyboardTxn.wait();

    keyboards = await keyboardsContract.getKeyboards();
    console.log("We got the keyboards!", keyboards);

    keyboards = await keyboardsContract.connect(somebodyElse).getKeyboards();
    console.log("And as somebody else", keyboards);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();