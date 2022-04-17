//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Keyboards {
    string[] public createKeyboards;

    function getKeyboards() view public returns (string[] memory) {
        return createKeyboards;
    }

    function create(string calldata _description) external {
        createKeyboards.push(_description);
    }
}

