(function (window) {
    var self = this;

    console.log("module 8 loading...");

    require(
             [
               'Scripts/async-modules/module9.js'
             ],
             function () {
                 function moduleH() {
                     for (var i = 0; i < 29666; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleHInstance = self.moduleHInstance || new moduleH();

                 console.log("mod8 was loaded...");
             }
         );

    window.moduleHInstance = window.moduleHInstance || self;
})(window)