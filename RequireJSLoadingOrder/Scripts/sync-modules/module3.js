(function (window) {
    var self = this;

    console.log("module 3 loading...");

    function moduleC() {
        for (var i = 0; i < 500000; i++) {
            var sdsd = new Date();
        }
    }

    self.moduleCInstance = self.moduleCInstance || new moduleC();

    window.moduleCInstance = window.moduleCInstance || self;

    console.log("module 3 loaded...");
})(window)