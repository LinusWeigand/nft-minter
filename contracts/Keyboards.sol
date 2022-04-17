//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Keyboards {
    string[] public createKeyboards;

    function getKeyboards() view public returns (string[] memory) {
        return createKeyboards;
    }
}

