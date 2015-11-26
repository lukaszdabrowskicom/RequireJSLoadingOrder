(function (window) {
    var self = this;

    console.log("module 2 loading...");

    require(
             [
               'Scripts/async-modules/module3.js'
             ],
             function () {
                 function moduleB() {
                     for (var i = 0; i < 100001; i++) {
                         var sdsd = new Date();
                     }
                 }

                 self.moduleBInstance = self.moduleBInstance || new moduleB();
                 console.log("mod2 was loaded...");
             }
         );

    window.moduleBInstance = window.moduleBInstance || self;

})(window)