// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC721A/ERC721A.sol";

contract YabaiGoblin is Ownable, ERC721A {

    event SetBaseURI(string uri);

    string internal __baseURI;

    constructor() ERC721A("YABAI GOBLIN", "YAGO") {
        __baseURI = "";
    }

    function _baseURI() internal view override returns (string memory) {
        return __baseURI;
    }

    function setBaseURI(string calldata uri) external onlyOwner {
        __baseURI = uri;
        emit SetBaseURI(uri);
    }
}
