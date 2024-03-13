import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('MessageContract', function () {
  let messageContract;

  beforeEach(async function () {
    const MessageContract = await ethers.getContractFactory('MessageContract');
    messageContract = await MessageContract.deploy();
  });

  it('Should set the message', async function () {
    const newMessage = 'Hello, world!';
    await messageContract.setMessage(newMessage);
    expect(await messageContract.getMessage()).to.equal(newMessage);
  });
});