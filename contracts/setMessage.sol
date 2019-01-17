pragma solidity ^0.4.25;

contract SetMessage {
    string public message;

    function setMessage(string _message) public {
        message = _message;
    }
}

