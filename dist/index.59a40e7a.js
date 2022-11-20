// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
/* Laura López Doval */ // sticky sidebar
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _resizeSensorJs = require("./resize-sensor.js");
var _stickySidebarJs = require("./sticky-sidebar.js");
// infinity carousel
// https://codepen.io/hmdshfq/pen/JjrZNgP
// Initialization glide package using ES Modules
var _glide = require("@glidejs/glide");
var _glideDefault = parcelHelpers.interopDefault(_glide);
(function() {
    var sidebar = document.querySelectorAll(".sidebar");
    sidebar.forEach(function(s) {
        new StickySidebar(s, {
            topSpacing: 100,
            bottomSpacing: 20,
            containerSelector: ".main-content",
            innerWrapperSelector: ".sidebar__inner"
        });
    });
})();
// add active class navigation based on url -> https://stackoverflow.com/questions/20060467/add-active-navigation-class-based-on-url
(function() {
    var current = location.pathname.split("/")[1];
    var menuItems = document.querySelectorAll(".menu-item a");
    if (current === "") {
        menuItems[0].classList.add("is-active");
        return;
    }
    if (current === "museum.html") {
        menuItems[1].classList.add("is-active");
        return;
    }
    for(var i = 0, l = menuItems.length; i < l; i++)if (menuItems[i].getAttribute("href").indexOf(current) !== -1) menuItems[i].classList.add("is-active");
})();
// burger menu
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js 
(function() {
    let burger_menu = document.querySelector(".burger-menu");
    let nav = document.querySelector(".nav");
    let content = document.querySelector(".header-collapsed");
    burger_menu.addEventListener("click", function() {
        burger_menu.classList.toggle("change");
        nav.classList.toggle("collapsed");
        content.classList.toggle("top-to-header");
    });
})();
const getSlide = Array.from(document.querySelectorAll(".glide"));
getSlide.forEach((item, index)=>{
    const slider = new (0, _glideDefault.default)(item, {
        type: "carousel",
        gap: 0,
        autoplay: "3000"
    });
    slider.mount();
});

},{"@glidejs/glide":"cS4lK","./resize-sensor.js":"cC1hM","./sticky-sidebar.js":"7coT1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cS4lK":[function(require,module,exports) {
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Glide);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return _get.apply(this, arguments);
}
var defaults = {
    /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */ type: "slider",
    /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */ startAt: 0,
    /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */ perView: 1,
    /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */ focusAt: 0,
    /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */ gap: 10,
    /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */ autoplay: false,
    /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */ hoverpause: true,
    /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */ keyboard: true,
    /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */ bound: false,
    /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */ swipeThreshold: 80,
    /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */ dragThreshold: 120,
    /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */ perSwipe: "",
    /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */ touchRatio: 0.5,
    /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */ touchAngle: 45,
    /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */ animationDuration: 400,
    /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */ rewind: true,
    /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */ rewindDuration: 800,
    /**
   * Easing function for the animation.
   *
   * @type {String}
   */ animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
    /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */ waitForTransition: true,
    /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */ throttle: 10,
    /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */ direction: "ltr",
    /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */ peek: 0,
    /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */ cloningRatio: 1,
    /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */ breakpoints: {},
    /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */ classes: {
        swipeable: "glide--swipeable",
        dragging: "glide--dragging",
        direction: {
            ltr: "glide--ltr",
            rtl: "glide--rtl"
        },
        type: {
            slider: "glide--slider",
            carousel: "glide--carousel"
        },
        slide: {
            clone: "glide__slide--clone",
            active: "glide__slide--active"
        },
        arrow: {
            disabled: "glide__arrow--disabled"
        },
        nav: {
            active: "glide__bullet--active"
        }
    }
};
/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */ function warn(msg) {
    console.error("[Glide warn]: ".concat(msg));
}
/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */ function toInt(value) {
    return parseInt(value);
}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */ function toFloat(value) {
    return parseFloat(value);
}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */ function isString(value) {
    return typeof value === "string";
}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */ function isObject(value) {
    var type = _typeof(value);
    return type === "function" || type === "object" && !!value; // eslint-disable-line no-mixed-operators
}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isFunction(value) {
    return typeof value === "function";
}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isUndefined(value) {
    return typeof value === "undefined";
}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isArray(value) {
    return value.constructor === Array;
}
/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */ function mount(glide, extensions, events) {
    var components = {};
    for(var name in extensions)if (isFunction(extensions[name])) components[name] = extensions[name](glide, components, events);
    else warn("Extension must be a function");
    for(var _name in components)if (isFunction(components[_name].mount)) components[_name].mount();
    return components;
}
/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */ function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */ function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function(r, k) {
        r[k] = obj[k];
        return r[k], r;
    }, {});
}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */ function mergeOptions(defaults, settings) {
    var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.
    if (settings.hasOwnProperty("classes")) {
        options.classes = Object.assign({}, defaults.classes, settings.classes);
        if (settings.classes.hasOwnProperty("direction")) options.classes.direction = Object.assign({}, defaults.classes.direction, settings.classes.direction);
        if (settings.classes.hasOwnProperty("type")) options.classes.type = Object.assign({}, defaults.classes.type, settings.classes.type);
        if (settings.classes.hasOwnProperty("slide")) options.classes.slide = Object.assign({}, defaults.classes.slide, settings.classes.slide);
        if (settings.classes.hasOwnProperty("arrow")) options.classes.arrow = Object.assign({}, defaults.classes.arrow, settings.classes.arrow);
        if (settings.classes.hasOwnProperty("nav")) options.classes.nav = Object.assign({}, defaults.classes.nav, settings.classes.nav);
    }
    if (settings.hasOwnProperty("breakpoints")) options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);
    return options;
}
var EventsBus = /*#__PURE__*/ function() {
    /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */ function EventsBus() {
        var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, EventsBus);
        this.events = events;
        this.hop = events.hasOwnProperty;
    }
    /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */ _createClass(EventsBus, [
        {
            key: "on",
            value: function on(event, handler) {
                if (isArray(event)) {
                    for(var i = 0; i < event.length; i++)this.on(event[i], handler);
                    return;
                } // Create the event's object if not yet created
                if (!this.hop.call(this.events, event)) this.events[event] = [];
                 // Add the handler to queue
                var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event
                return {
                    remove: function remove() {
                        delete this.events[event][index];
                    }
                };
            }
        },
        {
            key: "emit",
            value: function emit(event, context) {
                if (isArray(event)) {
                    for(var i = 0; i < event.length; i++)this.emit(event[i], context);
                    return;
                } // If the event doesn't exist, or there's no handlers in queue, just leave
                if (!this.hop.call(this.events, event)) return;
                 // Cycle through events queue, fire!
                this.events[event].forEach(function(item) {
                    item(context || {});
                });
            }
        }
    ]);
    return EventsBus;
}();
var Glide$1 = /*#__PURE__*/ function() {
    /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */ function Glide(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, Glide);
        this._c = {};
        this._t = [];
        this._e = new EventsBus();
        this.disabled = false;
        this.selector = selector;
        this.settings = mergeOptions(defaults, options);
        this.index = this.settings.startAt;
    }
    /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */ _createClass(Glide, [
        {
            key: "mount",
            value: function mount$1() {
                var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this._e.emit("mount.before");
                if (isObject(extensions)) this._c = mount(this, extensions, this._e);
                else warn("You need to provide a object on `mount()`");
                this._e.emit("mount.after");
                return this;
            }
        },
        {
            key: "mutate",
            value: function mutate() {
                var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (isArray(transformers)) this._t = transformers;
                else warn("You need to provide a array on `mutate()`");
                return this;
            }
        },
        {
            key: "update",
            value: function update() {
                var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                this.settings = mergeOptions(this.settings, settings);
                if (settings.hasOwnProperty("startAt")) this.index = settings.startAt;
                this._e.emit("update");
                return this;
            }
        },
        {
            key: "go",
            value: function go(pattern) {
                this._c.Run.make(pattern);
                return this;
            }
        },
        {
            key: "move",
            value: function move(distance) {
                this._c.Transition.disable();
                this._c.Move.make(distance);
                return this;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._e.emit("destroy");
                return this;
            }
        },
        {
            key: "play",
            value: function play() {
                var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                if (interval) this.settings.autoplay = interval;
                this._e.emit("play");
                return this;
            }
        },
        {
            key: "pause",
            value: function pause() {
                this._e.emit("pause");
                return this;
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.disabled = true;
                return this;
            }
        },
        {
            key: "enable",
            value: function enable() {
                this.disabled = false;
                return this;
            }
        },
        {
            key: "on",
            value: function on(event, handler) {
                this._e.on(event, handler);
                return this;
            }
        },
        {
            key: "isType",
            value: function isType(name) {
                return this.settings.type === name;
            }
        },
        {
            key: "settings",
            get: function get() {
                return this._o;
            },
            set: function set(o) {
                if (isObject(o)) this._o = o;
                else warn("Options must be an `object` instance.");
            }
        },
        {
            key: "index",
            get: function get() {
                return this._i;
            },
            set: function set(i) {
                this._i = toInt(i);
            }
        },
        {
            key: "type",
            get: function get() {
                return this.settings.type;
            }
        },
        {
            key: "disabled",
            get: function get() {
                return this._d;
            },
            set: function set(status) {
                this._d = !!status;
            }
        }
    ]);
    return Glide;
}();
function Run(Glide, Components, Events) {
    var Run = {
        /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */ mount: function mount() {
            this._o = false;
        },
        /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */ make: function make(move) {
            var _this = this;
            if (!Glide.disabled) {
                !Glide.settings.waitForTransition || Glide.disable();
                this.move = move;
                Events.emit("run.before", this.move);
                this.calculate();
                Events.emit("run", this.move);
                Components.Transition.after(function() {
                    if (_this.isStart()) Events.emit("run.start", _this.move);
                    if (_this.isEnd()) Events.emit("run.end", _this.move);
                    if (_this.isOffset()) {
                        _this._o = false;
                        Events.emit("run.offset", _this.move);
                    }
                    Events.emit("run.after", _this.move);
                    Glide.enable();
                });
            }
        },
        /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */ calculate: function calculate() {
            var move = this.move, length = this.length;
            var steps = move.steps, direction = move.direction; // By default assume that size of view is equal to one slide
            var viewSize = 1; // While direction is `=` we want jump to
            // a specified index described in steps.
            if (direction === "=") {
                // Check if bound is true, 
                // as we want to avoid whitespaces.
                if (Glide.settings.bound && toInt(steps) > length) {
                    Glide.index = length;
                    return;
                }
                Glide.index = steps;
                return;
            } // When pattern is equal to `>>` we want
            // fast forward to the last slide.
            if (direction === ">" && steps === ">") {
                Glide.index = length;
                return;
            } // When pattern is equal to `<<` we want
            // fast forward to the first slide.
            if (direction === "<" && steps === "<") {
                Glide.index = 0;
                return;
            } // pagination movement
            if (direction === "|") viewSize = Glide.settings.perView || 1;
             // we are moving forward
            if (direction === ">" || direction === "|" && steps === ">") {
                var index = calculateForwardIndex(viewSize);
                if (index > length) this._o = true;
                Glide.index = normalizeForwardIndex(index, viewSize);
                return;
            } // we are moving backward
            if (direction === "<" || direction === "|" && steps === "<") {
                var _index = calculateBackwardIndex(viewSize);
                if (_index < 0) this._o = true;
                Glide.index = normalizeBackwardIndex(_index, viewSize);
                return;
            }
            warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
        },
        /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */ isStart: function isStart() {
            return Glide.index <= 0;
        },
        /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */ isEnd: function isEnd() {
            return Glide.index >= this.length;
        },
        /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */ isOffset: function isOffset() {
            var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            if (!direction) return this._o;
            if (!this._o) return false;
             // did we view to the right?
            if (direction === "|>") return this.move.direction === "|" && this.move.steps === ">";
             // did we view to the left?
            if (direction === "|<") return this.move.direction === "|" && this.move.steps === "<";
            return this.move.direction === direction;
        },
        /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */ isBound: function isBound() {
            return Glide.isType("slider") && Glide.settings.focusAt !== "center" && Glide.settings.bound;
        }
    };
    /**
   * Returns index value to move forward/to the right
   *
   * @param viewSize
   * @returns {Number}
   */ function calculateForwardIndex(viewSize) {
        var index = Glide.index;
        if (Glide.isType("carousel")) return index + viewSize;
        return index + (viewSize - index % viewSize);
    }
    /**
   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {Number}
   */ function normalizeForwardIndex(index, viewSize) {
        var length = Run.length;
        if (index <= length) return index;
        if (Glide.isType("carousel")) return index - (length + 1);
        if (Glide.settings.rewind) {
            // bound does funny things with the length, therefor we have to be certain
            // that we are on the last possible index value given by bound
            if (Run.isBound() && !Run.isEnd()) return length;
            return 0;
        }
        if (Run.isBound()) return length;
        return Math.floor(length / viewSize) * viewSize;
    }
    /**
   * Calculates index value to move backward/to the left
   *
   * @param viewSize
   * @returns {Number}
   */ function calculateBackwardIndex(viewSize) {
        var index = Glide.index;
        if (Glide.isType("carousel")) return index - viewSize;
         // ensure our back navigation results in the same index as a forward navigation
        // to experience a homogeneous paging
        var view = Math.ceil(index / viewSize);
        return (view - 1) * viewSize;
    }
    /**
   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {*}
   */ function normalizeBackwardIndex(index, viewSize) {
        var length = Run.length;
        if (index >= 0) return index;
        if (Glide.isType("carousel")) return index + (length + 1);
        if (Glide.settings.rewind) {
            // bound does funny things with the length, therefor we have to be certain
            // that we are on first possible index value before we to rewind to the length given by bound
            if (Run.isBound() && Run.isStart()) return length;
            return Math.floor(length / viewSize) * viewSize;
        }
        return 0;
    }
    define(Run, "move", {
        /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */ get: function get() {
            return this._m;
        },
        /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */ set: function set(value) {
            var step = value.substr(1);
            this._m = {
                direction: value.substr(0, 1),
                steps: step ? toInt(step) ? toInt(step) : step : 0
            };
        }
    });
    define(Run, "length", {
        /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */ get: function get() {
            var settings = Glide.settings;
            var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
            // reduced by `perView` and `focusAt` settings. Running distance
            // should end before creating an empty space after instance.
            if (this.isBound()) return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
            return length - 1;
        }
    });
    define(Run, "offset", {
        /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */ get: function get() {
            return this._o;
        }
    });
    return Run;
}
/**
 * Returns a current time.
 *
 * @return {Number}
 */ function now() {
    return new Date().getTime();
}
/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */ function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};
    var later = function later() {
        previous = options.leading === false ? 0 : now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    var throttled = function throttled() {
        var at = now();
        if (!previous && options.leading === false) previous = at;
        var remaining = wait - (at - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = at;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) timeout = setTimeout(later, remaining);
        return result;
    };
    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };
    return throttled;
}
var MARGIN_TYPE = {
    ltr: [
        "marginLeft",
        "marginRight"
    ],
    rtl: [
        "marginRight",
        "marginLeft"
    ]
};
function Gaps(Glide, Components, Events) {
    var Gaps = {
        /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */ apply: function apply(slides) {
            for(var i = 0, len = slides.length; i < len; i++){
                var style = slides[i].style;
                var direction = Components.Direction.value;
                if (i !== 0) style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
                else style[MARGIN_TYPE[direction][0]] = "";
                if (i !== slides.length - 1) style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
                else style[MARGIN_TYPE[direction][1]] = "";
            }
        },
        /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */ remove: function remove(slides) {
            for(var i = 0, len = slides.length; i < len; i++){
                var style = slides[i].style;
                style.marginLeft = "";
                style.marginRight = "";
            }
        }
    };
    define(Gaps, "value", {
        /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */ get: function get() {
            return toInt(Glide.settings.gap);
        }
    });
    define(Gaps, "grow", {
        /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */ get: function get() {
            return Gaps.value * Components.Sizes.length;
        }
    });
    define(Gaps, "reductor", {
        /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */ get: function get() {
            var perView = Glide.settings.perView;
            return Gaps.value * (perView - 1) / perView;
        }
    });
    /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */ Events.on([
        "build.after",
        "update"
    ], throttle(function() {
        Gaps.apply(Components.Html.wrapper.children);
    }, 30));
    /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */ Events.on("destroy", function() {
        Gaps.remove(Components.Html.wrapper.children);
    });
    return Gaps;
}
/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */ function siblings(node) {
    if (node && node.parentNode) {
        var n = node.parentNode.firstChild;
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== node) matched.push(n);
        return matched;
    }
    return [];
}
/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */ function exist(node) {
    if (node && node instanceof window.HTMLElement) return true;
    return false;
}
/**
 * Coerces a NodeList to an Array.
 *
 * @param  {NodeList} nodeList
 * @return {Array}
 */ function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}
var TRACK_SELECTOR = '[data-glide-el="track"]';
function Html(Glide, Components, Events) {
    var Html = {
        /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */ mount: function mount() {
            this.root = Glide.selector;
            this.track = this.root.querySelector(TRACK_SELECTOR);
            this.collectSlides();
        },
        /**
     * Collect slides
     */ collectSlides: function collectSlides() {
            this.slides = toArray(this.wrapper.children).filter(function(slide) {
                return !slide.classList.contains(Glide.settings.classes.slide.clone);
            });
        }
    };
    define(Html, "root", {
        /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */ get: function get() {
            return Html._r;
        },
        /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */ set: function set(r) {
            if (isString(r)) r = document.querySelector(r);
            if (exist(r)) Html._r = r;
            else warn("Root element must be a existing Html node");
        }
    });
    define(Html, "track", {
        /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */ get: function get() {
            return Html._t;
        },
        /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */ set: function set(t) {
            if (exist(t)) Html._t = t;
            else warn("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
        }
    });
    define(Html, "wrapper", {
        /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */ get: function get() {
            return Html.track.children[0];
        }
    });
    /**
   * Add/remove/reorder dynamic slides
   */ Events.on("update", function() {
        Html.collectSlides();
    });
    return Html;
}
function Peek(Glide, Components, Events) {
    var Peek = {
        /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */ mount: function mount() {
            this.value = Glide.settings.peek;
        }
    };
    define(Peek, "value", {
        /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */ get: function get() {
            return Peek._v;
        },
        /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */ set: function set(value) {
            if (isObject(value)) {
                value.before = toInt(value.before);
                value.after = toInt(value.after);
            } else value = toInt(value);
            Peek._v = value;
        }
    });
    define(Peek, "reductor", {
        /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */ get: function get() {
            var value = Peek.value;
            var perView = Glide.settings.perView;
            if (isObject(value)) return value.before / perView + value.after / perView;
            return value * 2 / perView;
        }
    });
    /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */ Events.on([
        "resize",
        "update"
    ], function() {
        Peek.mount();
    });
    return Peek;
}
function Move(Glide, Components, Events) {
    var Move = {
        /**
     * Constructs move component.
     *
     * @returns {Void}
     */ mount: function mount() {
            this._o = 0;
        },
        /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */ make: function make() {
            var _this = this;
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this.offset = offset;
            Events.emit("move", {
                movement: this.value
            });
            Components.Transition.after(function() {
                Events.emit("move.after", {
                    movement: _this.value
                });
            });
        }
    };
    define(Move, "offset", {
        /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */ get: function get() {
            return Move._o;
        },
        /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */ set: function set(value) {
            Move._o = !isUndefined(value) ? toInt(value) : 0;
        }
    });
    define(Move, "translate", {
        /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */ get: function get() {
            return Components.Sizes.slideWidth * Glide.index;
        }
    });
    define(Move, "value", {
        /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */ get: function get() {
            var offset = this.offset;
            var translate = this.translate;
            if (Components.Direction.is("rtl")) return translate + offset;
            return translate - offset;
        }
    });
    /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */ Events.on([
        "build.before",
        "run"
    ], function() {
        Move.make();
    });
    return Move;
}
function Sizes(Glide, Components, Events) {
    var Sizes = {
        /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */ setupSlides: function setupSlides() {
            var width = "".concat(this.slideWidth, "px");
            var slides = Components.Html.slides;
            for(var i = 0; i < slides.length; i++)slides[i].style.width = width;
        },
        /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */ setupWrapper: function setupWrapper() {
            Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
        },
        /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */ remove: function remove() {
            var slides = Components.Html.slides;
            for(var i = 0; i < slides.length; i++)slides[i].style.width = "";
            Components.Html.wrapper.style.width = "";
        }
    };
    define(Sizes, "length", {
        /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */ get: function get() {
            return Components.Html.slides.length;
        }
    });
    define(Sizes, "width", {
        /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */ get: function get() {
            return Components.Html.track.offsetWidth;
        }
    });
    define(Sizes, "wrapperSize", {
        /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */ get: function get() {
            return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
        }
    });
    define(Sizes, "slideWidth", {
        /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */ get: function get() {
            return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
        }
    });
    /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimensions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */ Events.on([
        "build.before",
        "resize",
        "update"
    ], function() {
        Sizes.setupSlides();
        Sizes.setupWrapper();
    });
    /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */ Events.on("destroy", function() {
        Sizes.remove();
    });
    return Sizes;
}
function Build(Glide, Components, Events) {
    var Build = {
        /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */ mount: function mount() {
            Events.emit("build.before");
            this.typeClass();
            this.activeClass();
            Events.emit("build.after");
        },
        /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */ typeClass: function typeClass() {
            Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
        },
        /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */ activeClass: function activeClass() {
            var classes = Glide.settings.classes;
            var slide = Components.Html.slides[Glide.index];
            if (slide) {
                slide.classList.add(classes.slide.active);
                siblings(slide).forEach(function(sibling) {
                    sibling.classList.remove(classes.slide.active);
                });
            }
        },
        /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */ removeClasses: function removeClasses() {
            var _Glide$settings$class = Glide.settings.classes, type = _Glide$settings$class.type, slide = _Glide$settings$class.slide;
            Components.Html.root.classList.remove(type[Glide.settings.type]);
            Components.Html.slides.forEach(function(sibling) {
                sibling.classList.remove(slide.active);
            });
        }
    };
    /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */ Events.on([
        "destroy",
        "update"
    ], function() {
        Build.removeClasses();
    });
    /**
   * Remount component:
   * - on resizing of the window to calculate new dimensions
   * - on updating settings via API
   */ Events.on([
        "resize",
        "update"
    ], function() {
        Build.mount();
    });
    /**
   * Swap active class of current slide:
   * - after each move to the new index
   */ Events.on("move.after", function() {
        Build.activeClass();
    });
    return Build;
}
function Clones(Glide, Components, Events) {
    var Clones = {
        /**
     * Create pattern map and collect slides to be cloned.
     */ mount: function mount() {
            this.items = [];
            if (Glide.isType("carousel")) this.items = this.collect();
        },
        /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */ collect: function collect() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var slides = Components.Html.slides;
            var _Glide$settings = Glide.settings, perView = _Glide$settings.perView, classes = _Glide$settings.classes, cloningRatio = _Glide$settings.cloningRatio;
            if (slides.length !== 0) {
                var peekIncrementer = +!!Glide.settings.peek;
                var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
                var append = slides.slice(0, cloneCount).reverse();
                var prepend = slides.slice(cloneCount * -1);
                for(var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++){
                    for(var i = 0; i < append.length; i++){
                        var clone = append[i].cloneNode(true);
                        clone.classList.add(classes.slide.clone);
                        items.push(clone);
                    }
                    for(var _i = 0; _i < prepend.length; _i++){
                        var _clone = prepend[_i].cloneNode(true);
                        _clone.classList.add(classes.slide.clone);
                        items.unshift(_clone);
                    }
                }
            }
            return items;
        },
        /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */ append: function append() {
            var items = this.items;
            var _Components$Html = Components.Html, wrapper = _Components$Html.wrapper, slides = _Components$Html.slides;
            var half = Math.floor(items.length / 2);
            var prepend = items.slice(0, half).reverse();
            var append = items.slice(half * -1).reverse();
            var width = "".concat(Components.Sizes.slideWidth, "px");
            for(var i = 0; i < append.length; i++)wrapper.appendChild(append[i]);
            for(var _i2 = 0; _i2 < prepend.length; _i2++)wrapper.insertBefore(prepend[_i2], slides[0]);
            for(var _i3 = 0; _i3 < items.length; _i3++)items[_i3].style.width = width;
        },
        /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */ remove: function remove() {
            var items = this.items;
            for(var i = 0; i < items.length; i++)Components.Html.wrapper.removeChild(items[i]);
        }
    };
    define(Clones, "grow", {
        /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */ get: function get() {
            return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
        }
    });
    /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */ Events.on("update", function() {
        Clones.remove();
        Clones.mount();
        Clones.append();
    });
    /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */ Events.on("build.before", function() {
        if (Glide.isType("carousel")) Clones.append();
    });
    /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */ Events.on("destroy", function() {
        Clones.remove();
    });
    return Clones;
}
var EventsBinder = /*#__PURE__*/ function() {
    /**
   * Construct a EventsBinder instance.
   */ function EventsBinder() {
        var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, EventsBinder);
        this.listeners = listeners;
    }
    /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */ _createClass(EventsBinder, [
        {
            key: "on",
            value: function on(events, el, closure) {
                var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                if (isString(events)) events = [
                    events
                ];
                for(var i = 0; i < events.length; i++){
                    this.listeners[events[i]] = closure;
                    el.addEventListener(events[i], this.listeners[events[i]], capture);
                }
            }
        },
        {
            key: "off",
            value: function off(events, el) {
                var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                if (isString(events)) events = [
                    events
                ];
                for(var i = 0; i < events.length; i++)el.removeEventListener(events[i], this.listeners[events[i]], capture);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                delete this.listeners;
            }
        }
    ]);
    return EventsBinder;
}();
function Resize(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Resize = {
        /**
     * Initializes window bindings.
     */ mount: function mount() {
            this.bind();
        },
        /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on("resize", window, throttle(function() {
                Events.emit("resize");
            }, Glide.settings.throttle));
        },
        /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off("resize", window);
        }
    };
    /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */ Events.on("destroy", function() {
        Resize.unbind();
        Binder.destroy();
    });
    return Resize;
}
var VALID_DIRECTIONS = [
    "ltr",
    "rtl"
];
var FLIPED_MOVEMENTS = {
    ">": "<",
    "<": ">",
    "=": "="
};
function Direction(Glide, Components, Events) {
    var Direction = {
        /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */ mount: function mount() {
            this.value = Glide.settings.direction;
        },
        /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */ resolve: function resolve(pattern) {
            var token = pattern.slice(0, 1);
            if (this.is("rtl")) return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
            return pattern;
        },
        /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */ is: function is(direction) {
            return this.value === direction;
        },
        /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */ addClass: function addClass() {
            Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
        },
        /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */ removeClass: function removeClass() {
            Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
        }
    };
    define(Direction, "value", {
        /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */ get: function get() {
            return Direction._v;
        },
        /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */ set: function set(value) {
            if (VALID_DIRECTIONS.indexOf(value) > -1) Direction._v = value;
            else warn("Direction value must be `ltr` or `rtl`");
        }
    });
    /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */ Events.on([
        "destroy",
        "update"
    ], function() {
        Direction.removeClass();
    });
    /**
   * Remount component:
   * - on update to reflect changes in direction value
   */ Events.on("update", function() {
        Direction.mount();
    });
    /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */ Events.on([
        "build.before",
        "update"
    ], function() {
        Direction.addClass();
    });
    return Direction;
}
/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Rtl(Glide, Components) {
    return {
        /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            if (Components.Direction.is("rtl")) return -translate;
            return translate;
        }
    };
}
/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Gap(Glide, Components) {
    return {
        /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
            return translate + Components.Gaps.value * multiplier;
        }
    };
}
/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Grow(Glide, Components) {
    return {
        /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            return translate + Components.Clones.grow / 2;
        }
    };
}
/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Peeking(Glide, Components) {
    return {
        /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            if (Glide.settings.focusAt >= 0) {
                var peek = Components.Peek.value;
                if (isObject(peek)) return translate - peek.before;
                return translate - peek;
            }
            return translate;
        }
    };
}
/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Focusing(Glide, Components) {
    return {
        /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            var gap = Components.Gaps.value;
            var width = Components.Sizes.width;
            var focusAt = Glide.settings.focusAt;
            var slideWidth = Components.Sizes.slideWidth;
            if (focusAt === "center") return translate - (width / 2 - slideWidth / 2);
            return translate - slideWidth * focusAt - gap * focusAt;
        }
    };
}
/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function mutator(Glide, Components, Events) {
    /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */ var TRANSFORMERS = [
        Gap,
        Grow,
        Peeking,
        Focusing
    ].concat(Glide._t, [
        Rtl
    ]);
    return {
        /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */ mutate: function mutate(translate) {
            for(var i = 0; i < TRANSFORMERS.length; i++){
                var transformer = TRANSFORMERS[i];
                if (isFunction(transformer) && isFunction(transformer().modify)) translate = transformer(Glide, Components, Events).modify(translate);
                else warn("Transformer should be a function that returns an object with `modify()` method");
            }
            return translate;
        }
    };
}
function Translate(Glide, Components, Events) {
    var Translate = {
        /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */ set: function set(value) {
            var transform = mutator(Glide, Components).mutate(value);
            var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
            Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15
            Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22
            Components.Html.wrapper.style.transform = translate3d;
        },
        /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */ remove: function remove() {
            Components.Html.wrapper.style.transform = "";
        },
        /**
     * @return {number}
     */ getStartIndex: function getStartIndex() {
            var length = Components.Sizes.length;
            var index = Glide.index;
            var perView = Glide.settings.perView;
            if (Components.Run.isOffset(">") || Components.Run.isOffset("|>")) return length + (index - perView);
             // "modulo length" converts an index that equals length to zero
            return (index + perView) % length;
        },
        /**
     * @return {number}
     */ getTravelDistance: function getTravelDistance() {
            var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;
            if (Components.Run.isOffset(">") || Components.Run.isOffset("|>")) // reverse travel distance so that we don't have to change subtract operations
            return travelDistance * -1;
            return travelDistance;
        }
    };
    /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */ Events.on("move", function(context) {
        if (!Glide.isType("carousel") || !Components.Run.isOffset()) return Translate.set(context.movement);
        Components.Transition.after(function() {
            Events.emit("translate.jump");
            Translate.set(Components.Sizes.slideWidth * Glide.index);
        });
        var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
        return Translate.set(startWidth - Components.Translate.getTravelDistance());
    });
    /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */ Events.on("destroy", function() {
        Translate.remove();
    });
    return Translate;
}
function Transition(Glide, Components, Events) {
    /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */ var disabled = false;
    var Transition = {
        /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */ compose: function compose(property) {
            var settings = Glide.settings;
            if (!disabled) return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
            return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
        },
        /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */ set: function set() {
            var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "transform";
            Components.Html.wrapper.style.transition = this.compose(property);
        },
        /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */ remove: function remove() {
            Components.Html.wrapper.style.transition = "";
        },
        /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */ after: function after(callback) {
            setTimeout(function() {
                callback();
            }, this.duration);
        },
        /**
     * Enable transition.
     *
     * @return {Void}
     */ enable: function enable() {
            disabled = false;
            this.set();
        },
        /**
     * Disable transition.
     *
     * @return {Void}
     */ disable: function disable() {
            disabled = true;
            this.set();
        }
    };
    define(Transition, "duration", {
        /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */ get: function get() {
            var settings = Glide.settings;
            if (Glide.isType("slider") && Components.Run.offset) return settings.rewindDuration;
            return settings.animationDuration;
        }
    });
    /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */ Events.on("move", function() {
        Transition.set();
    });
    /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimensions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */ Events.on([
        "build.before",
        "resize",
        "translate.jump"
    ], function() {
        Transition.disable();
    });
    /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */ Events.on("run", function() {
        Transition.enable();
    });
    /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */ Events.on("destroy", function() {
        Transition.remove();
    });
    return Transition;
}
/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */ var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
} catch (e) {}
var supportsPassive$1 = supportsPassive;
var START_EVENTS = [
    "touchstart",
    "mousedown"
];
var MOVE_EVENTS = [
    "touchmove",
    "mousemove"
];
var END_EVENTS = [
    "touchend",
    "touchcancel",
    "mouseup",
    "mouseleave"
];
var MOUSE_EVENTS = [
    "mousedown",
    "mousemove",
    "mouseup",
    "mouseleave"
];
function Swipe(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? {
        passive: true
    } : false;
    var Swipe = {
        /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */ mount: function mount() {
            this.bindSwipeStart();
        },
        /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */ start: function start(event) {
            if (!disabled && !Glide.disabled) {
                this.disable();
                var swipe = this.touches(event);
                swipeSin = null;
                swipeStartX = toInt(swipe.pageX);
                swipeStartY = toInt(swipe.pageY);
                this.bindSwipeMove();
                this.bindSwipeEnd();
                Events.emit("swipe.start");
            }
        },
        /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */ move: function move(event) {
            if (!Glide.disabled) {
                var _Glide$settings = Glide.settings, touchAngle = _Glide$settings.touchAngle, touchRatio = _Glide$settings.touchRatio, classes = _Glide$settings.classes;
                var swipe = this.touches(event);
                var subExSx = toInt(swipe.pageX) - swipeStartX;
                var subEySy = toInt(swipe.pageY) - swipeStartY;
                var powEX = Math.abs(subExSx << 2);
                var powEY = Math.abs(subEySy << 2);
                var swipeHypotenuse = Math.sqrt(powEX + powEY);
                var swipeCathetus = Math.sqrt(powEY);
                swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);
                if (swipeSin * 180 / Math.PI < touchAngle) {
                    event.stopPropagation();
                    Components.Move.make(subExSx * toFloat(touchRatio));
                    Components.Html.root.classList.add(classes.dragging);
                    Events.emit("swipe.move");
                } else return false;
            }
        },
        /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */ end: function end(event) {
            if (!Glide.disabled) {
                var _Glide$settings2 = Glide.settings, perSwipe = _Glide$settings2.perSwipe, touchAngle = _Glide$settings2.touchAngle, classes = _Glide$settings2.classes;
                var swipe = this.touches(event);
                var threshold = this.threshold(event);
                var swipeDistance = swipe.pageX - swipeStartX;
                var swipeDeg = swipeSin * 180 / Math.PI;
                this.enable();
                if (swipeDistance > threshold && swipeDeg < touchAngle) Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
                else if (swipeDistance < -threshold && swipeDeg < touchAngle) Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
                else // While swipe don't reach distance apply previous transform.
                Components.Move.make();
                Components.Html.root.classList.remove(classes.dragging);
                this.unbindSwipeMove();
                this.unbindSwipeEnd();
                Events.emit("swipe.end");
            }
        },
        /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */ bindSwipeStart: function bindSwipeStart() {
            var _this = this;
            var _Glide$settings3 = Glide.settings, swipeThreshold = _Glide$settings3.swipeThreshold, dragThreshold = _Glide$settings3.dragThreshold;
            if (swipeThreshold) Binder.on(START_EVENTS[0], Components.Html.wrapper, function(event) {
                _this.start(event);
            }, capture);
            if (dragThreshold) Binder.on(START_EVENTS[1], Components.Html.wrapper, function(event) {
                _this.start(event);
            }, capture);
        },
        /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */ unbindSwipeStart: function unbindSwipeStart() {
            Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
            Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
        },
        /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */ bindSwipeMove: function bindSwipeMove() {
            var _this2 = this;
            Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function(event) {
                _this2.move(event);
            }, Glide.settings.throttle), capture);
        },
        /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */ unbindSwipeMove: function unbindSwipeMove() {
            Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
        },
        /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */ bindSwipeEnd: function bindSwipeEnd() {
            var _this3 = this;
            Binder.on(END_EVENTS, Components.Html.wrapper, function(event) {
                _this3.end(event);
            });
        },
        /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */ unbindSwipeEnd: function unbindSwipeEnd() {
            Binder.off(END_EVENTS, Components.Html.wrapper);
        },
        /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */ touches: function touches(event) {
            if (MOUSE_EVENTS.indexOf(event.type) > -1) return event;
            return event.touches[0] || event.changedTouches[0];
        },
        /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */ threshold: function threshold(event) {
            var settings = Glide.settings;
            if (MOUSE_EVENTS.indexOf(event.type) > -1) return settings.dragThreshold;
            return settings.swipeThreshold;
        },
        /**
     * Enables swipe event.
     *
     * @return {self}
     */ enable: function enable() {
            disabled = false;
            Components.Transition.enable();
            return this;
        },
        /**
     * Disables swipe event.
     *
     * @return {self}
     */ disable: function disable() {
            disabled = true;
            Components.Transition.disable();
            return this;
        }
    };
    /**
   * Add component class:
   * - after initial building
   */ Events.on("build.after", function() {
        Components.Html.root.classList.add(Glide.settings.classes.swipeable);
    });
    /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */ Events.on("destroy", function() {
        Swipe.unbindSwipeStart();
        Swipe.unbindSwipeMove();
        Swipe.unbindSwipeEnd();
        Binder.destroy();
    });
    return Swipe;
}
function Images(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Images = {
        /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */ mount: function mount() {
            this.bind();
        },
        /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on("dragstart", Components.Html.wrapper, this.dragstart);
        },
        /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off("dragstart", Components.Html.wrapper);
        },
        /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */ dragstart: function dragstart(event) {
            event.preventDefault();
        }
    };
    /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */ Events.on("destroy", function() {
        Images.unbind();
        Binder.destroy();
    });
    return Images;
}
function Anchors(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */ var detached = false;
    /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */ var prevented = false;
    var Anchors = {
        /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */ mount: function mount() {
            /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */ this._a = Components.Html.wrapper.querySelectorAll("a");
            this.bind();
        },
        /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on("click", Components.Html.wrapper, this.click);
        },
        /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off("click", Components.Html.wrapper);
        },
        /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */ click: function click(event) {
            if (prevented) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
        /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */ detach: function detach() {
            prevented = true;
            if (!detached) {
                for(var i = 0; i < this.items.length; i++)this.items[i].draggable = false;
                detached = true;
            }
            return this;
        },
        /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */ attach: function attach() {
            prevented = false;
            if (detached) {
                for(var i = 0; i < this.items.length; i++)this.items[i].draggable = true;
                detached = false;
            }
            return this;
        }
    };
    define(Anchors, "items", {
        /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */ get: function get() {
            return Anchors._a;
        }
    });
    /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */ Events.on("swipe.move", function() {
        Anchors.detach();
    });
    /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */ Events.on("swipe.end", function() {
        Components.Transition.after(function() {
            Anchors.attach();
        });
    });
    /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */ Events.on("destroy", function() {
        Anchors.attach();
        Anchors.unbind();
        Binder.destroy();
    });
    return Anchors;
}
var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, ' [data-glide-dir*="<"]');
var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, ' [data-glide-dir*=">"]');
function Controls(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var capture = supportsPassive$1 ? {
        passive: true
    } : false;
    var Controls = {
        /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */ mount: function mount() {
            /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */ this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
            /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */ this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
            /**
       * Collection of arrow control HTML elements.
       *
       * @private
       * @type {Object}
       */ this._arrowControls = {
                previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
                next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
            };
            this.addBindings();
        },
        /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */ setActive: function setActive() {
            for(var i = 0; i < this._n.length; i++)this.addClass(this._n[i].children);
        },
        /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */ removeActive: function removeActive() {
            for(var i = 0; i < this._n.length; i++)this.removeClass(this._n[i].children);
        },
        /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */ addClass: function addClass(controls) {
            var settings = Glide.settings;
            var item = controls[Glide.index];
            if (!item) return;
            if (item) {
                item.classList.add(settings.classes.nav.active);
                siblings(item).forEach(function(sibling) {
                    sibling.classList.remove(settings.classes.nav.active);
                });
            }
        },
        /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */ removeClass: function removeClass(controls) {
            var item = controls[Glide.index];
            if (item) item.classList.remove(Glide.settings.classes.nav.active);
        },
        /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */ setArrowState: function setArrowState() {
            if (Glide.settings.rewind) return;
            var next = Controls._arrowControls.next;
            var previous = Controls._arrowControls.previous;
            this.resetArrowState(next, previous);
            if (Glide.index === 0) this.disableArrow(previous);
            if (Glide.index === Components.Run.length) this.disableArrow(next);
        },
        /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */ resetArrowState: function resetArrowState() {
            var settings = Glide.settings;
            for(var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++)lists[_key] = arguments[_key];
            lists.forEach(function(list) {
                toArray(list).forEach(function(element) {
                    element.classList.remove(settings.classes.arrow.disabled);
                });
            });
        },
        /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */ disableArrow: function disableArrow() {
            var settings = Glide.settings;
            for(var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)lists[_key2] = arguments[_key2];
            lists.forEach(function(list) {
                toArray(list).forEach(function(element) {
                    element.classList.add(settings.classes.arrow.disabled);
                });
            });
        },
        /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */ addBindings: function addBindings() {
            for(var i = 0; i < this._c.length; i++)this.bind(this._c[i].children);
        },
        /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */ removeBindings: function removeBindings() {
            for(var i = 0; i < this._c.length; i++)this.unbind(this._c[i].children);
        },
        /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */ bind: function bind(elements) {
            for(var i = 0; i < elements.length; i++){
                Binder.on("click", elements[i], this.click);
                Binder.on("touchstart", elements[i], this.click, capture);
            }
        },
        /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */ unbind: function unbind(elements) {
            for(var i = 0; i < elements.length; i++)Binder.off([
                "click",
                "touchstart"
            ], elements[i]);
        },
        /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */ click: function click(event) {
            if (!supportsPassive$1 && event.type === "touchstart") event.preventDefault();
            var direction = event.currentTarget.getAttribute("data-glide-dir");
            Components.Run.make(Components.Direction.resolve(direction));
        }
    };
    define(Controls, "items", {
        /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */ get: function get() {
            return Controls._c;
        }
    });
    /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */ Events.on([
        "mount.after",
        "move.after"
    ], function() {
        Controls.setActive();
    });
    /**
   * Add or remove disabled class of arrow elements
   */ Events.on([
        "mount.after",
        "run"
    ], function() {
        Controls.setArrowState();
    });
    /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */ Events.on("destroy", function() {
        Controls.removeBindings();
        Controls.removeActive();
        Binder.destroy();
    });
    return Controls;
}
function Keyboard(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Keyboard = {
        /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */ mount: function mount() {
            if (Glide.settings.keyboard) this.bind();
        },
        /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on("keyup", document, this.press);
        },
        /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off("keyup", document);
        },
        /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */ press: function press(event) {
            var perSwipe = Glide.settings.perSwipe;
            if (event.code === "ArrowRight") Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
            if (event.code === "ArrowLeft") Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
        }
    };
    /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */ Events.on([
        "destroy",
        "update"
    ], function() {
        Keyboard.unbind();
    });
    /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */ Events.on("update", function() {
        Keyboard.mount();
    });
    /**
   * Destroy binder:
   * - on destroying to remove listeners
   */ Events.on("destroy", function() {
        Binder.destroy();
    });
    return Keyboard;
}
function Autoplay(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Autoplay = {
        /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */ mount: function mount() {
            this.enable();
            this.start();
            if (Glide.settings.hoverpause) this.bind();
        },
        /**
     * Enables autoplaying
     *
     * @returns {Void}
     */ enable: function enable() {
            this._e = true;
        },
        /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */ disable: function disable() {
            this._e = false;
        },
        /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */ start: function start() {
            var _this = this;
            if (!this._e) return;
            this.enable();
            if (Glide.settings.autoplay) {
                if (isUndefined(this._i)) this._i = setInterval(function() {
                    _this.stop();
                    Components.Run.make(">");
                    _this.start();
                    Events.emit("autoplay");
                }, this.time);
            }
        },
        /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */ stop: function stop() {
            this._i = clearInterval(this._i);
        },
        /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */ bind: function bind() {
            var _this2 = this;
            Binder.on("mouseover", Components.Html.root, function() {
                if (_this2._e) _this2.stop();
            });
            Binder.on("mouseout", Components.Html.root, function() {
                if (_this2._e) _this2.start();
            });
        },
        /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */ unbind: function unbind() {
            Binder.off([
                "mouseover",
                "mouseout"
            ], Components.Html.root);
        }
    };
    define(Autoplay, "time", {
        /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */ get: function get() {
            var autoplay = Components.Html.slides[Glide.index].getAttribute("data-glide-autoplay");
            if (autoplay) return toInt(autoplay);
            return toInt(Glide.settings.autoplay);
        }
    });
    /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */ Events.on([
        "destroy",
        "update"
    ], function() {
        Autoplay.unbind();
    });
    /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */ Events.on([
        "run.before",
        "swipe.start",
        "update"
    ], function() {
        Autoplay.stop();
    });
    Events.on([
        "pause",
        "destroy"
    ], function() {
        Autoplay.disable();
        Autoplay.stop();
    });
    /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */ Events.on([
        "run.after",
        "swipe.end"
    ], function() {
        Autoplay.start();
    });
    /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */ Events.on([
        "play"
    ], function() {
        Autoplay.enable();
        Autoplay.start();
    });
    /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */ Events.on("update", function() {
        Autoplay.mount();
    });
    /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */ Events.on("destroy", function() {
        Binder.destroy();
    });
    return Autoplay;
}
/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */ function sortBreakpoints(points) {
    if (isObject(points)) return sortKeys(points);
    else warn("Breakpoints option must be an object");
    return {};
}
function Breakpoints(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    /**
   * Holds reference to settings.
   *
   * @type {Object}
   */ var settings = Glide.settings;
    /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */ var points = sortBreakpoints(settings.breakpoints);
    /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */ var defaults = Object.assign({}, settings);
    var Breakpoints = {
        /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */ match: function match(points) {
            if (typeof window.matchMedia !== "undefined") {
                for(var point in points)if (points.hasOwnProperty(point)) {
                    if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) return points[point];
                }
            }
            return defaults;
        }
    };
    /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */ Object.assign(settings, Breakpoints.match(points));
    /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */ Binder.on("resize", window, throttle(function() {
        Glide.settings = mergeOptions(settings, Breakpoints.match(points));
    }, Glide.settings.throttle));
    /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */ Events.on("update", function() {
        points = sortBreakpoints(points);
        defaults = Object.assign({}, settings);
    });
    /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */ Events.on("destroy", function() {
        Binder.off("resize", window);
    });
    return Breakpoints;
}
var COMPONENTS = {
    // Required
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run,
    // Optional
    Swipe: Swipe,
    Images: Images,
    Anchors: Anchors,
    Controls: Controls,
    Keyboard: Keyboard,
    Autoplay: Autoplay,
    Breakpoints: Breakpoints
};
var Glide = /*#__PURE__*/ function(_Core) {
    _inherits(Glide, _Core);
    var _super = _createSuper(Glide);
    function Glide() {
        _classCallCheck(this, Glide);
        return _super.apply(this, arguments);
    }
    _createClass(Glide, [
        {
            key: "mount",
            value: function mount() {
                var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return _get(_getPrototypeOf(Glide.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
            }
        }
    ]);
    return Glide;
}(Glide$1);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cC1hM":[function(require,module,exports) {
"use strict";
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */ (function(root, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else module.exports = factory();
})(typeof window !== "undefined" ? window : this, function() {
    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") return null;
    // https://github.com/Semantic-Org/Semantic-UI/issues/3855
    // https://github.com/marcj/css-element-queries/issues/257
    var globalWindow = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = globalWindow.requestAnimationFrame || globalWindow.mozRequestAnimationFrame || globalWindow.webkitRequestAnimationFrame || function(fn) {
        return globalWindow.setTimeout(fn, 20);
    };
    var cancelAnimationFrame = globalWindow.cancelAnimationFrame || globalWindow.mozCancelAnimationFrame || globalWindow.webkitCancelAnimationFrame || function(timer) {
        globalWindow.clearTimeout(timer);
    };
    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */ function forEachElement(elements, callback) {
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = "[object Array]" === elementsType || "[object NodeList]" === elementsType || "[object HTMLCollection]" === elementsType || "[object Object]" === elementsType || "undefined" !== typeof jQuery && elements instanceof jQuery //jquery
         || "undefined" !== typeof Elements && elements instanceof Elements //mootools
        ;
        var i = 0, j = elements.length;
        if (isCollectionTyped) for(; i < j; i++)callback(elements[i]);
        else callback(elements);
    }
    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */ function getElementSize(element) {
        if (!element.getBoundingClientRect) return {
            width: element.offsetWidth,
            height: element.offsetHeight
        };
        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        };
    }
    /**
     * Apply CSS styles to element.
     *
     * @param {HTMLElement} element
     * @param {Object} style
     */ function setStyle(element, style) {
        Object.keys(style).forEach(function(key) {
            element.style[key] = style[key];
        });
    }
    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */ var ResizeSensor = function(element, callback) {
        //Is used when checking in reset() only for invisible elements
        var lastAnimationFrameForInvisibleCheck = 0;
        /**
         *
         * @constructor
         */ function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };
            var i, j;
            this.call = function(sizeInfo) {
                for(i = 0, j = q.length; i < j; i++)q[i].call(this, sizeInfo);
            };
            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++)if (q[i] !== ev) newQueue.push(q[i]);
                q = newQueue;
            };
            this.length = function() {
                return q.length;
            };
        }
        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */ function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }
            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);
            element.resizeSensor = document.createElement("div");
            element.resizeSensor.dir = "ltr";
            element.resizeSensor.className = "resize-sensor";
            var style = {
                pointerEvents: "none",
                position: "absolute",
                left: "0px",
                top: "0px",
                right: "0px",
                bottom: "0px",
                overflow: "hidden",
                zIndex: "-1",
                visibility: "hidden",
                maxWidth: "100%"
            };
            var styleChild = {
                position: "absolute",
                left: "0px",
                top: "0px",
                transition: "0s"
            };
            setStyle(element.resizeSensor, style);
            var expand = document.createElement("div");
            expand.className = "resize-sensor-expand";
            setStyle(expand, style);
            var expandChild = document.createElement("div");
            setStyle(expandChild, styleChild);
            expand.appendChild(expandChild);
            var shrink = document.createElement("div");
            shrink.className = "resize-sensor-shrink";
            setStyle(shrink, style);
            var shrinkChild = document.createElement("div");
            setStyle(shrinkChild, styleChild);
            setStyle(shrinkChild, {
                width: "200%",
                height: "200%"
            });
            shrink.appendChild(shrinkChild);
            element.resizeSensor.appendChild(expand);
            element.resizeSensor.appendChild(shrink);
            element.appendChild(element.resizeSensor);
            var computedStyle = window.getComputedStyle(element);
            var position = computedStyle ? computedStyle.getPropertyValue("position") : null;
            if ("absolute" !== position && "relative" !== position && "fixed" !== position && "sticky" !== position) element.style.position = "relative";
            var dirty = false;
            //last request animation frame id used in onscroll event
            var rafId = 0;
            var size = getElementSize(element);
            var lastWidth = 0;
            var lastHeight = 0;
            var initialHiddenCheck = true;
            lastAnimationFrameForInvisibleCheck = 0;
            var resetExpandShrink = function() {
                var width = element.offsetWidth;
                var height = element.offsetHeight;
                expandChild.style.width = width + 10 + "px";
                expandChild.style.height = height + 10 + "px";
                expand.scrollLeft = width + 10;
                expand.scrollTop = height + 10;
                shrink.scrollLeft = width + 10;
                shrink.scrollTop = height + 10;
            };
            var reset = function() {
                // Check if element is hidden
                if (initialHiddenCheck) {
                    var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
                    if (invisible) {
                        // Check in next frame
                        if (!lastAnimationFrameForInvisibleCheck) lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function() {
                            lastAnimationFrameForInvisibleCheck = 0;
                            reset();
                        });
                        return;
                    } else // Stop checking
                    initialHiddenCheck = false;
                }
                resetExpandShrink();
            };
            element.resizeSensor.resetSensor = reset;
            var onResized = function() {
                rafId = 0;
                if (!dirty) return;
                lastWidth = size.width;
                lastHeight = size.height;
                if (element.resizedAttached) element.resizedAttached.call(size);
            };
            var onScroll = function() {
                size = getElementSize(element);
                dirty = size.width !== lastWidth || size.height !== lastHeight;
                if (dirty && !rafId) rafId = requestAnimationFrame(onResized);
                reset();
            };
            var addEvent = function(el, name, cb) {
                if (el.attachEvent) el.attachEvent("on" + name, cb);
                else el.addEventListener(name, cb);
            };
            addEvent(expand, "scroll", onScroll);
            addEvent(shrink, "scroll", onScroll);
            // Fix for custom Elements and invisible elements
            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function() {
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
            });
        }
        forEachElement(element, function(elem) {
            attachResizeEvent(elem, callback);
        });
        this.detach = function(ev) {
            // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
            if (lastAnimationFrameForInvisibleCheck) {
                cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
                lastAnimationFrameForInvisibleCheck = 0;
            }
            ResizeSensor.detach(element, ev);
        };
        this.reset = function() {
            //To prevent invoking element.resizeSensor.resetSensor if it's undefined
            if (element.resizeSensor.resetSensor) element.resizeSensor.resetSensor();
        };
    };
    ResizeSensor.reset = function(element) {
        forEachElement(element, function(elem) {
            //To prevent invoking element.resizeSensor.resetSensor if it's undefined
            if (element.resizeSensor.resetSensor) elem.resizeSensor.resetSensor();
        });
    };
    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem) {
            if (!elem) return;
            if (elem.resizedAttached && typeof ev === "function") {
                elem.resizedAttached.remove(ev);
                if (elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) elem.removeChild(elem.resizeSensor);
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };
    if (typeof MutationObserver !== "undefined") {
        var observer = new MutationObserver(function(mutations) {
            for(var i in mutations)if (mutations.hasOwnProperty(i)) {
                var items = mutations[i].addedNodes;
                for(var j = 0; j < items.length; j++)if (items[j].resizeSensor) ResizeSensor.reset(items[j]);
            }
        });
        document.addEventListener("DOMContentLoaded", function(event) {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
    return ResizeSensor;
});

},{}],"7coT1":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    var _createClass = function() {
        function defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    /**
 * Sticky Sidebar JavaScript Plugin.
 * @version 3.3.1
 * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
 * @license The MIT License (MIT)
 */ var StickySidebar = function() {
        // ---------------------------------
        // # Define Constants
        // ---------------------------------
        //
        var EVENT_KEY = ".stickySidebar";
        var DEFAULTS = {
            /**
     * Additional top spacing of the element when it becomes sticky.
     * @type {Numeric|Function}
     */ topSpacing: 0,
            /**
     * Additional bottom spacing of the element when it becomes sticky.
     * @type {Numeric|Function}
     */ bottomSpacing: 0,
            /**
     * Container sidebar selector to know what the beginning and end of sticky element.
     * @type {String|False}
     */ containerSelector: false,
            /**
     * Inner wrapper selector.
     * @type {String}
     */ innerWrapperSelector: ".inner-wrapper-sticky",
            /**
     * The name of CSS class to apply to elements when they have become stuck.
     * @type {String|False}
     */ stickyClass: "is-affixed",
            /**
     * Detect when sidebar and its container change height so re-calculate their dimensions.
     * @type {Boolean}
     */ resizeSensor: true,
            /**
     * The sidebar returns to its normal position if its width below this value.
     * @type {Numeric}
     */ minWidth: false
        };
        // ---------------------------------
        // # Class Definition
        // ---------------------------------
        //
        /**
   * Sticky Sidebar Class.
   * @public
   */ var StickySidebar = function() {
            /**
     * Sticky Sidebar Constructor.
     * @constructor
     * @param {HTMLElement|String} sidebar - The sidebar element or sidebar selector.
     * @param {Object} options - The options of sticky sidebar.
     */ function StickySidebar(sidebar) {
                var _this = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                _classCallCheck(this, StickySidebar);
                this.options = StickySidebar.extend(DEFAULTS, options);
                // Sidebar element query if there's no one, throw error.
                this.sidebar = "string" === typeof sidebar ? document.querySelector(sidebar) : sidebar;
                if ("undefined" === typeof this.sidebar) throw new Error("There is no specific sidebar element.");
                this.sidebarInner = false;
                this.container = this.sidebar.parentElement;
                // Current Affix Type of sidebar element.
                this.affixedType = "STATIC";
                this.direction = "down";
                this.support = {
                    transform: false,
                    transform3d: false
                };
                this._initialized = false;
                this._reStyle = false;
                this._breakpoint = false;
                this._resizeListeners = [];
                // Dimensions of sidebar, container and screen viewport.
                this.dimensions = {
                    translateY: 0,
                    topSpacing: 0,
                    lastTopSpacing: 0,
                    bottomSpacing: 0,
                    lastBottomSpacing: 0,
                    sidebarHeight: 0,
                    sidebarWidth: 0,
                    containerTop: 0,
                    containerHeight: 0,
                    viewportHeight: 0,
                    viewportTop: 0,
                    lastViewportTop: 0
                };
                // Bind event handlers for referencability.
                [
                    "handleEvent"
                ].forEach(function(method) {
                    _this[method] = _this[method].bind(_this);
                });
                // Initialize sticky sidebar for first time.
                this.initialize();
            }
            /**
     * Initializes the sticky sidebar by adding inner wrapper, define its container, 
     * min-width breakpoint, calculating dimensions, adding helper classes and inline style.
     * @private
     */ _createClass(StickySidebar, [
                {
                    key: "initialize",
                    value: function initialize() {
                        var _this2 = this;
                        this._setSupportFeatures();
                        // Get sticky sidebar inner wrapper, if not found, will create one.
                        if (this.options.innerWrapperSelector) {
                            this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector);
                            if (null === this.sidebarInner) this.sidebarInner = false;
                        }
                        if (!this.sidebarInner) {
                            var wrapper = document.createElement("div");
                            wrapper.setAttribute("class", "inner-wrapper-sticky");
                            this.sidebar.appendChild(wrapper);
                            while(this.sidebar.firstChild != wrapper)wrapper.appendChild(this.sidebar.firstChild);
                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
                        }
                        // Container wrapper of the sidebar.
                        if (this.options.containerSelector) {
                            var containers = document.querySelectorAll(this.options.containerSelector);
                            containers = Array.prototype.slice.call(containers);
                            containers.forEach(function(container, item) {
                                if (!container.contains(_this2.sidebar)) return;
                                _this2.container = container;
                            });
                            if (!containers.length) throw new Error("The container does not contains on the sidebar.");
                        }
                        // If top/bottom spacing is not function parse value to integer.
                        if ("function" !== typeof this.options.topSpacing) this.options.topSpacing = parseInt(this.options.topSpacing) || 0;
                        if ("function" !== typeof this.options.bottomSpacing) this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0;
                        // Breakdown sticky sidebar if screen width below `options.minWidth`.
                        this._widthBreakpoint();
                        // Calculate dimensions of sidebar, container and viewport.
                        this.calcDimensions();
                        // Affix sidebar in proper position.
                        this.stickyPosition();
                        // Bind all events.
                        this.bindEvents();
                        // Inform other properties the sticky sidebar is initialized.
                        this._initialized = true;
                    }
                },
                {
                    key: "bindEvents",
                    value: function bindEvents() {
                        window.addEventListener("resize", this, {
                            passive: true,
                            capture: false
                        });
                        window.addEventListener("scroll", this, {
                            passive: true,
                            capture: false
                        });
                        this.sidebar.addEventListener("update" + EVENT_KEY, this);
                        if (this.options.resizeSensor && "undefined" !== typeof ResizeSensor) {
                            new ResizeSensor(this.sidebarInner, this.handleEvent);
                            new ResizeSensor(this.container, this.handleEvent);
                        }
                    }
                },
                {
                    key: "handleEvent",
                    value: function handleEvent(event) {
                        this.updateSticky(event);
                    }
                },
                {
                    key: "calcDimensions",
                    value: function calcDimensions() {
                        if (this._breakpoint) return;
                        var dims = this.dimensions;
                        // Container of sticky sidebar dimensions.
                        dims.containerTop = StickySidebar.offsetRelative(this.container).top;
                        dims.containerHeight = this.container.clientHeight;
                        dims.containerBottom = dims.containerTop + dims.containerHeight;
                        // Sidebar dimensions.
                        dims.sidebarHeight = this.sidebarInner.offsetHeight;
                        dims.sidebarWidth = this.sidebar.offsetWidth;
                        // Screen viewport dimensions.
                        dims.viewportHeight = window.innerHeight;
                        this._calcDimensionsWithScroll();
                    }
                },
                {
                    key: "_calcDimensionsWithScroll",
                    value: function _calcDimensionsWithScroll() {
                        var dims = this.dimensions;
                        dims.sidebarLeft = StickySidebar.offsetRelative(this.sidebar).left;
                        dims.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
                        dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
                        dims.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
                        dims.topSpacing = this.options.topSpacing;
                        dims.bottomSpacing = this.options.bottomSpacing;
                        if ("function" === typeof dims.topSpacing) dims.topSpacing = parseInt(dims.topSpacing(this.sidebar)) || 0;
                        if ("function" === typeof dims.bottomSpacing) dims.bottomSpacing = parseInt(dims.bottomSpacing(this.sidebar)) || 0;
                        if ("VIEWPORT-TOP" === this.affixedType) // Adjust translate Y in the case decrease top spacing value.
                        {
                            if (dims.topSpacing < dims.lastTopSpacing) {
                                dims.translateY += dims.lastTopSpacing - dims.topSpacing;
                                this._reStyle = true;
                            }
                        } else if ("VIEWPORT-BOTTOM" === this.affixedType) // Adjust translate Y in the case decrease bottom spacing value.
                        {
                            if (dims.bottomSpacing < dims.lastBottomSpacing) {
                                dims.translateY += dims.lastBottomSpacing - dims.bottomSpacing;
                                this._reStyle = true;
                            }
                        }
                        dims.lastTopSpacing = dims.topSpacing;
                        dims.lastBottomSpacing = dims.bottomSpacing;
                    }
                },
                {
                    key: "isSidebarFitsViewport",
                    value: function isSidebarFitsViewport() {
                        return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
                    }
                },
                {
                    key: "observeScrollDir",
                    value: function observeScrollDir() {
                        var dims = this.dimensions;
                        if (dims.lastViewportTop === dims.viewportTop) return;
                        var furthest = "down" === this.direction ? Math.min : Math.max;
                        // If the browser is scrolling not in the same direction.
                        if (dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop)) this.direction = "down" === this.direction ? "up" : "down";
                    }
                },
                {
                    key: "getAffixType",
                    value: function getAffixType() {
                        var dims = this.dimensions, affixType = false;
                        this._calcDimensionsWithScroll();
                        var sidebarBottom = dims.sidebarHeight + dims.containerTop;
                        var colliderTop = dims.viewportTop + dims.topSpacing;
                        var colliderBottom = dims.viewportBottom - dims.bottomSpacing;
                        // When browser is scrolling top.
                        if ("up" === this.direction) {
                            if (colliderTop <= dims.containerTop) {
                                dims.translateY = 0;
                                affixType = "STATIC";
                            } else if (colliderTop <= dims.translateY + dims.containerTop) {
                                dims.translateY = colliderTop - dims.containerTop;
                                affixType = "VIEWPORT-TOP";
                            } else if (!this.isSidebarFitsViewport() && dims.containerTop <= colliderTop) affixType = "VIEWPORT-UNBOTTOM";
                        // When browser is scrolling up.
                        } else // When sidebar element is not bigger than screen viewport.
                        if (this.isSidebarFitsViewport()) {
                            if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
                                dims.translateY = dims.containerBottom - sidebarBottom;
                                affixType = "CONTAINER-BOTTOM";
                            } else if (colliderTop >= dims.containerTop) {
                                dims.translateY = colliderTop - dims.containerTop;
                                affixType = "VIEWPORT-TOP";
                            }
                        // When sidebar element is bigger than screen viewport.
                        } else {
                            if (dims.containerBottom <= colliderBottom) {
                                dims.translateY = dims.containerBottom - sidebarBottom;
                                affixType = "CONTAINER-BOTTOM";
                            } else if (sidebarBottom + dims.translateY <= colliderBottom) {
                                dims.translateY = colliderBottom - sidebarBottom;
                                affixType = "VIEWPORT-BOTTOM";
                            } else if (dims.containerTop + dims.translateY <= colliderTop) affixType = "VIEWPORT-UNBOTTOM";
                        }
                        // Make sure the translate Y is not bigger than container height.
                        dims.translateY = Math.max(0, dims.translateY);
                        dims.translateY = Math.min(dims.containerHeight, dims.translateY);
                        dims.lastViewportTop = dims.viewportTop;
                        return affixType;
                    }
                },
                {
                    key: "_getStyle",
                    value: function _getStyle(affixType) {
                        if ("undefined" === typeof affixType) return;
                        var style = {
                            inner: {},
                            outer: {}
                        };
                        var dims = this.dimensions;
                        switch(affixType){
                            case "VIEWPORT-TOP":
                                style.inner = {
                                    position: "fixed",
                                    top: dims.topSpacing,
                                    left: dims.sidebarLeft - dims.viewportLeft,
                                    width: dims.sidebarWidth
                                };
                                break;
                            case "VIEWPORT-BOTTOM":
                                style.inner = {
                                    position: "fixed",
                                    top: "auto",
                                    left: dims.sidebarLeft,
                                    bottom: dims.bottomSpacing,
                                    width: dims.sidebarWidth
                                };
                                break;
                            case "CONTAINER-BOTTOM":
                            case "VIEWPORT-UNBOTTOM":
                                var translate = this._getTranslate(0, dims.translateY + "px");
                                if (translate) style.inner = {
                                    transform: translate
                                };
                                else style.inner = {
                                    position: "absolute",
                                    top: dims.translateY,
                                    width: dims.sidebarWidth
                                };
                                break;
                        }
                        switch(affixType){
                            case "VIEWPORT-TOP":
                            case "VIEWPORT-BOTTOM":
                            case "VIEWPORT-UNBOTTOM":
                            case "CONTAINER-BOTTOM":
                                style.outer = {
                                    height: dims.sidebarHeight,
                                    position: "relative"
                                };
                                break;
                        }
                        style.outer = StickySidebar.extend({
                            height: "",
                            position: ""
                        }, style.outer);
                        style.inner = StickySidebar.extend({
                            position: "relative",
                            top: "",
                            left: "",
                            bottom: "",
                            width: "",
                            transform: this._getTranslate()
                        }, style.inner);
                        return style;
                    }
                },
                {
                    key: "stickyPosition",
                    value: function stickyPosition(force) {
                        if (this._breakpoint) return;
                        force = this._reStyle || force || false;
                        var affixType = this.getAffixType();
                        var style = this._getStyle(affixType);
                        if ((this.affixedType != affixType || force) && affixType) {
                            var affixEvent = "affix." + affixType.toLowerCase().replace("viewport-", "") + EVENT_KEY;
                            StickySidebar.eventTrigger(this.sidebar, affixEvent);
                            if ("STATIC" === affixType) StickySidebar.removeClass(this.sidebar, this.options.stickyClass);
                            else StickySidebar.addClass(this.sidebar, this.options.stickyClass);
                            for(var key in style.outer)this.sidebar.style[key] = style.outer[key];
                            for(var _key in style.inner){
                                var _unit2 = "number" === typeof style.inner[_key] ? "px" : "";
                                this.sidebarInner.style[_key] = style.inner[_key] + _unit2;
                            }
                            var affixedEvent = "affixed." + affixType.toLowerCase().replace("viewport-", "") + EVENT_KEY;
                            StickySidebar.eventTrigger(this.sidebar, affixedEvent);
                        } else if (this._initialized) this.sidebarInner.style.left = style.inner.left;
                        this.affixedType = affixType;
                    }
                },
                {
                    key: "_widthBreakpoint",
                    value: function _widthBreakpoint() {
                        if (window.innerWidth <= this.options.minWidth) {
                            this._breakpoint = true;
                            this.affixedType = "STATIC";
                            this.sidebar.removeAttribute("style");
                            StickySidebar.removeClass(this.sidebar, this.options.stickyClass);
                            this.sidebarInner.removeAttribute("style");
                        } else this._breakpoint = false;
                    }
                },
                {
                    key: "updateSticky",
                    value: function updateSticky() {
                        var _this3 = this;
                        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        if (this._running) return;
                        this._running = true;
                        (function(eventType) {
                            requestAnimationFrame(function() {
                                switch(eventType){
                                    // When browser is scrolling and re-calculate just dimensions
                                    // within scroll. 
                                    case "scroll":
                                        _this3._calcDimensionsWithScroll();
                                        _this3.observeScrollDir();
                                        _this3.stickyPosition();
                                        break;
                                    // When browser is resizing or there's no event, observe width
                                    // breakpoint and re-calculate dimensions.
                                    case "resize":
                                    default:
                                        _this3._widthBreakpoint();
                                        _this3.calcDimensions();
                                        _this3.stickyPosition(true);
                                        break;
                                }
                                _this3._running = false;
                            });
                        })(event.type);
                    }
                },
                {
                    key: "_setSupportFeatures",
                    value: function _setSupportFeatures() {
                        var support = this.support;
                        support.transform = StickySidebar.supportTransform();
                        support.transform3d = StickySidebar.supportTransform(true);
                    }
                },
                {
                    key: "_getTranslate",
                    value: function _getTranslate() {
                        var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                        if (this.support.transform3d) return "translate3d(" + y + ", " + x + ", " + z + ")";
                        else if (this.support.translate) return "translate(" + y + ", " + x + ")";
                        else return false;
                    }
                },
                {
                    key: "destroy",
                    value: function destroy() {
                        window.removeEventListener("resize", this, {
                            caption: false
                        });
                        window.removeEventListener("scroll", this, {
                            caption: false
                        });
                        this.sidebar.classList.remove(this.options.stickyClass);
                        this.sidebar.style.minHeight = "";
                        this.sidebar.removeEventListener("update" + EVENT_KEY, this);
                        var styleReset = {
                            inner: {},
                            outer: {}
                        };
                        styleReset.inner = {
                            position: "",
                            top: "",
                            left: "",
                            bottom: "",
                            width: "",
                            transform: ""
                        };
                        styleReset.outer = {
                            height: "",
                            position: ""
                        };
                        for(var key in styleReset.outer)this.sidebar.style[key] = styleReset.outer[key];
                        for(var _key2 in styleReset.inner)this.sidebarInner.style[_key2] = styleReset.inner[_key2];
                        if (this.options.resizeSensor && "undefined" !== typeof ResizeSensor) {
                            ResizeSensor.detach(this.sidebarInner, this.handleEvent);
                            ResizeSensor.detach(this.container, this.handleEvent);
                        }
                    }
                }
            ], [
                {
                    key: "supportTransform",
                    value: function supportTransform(transform3d) {
                        var result = false, property = transform3d ? "perspective" : "transform", upper = property.charAt(0).toUpperCase() + property.slice(1), prefixes = [
                            "Webkit",
                            "Moz",
                            "O",
                            "ms"
                        ], support = document.createElement("support"), style = support.style;
                        (property + " " + prefixes.join(upper + " ") + upper).split(" ").forEach(function(property, i) {
                            if (style[property] !== undefined) {
                                result = property;
                                return false;
                            }
                        });
                        return result;
                    }
                },
                {
                    key: "eventTrigger",
                    value: function eventTrigger(element, eventName, data) {
                        try {
                            var event = new CustomEvent(eventName, {
                                detail: data
                            });
                        } catch (e) {
                            var event = document.createEvent("CustomEvent");
                            event.initCustomEvent(eventName, true, true, data);
                        }
                        element.dispatchEvent(event);
                    }
                },
                {
                    key: "extend",
                    value: function extend(defaults, options) {
                        var results = {};
                        for(var key in defaults)if ("undefined" !== typeof options[key]) results[key] = options[key];
                        else results[key] = defaults[key];
                        return results;
                    }
                },
                {
                    key: "offsetRelative",
                    value: function offsetRelative(element) {
                        var result = {
                            left: 0,
                            top: 0
                        };
                        do {
                            var offsetTop = element.offsetTop;
                            var offsetLeft = element.offsetLeft;
                            if (!isNaN(offsetTop)) result.top += offsetTop;
                            if (!isNaN(offsetLeft)) result.left += offsetLeft;
                            element = "BODY" === element.tagName ? element.parentElement : element.offsetParent;
                        }while (element);
                        return result;
                    }
                },
                {
                    key: "addClass",
                    value: function addClass(element, className) {
                        if (!StickySidebar.hasClass(element, className)) {
                            if (element.classList) element.classList.add(className);
                            else element.className += " " + className;
                        }
                    }
                },
                {
                    key: "removeClass",
                    value: function removeClass(element, className) {
                        if (StickySidebar.hasClass(element, className)) {
                            if (element.classList) element.classList.remove(className);
                            else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                        }
                    }
                },
                {
                    key: "hasClass",
                    value: function hasClass(element, className) {
                        if (element.classList) return element.classList.contains(className);
                        else return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
                    }
                }
            ]);
            return StickySidebar;
        }();
        return StickySidebar;
    }();
    // Global
    // -------------------------
    window.StickySidebar = StickySidebar;
    return StickySidebar;
}); //# sourceMappingURL=sticky-sidebar.js.map

},{}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire72bc")

//# sourceMappingURL=index.59a40e7a.js.map
