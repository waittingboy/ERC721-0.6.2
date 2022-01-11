// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC721/ERC721.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/utils/Counters.sol";

contract MyGallery is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _id;

    string _baseURI;

    constructor() ERC721("MyGallery", "MCO") public {
        _baseURI = "https://ipfs.cycan.network/ipfs/";
        _setBaseURI(_baseURI);
    }

    function changeBaseURI(string memory baseURI_) public {
        _setBaseURI(baseURI_);
    }

    function mint(address owner, string memory cid) public returns (uint256) {
        _id.increment();

        uint256 newId = _id.current();
        _mint(owner, newId);
        // save the mapping from token id to cid
        _setTokenURI(newId, cid);

        return newId;
    }
}
