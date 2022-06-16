import hardhat from "hardhat";

async function main() {
    console.log("deploy start")

    const YabaiGoblin = await hardhat.ethers.getContractFactory("YabaiGoblin")
    const nft = await YabaiGoblin.deploy()
    console.log(`YabaiGoblin address: ${nft.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
