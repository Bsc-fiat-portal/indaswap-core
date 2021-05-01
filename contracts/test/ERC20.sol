pragma solidity =0.5.16;

import '../IndaswapERC20.sol';

contract ERC20 is IndaswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
