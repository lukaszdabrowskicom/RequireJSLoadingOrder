(function (window) {
    var self = this;

    console.log("module 1 LOADING...");

    require(
             [
               'Scripts/async-modules/module2.js'
             ],
             function () {
                 function moduleA() {

                     for (var i = 0; i < 10000000; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleAInstance = self.moduleAInstance || new moduleA();

                 console.log("mod1 was LOADED...");
             }
         );

    window.moduleAInstance = window.moduleAInstance || self;
})(window)