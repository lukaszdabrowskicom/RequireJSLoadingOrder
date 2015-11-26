(function (window) {
    var self = this;

    console.log("module 5 loading...");

    require(
             [
               'Scripts/async-modules/module6.js'
             ],
             function () {

                 function moduleE() {
                     for (var i = 0; i < 341133; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleEInstance = self.moduleEInstance || new moduleE();
                 console.log("mod5 was loaded...");
             }
         );

    window.moduleEInstance = window.moduleEInstance || self;
})(window)