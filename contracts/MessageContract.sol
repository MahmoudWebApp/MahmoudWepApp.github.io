// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageContract {
    string private message;

    event MessageUpdated(string newMessage);

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
        emit MessageUpdated(_newMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}