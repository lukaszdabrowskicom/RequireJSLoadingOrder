(function (window) {
    var self = this;

    console.log("module 2 loading...");

    define(
             [
               'Scripts/sync-modules/module3.js'
             ],
             function () {
                 function moduleB() {
                     for (var i = 0; i < 100001; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleBInstance = self.moduleBInstance || new moduleB();

                 window.moduleBInstance = window.moduleBInstance || self;

                 console.log("module 2 loaded...");
             }
         );
})(window)