(function (window) {
    var self = this;

    console.log("module 4 loading...");

    require(
             [
               'Scripts/async-modules/module5.js'
             ],
             function () {
                 function moduleD() {
                     for (var i = 0; i < 3111044; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleDInstance = self.moduleDInstance || new moduleD();

                 console.log("mod4 was loaded...");
             }
         );

    window.moduleDInstance = window.moduleDInstance || self;
})(window)