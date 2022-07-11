require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name remember machine slow gloom clog slot gentle'; 
let testAccounts = [
"0xe0eab7463e3c72308b97ec2958288b2ddae2dd5f652fad2beeeac3a743ad09ff",
"0xf9be8f1d04290b6ecfadf5bb42944427f292b7e0c8f4886c9366653abd0f464e",
"0x9c29628e780efae339efd3f877330478561783d225cdb8a75ef291c648f044b0",
"0x05bc0edca3eae4a6a9927b61254538b0ba04c0a6e1dd0865a6f5477d7cadaa99",
"0x60da23a89a7601b7bb5e8f9cea264f473ce1b9e0906e4c7f18e955ec4ac708d2",
"0x20050222b0adc5fb50a611743bc1fd9a523726d2186b289458930b70095534bd",
"0x6023b2a71e3c8965d49302abc32b74e55f08f460e27e91d5b7fd036742b14413",
"0xf82d8e854c1792720b2876023b2d51e6e14fbe2798160d5f4ebd3abb6e018673",
"0xfd760feed1fd0aca09088b257823c4bb75695c9a957deb619001bde4603b0904",
"0x83355fcfc94c55dab5775e4d255ecb750b4da6a70f1cf90980d04d5536b4bcb8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


