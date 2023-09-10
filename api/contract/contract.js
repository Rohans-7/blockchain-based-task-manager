const ABI=require("../ABI.json");
const {Web3}=require('web3');

const web3=new Web3("https://damp-polished-aura.ethereum-sepolia.discover.quiknode.pro/c2dd85e9997b390eff8ed2dc1149ea1f9dbc9d98/");
const contractAddress="0x90ec4477fbe75d3a2a2d16a5fc00f26319b11387"
const contract=new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}