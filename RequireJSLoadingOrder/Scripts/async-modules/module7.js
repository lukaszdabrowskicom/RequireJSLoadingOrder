(function (window) {
    var self = this;

    console.log("module 7 loading...");

    require(
             [
               'Scripts/async-modules/module8.js'
             ],
             function () {
                 function moduleG() {
                     for (var i = 0; i < 3100; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleGInstance = self.moduleGInstance || new moduleG();

                 console.log("mod7 was loaded...");
             }
         );

    window.moduleGInstance = window.moduleGInstance || self;
})(window)