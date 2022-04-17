const main = async () => {
const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("Contract deployed to:", keyboardsContract.address);

  const keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);
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