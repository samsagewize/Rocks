// const CONTRACT = '0x4CF79252EA6861c4338284e1A1F724d4e7ef667b';
// const RPC = 'https://rpc.hyperliquid.xyz/evm';
// const SELECTOR = '0x54f82ed7'; // keccak256('buildSVG(uint256)')
// const TOTAL = 1111;
// const BATCH_SIZE = 50;
// const container = document.getElementById('container');
// const loadingMore = document.getElementById('loading-more');
// const progress = document.getElementById('progress');
// const searchInput = document.getElementById('search');

class HyperRocksConfig {
    static config = {
        CONTRACT: '0x4CF79252EA6861c4338284e1A1F724d4e7ef667b',
        RPC: 'https://rpc.hyperliquid.xyz/evm',
        SELECTOR: '0x54f82ed7', // keccak256('buildSVG(uint256)')
        TOTAL: 1111,
        BATCH_SIZE: 50,
        container: document.getElementById('container'),
        loadingMore: document.getElementById('loading-more'),
        progress: document.getElementById('progress'),
        searchInput: document.getElementById('search')
    }
}

export default HyperRocksConfig;