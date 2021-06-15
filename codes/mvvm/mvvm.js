function MVVM(options = {}) {
    console.log(options);
    this.$options = options;
    let data = this._data = this.$options.data;
    let me = this;

    Object.keys(data).forEach(key => {
        me._proxyData(key);
    });

    this._initComputed();
    
    observe(data, me);

    this.$compile = new Compile(options.el || document.body, me);
}

MVVM.prototype = {
    constructor: MVVM,
    _proxyData: function(key) {
        let me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get() {
                return me._data[key];
            },
            set(newVal) {
                if(newVal === me._data[key]) return;
                me._data[key] = newVal;
            }
        })
    },
    _initComputed() {
        let me = this;
        let computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(key => {
                console.log(computed[key]);
                Object.defineProperty(me, key, {
                    // configurable: false,
                    // enumerable: true,
                    get: typeof computed[key] === "function" ? computed[key] : computed[key].get,
                    set: typeof computed[key] === "function" ? function() {} : computed[key].set,
                    // set: function() {}
                });
            })
        }
    },
    $watch(key, cb, options) {
        new Watcher(this, key, cb);
    }
}