const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const whitelist = require("./funlist.json");
const whitelistLeaves = whitelist.map((x) => keccak256(x));
const tree = new MerkleTree(whitelistLeaves, keccak256, ( sortPairs = true));
const whitelistRootHash = tree.getHexRoot()
console.log(tree.getRoot().toString('hex'))

console.log("Whitelist Roothash", whitelistRootHash)
console.log(whitelist[0])

const hashaddress = keccak256(whitelist[0])
const proof = tree.getHexRoot(hashaddress)
console.log(proof)