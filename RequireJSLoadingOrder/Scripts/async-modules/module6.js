(function (window) {
    var self = this;

    console.log("module 6 loading...");

    require(
             [
               'Scripts/async-modules/module7.js'
             ],
             function () {
                 function moduleF() {
                     for (var i = 0; i < 2410; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleFInstance = self.moduleFInstance || new moduleF();

                 console.log("mod6 was loaded...");
             }
         );

    window.moduleFInstance = window.moduleFInstance || self;
})(window)