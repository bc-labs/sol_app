export default {
  Token: {
    // Every time you deploy a contract, you have to update address.
    address: "0xffcbaacdc2c88662372b79f6b07d8c2d7c283be7",
    // Every time you change the contract interface, you have to update abi.
    abi: [
      {
        constant: false,
        inputs: [
          {
            name: "_message",
            type: "string"
          }
        ],
        name: "setMessage",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "message",
        outputs: [
          {
            name: "",
            type: "string"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ]
  }
};
