(function (window) {
    var self = this;

    console.log("module 1 loading... start loading deps...");

    define(
             [
               'Scripts/sync-modules/module2.js'
             ],
             function () {

                 function moduleA() {

                     for (var i = 0; i < 10000000; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleAInstance = self.moduleAInstance || new moduleA();

                 window.moduleAInstance = window.moduleAInstance || self;

                 console.log("module 1 loaded... all deps loaded!");
             }
         );
})(window)