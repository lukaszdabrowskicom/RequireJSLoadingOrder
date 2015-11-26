(function (window) {
    var self = this;

    console.log("module 9 loading...");

    function moduleI() {
        for (var i = 0; i < 240000; i++) {
            var sdsd = new Date();
        }
    }

    self.moduleIInstance = self.moduleIInstance || new moduleI();
    console.log("module 9 loaded... all deps loaded for module 1");

    window.moduleIInstance = window.moduleIInstance || self;
})(window)