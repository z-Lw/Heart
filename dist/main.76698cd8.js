// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var string = "\n.content {\n  width: 30%;\n  height: 50vh;\n  bottom: 0;\n  left: 0;\n}\n.content .head {\n  position: absolute;\n  width: 200px;\n  height: 160px;\n  left: 20px;\n  bottom: 40px;\n}\n.content .head .face {\n  position: absolute;\n  height: 110px;\n  width: 100px;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -55px;\n  border: 3px solid black;\n  transform: rotate(90deg);\n}\n.content .head .face::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: -60px;\n  bottom: 15px;\n  margin-left: -50px;\n  background: #fff;\n  border-radius: 50%;\n  width: 100px;\n  height: 80px;\n  transform: translateY(-3px);\n}\n.content .head .face .eye {\n  position: absolute;\n  background: #000;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  top: 45%;\n  left: 30%;\n  z-index: 1;\n}\n.content .head .face .eye.left {\n  transform: translateY(15px);\n}\n.content .head .face .eye.right {\n  transform: translateY(-15px) translateX(-3px);\n}\n.content .head .face .mouth {\n  position: absolute;\n  border: 3px solid black;\n  width: 15px;\n  top: 35%;\n  left: 40%;\n  height: 23px;\n  border-radius: 50%;\n  transform: translateY(3px);\n}\n.content .head .face .mouth::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: #fff;\n  top: -12px;\n  bottom: -10px;\n  left: -18px;\n  right: -5px;\n  border-radius: 50%;\n  transform: translateX(-5px) translateY(1px);\n}\n.content .head .face .rouge {\n  position: absolute;\n  background-color: pink;\n  border: 3px solid pink;\n  top: 45%;\n  left: 45%;\n  border: none;\n  width: 10px;\n  height: 2px;\n}\n.content .head .face .rouge::before {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  background-color: pink;\n  bottom: -6px;\n  width: 10px;\n  height: 2px;\n}\n.content .head .face .rouge.left {\n  transform: translateY(23px) rotate(5deg);\n}\n.content .head .face .rouge.right {\n  transform: translateY(-28px) rotate(5deg);\n  left: 38%;\n}\n.content .head .face .rouge.right::before {\n  bottom: -4px;\n}\n.content .head .handLeft {\n  width: 15px;\n  height: 30px;\n  border-left: 3px solid black;\n  border-bottom: 3px solid black;\n  border-radius: 0 5px 5px 5px;\n  position: absolute;\n  left: 28%;\n  top: 59%;\n  transform: rotate(25deg);\n}\n.head .bodyLeft {\n  position: absolute;\n  left: 48%;\n  top: 65%;\n  margin-left: -33px;\n  width: 2px;\n  height: 45px;\n  border-left: 3px solid black;\n  transform: rotate(12deg);\n  z-index: 2;\n}\n\n.head .footerLeft {\n  width: 36.3px;\n  height: 10px;\n  position: absolute;\n  bottom: 2px;\n  left: 30%;\n  background: #fff;\n  border-bottom: 3px solid black;\n  border-radius: 3px 0 0 0;\n  overflow: unset;\n}\n.head .footerLeft::before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -3px;\n  left: -6px;\n  content: \"\";\n  display: block;\n  border: 3px solid black;\n  z-index: -1;\n}\n.head .footerLeft::after {\n  content: \"\";\n  display: block;\n  width: 6px;\n  height: 12px;\n  border-right: 3px solid black;\n  overflow: hidden;\n  position: absolute;\n  right: 0px;\n  bottom: 0;\n}\n.head .leg {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  bottom: 10px;\n  border-radius: 50% 50% 0 0;\n  border: 3px solid black;\n  border-color: black black transparent black;\n  margin-left: -5px;\n  left: 49.2%;\n}\n.head .footerRight {\n  width: 36.5px;\n  height: 10px;\n  position: absolute;\n  bottom: 2px;\n  right: 30.58%;\n  background: #fff;\n  border-bottom: 3px solid black;\n  border-radius: 3px 0 0 0;\n  overflow: unset;\n}\n.head .footerRight::before {\n  content: \"\";\n  display: block;\n  width: 6px;\n  height: 12px;\n  border-left: 3px solid black;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n}\n.head .footerRight::after {\n  content: \"\";\n  display: block;\n  width: 9px;\n  height: 10px;\n  border-radius: 0 50% 50% 0;\n  border: 3px solid black;\n  border-color: black black black transparent;\n  position: absolute;\n  bottom: -3px;\n  right: -6.5px;\n}\n.head .bodyRight {\n  position: absolute;\n  right: 48%;\n  top: 60%;\n  margin-right: -30px;\n  width: 2px;\n  height: 53px;\n  border-left: 3px solid black;\n  transform: rotate(-12deg);\n}\n.head .handRight {\n  position: absolute;\n  width: 35px;\n  height: 3px;\n  left: 65%;\n  top: 50%;\n  border-top: 3px solid black;\n  transform: rotate(-30deg);\n}\n.head .handRight::before {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: 10px;\n  position: absolute;\n  border: 3px solid black;\n  right: -5px;\n  border-radius: 50% 50% 0 0;\n  border-bottom-color: transparent;\n  top: -10px;\n}\n.head .handRight2 {\n  position: absolute;\n  width: 7.5px;\n  height: 3px;\n  right: 28px;\n  top: 42.5%;\n  border-top: 3px solid black;\n  transform: rotate(-30deg);\n}\n.head .handRight2::before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 9px;\n  height: 8px;\n  right: -9px;\n  top: -3px;\n  border: 3px solid black;\n  border-left: none;\n  border-radius: 0 50% 50% 0;\n  transform: rotate(-1deg);\n}\n.head .handRight3 {\n  position: absolute;\n  width: 40px;\n  height: 3px;\n  right: 30px;\n  top: 56%;\n  border-top: 3px solid black;\n  transform: rotate(-30deg);\n}\n.head .handRight3::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 14px;\n  height: 6px;\n  border: 3px solid black;\n  border-radius: 50% 0 73% 0;\n  border-top: none;\n  border-left: none;\n  right: -13px;\n  top: -6px;\n}\n.head .heart {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: 10%;\n  top: 23%;\n  border: 1px solid pink;\n  border-color: transparent pink pink transparent;\n  transform: rotate(45deg);\n  animation: jump 1s infinite linear alternate-reverse;\n}\n.head .heart::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50% 50% 0 0;\n  border: 1px solid pink;\n  border-color: pink transparent transparent transparent;\n  top: -50%;\n  left: 0;\n}\n.head .heart::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50% 0 0 50%;\n  border: 1px solid pink;\n  border-color: transparent transparent transparent pink;\n  top: 0;\n  left: -50%;\n}\n.head .heart,\n.head .heart::before,\n.head .heart::after {\n  background: pink;\n  border: none;\n}\n\n";
var n = 0;
var m = 0;
var id = setInterval(function () {
  if (n >= string.length) {
    $('.buttonWapper').show();
    window.clearInterval(id);
    return;
  }

  $('#style1').text(string.substring(0, n));
  n++;
}, 0);
$('.button').on('click', function () {
  $('.ulWapper').toggle();
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.76698cd8.js.map