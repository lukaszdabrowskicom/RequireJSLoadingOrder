
(function (window) {
    console.log("async-modules loading...");

    require(
         [
           'Scripts/knockout-3.3.0.js',
           'Scripts/async-modules/module1.js'
         ],
         function (ko, mod1) {
             console.log("ko and mod1 was loaded... this should be executed as a last module... completed(all async-modules loaded)");
         }
    );
    console.log("doing some work that do not depends on async-modules being fully loaded.");
})(window)