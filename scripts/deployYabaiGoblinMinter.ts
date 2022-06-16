import hardhat from "hardhat";

async function main() {
    console.log("deploy start")

    const Minter = await hardhat.ethers.getContractFactory("YabaiGoblinMinter")
    const minter = await Minter.deploy("0xe719516E979D64c641bd92B58591421F8B47d9E8")
    console.log(`Minter address: ${minter.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
