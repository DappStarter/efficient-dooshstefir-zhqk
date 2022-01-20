require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn prosper hunt knee sure traffic'; 
let testAccounts = [
"0xdc40f72a4a3cc0a0cd286f7334021dbb23bfda84bb05ead869b980226c54ddf0",
"0x46c8ff9a8c657931b6e5bbab4085df1668085036512d4e0a10b437929a5e94f3",
"0x2d24e423c722c1777d0add9d7dec950a126fe21182e279149f3ae700ad105ca4",
"0x5ba6546d914624eb4bbe8da9cdb2b7c82145288a4eb61400c1bee0c37af55928",
"0x3fba2b6725f9d84577dd9e7564e108d9db1e79c3a81502a11d57da7dfca5a1ba",
"0xed869da1e2fc0ed02995069a2d5c5c466230d7e0f5d3c8ecc18abde15bdabe50",
"0x3d59786e157f41dc88792f3ce4766e50febcbf013887f7ce684cb4756e65fe82",
"0xde7c7af10523d495a4685569655d19e5caafb3ab5ce025b5b72c23b2d1415c38",
"0x8a5d204cda37a95b4784b1bb8dc8302ea1e7120c9dd12cc2eb76501f6d0752ec",
"0x219cdc9271500d0f40526d3b2e57ab2a285eb217df602f6a316d0ebbc08d8787"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

