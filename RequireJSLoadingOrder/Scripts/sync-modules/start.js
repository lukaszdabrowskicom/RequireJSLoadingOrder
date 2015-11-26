
(function (window) {
    console.log("sync-modules loading...");

    define(
         [
           'Scripts/knockout-3.3.0.js',
           'Scripts/sync-modules/module1.js'
         ],
         function (ko, mod1) {
             console.log("ko and mod1 was loaded... this should be executed as a last module...  completed(sync-modules loaded)");
         }
    );

    console.log("doing some work that do not depends on sync-modules being fully loaded.");
})(window)