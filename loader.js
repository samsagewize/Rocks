let config = HyperRocksConfig.config;


class HyperRocksLoader {
    constructor() { 
        return
    }

    _config = config;

    loadConfig(rpc, ca, selector, total, batchSize, container, loadingMore, progress, searchInput) {
        this._config = {
            rpc,
            ca,
            selector: selector || this._config.selector,
            total: total || this._config.total,
            batchSize: batchSize || this._config.batchSize,
            container: container || this._config.container,
            loadingMore: loadingMore || this._config.loadingMore,
            progress: progress || this._config.progress,
            searchInput: searchInput || this._config.searchInput
        }
    }
}