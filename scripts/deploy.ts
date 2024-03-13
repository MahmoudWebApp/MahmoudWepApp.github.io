import { ethers } from 'hardhat';

async function main() {

    const MessageContract = await ethers.deployContract('MessageContract');
   await MessageContract.waitForDeployment();
   console.log(`deployed to ${MessageContract.target}`);
   

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
