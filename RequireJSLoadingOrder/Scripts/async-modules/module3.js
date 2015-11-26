(function (window) {
    var self = this;

    console.log("module 3 loading...");

    require(
             [
               'Scripts/async-modules/module4.js'
             ],
             function () {

                 function moduleC() {
                     for (var i = 0; i < 500000; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleCInstance = self.moduleCInstance || new moduleC();

                 console.log("mod3 was loaded...");
             }
         );

    window.moduleCInstance = window.moduleCInstance || self;
})(window)