// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"icAAj":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "cd1566bccb65f72e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"blcJa":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4931 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4931.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4931.prelude(module);

try {
// let root = document.querySelector("#root")
// let h1 = document.createElement("h1")
// h1.textContent = "Namaste Everyone from JS !"
// root.appendChild(h1)
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _client = require("react-dom/client");
const heading1 = /*#__PURE__*/ (0, _reactDefault.default).createElement("h1", {
    id: "title",
    key: "h1"
}, "Heading 1!");
const heading2 = /*#__PURE__*/ (0, _reactDefault.default).createElement("h2", {
    id: "title-2",
    key: "h2"
}, "Heading 2!");
const container = /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
    id: "container",
    hello: "world"
}, [
    heading1,
    heading2
]);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(container);

  $parcel$ReactRefreshHelpers$4931.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"jMk1U","react-dom/client":"hrvwu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"jMk1U":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"ghslp"}],"ghslp":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
            });
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) {
            if (0 !== queue.length) try {
                flushActQueue(queue);
                enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
            } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
            }
            else ReactSharedInternals.actQueue = null;
        }
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1);
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    }, fnName;
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++){
            var node = arguments[i];
            isValidElement(node) && node._store && (node._store.validated = 1);
        }
        i = {};
        node = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        node && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, node, void 0, void 0, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: {
                _status: -1,
                _result: ctor
            },
            _init: lazyInitializer
        };
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = new Set();
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        var dispatcher = resolveDispatcher();
        if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();

},{}],"hrvwu":[function(require,module,exports,__globalThis) {
'use strict';
function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') return;
    var err;
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
}
module.exports = require("2b53550ce04dc092");

},{"2b53550ce04dc092":"lu7uO"}],"lu7uO":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ "use strict";
(function() {
    function findHook(fiber, id) {
        for(fiber = fiber.memoizedState; null !== fiber && 0 < id;)fiber = fiber.next, id--;
        return fiber;
    }
    function copyWithSetImpl(obj, path, index, value) {
        if (index >= path.length) return value;
        var key = path[index], updated = isArrayImpl(obj) ? obj.slice() : assign({}, obj);
        updated[key] = copyWithSetImpl(obj[key], path, index + 1, value);
        return updated;
    }
    function copyWithRename(obj, oldPath, newPath) {
        if (oldPath.length !== newPath.length) console.warn("copyWithRename() expects paths of the same length");
        else {
            for(var i = 0; i < newPath.length - 1; i++)if (oldPath[i] !== newPath[i]) {
                console.warn("copyWithRename() expects paths to be the same except for the deepest key");
                return;
            }
            return copyWithRenameImpl(obj, oldPath, newPath, 0);
        }
    }
    function copyWithRenameImpl(obj, oldPath, newPath, index) {
        var oldKey = oldPath[index], updated = isArrayImpl(obj) ? obj.slice() : assign({}, obj);
        index + 1 === oldPath.length ? (updated[newPath[index]] = updated[oldKey], isArrayImpl(updated) ? updated.splice(oldKey, 1) : delete updated[oldKey]) : updated[oldKey] = copyWithRenameImpl(obj[oldKey], oldPath, newPath, index + 1);
        return updated;
    }
    function copyWithDeleteImpl(obj, path, index) {
        var key = path[index], updated = isArrayImpl(obj) ? obj.slice() : assign({}, obj);
        if (index + 1 === path.length) return isArrayImpl(updated) ? updated.splice(key, 1) : delete updated[key], updated;
        updated[key] = copyWithDeleteImpl(obj[key], path, index + 1);
        return updated;
    }
    function shouldSuspendImpl() {
        return !1;
    }
    function shouldErrorImpl() {
        return null;
    }
    function warnForMissingKey() {}
    function warnInvalidHookAccess() {
        console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
    }
    function warnInvalidContextAccess() {
        console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }
    function noop$2() {}
    function setToSortedString(set) {
        var array = [];
        set.forEach(function(value) {
            array.push(value);
        });
        return array.sort().join(", ");
    }
    function createFiber(tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
    }
    function scheduleRoot(root, element) {
        root.context === emptyContextObject && (updateContainerImpl(root.current, 2, element, root, null, null), flushSyncWork$1());
    }
    function scheduleRefresh(root, update) {
        if (null !== resolveFamily) {
            var staleFamilies = update.staleFamilies;
            update = update.updatedFamilies;
            flushPendingEffects();
            scheduleFibersWithFamiliesRecursively(root.current, update, staleFamilies);
            flushSyncWork$1();
        }
    }
    function setRefreshHandler(handler) {
        resolveFamily = handler;
    }
    function isValidContainer(node) {
        return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
    }
    function getNearestMountedFiber(fiber) {
        var node = fiber, nearestMounted = fiber;
        if (fiber.alternate) for(; node.return;)node = node.return;
        else {
            fiber = node;
            do node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
            while (fiber);
        }
        return 3 === node.tag ? nearestMounted : null;
    }
    function getSuspenseInstanceFromFiber(fiber) {
        if (13 === fiber.tag) {
            var suspenseState = fiber.memoizedState;
            null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
            if (null !== suspenseState) return suspenseState.dehydrated;
        }
        return null;
    }
    function assertIsMounted(fiber) {
        if (getNearestMountedFiber(fiber) !== fiber) throw Error("Unable to find node on an unmounted component.");
    }
    function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;
        if (!alternate) {
            alternate = getNearestMountedFiber(fiber);
            if (null === alternate) throw Error("Unable to find node on an unmounted component.");
            return alternate !== fiber ? null : fiber;
        }
        for(var a = fiber, b = alternate;;){
            var parentA = a.return;
            if (null === parentA) break;
            var parentB = parentA.alternate;
            if (null === parentB) {
                b = parentA.return;
                if (null !== b) {
                    a = b;
                    continue;
                }
                break;
            }
            if (parentA.child === parentB.child) {
                for(parentB = parentA.child; parentB;){
                    if (parentB === a) return assertIsMounted(parentA), fiber;
                    if (parentB === b) return assertIsMounted(parentA), alternate;
                    parentB = parentB.sibling;
                }
                throw Error("Unable to find node on an unmounted component.");
            }
            if (a.return !== b.return) a = parentA, b = parentB;
            else {
                for(var didFindChild = !1, _child = parentA.child; _child;){
                    if (_child === a) {
                        didFindChild = !0;
                        a = parentA;
                        b = parentB;
                        break;
                    }
                    if (_child === b) {
                        didFindChild = !0;
                        b = parentA;
                        a = parentB;
                        break;
                    }
                    _child = _child.sibling;
                }
                if (!didFindChild) {
                    for(_child = parentB.child; _child;){
                        if (_child === a) {
                            didFindChild = !0;
                            a = parentB;
                            b = parentA;
                            break;
                        }
                        if (_child === b) {
                            didFindChild = !0;
                            b = parentB;
                            a = parentA;
                            break;
                        }
                        _child = _child.sibling;
                    }
                    if (!didFindChild) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
                }
            }
            if (a.alternate !== b) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
        }
        if (3 !== a.tag) throw Error("Unable to find node on an unmounted component.");
        return a.stateNode.current === a ? fiber : alternate;
    }
    function findCurrentHostFiberImpl(node) {
        var tag = node.tag;
        if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
        for(node = node.child; null !== node;){
            tag = findCurrentHostFiberImpl(node);
            if (null !== tag) return tag;
            node = node.sibling;
        }
        return null;
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getComponentNameFromOwner(owner) {
        return "number" === typeof owner.tag ? getComponentNameFromFiber(owner) : "string" === typeof owner.name ? owner.name : null;
    }
    function getComponentNameFromFiber(fiber) {
        var type = fiber.type;
        switch(fiber.tag){
            case 31:
                return "Activity";
            case 24:
                return "Cache";
            case 9:
                return (type._context.displayName || "Context") + ".Consumer";
            case 10:
                return (type.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return fiber = type.render, fiber = fiber.displayName || fiber.name || "", type.displayName || ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 26:
            case 27:
            case 5:
                return type;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return getComponentNameFromType(type);
            case 8:
                return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 14:
            case 15:
                if ("function" === typeof type) return type.displayName || type.name || null;
                if ("string" === typeof type) return type;
                break;
            case 29:
                type = fiber._debugInfo;
                if (null != type) {
                    for(var i = type.length - 1; 0 <= i; i--)if ("string" === typeof type[i].name) return type[i].name;
                }
                if (null !== fiber.return) return getComponentNameFromFiber(fiber.return);
        }
        return null;
    }
    function createCursor(defaultValue) {
        return {
            current: defaultValue
        };
    }
    function pop(cursor, fiber) {
        0 > index$jscomp$0 ? console.error("Unexpected pop.") : (fiber !== fiberStack[index$jscomp$0] && console.error("Unexpected Fiber popped."), cursor.current = valueStack[index$jscomp$0], valueStack[index$jscomp$0] = null, fiberStack[index$jscomp$0] = null, index$jscomp$0--);
    }
    function push(cursor, value, fiber) {
        index$jscomp$0++;
        valueStack[index$jscomp$0] = cursor.current;
        fiberStack[index$jscomp$0] = fiber;
        cursor.current = value;
    }
    function requiredContext(c) {
        null === c && console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
        return c;
    }
    function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance, fiber);
        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor, null, fiber);
        var nextRootContext = nextRootInstance.nodeType;
        switch(nextRootContext){
            case 9:
            case 11:
                nextRootContext = 9 === nextRootContext ? "#document" : "#fragment";
                nextRootInstance = (nextRootInstance = nextRootInstance.documentElement) ? (nextRootInstance = nextRootInstance.namespaceURI) ? getOwnHostContext(nextRootInstance) : HostContextNamespaceNone : HostContextNamespaceNone;
                break;
            default:
                if (nextRootContext = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI) nextRootInstance = getOwnHostContext(nextRootInstance), nextRootInstance = getChildHostContextProd(nextRootInstance, nextRootContext);
                else switch(nextRootContext){
                    case "svg":
                        nextRootInstance = HostContextNamespaceSvg;
                        break;
                    case "math":
                        nextRootInstance = HostContextNamespaceMath;
                        break;
                    default:
                        nextRootInstance = HostContextNamespaceNone;
                }
        }
        nextRootContext = nextRootContext.toLowerCase();
        nextRootContext = updatedAncestorInfoDev(null, nextRootContext);
        nextRootContext = {
            context: nextRootInstance,
            ancestorInfo: nextRootContext
        };
        pop(contextStackCursor, fiber);
        push(contextStackCursor, nextRootContext, fiber);
    }
    function popHostContainer(fiber) {
        pop(contextStackCursor, fiber);
        pop(contextFiberStackCursor, fiber);
        pop(rootInstanceStackCursor, fiber);
    }
    function getHostContext() {
        return requiredContext(contextStackCursor.current);
    }
    function pushHostContext(fiber) {
        null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber, fiber);
        var context = requiredContext(contextStackCursor.current);
        var type = fiber.type;
        var nextContext = getChildHostContextProd(context.context, type);
        type = updatedAncestorInfoDev(context.ancestorInfo, type);
        nextContext = {
            context: nextContext,
            ancestorInfo: type
        };
        context !== nextContext && (push(contextFiberStackCursor, fiber, fiber), push(contextStackCursor, nextContext, fiber));
    }
    function popHostContext(fiber) {
        contextFiberStackCursor.current === fiber && (pop(contextStackCursor, fiber), pop(contextFiberStackCursor, fiber));
        hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor, fiber), HostTransitionContext._currentValue = NotPendingTransition);
    }
    function typeName(value) {
        return "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    }
    function willCoercionThrow(value) {
        try {
            return testStringCoercion(value), !1;
        } catch (e) {
            return !0;
        }
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName(value)), testStringCoercion(value);
    }
    function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName(value)), testStringCoercion(value);
    }
    function checkFormFieldValueStringCoercion(value) {
        if (willCoercionThrow(value)) return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.", typeName(value)), testStringCoercion(value);
    }
    function injectInternals(internals) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook.isDisabled) return !0;
        if (!hook.supportsFiber) return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"), !0;
        try {
            rendererID = hook.inject(internals), injectedHook = hook;
        } catch (err) {
            console.error("React instrumentation encountered an error: %s.", err);
        }
        return hook.checkDCE ? !0 : !1;
    }
    function setIsStrictModeForDevtools(newIsStrictMode) {
        "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
        if (injectedHook && "function" === typeof injectedHook.setStrictMode) try {
            injectedHook.setStrictMode(rendererID, newIsStrictMode);
        } catch (err) {
            hasLoggedError || (hasLoggedError = !0, console.error("React instrumentation encountered an error: %s", err));
        }
    }
    function injectProfilingHooks(profilingHooks) {
        injectedProfilingHooks = profilingHooks;
    }
    function markCommitStopped() {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markCommitStopped && injectedProfilingHooks.markCommitStopped();
    }
    function markComponentRenderStarted(fiber) {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentRenderStarted && injectedProfilingHooks.markComponentRenderStarted(fiber);
    }
    function markComponentRenderStopped() {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentRenderStopped && injectedProfilingHooks.markComponentRenderStopped();
    }
    function markRenderStarted(lanes) {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markRenderStarted && injectedProfilingHooks.markRenderStarted(lanes);
    }
    function markRenderStopped() {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markRenderStopped && injectedProfilingHooks.markRenderStopped();
    }
    function markStateUpdateScheduled(fiber, lane) {
        null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markStateUpdateScheduled && injectedProfilingHooks.markStateUpdateScheduled(fiber, lane);
    }
    function clz32Fallback(x) {
        x >>>= 0;
        return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function getLabelForLane(lane) {
        if (lane & 1) return "SyncHydrationLane";
        if (lane & 2) return "Sync";
        if (lane & 4) return "InputContinuousHydration";
        if (lane & 8) return "InputContinuous";
        if (lane & 16) return "DefaultHydration";
        if (lane & 32) return "Default";
        if (lane & 128) return "TransitionHydration";
        if (lane & 4194048) return "Transition";
        if (lane & 62914560) return "Retry";
        if (lane & 67108864) return "SelectiveHydration";
        if (lane & 134217728) return "IdleHydration";
        if (lane & 268435456) return "Idle";
        if (lane & 536870912) return "Offscreen";
        if (lane & 1073741824) return "Deferred";
    }
    function getHighestPriorityLanes(lanes) {
        var pendingSyncLanes = lanes & 42;
        if (0 !== pendingSyncLanes) return pendingSyncLanes;
        switch(lanes & -lanes){
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return lanes & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return lanes & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return console.error("Should have found matching lanes. This is a bug in React."), lanes;
        }
    }
    function getNextLanes(root, wipLanes, rootHasPendingCommit) {
        var pendingLanes = root.pendingLanes;
        if (0 === pendingLanes) return 0;
        var nextLanes = 0, suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes;
        root = root.warmLanes;
        var nonIdlePendingLanes = pendingLanes & 134217727;
        0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
        return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
    }
    function checkIfRootIsPrerendering(root, renderLanes) {
        return 0 === (root.pendingLanes & ~(root.suspendedLanes & ~root.pingedLanes) & renderLanes);
    }
    function computeExpirationTime(lane, currentTime) {
        switch(lane){
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return currentTime + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return currentTime + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return console.error("Should have found matching lanes. This is a bug in React."), -1;
        }
    }
    function claimNextTransitionLane() {
        var lane = nextTransitionLane;
        nextTransitionLane <<= 1;
        0 === (nextTransitionLane & 4194048) && (nextTransitionLane = 256);
        return lane;
    }
    function claimNextRetryLane() {
        var lane = nextRetryLane;
        nextRetryLane <<= 1;
        0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
        return lane;
    }
    function createLaneMap(initial) {
        for(var laneMap = [], i = 0; 31 > i; i++)laneMap.push(initial);
        return laneMap;
    }
    function markRootUpdated$1(root, updateLane) {
        root.pendingLanes |= updateLane;
        268435456 !== updateLane && (root.suspendedLanes = 0, root.pingedLanes = 0, root.warmLanes = 0);
    }
    function markRootFinished(root, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
        var previouslyPendingLanes = root.pendingLanes;
        root.pendingLanes = remainingLanes;
        root.suspendedLanes = 0;
        root.pingedLanes = 0;
        root.warmLanes = 0;
        root.expiredLanes &= remainingLanes;
        root.entangledLanes &= remainingLanes;
        root.errorRecoveryDisabledLanes &= remainingLanes;
        root.shellSuspendCounter = 0;
        var entanglements = root.entanglements, expirationTimes = root.expirationTimes, hiddenUpdates = root.hiddenUpdates;
        for(remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes;){
            var index = 31 - clz32(remainingLanes), lane = 1 << index;
            entanglements[index] = 0;
            expirationTimes[index] = -1;
            var hiddenUpdatesForLane = hiddenUpdates[index];
            if (null !== hiddenUpdatesForLane) for(hiddenUpdates[index] = null, index = 0; index < hiddenUpdatesForLane.length; index++){
                var update = hiddenUpdatesForLane[index];
                null !== update && (update.lane &= -536870913);
            }
            remainingLanes &= ~lane;
        }
        0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
        0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root.tag && (root.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
    }
    function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
        root.pendingLanes |= spawnedLane;
        root.suspendedLanes &= ~spawnedLane;
        var spawnedLaneIndex = 31 - clz32(spawnedLane);
        root.entangledLanes |= spawnedLane;
        root.entanglements[spawnedLaneIndex] = root.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 4194090;
    }
    function markRootEntangled(root, entangledLanes) {
        var rootEntangledLanes = root.entangledLanes |= entangledLanes;
        for(root = root.entanglements; rootEntangledLanes;){
            var index = 31 - clz32(rootEntangledLanes), lane = 1 << index;
            lane & entangledLanes | root[index] & entangledLanes && (root[index] |= entangledLanes);
            rootEntangledLanes &= ~lane;
        }
    }
    function getBumpedLaneForHydrationByLane(lane) {
        switch(lane){
            case 2:
                lane = 1;
                break;
            case 8:
                lane = 4;
                break;
            case 32:
                lane = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                lane = 128;
                break;
            case 268435456:
                lane = 134217728;
                break;
            default:
                lane = 0;
        }
        return lane;
    }
    function addFiberToLanesMap(root, fiber, lanes) {
        if (isDevToolsPresent) for(root = root.pendingUpdatersLaneMap; 0 < lanes;){
            var index = 31 - clz32(lanes), lane = 1 << index;
            root[index].add(fiber);
            lanes &= ~lane;
        }
    }
    function movePendingFibersToMemoized(root, lanes) {
        if (isDevToolsPresent) for(var pendingUpdatersLaneMap = root.pendingUpdatersLaneMap, memoizedUpdaters = root.memoizedUpdaters; 0 < lanes;){
            var index = 31 - clz32(lanes);
            root = 1 << index;
            index = pendingUpdatersLaneMap[index];
            0 < index.size && (index.forEach(function(fiber) {
                var alternate = fiber.alternate;
                null !== alternate && memoizedUpdaters.has(alternate) || memoizedUpdaters.add(fiber);
            }), index.clear());
            lanes &= ~root;
        }
    }
    function lanesToEventPriority(lanes) {
        lanes &= -lanes;
        return 0 !== DiscreteEventPriority && DiscreteEventPriority < lanes ? 0 !== ContinuousEventPriority && ContinuousEventPriority < lanes ? 0 !== (lanes & 134217727) ? DefaultEventPriority : IdleEventPriority : ContinuousEventPriority : DiscreteEventPriority;
    }
    function resolveUpdatePriority() {
        var updatePriority = ReactDOMSharedInternals.p;
        if (0 !== updatePriority) return updatePriority;
        updatePriority = window.event;
        return void 0 === updatePriority ? DefaultEventPriority : getEventPriority(updatePriority.type);
    }
    function runWithPriority(priority, fn) {
        var previousPriority = ReactDOMSharedInternals.p;
        try {
            return ReactDOMSharedInternals.p = priority, fn();
        } finally{
            ReactDOMSharedInternals.p = previousPriority;
        }
    }
    function detachDeletedInstance(node) {
        delete node[internalInstanceKey];
        delete node[internalPropsKey];
        delete node[internalEventHandlersKey];
        delete node[internalEventHandlerListenersKey];
        delete node[internalEventHandlesSetKey];
    }
    function getClosestInstanceFromNode(targetNode) {
        var targetInst = targetNode[internalInstanceKey];
        if (targetInst) return targetInst;
        for(var parentNode = targetNode.parentNode; parentNode;){
            if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
                parentNode = targetInst.alternate;
                if (null !== targetInst.child || null !== parentNode && null !== parentNode.child) for(targetNode = getParentSuspenseInstance(targetNode); null !== targetNode;){
                    if (parentNode = targetNode[internalInstanceKey]) return parentNode;
                    targetNode = getParentSuspenseInstance(targetNode);
                }
                return targetInst;
            }
            targetNode = parentNode;
            parentNode = targetNode.parentNode;
        }
        return null;
    }
    function getInstanceFromNode(node) {
        if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
            var tag = node.tag;
            if (5 === tag || 6 === tag || 13 === tag || 26 === tag || 27 === tag || 3 === tag) return node;
        }
        return null;
    }
    function getNodeFromInstance(inst) {
        var tag = inst.tag;
        if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
        throw Error("getNodeFromInstance: Invalid argument.");
    }
    function getResourcesFromRoot(root) {
        var resources = root[internalRootNodeResourcesKey];
        resources || (resources = root[internalRootNodeResourcesKey] = {
            hoistableStyles: new Map(),
            hoistableScripts: new Map()
        });
        return resources;
    }
    function markNodeAsHoistable(node) {
        node[internalHoistableMarker] = !0;
    }
    function registerTwoPhaseEvent(registrationName, dependencies) {
        registerDirectEvent(registrationName, dependencies);
        registerDirectEvent(registrationName + "Capture", dependencies);
    }
    function registerDirectEvent(registrationName, dependencies) {
        registrationNameDependencies[registrationName] && console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", registrationName);
        registrationNameDependencies[registrationName] = dependencies;
        var lowerCasedName = registrationName.toLowerCase();
        possibleRegistrationNames[lowerCasedName] = registrationName;
        "onDoubleClick" === registrationName && (possibleRegistrationNames.ondblclick = registrationName);
        for(registrationName = 0; registrationName < dependencies.length; registrationName++)allNativeEvents.add(dependencies[registrationName]);
    }
    function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || null == props.value || ("select" === tagName ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
        props.onChange || props.readOnly || props.disabled || null == props.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
        illegalAttributeNameCache[attributeName] = !0;
        console.error("Invalid attribute name: `%s`", attributeName);
        return !1;
    }
    function getValueForAttributeOnCustomComponent(node, name, expected) {
        if (isAttributeNameSafe(name)) {
            if (!node.hasAttribute(name)) {
                switch(typeof expected){
                    case "symbol":
                    case "object":
                        return expected;
                    case "function":
                        return expected;
                    case "boolean":
                        if (!1 === expected) return expected;
                }
                return void 0 === expected ? void 0 : null;
            }
            node = node.getAttribute(name);
            if ("" === node && !0 === expected) return !0;
            checkAttributeStringCoercion(expected, name);
            return node === "" + expected ? expected : node;
        }
    }
    function setValueForAttribute(node, name, value) {
        if (isAttributeNameSafe(name)) {
            if (null === value) node.removeAttribute(name);
            else {
                switch(typeof value){
                    case "undefined":
                    case "function":
                    case "symbol":
                        node.removeAttribute(name);
                        return;
                    case "boolean":
                        var prefix = name.toLowerCase().slice(0, 5);
                        if ("data-" !== prefix && "aria-" !== prefix) {
                            node.removeAttribute(name);
                            return;
                        }
                }
                checkAttributeStringCoercion(value, name);
                node.setAttribute(name, "" + value);
            }
        }
    }
    function setValueForKnownAttribute(node, name, value) {
        if (null === value) node.removeAttribute(name);
        else {
            switch(typeof value){
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    node.removeAttribute(name);
                    return;
            }
            checkAttributeStringCoercion(value, name);
            node.setAttribute(name, "" + value);
        }
    }
    function setValueForNamespacedAttribute(node, namespace, name, value) {
        if (null === value) node.removeAttribute(name);
        else {
            switch(typeof value){
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    node.removeAttribute(name);
                    return;
            }
            checkAttributeStringCoercion(value, name);
            node.setAttributeNS(namespace, name, "" + value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function formatOwnerStack(error) {
        var prevPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        error = error.stack;
        Error.prepareStackTrace = prevPrepareStackTrace;
        error.startsWith("Error: react-stack-top-frame\n") && (error = error.slice(29));
        prevPrepareStackTrace = error.indexOf("\n");
        -1 !== prevPrepareStackTrace && (error = error.slice(prevPrepareStackTrace + 1));
        prevPrepareStackTrace = error.indexOf("react-stack-bottom-frame");
        -1 !== prevPrepareStackTrace && (prevPrepareStackTrace = error.lastIndexOf("\n", prevPrepareStackTrace));
        if (-1 !== prevPrepareStackTrace) error = error.slice(0, prevPrepareStackTrace);
        else return "";
        return error;
    }
    function describeFiber(fiber) {
        switch(fiber.tag){
            case 26:
            case 27:
            case 5:
                return describeBuiltInComponentFrame(fiber.type);
            case 16:
                return describeBuiltInComponentFrame("Lazy");
            case 13:
                return describeBuiltInComponentFrame("Suspense");
            case 19:
                return describeBuiltInComponentFrame("SuspenseList");
            case 0:
            case 15:
                return describeNativeComponentFrame(fiber.type, !1);
            case 11:
                return describeNativeComponentFrame(fiber.type.render, !1);
            case 1:
                return describeNativeComponentFrame(fiber.type, !0);
            case 31:
                return describeBuiltInComponentFrame("Activity");
            default:
                return "";
        }
    }
    function getStackByFiberInDevAndProd(workInProgress) {
        try {
            var info = "";
            do {
                info += describeFiber(workInProgress);
                var debugInfo = workInProgress._debugInfo;
                if (debugInfo) for(var i = debugInfo.length - 1; 0 <= i; i--){
                    var entry = debugInfo[i];
                    if ("string" === typeof entry.name) {
                        var JSCompiler_temp_const = info, env = entry.env;
                        var JSCompiler_inline_result = describeBuiltInComponentFrame(entry.name + (env ? " [" + env + "]" : ""));
                        info = JSCompiler_temp_const + JSCompiler_inline_result;
                    }
                }
                workInProgress = workInProgress.return;
            }while (workInProgress);
            return info;
        } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
    }
    function describeFunctionComponentFrameWithoutLineNumber(fn) {
        return (fn = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(fn) : "";
    }
    function getCurrentFiberOwnerNameInDevOrNull() {
        if (null === current) return null;
        var owner = current._debugOwner;
        return null != owner ? getComponentNameFromOwner(owner) : null;
    }
    function getCurrentFiberStackInDev() {
        if (null === current) return "";
        var workInProgress = current;
        try {
            var info = "";
            6 === workInProgress.tag && (workInProgress = workInProgress.return);
            switch(workInProgress.tag){
                case 26:
                case 27:
                case 5:
                    info += describeBuiltInComponentFrame(workInProgress.type);
                    break;
                case 13:
                    info += describeBuiltInComponentFrame("Suspense");
                    break;
                case 19:
                    info += describeBuiltInComponentFrame("SuspenseList");
                    break;
                case 31:
                    info += describeBuiltInComponentFrame("Activity");
                    break;
                case 30:
                case 0:
                case 15:
                case 1:
                    workInProgress._debugOwner || "" !== info || (info += describeFunctionComponentFrameWithoutLineNumber(workInProgress.type));
                    break;
                case 11:
                    workInProgress._debugOwner || "" !== info || (info += describeFunctionComponentFrameWithoutLineNumber(workInProgress.type.render));
            }
            for(; workInProgress;)if ("number" === typeof workInProgress.tag) {
                var fiber = workInProgress;
                workInProgress = fiber._debugOwner;
                var debugStack = fiber._debugStack;
                workInProgress && debugStack && ("string" !== typeof debugStack && (fiber._debugStack = debugStack = formatOwnerStack(debugStack)), "" !== debugStack && (info += "\n" + debugStack));
            } else if (null != workInProgress.debugStack) {
                var ownerStack = workInProgress.debugStack;
                (workInProgress = workInProgress.owner) && ownerStack && (info += "\n" + formatOwnerStack(ownerStack));
            } else break;
            var JSCompiler_inline_result = info;
        } catch (x) {
            JSCompiler_inline_result = "\nError generating stack: " + x.message + "\n" + x.stack;
        }
        return JSCompiler_inline_result;
    }
    function runWithFiberInDEV(fiber, callback, arg0, arg1, arg2, arg3, arg4) {
        var previousFiber = current;
        setCurrentFiber(fiber);
        try {
            return null !== fiber && fiber._debugTask ? fiber._debugTask.run(callback.bind(null, arg0, arg1, arg2, arg3, arg4)) : callback(arg0, arg1, arg2, arg3, arg4);
        } finally{
            setCurrentFiber(previousFiber);
        }
        throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.");
    }
    function setCurrentFiber(fiber) {
        ReactSharedInternals.getCurrentStack = null === fiber ? null : getCurrentFiberStackInDev;
        isRendering = !1;
        current = fiber;
    }
    function getToStringValue(value) {
        switch(typeof value){
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return value;
            case "object":
                return checkFormFieldValueStringCoercion(value), value;
            default:
                return "";
        }
    }
    function isCheckable(elem) {
        var type = elem.type;
        return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
    }
    function trackValueOnNode(node) {
        var valueField = isCheckable(node) ? "checked" : "value", descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
        checkFormFieldValueStringCoercion(node[valueField]);
        var currentValue = "" + node[valueField];
        if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
            var get = descriptor.get, set = descriptor.set;
            Object.defineProperty(node, valueField, {
                configurable: !0,
                get: function() {
                    return get.call(this);
                },
                set: function(value) {
                    checkFormFieldValueStringCoercion(value);
                    currentValue = "" + value;
                    set.call(this, value);
                }
            });
            Object.defineProperty(node, valueField, {
                enumerable: descriptor.enumerable
            });
            return {
                getValue: function() {
                    return currentValue;
                },
                setValue: function(value) {
                    checkFormFieldValueStringCoercion(value);
                    currentValue = "" + value;
                },
                stopTracking: function() {
                    node._valueTracker = null;
                    delete node[valueField];
                }
            };
        }
    }
    function track(node) {
        node._valueTracker || (node._valueTracker = trackValueOnNode(node));
    }
    function updateValueIfChanged(node) {
        if (!node) return !1;
        var tracker = node._valueTracker;
        if (!tracker) return !0;
        var lastValue = tracker.getValue();
        var value = "";
        node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
        node = value;
        return node !== lastValue ? (tracker.setValue(node), !0) : !1;
    }
    function getActiveElement(doc) {
        doc = doc || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof doc) return null;
        try {
            return doc.activeElement || doc.body;
        } catch (e) {
            return doc.body;
        }
    }
    function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
        return value.replace(escapeSelectorAttributeValueInsideDoubleQuotesRegex, function(ch) {
            return "\\" + ch.charCodeAt(0).toString(16) + " ";
        });
    }
    function validateInputProps(element, props) {
        void 0 === props.checked || void 0 === props.defaultChecked || didWarnCheckedDefaultChecked || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type), didWarnCheckedDefaultChecked = !0);
        void 0 === props.value || void 0 === props.defaultValue || didWarnValueDefaultValue$1 || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type), didWarnValueDefaultValue$1 = !0);
    }
    function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
        element.name = "";
        null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? (checkAttributeStringCoercion(type, "type"), element.type = type) : element.removeAttribute("type");
        if (null != value) {
            if ("number" === type) {
                if (0 === value && "" === element.value || element.value != value) element.value = "" + getToStringValue(value);
            } else element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
        } else "submit" !== type && "reset" !== type || element.removeAttribute("value");
        null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
        null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
        null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
        null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? (checkAttributeStringCoercion(name, "name"), element.name = "" + getToStringValue(name)) : element.removeAttribute("name");
    }
    function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating) {
        null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (checkAttributeStringCoercion(type, "type"), element.type = type);
        if (null != value || null != defaultValue) {
            if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) return;
            defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
            value = null != value ? "" + getToStringValue(value) : defaultValue;
            isHydrating || value === element.value || (element.value = value);
            element.defaultValue = value;
        }
        checked = null != checked ? checked : defaultChecked;
        checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
        element.checked = isHydrating ? element.checked : !!checked;
        element.defaultChecked = !!checked;
        null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (checkAttributeStringCoercion(name, "name"), element.name = name);
    }
    function setDefaultValue(node, type, value) {
        "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
    }
    function validateOptionProps(element, props) {
        null == props.value && ("object" === typeof props.children && null !== props.children ? React.Children.forEach(props.children, function(child) {
            null == child || "string" === typeof child || "number" === typeof child || "bigint" === typeof child || didWarnInvalidChild || (didWarnInvalidChild = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."));
        }) : null == props.dangerouslySetInnerHTML || didWarnInvalidInnerHTML || (didWarnInvalidInnerHTML = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")));
        null == props.selected || didWarnSelectedSetOnOption || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
    }
    function getDeclarationErrorAddendum() {
        var ownerName = getCurrentFiberOwnerNameInDevOrNull();
        return ownerName ? "\n\nCheck the render method of `" + ownerName + "`." : "";
    }
    function updateOptions(node, multiple, propValue, setDefaultSelected) {
        node = node.options;
        if (multiple) {
            multiple = {};
            for(var i = 0; i < propValue.length; i++)multiple["$" + propValue[i]] = !0;
            for(propValue = 0; propValue < node.length; propValue++)i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = !0);
        } else {
            propValue = "" + getToStringValue(propValue);
            multiple = null;
            for(i = 0; i < node.length; i++){
                if (node[i].value === propValue) {
                    node[i].selected = !0;
                    setDefaultSelected && (node[i].defaultSelected = !0);
                    return;
                }
                null !== multiple || node[i].disabled || (multiple = node[i]);
            }
            null !== multiple && (multiple.selected = !0);
        }
    }
    function validateSelectProps(element, props) {
        for(element = 0; element < valuePropNames.length; element++){
            var propName = valuePropNames[element];
            if (null != props[propName]) {
                var propNameIsArray = isArrayImpl(props[propName]);
                props.multiple && !propNameIsArray ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", propName, getDeclarationErrorAddendum()) : !props.multiple && propNameIsArray && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", propName, getDeclarationErrorAddendum());
            }
        }
        void 0 === props.value || void 0 === props.defaultValue || didWarnValueDefaultValue || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnValueDefaultValue = !0);
    }
    function validateTextareaProps(element, props) {
        void 0 === props.value || void 0 === props.defaultValue || didWarnValDefaultVal || (console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component"), didWarnValDefaultVal = !0);
        null != props.children && null == props.value && console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
    }
    function updateTextarea(element, value, defaultValue) {
        if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
            element.defaultValue !== value && (element.defaultValue = value);
            return;
        }
        element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    }
    function initTextarea(element, value, defaultValue, children) {
        if (null == value) {
            if (null != children) {
                if (null != defaultValue) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                if (isArrayImpl(children)) {
                    if (1 < children.length) throw Error("<textarea> can only have at most one child.");
                    children = children[0];
                }
                defaultValue = children;
            }
            null == defaultValue && (defaultValue = "");
            value = defaultValue;
        }
        defaultValue = getToStringValue(value);
        element.defaultValue = defaultValue;
        children = element.textContent;
        children === defaultValue && "" !== children && null !== children && (element.value = children);
    }
    function findNotableNode(node, indent) {
        return void 0 === node.serverProps && 0 === node.serverTail.length && 1 === node.children.length && 3 < node.distanceFromLeaf && node.distanceFromLeaf > 15 - indent ? findNotableNode(node.children[0], indent) : node;
    }
    function indentation(indent) {
        return "  " + "  ".repeat(indent);
    }
    function added(indent) {
        return "+ " + "  ".repeat(indent);
    }
    function removed(indent) {
        return "- " + "  ".repeat(indent);
    }
    function describeFiberType(fiber) {
        switch(fiber.tag){
            case 26:
            case 27:
            case 5:
                return fiber.type;
            case 16:
                return "Lazy";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 0:
            case 15:
                return fiber = fiber.type, fiber.displayName || fiber.name || null;
            case 11:
                return fiber = fiber.type.render, fiber.displayName || fiber.name || null;
            case 1:
                return fiber = fiber.type, fiber.displayName || fiber.name || null;
            default:
                return null;
        }
    }
    function describeTextNode(content, maxLength) {
        return needsEscaping.test(content) ? (content = JSON.stringify(content), content.length > maxLength - 2 ? 8 > maxLength ? '{"..."}' : "{" + content.slice(0, maxLength - 7) + '..."}' : "{" + content + "}") : content.length > maxLength ? 5 > maxLength ? '{"..."}' : content.slice(0, maxLength - 3) + "..." : content;
    }
    function describeTextDiff(clientText, serverProps, indent) {
        var maxLength = 120 - 2 * indent;
        if (null === serverProps) return added(indent) + describeTextNode(clientText, maxLength) + "\n";
        if ("string" === typeof serverProps) {
            for(var firstDiff = 0; firstDiff < serverProps.length && firstDiff < clientText.length && serverProps.charCodeAt(firstDiff) === clientText.charCodeAt(firstDiff); firstDiff++);
            firstDiff > maxLength - 8 && 10 < firstDiff && (clientText = "..." + clientText.slice(firstDiff - 8), serverProps = "..." + serverProps.slice(firstDiff - 8));
            return added(indent) + describeTextNode(clientText, maxLength) + "\n" + removed(indent) + describeTextNode(serverProps, maxLength) + "\n";
        }
        return indentation(indent) + describeTextNode(clientText, maxLength) + "\n";
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeValue(value, maxLength) {
        switch(typeof value){
            case "string":
                return value = JSON.stringify(value), value.length > maxLength ? 5 > maxLength ? '"..."' : value.slice(0, maxLength - 4) + '..."' : value;
            case "object":
                if (null === value) return "null";
                if (isArrayImpl(value)) return "[...]";
                if (value.$$typeof === REACT_ELEMENT_TYPE) return (maxLength = getComponentNameFromType(value.type)) ? "<" + maxLength + ">" : "<...>";
                var name = objectName(value);
                if ("Object" === name) {
                    name = "";
                    maxLength -= 2;
                    for(var propName in value)if (value.hasOwnProperty(propName)) {
                        var jsonPropName = JSON.stringify(propName);
                        jsonPropName !== '"' + propName + '"' && (propName = jsonPropName);
                        maxLength -= propName.length - 2;
                        jsonPropName = describeValue(value[propName], 15 > maxLength ? maxLength : 15);
                        maxLength -= jsonPropName.length;
                        if (0 > maxLength) {
                            name += "" === name ? "..." : ", ...";
                            break;
                        }
                        name += ("" === name ? "" : ",") + propName + ":" + jsonPropName;
                    }
                    return "{" + name + "}";
                }
                return name;
            case "function":
                return (maxLength = value.displayName || value.name) ? "function " + maxLength : "function";
            default:
                return String(value);
        }
    }
    function describePropValue(value, maxLength) {
        return "string" !== typeof value || needsEscaping.test(value) ? "{" + describeValue(value, maxLength - 2) + "}" : value.length > maxLength - 2 ? 5 > maxLength ? '"..."' : '"' + value.slice(0, maxLength - 5) + '..."' : '"' + value + '"';
    }
    function describeExpandedElement(type, props, rowPrefix) {
        var remainingRowLength = 120 - rowPrefix.length - type.length, properties = [], propName;
        for(propName in props)if (props.hasOwnProperty(propName) && "children" !== propName) {
            var propValue = describePropValue(props[propName], 120 - rowPrefix.length - propName.length - 1);
            remainingRowLength -= propName.length + propValue.length + 2;
            properties.push(propName + "=" + propValue);
        }
        return 0 === properties.length ? rowPrefix + "<" + type + ">\n" : 0 < remainingRowLength ? rowPrefix + "<" + type + " " + properties.join(" ") + ">\n" : rowPrefix + "<" + type + "\n" + rowPrefix + "  " + properties.join("\n" + rowPrefix + "  ") + "\n" + rowPrefix + ">\n";
    }
    function describePropertiesDiff(clientObject, serverObject, indent) {
        var properties = "", remainingServerProperties = assign({}, serverObject), propName;
        for(propName in clientObject)if (clientObject.hasOwnProperty(propName)) {
            delete remainingServerProperties[propName];
            var maxLength = 120 - 2 * indent - propName.length - 2, clientPropValue = describeValue(clientObject[propName], maxLength);
            serverObject.hasOwnProperty(propName) ? (maxLength = describeValue(serverObject[propName], maxLength), properties += added(indent) + propName + ": " + clientPropValue + "\n", properties += removed(indent) + propName + ": " + maxLength + "\n") : properties += added(indent) + propName + ": " + clientPropValue + "\n";
        }
        for(var _propName in remainingServerProperties)remainingServerProperties.hasOwnProperty(_propName) && (clientObject = describeValue(remainingServerProperties[_propName], 120 - 2 * indent - _propName.length - 2), properties += removed(indent) + _propName + ": " + clientObject + "\n");
        return properties;
    }
    function describeElementDiff(type, clientProps, serverProps, indent) {
        var content = "", serverPropNames = new Map();
        for(propName$jscomp$0 in serverProps)serverProps.hasOwnProperty(propName$jscomp$0) && serverPropNames.set(propName$jscomp$0.toLowerCase(), propName$jscomp$0);
        if (1 === serverPropNames.size && serverPropNames.has("children")) content += describeExpandedElement(type, clientProps, indentation(indent));
        else {
            for(var _propName2 in clientProps)if (clientProps.hasOwnProperty(_propName2) && "children" !== _propName2) {
                var maxLength$jscomp$0 = 120 - 2 * (indent + 1) - _propName2.length - 1, serverPropName = serverPropNames.get(_propName2.toLowerCase());
                if (void 0 !== serverPropName) {
                    serverPropNames.delete(_propName2.toLowerCase());
                    var propName$jscomp$0 = clientProps[_propName2];
                    serverPropName = serverProps[serverPropName];
                    var clientPropValue = describePropValue(propName$jscomp$0, maxLength$jscomp$0);
                    maxLength$jscomp$0 = describePropValue(serverPropName, maxLength$jscomp$0);
                    "object" === typeof propName$jscomp$0 && null !== propName$jscomp$0 && "object" === typeof serverPropName && null !== serverPropName && "Object" === objectName(propName$jscomp$0) && "Object" === objectName(serverPropName) && (2 < Object.keys(propName$jscomp$0).length || 2 < Object.keys(serverPropName).length || -1 < clientPropValue.indexOf("...") || -1 < maxLength$jscomp$0.indexOf("...")) ? content += indentation(indent + 1) + _propName2 + "={{\n" + describePropertiesDiff(propName$jscomp$0, serverPropName, indent + 2) + indentation(indent + 1) + "}}\n" : (content += added(indent + 1) + _propName2 + "=" + clientPropValue + "\n", content += removed(indent + 1) + _propName2 + "=" + maxLength$jscomp$0 + "\n");
                } else content += indentation(indent + 1) + _propName2 + "=" + describePropValue(clientProps[_propName2], maxLength$jscomp$0) + "\n";
            }
            serverPropNames.forEach(function(propName) {
                if ("children" !== propName) {
                    var maxLength = 120 - 2 * (indent + 1) - propName.length - 1;
                    content += removed(indent + 1) + propName + "=" + describePropValue(serverProps[propName], maxLength) + "\n";
                }
            });
            content = "" === content ? indentation(indent) + "<" + type + ">\n" : indentation(indent) + "<" + type + "\n" + content + indentation(indent) + ">\n";
        }
        type = serverProps.children;
        clientProps = clientProps.children;
        if ("string" === typeof type || "number" === typeof type || "bigint" === typeof type) {
            serverPropNames = "";
            if ("string" === typeof clientProps || "number" === typeof clientProps || "bigint" === typeof clientProps) serverPropNames = "" + clientProps;
            content += describeTextDiff(serverPropNames, "" + type, indent + 1);
        } else if ("string" === typeof clientProps || "number" === typeof clientProps || "bigint" === typeof clientProps) content = null == type ? content + describeTextDiff("" + clientProps, null, indent + 1) : content + describeTextDiff("" + clientProps, void 0, indent + 1);
        return content;
    }
    function describeSiblingFiber(fiber, indent) {
        var type = describeFiberType(fiber);
        if (null === type) {
            type = "";
            for(fiber = fiber.child; fiber;)type += describeSiblingFiber(fiber, indent), fiber = fiber.sibling;
            return type;
        }
        return indentation(indent) + "<" + type + ">\n";
    }
    function describeNode(node, indent) {
        var skipToNode = findNotableNode(node, indent);
        if (skipToNode !== node && (1 !== node.children.length || node.children[0] !== skipToNode)) return indentation(indent) + "...\n" + describeNode(skipToNode, indent + 1);
        skipToNode = "";
        var debugInfo = node.fiber._debugInfo;
        if (debugInfo) for(var i = 0; i < debugInfo.length; i++){
            var serverComponentName = debugInfo[i].name;
            "string" === typeof serverComponentName && (skipToNode += indentation(indent) + "<" + serverComponentName + ">\n", indent++);
        }
        debugInfo = "";
        i = node.fiber.pendingProps;
        if (6 === node.fiber.tag) debugInfo = describeTextDiff(i, node.serverProps, indent), indent++;
        else if (serverComponentName = describeFiberType(node.fiber), null !== serverComponentName) {
            if (void 0 === node.serverProps) {
                debugInfo = indent;
                var maxLength = 120 - 2 * debugInfo - serverComponentName.length - 2, content = "";
                for(propName in i)if (i.hasOwnProperty(propName) && "children" !== propName) {
                    var propValue = describePropValue(i[propName], 15);
                    maxLength -= propName.length + propValue.length + 2;
                    if (0 > maxLength) {
                        content += " ...";
                        break;
                    }
                    content += " " + propName + "=" + propValue;
                }
                debugInfo = indentation(debugInfo) + "<" + serverComponentName + content + ">\n";
                indent++;
            } else null === node.serverProps ? (debugInfo = describeExpandedElement(serverComponentName, i, added(indent)), indent++) : "string" === typeof node.serverProps ? console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React.") : (debugInfo = describeElementDiff(serverComponentName, i, node.serverProps, indent), indent++);
        }
        var propName = "";
        i = node.fiber.child;
        for(serverComponentName = 0; i && serverComponentName < node.children.length;)maxLength = node.children[serverComponentName], maxLength.fiber === i ? (propName += describeNode(maxLength, indent), serverComponentName++) : propName += describeSiblingFiber(i, indent), i = i.sibling;
        i && 0 < node.children.length && (propName += indentation(indent) + "...\n");
        i = node.serverTail;
        null === node.serverProps && indent--;
        for(node = 0; node < i.length; node++)serverComponentName = i[node], propName = "string" === typeof serverComponentName ? propName + (removed(indent) + describeTextNode(serverComponentName, 120 - 2 * indent) + "\n") : propName + describeExpandedElement(serverComponentName.type, serverComponentName.props, removed(indent));
        return skipToNode + debugInfo + propName;
    }
    function describeDiff(rootNode) {
        try {
            return "\n\n" + describeNode(rootNode, 0);
        } catch (x) {
            return "";
        }
    }
    function describeAncestors(ancestor, child, props) {
        for(var fiber = child, node = null, distanceFromLeaf = 0; fiber;)fiber === ancestor && (distanceFromLeaf = 0), node = {
            fiber: fiber,
            children: null !== node ? [
                node
            ] : [],
            serverProps: fiber === child ? props : fiber === ancestor ? null : void 0,
            serverTail: [],
            distanceFromLeaf: distanceFromLeaf
        }, distanceFromLeaf++, fiber = fiber.return;
        return null !== node ? describeDiff(node).replaceAll(/^[+-]/gm, ">") : "";
    }
    function updatedAncestorInfoDev(oldInfo, tag) {
        var ancestorInfo = assign({}, oldInfo || emptyAncestorInfoDev), info = {
            tag: tag
        };
        -1 !== inScopeTags.indexOf(tag) && (ancestorInfo.aTagInScope = null, ancestorInfo.buttonTagInScope = null, ancestorInfo.nobrTagInScope = null);
        -1 !== buttonScopeTags.indexOf(tag) && (ancestorInfo.pTagInButtonScope = null);
        -1 !== specialTags.indexOf(tag) && "address" !== tag && "div" !== tag && "p" !== tag && (ancestorInfo.listItemTagAutoclosing = null, ancestorInfo.dlItemTagAutoclosing = null);
        ancestorInfo.current = info;
        "form" === tag && (ancestorInfo.formTag = info);
        "a" === tag && (ancestorInfo.aTagInScope = info);
        "button" === tag && (ancestorInfo.buttonTagInScope = info);
        "nobr" === tag && (ancestorInfo.nobrTagInScope = info);
        "p" === tag && (ancestorInfo.pTagInButtonScope = info);
        "li" === tag && (ancestorInfo.listItemTagAutoclosing = info);
        if ("dd" === tag || "dt" === tag) ancestorInfo.dlItemTagAutoclosing = info;
        "#document" === tag || "html" === tag ? ancestorInfo.containerTagInScope = null : ancestorInfo.containerTagInScope || (ancestorInfo.containerTagInScope = info);
        null !== oldInfo || "#document" !== tag && "html" !== tag && "body" !== tag ? !0 === ancestorInfo.implicitRootScope && (ancestorInfo.implicitRootScope = !1) : ancestorInfo.implicitRootScope = !0;
        return ancestorInfo;
    }
    function isTagValidWithParent(tag, parentTag, implicitRootScope) {
        switch(parentTag){
            case "select":
                return "hr" === tag || "option" === tag || "optgroup" === tag || "script" === tag || "template" === tag || "#text" === tag;
            case "optgroup":
                return "option" === tag || "#text" === tag;
            case "option":
                return "#text" === tag;
            case "tr":
                return "th" === tag || "td" === tag || "style" === tag || "script" === tag || "template" === tag;
            case "tbody":
            case "thead":
            case "tfoot":
                return "tr" === tag || "style" === tag || "script" === tag || "template" === tag;
            case "colgroup":
                return "col" === tag || "template" === tag;
            case "table":
                return "caption" === tag || "colgroup" === tag || "tbody" === tag || "tfoot" === tag || "thead" === tag || "style" === tag || "script" === tag || "template" === tag;
            case "head":
                return "base" === tag || "basefont" === tag || "bgsound" === tag || "link" === tag || "meta" === tag || "title" === tag || "noscript" === tag || "noframes" === tag || "style" === tag || "script" === tag || "template" === tag;
            case "html":
                if (implicitRootScope) break;
                return "head" === tag || "body" === tag || "frameset" === tag;
            case "frameset":
                return "frame" === tag;
            case "#document":
                if (!implicitRootScope) return "html" === tag;
        }
        switch(tag){
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
                return "h1" !== parentTag && "h2" !== parentTag && "h3" !== parentTag && "h4" !== parentTag && "h5" !== parentTag && "h6" !== parentTag;
            case "rp":
            case "rt":
                return -1 === impliedEndTags.indexOf(parentTag);
            case "caption":
            case "col":
            case "colgroup":
            case "frameset":
            case "frame":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
                return null == parentTag;
            case "head":
                return implicitRootScope || null === parentTag;
            case "html":
                return implicitRootScope && "#document" === parentTag || null === parentTag;
            case "body":
                return implicitRootScope && ("#document" === parentTag || "html" === parentTag) || null === parentTag;
        }
        return !0;
    }
    function findInvalidAncestorForTag(tag, ancestorInfo) {
        switch(tag){
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
            case "pre":
            case "listing":
            case "table":
            case "hr":
            case "xmp":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
                return ancestorInfo.pTagInButtonScope;
            case "form":
                return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
            case "li":
                return ancestorInfo.listItemTagAutoclosing;
            case "dd":
            case "dt":
                return ancestorInfo.dlItemTagAutoclosing;
            case "button":
                return ancestorInfo.buttonTagInScope;
            case "a":
                return ancestorInfo.aTagInScope;
            case "nobr":
                return ancestorInfo.nobrTagInScope;
        }
        return null;
    }
    function findAncestor(parent, tagName) {
        for(; parent;){
            switch(parent.tag){
                case 5:
                case 26:
                case 27:
                    if (parent.type === tagName) return parent;
            }
            parent = parent.return;
        }
        return null;
    }
    function validateDOMNesting(childTag, ancestorInfo) {
        ancestorInfo = ancestorInfo || emptyAncestorInfoDev;
        var parentInfo = ancestorInfo.current;
        ancestorInfo = (parentInfo = isTagValidWithParent(childTag, parentInfo && parentInfo.tag, ancestorInfo.implicitRootScope) ? null : parentInfo) ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
        ancestorInfo = parentInfo || ancestorInfo;
        if (!ancestorInfo) return !0;
        var ancestorTag = ancestorInfo.tag;
        ancestorInfo = String(!!parentInfo) + "|" + childTag + "|" + ancestorTag;
        if (didWarn[ancestorInfo]) return !1;
        didWarn[ancestorInfo] = !0;
        var ancestor = (ancestorInfo = current) ? findAncestor(ancestorInfo.return, ancestorTag) : null, ancestorDescription = null !== ancestorInfo && null !== ancestor ? describeAncestors(ancestor, ancestorInfo, null) : "", tagDisplayName = "<" + childTag + ">";
        parentInfo ? (parentInfo = "", "table" === ancestorTag && "tr" === childTag && (parentInfo += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error("In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s", tagDisplayName, ancestorTag, parentInfo, ancestorDescription)) : console.error("In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s", tagDisplayName, ancestorTag, ancestorDescription);
        ancestorInfo && (childTag = ancestorInfo.return, null === ancestor || null === childTag || ancestor === childTag && childTag._debugOwner === ancestorInfo._debugOwner || runWithFiberInDEV(ancestor, function() {
            console.error("<%s> cannot contain a nested %s.\nSee this log for the ancestor stack trace.", ancestorTag, tagDisplayName);
        }));
        return !1;
    }
    function validateTextNesting(childText, parentTag, implicitRootScope) {
        if (implicitRootScope || isTagValidWithParent("#text", parentTag, !1)) return !0;
        implicitRootScope = "#text|" + parentTag;
        if (didWarn[implicitRootScope]) return !1;
        didWarn[implicitRootScope] = !0;
        var ancestor = (implicitRootScope = current) ? findAncestor(implicitRootScope, parentTag) : null;
        implicitRootScope = null !== implicitRootScope && null !== ancestor ? describeAncestors(ancestor, implicitRootScope, 6 !== implicitRootScope.tag ? {
            children: null
        } : null) : "";
        /\S/.test(childText) ? console.error("In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.%s", parentTag, implicitRootScope) : console.error("In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.%s", parentTag, implicitRootScope);
        return !1;
    }
    function setTextContent(node, text) {
        if (text) {
            var firstChild = node.firstChild;
            if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
                firstChild.nodeValue = text;
                return;
            }
        }
        node.textContent = text;
    }
    function camelize(string) {
        return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
        });
    }
    function setValueForStyle(style, styleName, value) {
        var isCustomProperty = 0 === styleName.indexOf("--");
        isCustomProperty || (-1 < styleName.indexOf("-") ? warnedStyleNames.hasOwnProperty(styleName) && warnedStyleNames[styleName] || (warnedStyleNames[styleName] = !0, console.error("Unsupported style property %s. Did you mean %s?", styleName, camelize(styleName.replace(msPattern, "ms-")))) : badVendoredStyleNamePattern.test(styleName) ? warnedStyleNames.hasOwnProperty(styleName) && warnedStyleNames[styleName] || (warnedStyleNames[styleName] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", styleName, styleName.charAt(0).toUpperCase() + styleName.slice(1))) : !badStyleValueWithSemicolonPattern.test(value) || warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value] || (warnedStyleValues[value] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', styleName, value.replace(badStyleValueWithSemicolonPattern, ""))), "number" === typeof value && (isNaN(value) ? warnedForNaNValue || (warnedForNaNValue = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", styleName)) : isFinite(value) || warnedForInfinityValue || (warnedForInfinityValue = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", styleName))));
        null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style.setProperty(styleName, "") : "float" === styleName ? style.cssFloat = "" : style[styleName] = "" : isCustomProperty ? style.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style.cssFloat = value : (checkCSSPropertyStringCoercion(value, styleName), style[styleName] = ("" + value).trim()) : style[styleName] = value + "px";
    }
    function setValueForStyles(node, styles, prevStyles) {
        if (null != styles && "object" !== typeof styles) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        styles && Object.freeze(styles);
        node = node.style;
        if (null != prevStyles) {
            if (styles) {
                var expandedUpdates = {};
                if (prevStyles) {
                    for(var key in prevStyles)if (prevStyles.hasOwnProperty(key) && !styles.hasOwnProperty(key)) for(var longhands = shorthandToLonghand[key] || [
                        key
                    ], i = 0; i < longhands.length; i++)expandedUpdates[longhands[i]] = key;
                }
                for(var _key in styles)if (styles.hasOwnProperty(_key) && (!prevStyles || prevStyles[_key] !== styles[_key])) for(key = shorthandToLonghand[_key] || [
                    _key
                ], longhands = 0; longhands < key.length; longhands++)expandedUpdates[key[longhands]] = _key;
                _key = {};
                for(var key$jscomp$0 in styles)for(key = shorthandToLonghand[key$jscomp$0] || [
                    key$jscomp$0
                ], longhands = 0; longhands < key.length; longhands++)_key[key[longhands]] = key$jscomp$0;
                key$jscomp$0 = {};
                for(var _key2 in expandedUpdates)if (key = expandedUpdates[_key2], (longhands = _key[_key2]) && key !== longhands && (i = key + "," + longhands, !key$jscomp$0[i])) {
                    key$jscomp$0[i] = !0;
                    i = console;
                    var value = styles[key];
                    i.error.call(i, "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", null == value || "boolean" === typeof value || "" === value ? "Removing" : "Updating", key, longhands);
                }
            }
            for(var styleName in prevStyles)!prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
            for(var _styleName in styles)_key2 = styles[_styleName], styles.hasOwnProperty(_styleName) && prevStyles[_styleName] !== _key2 && setValueForStyle(node, _styleName, _key2);
        } else for(expandedUpdates in styles)styles.hasOwnProperty(expandedUpdates) && setValueForStyle(node, expandedUpdates, styles[expandedUpdates]);
    }
    function isCustomElement(tagName) {
        if (-1 === tagName.indexOf("-")) return !1;
        switch(tagName){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    function getAttributeAlias(name) {
        return aliases.get(name) || name;
    }
    function validateProperty$1(tagName, name) {
        if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return !0;
        if (rARIACamel$1.test(name)) {
            tagName = "aria-" + name.slice(4).toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$1[name] = !0;
            if (name !== tagName) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0;
        }
        if (rARIA$1.test(name)) {
            tagName = name.toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return warnedProperties$1[name] = !0, !1;
            name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0);
        }
        return !0;
    }
    function validateProperties$2(type, props) {
        var invalidProps = [], key;
        for(key in props)validateProperty$1(type, key) || invalidProps.push(key);
        props = invalidProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === invalidProps.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
    }
    function validateProperty(tagName, name, value, eventRegistry) {
        if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return !0;
        var lowerCasedName = name.toLowerCase();
        if ("onfocusin" === lowerCasedName || "onfocusout" === lowerCasedName) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties[name] = !0;
        if ("function" === typeof value && ("form" === tagName && "action" === name || "input" === tagName && "formAction" === name || "button" === tagName && "formAction" === name)) return !0;
        if (null != eventRegistry) {
            tagName = eventRegistry.possibleRegistrationNames;
            if (eventRegistry.registrationNameDependencies.hasOwnProperty(name)) return !0;
            eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
            if (null != eventRegistry) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties[name] = !0;
            if (EVENT_NAME_REGEX.test(name)) return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties[name] = !0;
        } else if (EVENT_NAME_REGEX.test(name)) return INVALID_EVENT_NAME_REGEX.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties[name] = !0;
        if (rARIA.test(name) || rARIACamel.test(name)) return !0;
        if ("innerhtml" === lowerCasedName) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties[name] = !0;
        if ("aria" === lowerCasedName) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties[name] = !0;
        if ("is" === lowerCasedName && null !== value && void 0 !== value && "string" !== typeof value) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties[name] = !0;
        if ("number" === typeof value && isNaN(value)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties[name] = !0;
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            if (lowerCasedName = possibleStandardNames[lowerCasedName], lowerCasedName !== name) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties[name] = !0;
        } else if (name !== lowerCasedName) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties[name] = !0;
        switch(name){
            case "dangerouslySetInnerHTML":
            case "children":
            case "style":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                return !0;
            case "innerText":
            case "textContent":
                return !0;
        }
        switch(typeof value){
            case "boolean":
                switch(name){
                    case "autoFocus":
                    case "checked":
                    case "multiple":
                    case "muted":
                    case "selected":
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                    case "capture":
                    case "download":
                    case "inert":
                        return !0;
                    default:
                        lowerCasedName = name.toLowerCase().slice(0, 5);
                        if ("data-" === lowerCasedName || "aria-" === lowerCasedName) return !0;
                        value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                        return warnedProperties[name] = !0;
                }
            case "function":
            case "symbol":
                return warnedProperties[name] = !0, !1;
            case "string":
                if ("false" === value || "true" === value) {
                    switch(name){
                        case "checked":
                        case "selected":
                        case "multiple":
                        case "muted":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                        case "inert":
                            break;
                        default:
                            return !0;
                    }
                    console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, "false" === value ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties[name] = !0;
                }
        }
        return !0;
    }
    function warnUnknownProperties(type, props, eventRegistry) {
        var unknownProps = [], key;
        for(key in props)validateProperty(type, key, props[key], eventRegistry) || unknownProps.push(key);
        props = unknownProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === unknownProps.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
    }
    function sanitizeURL(url) {
        return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function getEventTarget(nativeEvent) {
        nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
        nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
        return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
    }
    function restoreStateOfTarget(target) {
        var internalInstance = getInstanceFromNode(target);
        if (internalInstance && (target = internalInstance.stateNode)) {
            var props = target[internalPropsKey] || null;
            a: switch(target = internalInstance.stateNode, internalInstance.type){
                case "input":
                    updateInput(target, props.value, props.defaultValue, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name);
                    internalInstance = props.name;
                    if ("radio" === props.type && null != internalInstance) {
                        for(props = target; props.parentNode;)props = props.parentNode;
                        checkAttributeStringCoercion(internalInstance, "name");
                        props = props.querySelectorAll('input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes("" + internalInstance) + '"][type="radio"]');
                        for(internalInstance = 0; internalInstance < props.length; internalInstance++){
                            var otherNode = props[internalInstance];
                            if (otherNode !== target && otherNode.form === target.form) {
                                var otherProps = otherNode[internalPropsKey] || null;
                                if (!otherProps) throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                                updateInput(otherNode, otherProps.value, otherProps.defaultValue, otherProps.defaultValue, otherProps.checked, otherProps.defaultChecked, otherProps.type, otherProps.name);
                            }
                        }
                        for(internalInstance = 0; internalInstance < props.length; internalInstance++)otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
                    }
                    break a;
                case "textarea":
                    updateTextarea(target, props.value, props.defaultValue);
                    break a;
                case "select":
                    internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, !1);
            }
        }
    }
    function batchedUpdates$1(fn, a, b) {
        if (isInsideEventHandler) return fn(a, b);
        isInsideEventHandler = !0;
        try {
            var JSCompiler_inline_result = fn(a);
            return JSCompiler_inline_result;
        } finally{
            if (isInsideEventHandler = !1, null !== restoreTarget || null !== restoreQueue) {
                if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn)) for(a = 0; a < fn.length; a++)restoreStateOfTarget(fn[a]);
            }
        }
    }
    function getListener(inst, registrationName) {
        var stateNode = inst.stateNode;
        if (null === stateNode) return null;
        var props = stateNode[internalPropsKey] || null;
        if (null === props) return null;
        stateNode = props[registrationName];
        a: switch(registrationName){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
                inst = !props;
                break a;
            default:
                inst = !1;
        }
        if (inst) return null;
        if (stateNode && "function" !== typeof stateNode) throw Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof stateNode + "` type.");
        return stateNode;
    }
    function getData() {
        if (fallbackText) return fallbackText;
        var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
        for(start = 0; start < startLength && startValue[start] === endValue[start]; start++);
        var minEnd = startLength - start;
        for(end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++);
        return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
    }
    function getEventCharCode(nativeEvent) {
        var keyCode = nativeEvent.keyCode;
        "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
        10 === nativeEvent && (nativeEvent = 13);
        return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
    }
    function functionThatReturnsTrue() {
        return !0;
    }
    function functionThatReturnsFalse() {
        return !1;
    }
    function createSyntheticEvent(Interface) {
        function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
            this._reactName = reactName;
            this._targetInst = targetInst;
            this.type = reactEventType;
            this.nativeEvent = nativeEvent;
            this.target = nativeEventTarget;
            this.currentTarget = null;
            for(var propName in Interface)Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
            this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : !1 === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
            this.isPropagationStopped = functionThatReturnsFalse;
            return this;
        }
        assign(SyntheticBaseEvent.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var event = this.nativeEvent;
                event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = !1), this.isDefaultPrevented = functionThatReturnsTrue);
            },
            stopPropagation: function() {
                var event = this.nativeEvent;
                event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = !0), this.isPropagationStopped = functionThatReturnsTrue);
            },
            persist: function() {},
            isPersistent: functionThatReturnsTrue
        });
        return SyntheticBaseEvent;
    }
    function modifierStateGetter(keyArg) {
        var nativeEvent = this.nativeEvent;
        return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : !1;
    }
    function getEventModifierState() {
        return modifierStateGetter;
    }
    function isFallbackCompositionEnd(domEventName, nativeEvent) {
        switch(domEventName){
            case "keyup":
                return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
            case "keydown":
                return nativeEvent.keyCode !== START_KEYCODE;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function getDataFromCustomEvent(nativeEvent) {
        nativeEvent = nativeEvent.detail;
        return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
    }
    function getNativeBeforeInputChars(domEventName, nativeEvent) {
        switch(domEventName){
            case "compositionend":
                return getDataFromCustomEvent(nativeEvent);
            case "keypress":
                if (nativeEvent.which !== SPACEBAR_CODE) return null;
                hasSpaceKeypress = !0;
                return SPACEBAR_CHAR;
            case "textInput":
                return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
            default:
                return null;
        }
    }
    function getFallbackBeforeInputChars(domEventName, nativeEvent) {
        if (isComposing) return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = !1, domEventName) : null;
        switch(domEventName){
            case "paste":
                return null;
            case "keypress":
                if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
                    if (nativeEvent.char && 1 < nativeEvent.char.length) return nativeEvent.char;
                    if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
                }
                return null;
            case "compositionend":
                return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
            default:
                return null;
        }
    }
    function isTextInputElement(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? !0 : !1;
    }
    function isEventSupported(eventNameSuffix) {
        if (!canUseDOM) return !1;
        eventNameSuffix = "on" + eventNameSuffix;
        var isSupported = eventNameSuffix in document;
        isSupported || (isSupported = document.createElement("div"), isSupported.setAttribute(eventNameSuffix, "return;"), isSupported = "function" === typeof isSupported[eventNameSuffix]);
        return isSupported;
    }
    function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
        restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [
            target
        ] : restoreTarget = target;
        inst = accumulateTwoPhaseListeners(inst, "onChange");
        0 < inst.length && (nativeEvent = new SyntheticEvent("onChange", "change", null, nativeEvent, target), dispatchQueue.push({
            event: nativeEvent,
            listeners: inst
        }));
    }
    function runEventInBatch(dispatchQueue) {
        processDispatchQueue(dispatchQueue, 0);
    }
    function getInstIfValueChanged(targetInst) {
        var targetNode = getNodeFromInstance(targetInst);
        if (updateValueIfChanged(targetNode)) return targetInst;
    }
    function getTargetInstForChangeEvent(domEventName, targetInst) {
        if ("change" === domEventName) return targetInst;
    }
    function stopWatchingForValueChange() {
        activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
    }
    function handlePropertyChange(nativeEvent) {
        if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
            var dispatchQueue = [];
            createAndAccumulateChangeEvent(dispatchQueue, activeElementInst$1, nativeEvent, getEventTarget(nativeEvent));
            batchedUpdates$1(runEventInBatch, dispatchQueue);
        }
    }
    function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
        "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
    }
    function getTargetInstForInputEventPolyfill(domEventName) {
        if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName) return getInstIfValueChanged(activeElementInst$1);
    }
    function getTargetInstForClickEvent(domEventName, targetInst) {
        if ("click" === domEventName) return getInstIfValueChanged(targetInst);
    }
    function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
        if ("input" === domEventName || "change" === domEventName) return getInstIfValueChanged(targetInst);
    }
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) return !0;
        if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB) return !1;
        var keysA = Object.keys(objA), keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return !1;
        for(keysB = 0; keysB < keysA.length; keysB++){
            var currentKey = keysA[keysB];
            if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) return !1;
        }
        return !0;
    }
    function getLeafNode(node) {
        for(; node && node.firstChild;)node = node.firstChild;
        return node;
    }
    function getNodeForCharacterOffset(root, offset) {
        var node = getLeafNode(root);
        root = 0;
        for(var nodeEnd; node;){
            if (3 === node.nodeType) {
                nodeEnd = root + node.textContent.length;
                if (root <= offset && nodeEnd >= offset) return {
                    node: node,
                    offset: offset - root
                };
                root = nodeEnd;
            }
            a: {
                for(; node;){
                    if (node.nextSibling) {
                        node = node.nextSibling;
                        break a;
                    }
                    node = node.parentNode;
                }
                node = void 0;
            }
            node = getLeafNode(node);
        }
    }
    function containsNode(outerNode, innerNode) {
        return outerNode && innerNode ? outerNode === innerNode ? !0 : outerNode && 3 === outerNode.nodeType ? !1 : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : !1 : !1;
    }
    function getActiveElementDeep(containerInfo) {
        containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
        for(var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement;){
            try {
                var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
            } catch (err) {
                JSCompiler_inline_result = !1;
            }
            if (JSCompiler_inline_result) containerInfo = element.contentWindow;
            else break;
            element = getActiveElement(containerInfo.document);
        }
        return element;
    }
    function hasSelectionCapabilities(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
    }
    function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
        var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
        mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = {
            start: doc.selectionStart,
            end: doc.selectionEnd
        } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
            anchorNode: doc.anchorNode,
            anchorOffset: doc.anchorOffset,
            focusNode: doc.focusNode,
            focusOffset: doc.focusOffset
        }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
            event: nativeEvent,
            listeners: doc
        }), nativeEvent.target = activeElement)));
    }
    function makePrefixMap(styleProp, eventName) {
        var prefixes = {};
        prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
        prefixes["Webkit" + styleProp] = "webkit" + eventName;
        prefixes["Moz" + styleProp] = "moz" + eventName;
        return prefixes;
    }
    function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
        if (!vendorPrefixes[eventName]) return eventName;
        var prefixMap = vendorPrefixes[eventName], styleProp;
        for(styleProp in prefixMap)if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) return prefixedEventNames[eventName] = prefixMap[styleProp];
        return eventName;
    }
    function registerSimpleEvent(domEventName, reactName) {
        topLevelEventsToReactNames.set(domEventName, reactName);
        registerTwoPhaseEvent(reactName, [
            domEventName
        ]);
    }
    function createCapturedValueAtFiber(value, source) {
        if ("object" === typeof value && null !== value) {
            var existing = CapturedStacks.get(value);
            if (void 0 !== existing) return existing;
            source = {
                value: value,
                source: source,
                stack: getStackByFiberInDevAndProd(source)
            };
            CapturedStacks.set(value, source);
            return source;
        }
        return {
            value: value,
            source: source,
            stack: getStackByFiberInDevAndProd(source)
        };
    }
    function finishQueueingConcurrentUpdates() {
        for(var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex;){
            var fiber = concurrentQueues[i];
            concurrentQueues[i++] = null;
            var queue = concurrentQueues[i];
            concurrentQueues[i++] = null;
            var update = concurrentQueues[i];
            concurrentQueues[i++] = null;
            var lane = concurrentQueues[i];
            concurrentQueues[i++] = null;
            if (null !== queue && null !== update) {
                var pending = queue.pending;
                null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
                queue.pending = update;
            }
            0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
        }
    }
    function enqueueUpdate$1(fiber, queue, update, lane) {
        concurrentQueues[concurrentQueuesIndex++] = fiber;
        concurrentQueues[concurrentQueuesIndex++] = queue;
        concurrentQueues[concurrentQueuesIndex++] = update;
        concurrentQueues[concurrentQueuesIndex++] = lane;
        concurrentlyUpdatedLanes |= lane;
        fiber.lanes |= lane;
        fiber = fiber.alternate;
        null !== fiber && (fiber.lanes |= lane);
    }
    function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
        enqueueUpdate$1(fiber, queue, update, lane);
        return getRootForUpdatedFiber(fiber);
    }
    function enqueueConcurrentRenderForLane(fiber, lane) {
        enqueueUpdate$1(fiber, null, null, lane);
        return getRootForUpdatedFiber(fiber);
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
        sourceFiber.lanes |= lane;
        var alternate = sourceFiber.alternate;
        null !== alternate && (alternate.lanes |= lane);
        for(var isHidden = !1, parent = sourceFiber.return; null !== parent;)parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & OffscreenVisible || (isHidden = !0)), sourceFiber = parent, parent = parent.return;
        return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [
            update
        ] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
    }
    function getRootForUpdatedFiber(sourceFiber) {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) throw nestedPassiveUpdateCount = nestedUpdateCount = 0, rootWithPassiveNestedUpdates = rootWithNestedUpdates = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
        nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT && (nestedPassiveUpdateCount = 0, rootWithPassiveNestedUpdates = null, console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
        null === sourceFiber.alternate && 0 !== (sourceFiber.flags & 4098) && warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
        for(var node = sourceFiber, parent = node.return; null !== parent;)null === node.alternate && 0 !== (node.flags & 4098) && warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber), node = parent, parent = node.return;
        return 3 === node.tag ? node.stateNode : null;
    }
    function resolveFunctionForHotReloading(type) {
        if (null === resolveFamily) return type;
        var family = resolveFamily(type);
        return void 0 === family ? type : family.current;
    }
    function resolveForwardRefForHotReloading(type) {
        if (null === resolveFamily) return type;
        var family = resolveFamily(type);
        return void 0 === family ? null !== type && void 0 !== type && "function" === typeof type.render && (family = resolveFunctionForHotReloading(type.render), type.render !== family) ? (family = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: family
        }, void 0 !== type.displayName && (family.displayName = type.displayName), family) : type : family.current;
    }
    function isCompatibleFamilyForHotReloading(fiber, element) {
        if (null === resolveFamily) return !1;
        var prevType = fiber.elementType;
        element = element.type;
        var needsCompareFamilies = !1, $$typeofNextType = "object" === typeof element && null !== element ? element.$$typeof : null;
        switch(fiber.tag){
            case 1:
                "function" === typeof element && (needsCompareFamilies = !0);
                break;
            case 0:
                "function" === typeof element ? needsCompareFamilies = !0 : $$typeofNextType === REACT_LAZY_TYPE && (needsCompareFamilies = !0);
                break;
            case 11:
                $$typeofNextType === REACT_FORWARD_REF_TYPE ? needsCompareFamilies = !0 : $$typeofNextType === REACT_LAZY_TYPE && (needsCompareFamilies = !0);
                break;
            case 14:
            case 15:
                $$typeofNextType === REACT_MEMO_TYPE ? needsCompareFamilies = !0 : $$typeofNextType === REACT_LAZY_TYPE && (needsCompareFamilies = !0);
                break;
            default:
                return !1;
        }
        return needsCompareFamilies && (fiber = resolveFamily(prevType), void 0 !== fiber && fiber === resolveFamily(element)) ? !0 : !1;
    }
    function markFailedErrorBoundaryForHotReloading(fiber) {
        null !== resolveFamily && "function" === typeof WeakSet && (null === failedBoundaries && (failedBoundaries = new WeakSet()), failedBoundaries.add(fiber));
    }
    function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
        var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type, candidateType = null;
        switch(tag){
            case 0:
            case 15:
            case 1:
                candidateType = type;
                break;
            case 11:
                candidateType = type.render;
        }
        if (null === resolveFamily) throw Error("Expected resolveFamily to be set during hot reload.");
        var needsRender = !1;
        type = !1;
        null !== candidateType && (candidateType = resolveFamily(candidateType), void 0 !== candidateType && (staleFamilies.has(candidateType) ? type = !0 : updatedFamilies.has(candidateType) && (1 === tag ? type = !0 : needsRender = !0)));
        null !== failedBoundaries && (failedBoundaries.has(fiber) || null !== alternate && failedBoundaries.has(alternate)) && (type = !0);
        type && (fiber._debugNeedsRemount = !0);
        if (type || needsRender) alternate = enqueueConcurrentRenderForLane(fiber, 2), null !== alternate && scheduleUpdateOnFiber(alternate, fiber, 2);
        null === child || type || scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
        null !== sibling && scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
    }
    function FiberNode(tag, pendingProps, key, mode) {
        this.tag = tag;
        this.key = key;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.refCleanup = this.ref = null;
        this.pendingProps = pendingProps;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = mode;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
        this.actualDuration = -0;
        this.actualStartTime = -1.1;
        this.treeBaseDuration = this.selfBaseDuration = -0;
        this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null;
        this._debugNeedsRemount = !1;
        this._debugHookTypes = null;
        hasBadMapPolyfill || "function" !== typeof Object.preventExtensions || Object.preventExtensions(this);
    }
    function shouldConstruct(Component) {
        Component = Component.prototype;
        return !(!Component || !Component.isReactComponent);
    }
    function createWorkInProgress(current, pendingProps) {
        var workInProgress = current.alternate;
        null === workInProgress ? (workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode), workInProgress.elementType = current.elementType, workInProgress.type = current.type, workInProgress.stateNode = current.stateNode, workInProgress._debugOwner = current._debugOwner, workInProgress._debugStack = current._debugStack, workInProgress._debugTask = current._debugTask, workInProgress._debugHookTypes = current._debugHookTypes, workInProgress.alternate = current, current.alternate = workInProgress) : (workInProgress.pendingProps = pendingProps, workInProgress.type = current.type, workInProgress.flags = 0, workInProgress.subtreeFlags = 0, workInProgress.deletions = null, workInProgress.actualDuration = -0, workInProgress.actualStartTime = -1.1);
        workInProgress.flags = current.flags & 65011712;
        workInProgress.childLanes = current.childLanes;
        workInProgress.lanes = current.lanes;
        workInProgress.child = current.child;
        workInProgress.memoizedProps = current.memoizedProps;
        workInProgress.memoizedState = current.memoizedState;
        workInProgress.updateQueue = current.updateQueue;
        pendingProps = current.dependencies;
        workInProgress.dependencies = null === pendingProps ? null : {
            lanes: pendingProps.lanes,
            firstContext: pendingProps.firstContext,
            _debugThenableState: pendingProps._debugThenableState
        };
        workInProgress.sibling = current.sibling;
        workInProgress.index = current.index;
        workInProgress.ref = current.ref;
        workInProgress.refCleanup = current.refCleanup;
        workInProgress.selfBaseDuration = current.selfBaseDuration;
        workInProgress.treeBaseDuration = current.treeBaseDuration;
        workInProgress._debugInfo = current._debugInfo;
        workInProgress._debugNeedsRemount = current._debugNeedsRemount;
        switch(workInProgress.tag){
            case 0:
            case 15:
                workInProgress.type = resolveFunctionForHotReloading(current.type);
                break;
            case 1:
                workInProgress.type = resolveFunctionForHotReloading(current.type);
                break;
            case 11:
                workInProgress.type = resolveForwardRefForHotReloading(current.type);
        }
        return workInProgress;
    }
    function resetWorkInProgress(workInProgress, renderLanes) {
        workInProgress.flags &= 65011714;
        var current = workInProgress.alternate;
        null === current ? (workInProgress.childLanes = 0, workInProgress.lanes = renderLanes, workInProgress.child = null, workInProgress.subtreeFlags = 0, workInProgress.memoizedProps = null, workInProgress.memoizedState = null, workInProgress.updateQueue = null, workInProgress.dependencies = null, workInProgress.stateNode = null, workInProgress.selfBaseDuration = 0, workInProgress.treeBaseDuration = 0) : (workInProgress.childLanes = current.childLanes, workInProgress.lanes = current.lanes, workInProgress.child = current.child, workInProgress.subtreeFlags = 0, workInProgress.deletions = null, workInProgress.memoizedProps = current.memoizedProps, workInProgress.memoizedState = current.memoizedState, workInProgress.updateQueue = current.updateQueue, workInProgress.type = current.type, renderLanes = current.dependencies, workInProgress.dependencies = null === renderLanes ? null : {
            lanes: renderLanes.lanes,
            firstContext: renderLanes.firstContext,
            _debugThenableState: renderLanes._debugThenableState
        }, workInProgress.selfBaseDuration = current.selfBaseDuration, workInProgress.treeBaseDuration = current.treeBaseDuration);
        return workInProgress;
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
        var fiberTag = 0, resolvedType = type;
        if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1), resolvedType = resolveFunctionForHotReloading(resolvedType);
        else if ("string" === typeof type) fiberTag = getHostContext(), fiberTag = isHostHoistableType(type, pendingProps, fiberTag) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
        else a: switch(type){
            case REACT_ACTIVITY_TYPE:
                return key = createFiber(31, pendingProps, key, mode), key.elementType = REACT_ACTIVITY_TYPE, key.lanes = lanes, key;
            case REACT_FRAGMENT_TYPE:
                return createFiberFromFragment(pendingProps.children, mode, lanes, key);
            case REACT_STRICT_MODE_TYPE:
                fiberTag = 8;
                mode |= StrictLegacyMode;
                mode |= StrictEffectsMode;
                break;
            case REACT_PROFILER_TYPE:
                return type = pendingProps, owner = mode, "string" !== typeof type.id && console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof type.id), key = createFiber(12, type, key, owner | ProfileMode), key.elementType = REACT_PROFILER_TYPE, key.lanes = lanes, key.stateNode = {
                    effectDuration: 0,
                    passiveEffectDuration: 0
                }, key;
            case REACT_SUSPENSE_TYPE:
                return key = createFiber(13, pendingProps, key, mode), key.elementType = REACT_SUSPENSE_TYPE, key.lanes = lanes, key;
            case REACT_SUSPENSE_LIST_TYPE:
                return key = createFiber(19, pendingProps, key, mode), key.elementType = REACT_SUSPENSE_LIST_TYPE, key.lanes = lanes, key;
            default:
                if ("object" === typeof type && null !== type) switch(type.$$typeof){
                    case REACT_PROVIDER_TYPE:
                    case REACT_CONTEXT_TYPE:
                        fiberTag = 10;
                        break a;
                    case REACT_CONSUMER_TYPE:
                        fiberTag = 9;
                        break a;
                    case REACT_FORWARD_REF_TYPE:
                        fiberTag = 11;
                        resolvedType = resolveForwardRefForHotReloading(resolvedType);
                        break a;
                    case REACT_MEMO_TYPE:
                        fiberTag = 14;
                        break a;
                    case REACT_LAZY_TYPE:
                        fiberTag = 16;
                        resolvedType = null;
                        break a;
                }
                resolvedType = "";
                if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) resolvedType += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                null === type ? pendingProps = "null" : isArrayImpl(type) ? pendingProps = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (pendingProps = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", resolvedType = " Did you accidentally export a JSX literal instead of a component?") : pendingProps = typeof type;
                (fiberTag = owner ? getComponentNameFromOwner(owner) : null) && (resolvedType += "\n\nCheck the render method of `" + fiberTag + "`.");
                fiberTag = 29;
                pendingProps = Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (pendingProps + "." + resolvedType));
                resolvedType = null;
        }
        key = createFiber(fiberTag, pendingProps, key, mode);
        key.elementType = type;
        key.type = resolvedType;
        key.lanes = lanes;
        key._debugOwner = owner;
        return key;
    }
    function createFiberFromElement(element, mode, lanes) {
        mode = createFiberFromTypeAndProps(element.type, element.key, element.props, element._owner, mode, lanes);
        mode._debugOwner = element._owner;
        mode._debugStack = element._debugStack;
        mode._debugTask = element._debugTask;
        return mode;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
        elements = createFiber(7, elements, key, mode);
        elements.lanes = lanes;
        return elements;
    }
    function createFiberFromText(content, mode, lanes) {
        content = createFiber(6, content, null, mode);
        content.lanes = lanes;
        return content;
    }
    function createFiberFromPortal(portal, mode, lanes) {
        mode = createFiber(4, null !== portal.children ? portal.children : [], portal.key, mode);
        mode.lanes = lanes;
        mode.stateNode = {
            containerInfo: portal.containerInfo,
            pendingChildren: null,
            implementation: portal.implementation
        };
        return mode;
    }
    function pushTreeFork(workInProgress, totalChildren) {
        warnIfNotHydrating();
        forkStack[forkStackIndex++] = treeForkCount;
        forkStack[forkStackIndex++] = treeForkProvider;
        treeForkProvider = workInProgress;
        treeForkCount = totalChildren;
    }
    function pushTreeId(workInProgress, totalChildren, index) {
        warnIfNotHydrating();
        idStack[idStackIndex++] = treeContextId;
        idStack[idStackIndex++] = treeContextOverflow;
        idStack[idStackIndex++] = treeContextProvider;
        treeContextProvider = workInProgress;
        var baseIdWithLeadingBit = treeContextId;
        workInProgress = treeContextOverflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index += 1;
        var length = 32 - clz32(totalChildren) + baseLength;
        if (30 < length) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
            baseIdWithLeadingBit >>= numberOfOverflowBits;
            baseLength -= numberOfOverflowBits;
            treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit;
            treeContextOverflow = length + workInProgress;
        } else treeContextId = 1 << length | index << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress;
    }
    function pushMaterializedTreeId(workInProgress) {
        warnIfNotHydrating();
        null !== workInProgress.return && (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
    }
    function popTreeContext(workInProgress) {
        for(; workInProgress === treeForkProvider;)treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
        for(; workInProgress === treeContextProvider;)treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
    }
    function warnIfNotHydrating() {
        isHydrating || console.error("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    function buildHydrationDiffNode(fiber, distanceFromLeaf) {
        if (null === fiber.return) {
            if (null === hydrationDiffRootDEV) hydrationDiffRootDEV = {
                fiber: fiber,
                children: [],
                serverProps: void 0,
                serverTail: [],
                distanceFromLeaf: distanceFromLeaf
            };
            else {
                if (hydrationDiffRootDEV.fiber !== fiber) throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");
                hydrationDiffRootDEV.distanceFromLeaf > distanceFromLeaf && (hydrationDiffRootDEV.distanceFromLeaf = distanceFromLeaf);
            }
            return hydrationDiffRootDEV;
        }
        var siblings = buildHydrationDiffNode(fiber.return, distanceFromLeaf + 1).children;
        if (0 < siblings.length && siblings[siblings.length - 1].fiber === fiber) return siblings = siblings[siblings.length - 1], siblings.distanceFromLeaf > distanceFromLeaf && (siblings.distanceFromLeaf = distanceFromLeaf), siblings;
        distanceFromLeaf = {
            fiber: fiber,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: distanceFromLeaf
        };
        siblings.push(distanceFromLeaf);
        return distanceFromLeaf;
    }
    function warnNonHydratedInstance(fiber, rejectedCandidate) {
        didSuspendOrErrorDEV || (fiber = buildHydrationDiffNode(fiber, 0), fiber.serverProps = null, null !== rejectedCandidate && (rejectedCandidate = describeHydratableInstanceForDevWarnings(rejectedCandidate), fiber.serverTail.push(rejectedCandidate)));
    }
    function throwOnHydrationMismatch(fiber) {
        var diff = "", diffRoot = hydrationDiffRootDEV;
        null !== diffRoot && (hydrationDiffRootDEV = null, diff = describeDiff(diffRoot));
        queueHydrationError(createCapturedValueAtFiber(Error("Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch" + diff), fiber));
        throw HydrationMismatchException;
    }
    function prepareToHydrateHostInstance(fiber) {
        var didHydrate = fiber.stateNode;
        var type = fiber.type, props = fiber.memoizedProps;
        didHydrate[internalInstanceKey] = fiber;
        didHydrate[internalPropsKey] = props;
        validatePropertiesInDevelopment(type, props);
        switch(type){
            case "dialog":
                listenToNonDelegatedEvent("cancel", didHydrate);
                listenToNonDelegatedEvent("close", didHydrate);
                break;
            case "iframe":
            case "object":
            case "embed":
                listenToNonDelegatedEvent("load", didHydrate);
                break;
            case "video":
            case "audio":
                for(type = 0; type < mediaEventTypes.length; type++)listenToNonDelegatedEvent(mediaEventTypes[type], didHydrate);
                break;
            case "source":
                listenToNonDelegatedEvent("error", didHydrate);
                break;
            case "img":
            case "image":
            case "link":
                listenToNonDelegatedEvent("error", didHydrate);
                listenToNonDelegatedEvent("load", didHydrate);
                break;
            case "details":
                listenToNonDelegatedEvent("toggle", didHydrate);
                break;
            case "input":
                checkControlledValueProps("input", props);
                listenToNonDelegatedEvent("invalid", didHydrate);
                validateInputProps(didHydrate, props);
                initInput(didHydrate, props.value, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name, !0);
                track(didHydrate);
                break;
            case "option":
                validateOptionProps(didHydrate, props);
                break;
            case "select":
                checkControlledValueProps("select", props);
                listenToNonDelegatedEvent("invalid", didHydrate);
                validateSelectProps(didHydrate, props);
                break;
            case "textarea":
                checkControlledValueProps("textarea", props), listenToNonDelegatedEvent("invalid", didHydrate), validateTextareaProps(didHydrate, props), initTextarea(didHydrate, props.value, props.defaultValue, props.children), track(didHydrate);
        }
        type = props.children;
        "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || didHydrate.textContent === "" + type || !0 === props.suppressHydrationWarning || checkForUnmatchedText(didHydrate.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", didHydrate), listenToNonDelegatedEvent("toggle", didHydrate)), null != props.onScroll && listenToNonDelegatedEvent("scroll", didHydrate), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", didHydrate), null != props.onClick && (didHydrate.onclick = noop$1), didHydrate = !0) : didHydrate = !1;
        didHydrate || throwOnHydrationMismatch(fiber);
    }
    function popToNextHostParent(fiber) {
        for(hydrationParentFiber = fiber.return; hydrationParentFiber;)switch(hydrationParentFiber.tag){
            case 5:
            case 13:
                rootOrSingletonContext = !1;
                return;
            case 27:
            case 3:
                rootOrSingletonContext = !0;
                return;
            default:
                hydrationParentFiber = hydrationParentFiber.return;
        }
    }
    function popHydrationState(fiber) {
        if (fiber !== hydrationParentFiber) return !1;
        if (!isHydrating) return popToNextHostParent(fiber), isHydrating = !0, !1;
        var tag = fiber.tag, JSCompiler_temp;
        if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
            if (JSCompiler_temp = 5 === tag) JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
            JSCompiler_temp = !JSCompiler_temp;
        }
        if (JSCompiler_temp && nextHydratableInstance) {
            for(JSCompiler_temp = nextHydratableInstance; JSCompiler_temp;){
                var diffNode = buildHydrationDiffNode(fiber, 0), description = describeHydratableInstanceForDevWarnings(JSCompiler_temp);
                diffNode.serverTail.push(description);
                JSCompiler_temp = "Suspense" === description.type ? getNextHydratableInstanceAfterSuspenseInstance(JSCompiler_temp) : getNextHydratable(JSCompiler_temp.nextSibling);
            }
            throwOnHydrationMismatch(fiber);
        }
        popToNextHostParent(fiber);
        if (13 === tag) {
            fiber = fiber.memoizedState;
            fiber = null !== fiber ? fiber.dehydrated : null;
            if (!fiber) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
            nextHydratableInstance = getNextHydratableInstanceAfterSuspenseInstance(fiber);
        } else 27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
        return !0;
    }
    function resetHydrationState() {
        nextHydratableInstance = hydrationParentFiber = null;
        didSuspendOrErrorDEV = isHydrating = !1;
    }
    function upgradeHydrationErrorsToRecoverable() {
        var queuedErrors = hydrationErrors;
        null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, queuedErrors), hydrationErrors = null);
        return queuedErrors;
    }
    function queueHydrationError(error) {
        null === hydrationErrors ? hydrationErrors = [
            error
        ] : hydrationErrors.push(error);
    }
    function emitPendingHydrationWarnings() {
        var diffRoot = hydrationDiffRootDEV;
        if (null !== diffRoot) {
            hydrationDiffRootDEV = null;
            for(var diff = describeDiff(diffRoot); 0 < diffRoot.children.length;)diffRoot = diffRoot.children[0];
            runWithFiberInDEV(diffRoot.fiber, function() {
                console.error("A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\n%s%s", "https://react.dev/link/hydration-mismatch", diff);
            });
        }
    }
    function resetContextDependencies() {
        lastContextDependency = currentlyRenderingFiber$1 = null;
        isDisallowedContextReadInDEV = !1;
    }
    function pushProvider(providerFiber, context, nextValue) {
        push(valueCursor, context._currentValue, providerFiber);
        context._currentValue = nextValue;
        push(rendererCursorDEV, context._currentRenderer, providerFiber);
        void 0 !== context._currentRenderer && null !== context._currentRenderer && context._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
        context._currentRenderer = rendererSigil;
    }
    function popProvider(context, providerFiber) {
        context._currentValue = valueCursor.current;
        var currentRenderer = rendererCursorDEV.current;
        pop(rendererCursorDEV, providerFiber);
        context._currentRenderer = currentRenderer;
        pop(valueCursor, providerFiber);
    }
    function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
        for(; null !== parent;){
            var alternate = parent.alternate;
            (parent.childLanes & renderLanes) !== renderLanes ? (parent.childLanes |= renderLanes, null !== alternate && (alternate.childLanes |= renderLanes)) : null !== alternate && (alternate.childLanes & renderLanes) !== renderLanes && (alternate.childLanes |= renderLanes);
            if (parent === propagationRoot) break;
            parent = parent.return;
        }
        parent !== propagationRoot && console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function propagateContextChanges(workInProgress, contexts, renderLanes, forcePropagateEntireTree) {
        var fiber = workInProgress.child;
        null !== fiber && (fiber.return = workInProgress);
        for(; null !== fiber;){
            var list = fiber.dependencies;
            if (null !== list) {
                var nextFiber = fiber.child;
                list = list.firstContext;
                a: for(; null !== list;){
                    var dependency = list;
                    list = fiber;
                    for(var i = 0; i < contexts.length; i++)if (dependency.context === contexts[i]) {
                        list.lanes |= renderLanes;
                        dependency = list.alternate;
                        null !== dependency && (dependency.lanes |= renderLanes);
                        scheduleContextWorkOnParentPath(list.return, renderLanes, workInProgress);
                        forcePropagateEntireTree || (nextFiber = null);
                        break a;
                    }
                    list = dependency.next;
                }
            } else if (18 === fiber.tag) {
                nextFiber = fiber.return;
                if (null === nextFiber) throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
                nextFiber.lanes |= renderLanes;
                list = nextFiber.alternate;
                null !== list && (list.lanes |= renderLanes);
                scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
                nextFiber = null;
            } else nextFiber = fiber.child;
            if (null !== nextFiber) nextFiber.return = fiber;
            else for(nextFiber = fiber; null !== nextFiber;){
                if (nextFiber === workInProgress) {
                    nextFiber = null;
                    break;
                }
                fiber = nextFiber.sibling;
                if (null !== fiber) {
                    fiber.return = nextFiber.return;
                    nextFiber = fiber;
                    break;
                }
                nextFiber = nextFiber.return;
            }
            fiber = nextFiber;
        }
    }
    function propagateParentContextChanges(current, workInProgress, renderLanes, forcePropagateEntireTree) {
        current = null;
        for(var parent = workInProgress, isInsidePropagationBailout = !1; null !== parent;){
            if (!isInsidePropagationBailout) {
                if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
                else if (0 !== (parent.flags & 262144)) break;
            }
            if (10 === parent.tag) {
                var currentParent = parent.alternate;
                if (null === currentParent) throw Error("Should have a current fiber. This is a bug in React.");
                currentParent = currentParent.memoizedProps;
                if (null !== currentParent) {
                    var context = parent.type;
                    objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [
                        context
                    ]);
                }
            } else if (parent === hostTransitionProviderCursor.current) {
                currentParent = parent.alternate;
                if (null === currentParent) throw Error("Should have a current fiber. This is a bug in React.");
                currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [
                    HostTransitionContext
                ]);
            }
            parent = parent.return;
        }
        null !== current && propagateContextChanges(workInProgress, current, renderLanes, forcePropagateEntireTree);
        workInProgress.flags |= 262144;
    }
    function checkIfContextChanged(currentDependencies) {
        for(currentDependencies = currentDependencies.firstContext; null !== currentDependencies;){
            if (!objectIs(currentDependencies.context._currentValue, currentDependencies.memoizedValue)) return !0;
            currentDependencies = currentDependencies.next;
        }
        return !1;
    }
    function prepareToReadContext(workInProgress) {
        currentlyRenderingFiber$1 = workInProgress;
        lastContextDependency = null;
        workInProgress = workInProgress.dependencies;
        null !== workInProgress && (workInProgress.firstContext = null);
    }
    function readContext(context) {
        isDisallowedContextReadInDEV && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        return readContextForConsumer(currentlyRenderingFiber$1, context);
    }
    function readContextDuringReconciliation(consumer, context) {
        null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
        return readContextForConsumer(consumer, context);
    }
    function readContextForConsumer(consumer, context) {
        var value = context._currentValue;
        context = {
            context: context,
            memoizedValue: value,
            next: null
        };
        if (null === lastContextDependency) {
            if (null === consumer) throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            lastContextDependency = context;
            consumer.dependencies = {
                lanes: 0,
                firstContext: context,
                _debugThenableState: null
            };
            consumer.flags |= 524288;
        } else lastContextDependency = lastContextDependency.next = context;
        return value;
    }
    function createCache() {
        return {
            controller: new AbortControllerLocal(),
            data: new Map(),
            refCount: 0
        };
    }
    function retainCache(cache) {
        cache.controller.signal.aborted && console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React.");
        cache.refCount++;
    }
    function releaseCache(cache) {
        cache.refCount--;
        0 > cache.refCount && console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React.");
        0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
            cache.controller.abort();
        });
    }
    function pushNestedEffectDurations() {
        var prevEffectDuration = profilerEffectDuration;
        profilerEffectDuration = 0;
        return prevEffectDuration;
    }
    function popNestedEffectDurations(prevEffectDuration) {
        var elapsedTime = profilerEffectDuration;
        profilerEffectDuration = prevEffectDuration;
        return elapsedTime;
    }
    function bubbleNestedEffectDurations(prevEffectDuration) {
        var elapsedTime = profilerEffectDuration;
        profilerEffectDuration += prevEffectDuration;
        return elapsedTime;
    }
    function startProfilerTimer(fiber) {
        profilerStartTime = now();
        0 > fiber.actualStartTime && (fiber.actualStartTime = profilerStartTime);
    }
    function stopProfilerTimerIfRunningAndRecordDuration(fiber) {
        if (0 <= profilerStartTime) {
            var elapsedTime = now() - profilerStartTime;
            fiber.actualDuration += elapsedTime;
            fiber.selfBaseDuration = elapsedTime;
            profilerStartTime = -1;
        }
    }
    function stopProfilerTimerIfRunningAndRecordIncompleteDuration(fiber) {
        if (0 <= profilerStartTime) {
            var elapsedTime = now() - profilerStartTime;
            fiber.actualDuration += elapsedTime;
            profilerStartTime = -1;
        }
    }
    function recordEffectDuration() {
        if (0 <= profilerStartTime) {
            var elapsedTime = now() - profilerStartTime;
            profilerStartTime = -1;
            profilerEffectDuration += elapsedTime;
        }
    }
    function startEffectTimer() {
        profilerStartTime = now();
    }
    function transferActualDuration(fiber) {
        for(var child = fiber.child; child;)fiber.actualDuration += child.actualDuration, child = child.sibling;
    }
    function entangleAsyncAction(transition, thenable) {
        if (null === currentEntangledListeners) {
            var entangledListeners = currentEntangledListeners = [];
            currentEntangledPendingCount = 0;
            currentEntangledLane = requestTransitionLane();
            currentEntangledActionThenable = {
                status: "pending",
                value: void 0,
                then: function(resolve) {
                    entangledListeners.push(resolve);
                }
            };
        }
        currentEntangledPendingCount++;
        thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
        return thenable;
    }
    function pingEngtangledActionScope() {
        if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
            null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
            var listeners = currentEntangledListeners;
            currentEntangledListeners = null;
            currentEntangledLane = 0;
            currentEntangledActionThenable = null;
            for(var i = 0; i < listeners.length; i++)(0, listeners[i])();
        }
    }
    function chainThenableValue(thenable, result) {
        var listeners = [], thenableWithOverride = {
            status: "pending",
            value: null,
            reason: null,
            then: function(resolve) {
                listeners.push(resolve);
            }
        };
        thenable.then(function() {
            thenableWithOverride.status = "fulfilled";
            thenableWithOverride.value = result;
            for(var i = 0; i < listeners.length; i++)(0, listeners[i])(result);
        }, function(error) {
            thenableWithOverride.status = "rejected";
            thenableWithOverride.reason = error;
            for(error = 0; error < listeners.length; error++)(0, listeners[error])(void 0);
        });
        return thenableWithOverride;
    }
    function peekCacheFromPool() {
        var cacheResumedFromPreviousRender = resumedCache.current;
        return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
    }
    function pushTransition(offscreenWorkInProgress, prevCachePool) {
        null === prevCachePool ? push(resumedCache, resumedCache.current, offscreenWorkInProgress) : push(resumedCache, prevCachePool.pool, offscreenWorkInProgress);
    }
    function getSuspendedCache() {
        var cacheFromPool = peekCacheFromPool();
        return null === cacheFromPool ? null : {
            parent: CacheContext._currentValue,
            pool: cacheFromPool
        };
    }
    function createThenableState() {
        return {
            didWarnAboutUncachedPromise: !1,
            thenables: []
        };
    }
    function isThenableResolved(thenable) {
        thenable = thenable.status;
        return "fulfilled" === thenable || "rejected" === thenable;
    }
    function noop$3() {}
    function trackUsedThenable(thenableState, thenable, index) {
        null !== ReactSharedInternals.actQueue && (ReactSharedInternals.didUsePromise = !0);
        var trackedThenables = thenableState.thenables;
        index = trackedThenables[index];
        void 0 === index ? trackedThenables.push(thenable) : index !== thenable && (thenableState.didWarnAboutUncachedPromise || (thenableState.didWarnAboutUncachedPromise = !0, console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")), thenable.then(noop$3, noop$3), thenable = index);
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
            default:
                if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
                else {
                    thenableState = workInProgressRoot;
                    if (null !== thenableState && 100 < thenableState.shellSuspendCounter) throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
                    thenableState = thenable;
                    thenableState.status = "pending";
                    thenableState.then(function(fulfilledValue) {
                        if ("pending" === thenable.status) {
                            var fulfilledThenable = thenable;
                            fulfilledThenable.status = "fulfilled";
                            fulfilledThenable.value = fulfilledValue;
                        }
                    }, function(error) {
                        if ("pending" === thenable.status) {
                            var rejectedThenable = thenable;
                            rejectedThenable.status = "rejected";
                            rejectedThenable.reason = error;
                        }
                    });
                }
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
                }
                suspendedThenable = thenable;
                needsToResetSuspendedThenableDEV = !0;
                throw SuspenseException;
        }
    }
    function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var thenable = suspendedThenable;
        suspendedThenable = null;
        needsToResetSuspendedThenableDEV = !1;
        return thenable;
    }
    function checkIfUseWrappedInAsyncCatch(rejectedReason) {
        if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException) throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
    }
    function initializeUpdateQueue(fiber) {
        fiber.updateQueue = {
            baseState: fiber.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        };
    }
    function cloneUpdateQueue(current, workInProgress) {
        current = current.updateQueue;
        workInProgress.updateQueue === current && (workInProgress.updateQueue = {
            baseState: current.baseState,
            firstBaseUpdate: current.firstBaseUpdate,
            lastBaseUpdate: current.lastBaseUpdate,
            shared: current.shared,
            callbacks: null
        });
    }
    function createUpdate(lane) {
        return {
            lane: lane,
            tag: UpdateState,
            payload: null,
            callback: null,
            next: null
        };
    }
    function enqueueUpdate(fiber, update, lane) {
        var updateQueue = fiber.updateQueue;
        if (null === updateQueue) return null;
        updateQueue = updateQueue.shared;
        if (currentlyProcessingQueue === updateQueue && !didWarnUpdateInsideUpdate) {
            var componentName = getComponentNameFromFiber(fiber);
            console.error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.\n\nPlease update the following component: %s", componentName);
            didWarnUpdateInsideUpdate = !0;
        }
        if ((executionContext & RenderContext) !== NoContext) return componentName = updateQueue.pending, null === componentName ? update.next = update : (update.next = componentName.next, componentName.next = update), updateQueue.pending = update, update = getRootForUpdatedFiber(fiber), markUpdateLaneFromFiberToRoot(fiber, null, lane), update;
        enqueueUpdate$1(fiber, updateQueue, update, lane);
        return getRootForUpdatedFiber(fiber);
    }
    function entangleTransitions(root, fiber, lane) {
        fiber = fiber.updateQueue;
        if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
            var queueLanes = fiber.lanes;
            queueLanes &= root.pendingLanes;
            lane |= queueLanes;
            fiber.lanes = lane;
            markRootEntangled(root, lane);
        }
    }
    function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
        var queue = workInProgress.updateQueue, current = workInProgress.alternate;
        if (null !== current && (current = current.updateQueue, queue === current)) {
            var newFirst = null, newLast = null;
            queue = queue.firstBaseUpdate;
            if (null !== queue) {
                do {
                    var clone = {
                        lane: queue.lane,
                        tag: queue.tag,
                        payload: queue.payload,
                        callback: null,
                        next: null
                    };
                    null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
                    queue = queue.next;
                }while (null !== queue);
                null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
            } else newFirst = newLast = capturedUpdate;
            queue = {
                baseState: current.baseState,
                firstBaseUpdate: newFirst,
                lastBaseUpdate: newLast,
                shared: current.shared,
                callbacks: current.callbacks
            };
            workInProgress.updateQueue = queue;
            return;
        }
        workInProgress = queue.lastBaseUpdate;
        null === workInProgress ? queue.firstBaseUpdate = capturedUpdate : workInProgress.next = capturedUpdate;
        queue.lastBaseUpdate = capturedUpdate;
    }
    function suspendIfUpdateReadFromEntangledAsyncAction() {
        if (didReadFromEntangledAsyncAction) {
            var entangledActionThenable = currentEntangledActionThenable;
            if (null !== entangledActionThenable) throw entangledActionThenable;
        }
    }
    function processUpdateQueue(workInProgress, props, instance$jscomp$0, renderLanes) {
        didReadFromEntangledAsyncAction = !1;
        var queue = workInProgress.updateQueue;
        hasForceUpdate = !1;
        currentlyProcessingQueue = queue.shared;
        var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
        if (null !== pendingQueue) {
            queue.shared.pending = null;
            var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
            lastPendingUpdate.next = null;
            null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
            lastBaseUpdate = lastPendingUpdate;
            var current = workInProgress.alternate;
            null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
        }
        if (null !== firstBaseUpdate) {
            var newState = queue.baseState;
            lastBaseUpdate = 0;
            current = firstPendingUpdate = lastPendingUpdate = null;
            pendingQueue = firstBaseUpdate;
            do {
                var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
                if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
                    0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = !0);
                    null !== current && (current = current.next = {
                        lane: 0,
                        tag: pendingQueue.tag,
                        payload: pendingQueue.payload,
                        callback: null,
                        next: null
                    });
                    a: {
                        updateLane = workInProgress;
                        var partialState = pendingQueue;
                        var nextProps = props, instance = instance$jscomp$0;
                        switch(partialState.tag){
                            case ReplaceState:
                                partialState = partialState.payload;
                                if ("function" === typeof partialState) {
                                    isDisallowedContextReadInDEV = !0;
                                    var nextState = partialState.call(instance, newState, nextProps);
                                    if (updateLane.mode & StrictLegacyMode) {
                                        setIsStrictModeForDevtools(!0);
                                        try {
                                            partialState.call(instance, newState, nextProps);
                                        } finally{
                                            setIsStrictModeForDevtools(!1);
                                        }
                                    }
                                    isDisallowedContextReadInDEV = !1;
                                    newState = nextState;
                                    break a;
                                }
                                newState = partialState;
                                break a;
                            case CaptureUpdate:
                                updateLane.flags = updateLane.flags & -65537 | 128;
                            case UpdateState:
                                nextState = partialState.payload;
                                if ("function" === typeof nextState) {
                                    isDisallowedContextReadInDEV = !0;
                                    partialState = nextState.call(instance, newState, nextProps);
                                    if (updateLane.mode & StrictLegacyMode) {
                                        setIsStrictModeForDevtools(!0);
                                        try {
                                            nextState.call(instance, newState, nextProps);
                                        } finally{
                                            setIsStrictModeForDevtools(!1);
                                        }
                                    }
                                    isDisallowedContextReadInDEV = !1;
                                } else partialState = nextState;
                                if (null === partialState || void 0 === partialState) break a;
                                newState = assign({}, newState, partialState);
                                break a;
                            case ForceUpdate:
                                hasForceUpdate = !0;
                        }
                    }
                    updateLane = pendingQueue.callback;
                    null !== updateLane && (workInProgress.flags |= 64, isHiddenUpdate && (workInProgress.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [
                        updateLane
                    ] : isHiddenUpdate.push(updateLane));
                } else isHiddenUpdate = {
                    lane: updateLane,
                    tag: pendingQueue.tag,
                    payload: pendingQueue.payload,
                    callback: pendingQueue.callback,
                    next: null
                }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
                pendingQueue = pendingQueue.next;
                if (null === pendingQueue) {
                    if (pendingQueue = queue.shared.pending, null === pendingQueue) break;
                    else isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
                }
            }while (1);
            null === current && (lastPendingUpdate = newState);
            queue.baseState = lastPendingUpdate;
            queue.firstBaseUpdate = firstPendingUpdate;
            queue.lastBaseUpdate = current;
            null === firstBaseUpdate && (queue.shared.lanes = 0);
            workInProgressRootSkippedLanes |= lastBaseUpdate;
            workInProgress.lanes = lastBaseUpdate;
            workInProgress.memoizedState = newState;
        }
        currentlyProcessingQueue = null;
    }
    function callCallback(callback, context) {
        if ("function" !== typeof callback) throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callback);
        callback.call(context);
    }
    function commitHiddenCallbacks(updateQueue, context) {
        var hiddenCallbacks = updateQueue.shared.hiddenCallbacks;
        if (null !== hiddenCallbacks) for(updateQueue.shared.hiddenCallbacks = null, updateQueue = 0; updateQueue < hiddenCallbacks.length; updateQueue++)callCallback(hiddenCallbacks[updateQueue], context);
    }
    function commitCallbacks(updateQueue, context) {
        var callbacks = updateQueue.callbacks;
        if (null !== callbacks) for(updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)callCallback(callbacks[updateQueue], context);
    }
    function pushHiddenContext(fiber, context) {
        var prevEntangledRenderLanes = entangledRenderLanes;
        push(prevEntangledRenderLanesCursor, prevEntangledRenderLanes, fiber);
        push(currentTreeHiddenStackCursor, context, fiber);
        entangledRenderLanes = prevEntangledRenderLanes | context.baseLanes;
    }
    function reuseHiddenContextOnStack(fiber) {
        push(prevEntangledRenderLanesCursor, entangledRenderLanes, fiber);
        push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current, fiber);
    }
    function popHiddenContext(fiber) {
        entangledRenderLanes = prevEntangledRenderLanesCursor.current;
        pop(currentTreeHiddenStackCursor, fiber);
        pop(prevEntangledRenderLanesCursor, fiber);
    }
    function mountHookTypesDev() {
        var hookName = currentHookNameInDev;
        null === hookTypesDev ? hookTypesDev = [
            hookName
        ] : hookTypesDev.push(hookName);
    }
    function updateHookTypesDev() {
        var hookName = currentHookNameInDev;
        if (null !== hookTypesDev && (hookTypesUpdateIndexDev++, hookTypesDev[hookTypesUpdateIndexDev] !== hookName)) {
            var componentName = getComponentNameFromFiber(currentlyRenderingFiber);
            if (!didWarnAboutMismatchedHooksForComponent.has(componentName) && (didWarnAboutMismatchedHooksForComponent.add(componentName), null !== hookTypesDev)) {
                for(var table = "", i = 0; i <= hookTypesUpdateIndexDev; i++){
                    var oldHookName = hookTypesDev[i], newHookName = i === hookTypesUpdateIndexDev ? hookName : oldHookName;
                    for(oldHookName = i + 1 + ". " + oldHookName; 30 > oldHookName.length;)oldHookName += " ";
                    oldHookName += newHookName + "\n";
                    table += oldHookName;
                }
                console.error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
            }
        }
    }
    function checkDepsAreArrayDev(deps) {
        void 0 === deps || null === deps || isArrayImpl(deps) || console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
    }
    function warnOnUseFormStateInDev() {
        var componentName = getComponentNameFromFiber(currentlyRenderingFiber);
        didWarnAboutUseFormState.has(componentName) || (didWarnAboutUseFormState.add(componentName), console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.", componentName));
    }
    function throwInvalidHookError() {
        throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
        if (ignorePreviousDependencies) return !1;
        if (null === prevDeps) return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), !1;
        nextDeps.length !== prevDeps.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
        for(var i = 0; i < prevDeps.length && i < nextDeps.length; i++)if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
        return !0;
    }
    function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderLanes) {
        renderLanes = nextRenderLanes;
        currentlyRenderingFiber = workInProgress;
        hookTypesDev = null !== current ? current._debugHookTypes : null;
        hookTypesUpdateIndexDev = -1;
        ignorePreviousDependencies = null !== current && current.type !== workInProgress.type;
        if ("[object AsyncFunction]" === Object.prototype.toString.call(Component) || "[object AsyncGeneratorFunction]" === Object.prototype.toString.call(Component)) nextRenderLanes = getComponentNameFromFiber(currentlyRenderingFiber), didWarnAboutAsyncClientComponent.has(nextRenderLanes) || (didWarnAboutAsyncClientComponent.add(nextRenderLanes), console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.", null === nextRenderLanes ? "An unknown Component" : "<" + nextRenderLanes + ">"));
        workInProgress.memoizedState = null;
        workInProgress.updateQueue = null;
        workInProgress.lanes = 0;
        ReactSharedInternals.H = null !== current && null !== current.memoizedState ? HooksDispatcherOnUpdateInDEV : null !== hookTypesDev ? HooksDispatcherOnMountWithHookTypesInDEV : HooksDispatcherOnMountInDEV;
        shouldDoubleInvokeUserFnsInHooksDEV = nextRenderLanes = (workInProgress.mode & StrictLegacyMode) !== NoMode;
        var children = callComponentInDEV(Component, props, secondArg);
        shouldDoubleInvokeUserFnsInHooksDEV = !1;
        didScheduleRenderPhaseUpdateDuringThisPass && (children = renderWithHooksAgain(workInProgress, Component, props, secondArg));
        if (nextRenderLanes) {
            setIsStrictModeForDevtools(!0);
            try {
                children = renderWithHooksAgain(workInProgress, Component, props, secondArg);
            } finally{
                setIsStrictModeForDevtools(!1);
            }
        }
        finishRenderingHooks(current, workInProgress);
        return children;
    }
    function finishRenderingHooks(current, workInProgress) {
        workInProgress._debugHookTypes = hookTypesDev;
        null === workInProgress.dependencies ? null !== thenableState$1 && (workInProgress.dependencies = {
            lanes: 0,
            firstContext: null,
            _debugThenableState: thenableState$1
        }) : workInProgress.dependencies._debugThenableState = thenableState$1;
        ReactSharedInternals.H = ContextOnlyDispatcher;
        var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
        renderLanes = 0;
        hookTypesDev = currentHookNameInDev = workInProgressHook = currentHook = currentlyRenderingFiber = null;
        hookTypesUpdateIndexDev = -1;
        null !== current && (current.flags & 65011712) !== (workInProgress.flags & 65011712) && console.error("Internal React error: Expected static flag was missing. Please notify the React team.");
        didScheduleRenderPhaseUpdate = !1;
        thenableIndexCounter$1 = 0;
        thenableState$1 = null;
        if (didRenderTooFewHooks) throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
        null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = !0));
        needsToResetSuspendedThenableDEV ? (needsToResetSuspendedThenableDEV = !1, current = !0) : current = !1;
        current && (workInProgress = getComponentNameFromFiber(workInProgress) || "Unknown", didWarnAboutUseWrappedInTryCatch.has(workInProgress) || didWarnAboutAsyncClientComponent.has(workInProgress) || (didWarnAboutUseWrappedInTryCatch.add(workInProgress), console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")));
    }
    function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
        currentlyRenderingFiber = workInProgress;
        var numberOfReRenders = 0;
        do {
            didScheduleRenderPhaseUpdateDuringThisPass && (thenableState$1 = null);
            thenableIndexCounter$1 = 0;
            didScheduleRenderPhaseUpdateDuringThisPass = !1;
            if (numberOfReRenders >= RE_RENDER_LIMIT) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            numberOfReRenders += 1;
            ignorePreviousDependencies = !1;
            workInProgressHook = currentHook = null;
            if (null != workInProgress.updateQueue) {
                var children = workInProgress.updateQueue;
                children.lastEffect = null;
                children.events = null;
                children.stores = null;
                null != children.memoCache && (children.memoCache.index = 0);
            }
            hookTypesUpdateIndexDev = -1;
            ReactSharedInternals.H = HooksDispatcherOnRerenderInDEV;
            children = callComponentInDEV(Component, props, secondArg);
        }while (didScheduleRenderPhaseUpdateDuringThisPass);
        return children;
    }
    function TransitionAwareHostComponent() {
        var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
        maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
        dispatcher = dispatcher.useState()[0];
        (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
        return maybeThenable;
    }
    function checkDidRenderIdHook() {
        var didRenderIdHook = 0 !== localIdCounter;
        localIdCounter = 0;
        return didRenderIdHook;
    }
    function bailoutHooks(current, workInProgress, lanes) {
        workInProgress.updateQueue = current.updateQueue;
        workInProgress.flags = (workInProgress.mode & StrictEffectsMode) !== NoMode ? workInProgress.flags & -402655237 : workInProgress.flags & -2053;
        current.lanes &= ~lanes;
    }
    function resetHooksOnUnwind(workInProgress) {
        if (didScheduleRenderPhaseUpdate) {
            for(workInProgress = workInProgress.memoizedState; null !== workInProgress;){
                var queue = workInProgress.queue;
                null !== queue && (queue.pending = null);
                workInProgress = workInProgress.next;
            }
            didScheduleRenderPhaseUpdate = !1;
        }
        renderLanes = 0;
        hookTypesDev = workInProgressHook = currentHook = currentlyRenderingFiber = null;
        hookTypesUpdateIndexDev = -1;
        currentHookNameInDev = null;
        didScheduleRenderPhaseUpdateDuringThisPass = !1;
        thenableIndexCounter$1 = localIdCounter = 0;
        thenableState$1 = null;
    }
    function mountWorkInProgressHook() {
        var hook = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
        return workInProgressHook;
    }
    function updateWorkInProgressHook() {
        if (null === currentHook) {
            var nextCurrentHook = currentlyRenderingFiber.alternate;
            nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
        } else nextCurrentHook = currentHook.next;
        var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
        if (null !== nextWorkInProgressHook) workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
        else {
            if (null === nextCurrentHook) {
                if (null === currentlyRenderingFiber.alternate) throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");
                throw Error("Rendered more hooks than during the previous render.");
            }
            currentHook = nextCurrentHook;
            nextCurrentHook = {
                memoizedState: currentHook.memoizedState,
                baseState: currentHook.baseState,
                baseQueue: currentHook.baseQueue,
                queue: currentHook.queue,
                next: null
            };
            null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
        }
        return workInProgressHook;
    }
    function createFunctionComponentUpdateQueue() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        };
    }
    function useThenable(thenable) {
        var index = thenableIndexCounter$1;
        thenableIndexCounter$1 += 1;
        null === thenableState$1 && (thenableState$1 = createThenableState());
        thenable = trackUsedThenable(thenableState$1, thenable, index);
        index = currentlyRenderingFiber;
        null === (null === workInProgressHook ? index.memoizedState : workInProgressHook.next) && (index = index.alternate, ReactSharedInternals.H = null !== index && null !== index.memoizedState ? HooksDispatcherOnUpdateInDEV : HooksDispatcherOnMountInDEV);
        return thenable;
    }
    function use(usable) {
        if (null !== usable && "object" === typeof usable) {
            if ("function" === typeof usable.then) return useThenable(usable);
            if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
        }
        throw Error("An unsupported type was passed to use(): " + String(usable));
    }
    function useMemoCache(size) {
        var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
        null !== updateQueue && (memoCache = updateQueue.memoCache);
        if (null == memoCache) {
            var current = currentlyRenderingFiber.alternate;
            null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
                data: current.data.map(function(array) {
                    return array.slice();
                }),
                index: 0
            })));
        }
        null == memoCache && (memoCache = {
            data: [],
            index: 0
        });
        null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
        updateQueue.memoCache = memoCache;
        updateQueue = memoCache.data[memoCache.index];
        if (void 0 === updateQueue || ignorePreviousDependencies) for(updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
        else updateQueue.length !== size && console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.", updateQueue.length, size);
        memoCache.index++;
        return updateQueue;
    }
    function basicStateReducer(state, action) {
        return "function" === typeof action ? action(state) : action;
    }
    function mountReducer(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        if (void 0 !== init) {
            var initialState = init(initialArg);
            if (shouldDoubleInvokeUserFnsInHooksDEV) {
                setIsStrictModeForDevtools(!0);
                try {
                    init(initialArg);
                } finally{
                    setIsStrictModeForDevtools(!1);
                }
            }
        } else initialState = initialArg;
        hook.memoizedState = hook.baseState = initialState;
        reducer = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: reducer,
            lastRenderedState: initialState
        };
        hook.queue = reducer;
        reducer = reducer.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber, reducer);
        return [
            hook.memoizedState,
            reducer
        ];
    }
    function updateReducer(reducer) {
        var hook = updateWorkInProgressHook();
        return updateReducerImpl(hook, currentHook, reducer);
    }
    function updateReducerImpl(hook, current, reducer) {
        var queue = hook.queue;
        if (null === queue) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
        queue.lastRenderedReducer = reducer;
        var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
        if (null !== pendingQueue) {
            if (null !== baseQueue) {
                var baseFirst = baseQueue.next;
                baseQueue.next = pendingQueue.next;
                pendingQueue.next = baseFirst;
            }
            current.baseQueue !== baseQueue && console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
            current.baseQueue = baseQueue = pendingQueue;
            queue.pending = null;
        }
        pendingQueue = hook.baseState;
        if (null === baseQueue) hook.memoizedState = pendingQueue;
        else {
            current = baseQueue.next;
            var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction = !1;
            do {
                var updateLane = update.lane & -536870913;
                if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
                    var revertLane = update.revertLane;
                    if (0 === revertLane) null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                        lane: 0,
                        revertLane: 0,
                        action: update.action,
                        hasEagerState: update.hasEagerState,
                        eagerState: update.eagerState,
                        next: null
                    }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = !0);
                    else if ((renderLanes & revertLane) === revertLane) {
                        update = update.next;
                        revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction = !0);
                        continue;
                    } else updateLane = {
                        lane: 0,
                        revertLane: update.revertLane,
                        action: update.action,
                        hasEagerState: update.hasEagerState,
                        eagerState: update.eagerState,
                        next: null
                    }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
                    updateLane = update.action;
                    shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
                    pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
                } else revertLane = {
                    lane: updateLane,
                    revertLane: update.revertLane,
                    action: update.action,
                    hasEagerState: update.hasEagerState,
                    eagerState: update.eagerState,
                    next: null
                }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
                update = update.next;
            }while (null !== update && update !== current);
            null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
            if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = !0, didReadFromEntangledAsyncAction && (reducer = currentEntangledActionThenable, null !== reducer))) throw reducer;
            hook.memoizedState = pendingQueue;
            hook.baseState = baseFirst;
            hook.baseQueue = newBaseQueueLast;
            queue.lastRenderedState = pendingQueue;
        }
        null === baseQueue && (queue.lanes = 0);
        return [
            hook.memoizedState,
            queue.dispatch
        ];
    }
    function rerenderReducer(reducer) {
        var hook = updateWorkInProgressHook(), queue = hook.queue;
        if (null === queue) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
        queue.lastRenderedReducer = reducer;
        var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
        if (null !== lastRenderPhaseUpdate) {
            queue.pending = null;
            var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            do newState = reducer(newState, update.action), update = update.next;
            while (update !== lastRenderPhaseUpdate);
            objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
            hook.memoizedState = newState;
            null === hook.baseQueue && (hook.baseState = newState);
            queue.lastRenderedState = newState;
        }
        return [
            newState,
            dispatch
        ];
    }
    function mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
        if (isHydrating) {
            if (void 0 === getServerSnapshot) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            var nextSnapshot = getServerSnapshot();
            didWarnUncachedGetSnapshot || nextSnapshot === getServerSnapshot() || (console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        } else {
            nextSnapshot = getSnapshot();
            didWarnUncachedGetSnapshot || (getServerSnapshot = getSnapshot(), objectIs(nextSnapshot, getServerSnapshot) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0));
            if (null === workInProgressRoot) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
            0 !== (workInProgressRootRenderLanes & 124) || pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
        }
        hook.memoizedState = nextSnapshot;
        getServerSnapshot = {
            value: nextSnapshot,
            getSnapshot: getSnapshot
        };
        hook.queue = getServerSnapshot;
        mountEffect(subscribeToStore.bind(null, fiber, getServerSnapshot, subscribe), [
            subscribe
        ]);
        fiber.flags |= 2048;
        pushSimpleEffect(HasEffect | Passive, createEffectInstance(), updateStoreInstance.bind(null, fiber, getServerSnapshot, nextSnapshot, getSnapshot), null);
        return nextSnapshot;
    }
    function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
        if (isHydrating$jscomp$0) {
            if (void 0 === getServerSnapshot) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            getServerSnapshot = getServerSnapshot();
        } else if (getServerSnapshot = getSnapshot(), !didWarnUncachedGetSnapshot) {
            var cachedSnapshot = getSnapshot();
            objectIs(getServerSnapshot, cachedSnapshot) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        if (cachedSnapshot = !objectIs((currentHook || hook).memoizedState, getServerSnapshot)) hook.memoizedState = getServerSnapshot, didReceiveUpdate = !0;
        hook = hook.queue;
        var create = subscribeToStore.bind(null, fiber, hook, subscribe);
        updateEffectImpl(2048, Passive, create, [
            subscribe
        ]);
        if (hook.getSnapshot !== getSnapshot || cachedSnapshot || null !== workInProgressHook && workInProgressHook.memoizedState.tag & HasEffect) {
            fiber.flags |= 2048;
            pushSimpleEffect(HasEffect | Passive, createEffectInstance(), updateStoreInstance.bind(null, fiber, hook, getServerSnapshot, getSnapshot), null);
            if (null === workInProgressRoot) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
            isHydrating$jscomp$0 || 0 !== (renderLanes & 124) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        return getServerSnapshot;
    }
    function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
        fiber.flags |= 16384;
        fiber = {
            getSnapshot: getSnapshot,
            value: renderedSnapshot
        };
        getSnapshot = currentlyRenderingFiber.updateQueue;
        null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [
            fiber
        ]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [
            fiber
        ] : renderedSnapshot.push(fiber));
    }
    function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
        inst.value = nextSnapshot;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
    }
    function subscribeToStore(fiber, inst, subscribe) {
        return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
        });
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function forceStoreRerender(fiber) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root && scheduleUpdateOnFiber(root, fiber, 2);
    }
    function mountStateImpl(initialState) {
        var hook = mountWorkInProgressHook();
        if ("function" === typeof initialState) {
            var initialStateInitializer = initialState;
            initialState = initialStateInitializer();
            if (shouldDoubleInvokeUserFnsInHooksDEV) {
                setIsStrictModeForDevtools(!0);
                try {
                    initialStateInitializer();
                } finally{
                    setIsStrictModeForDevtools(!1);
                }
            }
        }
        hook.memoizedState = hook.baseState = initialState;
        hook.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: initialState
        };
        return hook;
    }
    function mountState(initialState) {
        initialState = mountStateImpl(initialState);
        var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
        queue.dispatch = dispatch;
        return [
            initialState.memoizedState,
            dispatch
        ];
    }
    function mountOptimistic(passthrough) {
        var hook = mountWorkInProgressHook();
        hook.memoizedState = hook.baseState = passthrough;
        var queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
        };
        hook.queue = queue;
        hook = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !0, queue);
        queue.dispatch = hook;
        return [
            passthrough,
            hook
        ];
    }
    function updateOptimistic(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    }
    function updateOptimisticImpl(hook, current, passthrough, reducer) {
        hook.baseState = passthrough;
        return updateReducerImpl(hook, currentHook, "function" === typeof reducer ? reducer : basicStateReducer);
    }
    function rerenderOptimistic(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        if (null !== currentHook) return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
        hook.baseState = passthrough;
        return [
            passthrough,
            hook.queue.dispatch
        ];
    }
    function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
        if (isRenderPhaseUpdate(fiber)) throw Error("Cannot update form state while rendering.");
        fiber = actionQueue.action;
        if (null !== fiber) {
            var actionNode = {
                payload: payload,
                action: fiber,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(listener) {
                    actionNode.listeners.push(listener);
                }
            };
            null !== ReactSharedInternals.T ? setPendingState(!0) : actionNode.isTransition = !1;
            setState(actionNode);
            setPendingState = actionQueue.pending;
            null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
        }
    }
    function runActionStateAction(actionQueue, node) {
        var action = node.action, payload = node.payload, prevState = actionQueue.state;
        if (node.isTransition) {
            var prevTransition = ReactSharedInternals.T, currentTransition = {};
            ReactSharedInternals.T = currentTransition;
            ReactSharedInternals.T._updatedFibers = new Set();
            try {
                var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
                null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
                handleActionReturnValue(actionQueue, node, returnValue);
            } catch (error) {
                onActionError(actionQueue, node, error);
            } finally{
                ReactSharedInternals.T = prevTransition, null === prevTransition && currentTransition._updatedFibers && (actionQueue = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < actionQueue && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
            }
        } else try {
            currentTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, currentTransition);
        } catch (error$4) {
            onActionError(actionQueue, node, error$4);
        }
    }
    function handleActionReturnValue(actionQueue, node, returnValue) {
        null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? (returnValue.then(function(nextState) {
            onActionSuccess(actionQueue, node, nextState);
        }, function(error) {
            return onActionError(actionQueue, node, error);
        }), node.isTransition || console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")) : onActionSuccess(actionQueue, node, returnValue);
    }
    function onActionSuccess(actionQueue, actionNode, nextState) {
        actionNode.status = "fulfilled";
        actionNode.value = nextState;
        notifyActionListeners(actionNode);
        actionQueue.state = nextState;
        actionNode = actionQueue.pending;
        null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
    }
    function onActionError(actionQueue, actionNode, error) {
        var last = actionQueue.pending;
        actionQueue.pending = null;
        if (null !== last) {
            last = last.next;
            do actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
            while (actionNode !== last);
        }
        actionQueue.action = null;
    }
    function notifyActionListeners(actionNode) {
        actionNode = actionNode.listeners;
        for(var i = 0; i < actionNode.length; i++)(0, actionNode[i])();
    }
    function actionStateReducer(oldState, newState) {
        return newState;
    }
    function mountActionState(action, initialStateProp) {
        if (isHydrating) {
            var ssrFormState = workInProgressRoot.formState;
            if (null !== ssrFormState) {
                a: {
                    var isMatching = currentlyRenderingFiber;
                    if (isHydrating) {
                        if (nextHydratableInstance) {
                            b: {
                                var markerInstance = nextHydratableInstance;
                                for(var inRootOrSingleton = rootOrSingletonContext; 8 !== markerInstance.nodeType;){
                                    if (!inRootOrSingleton) {
                                        markerInstance = null;
                                        break b;
                                    }
                                    markerInstance = getNextHydratable(markerInstance.nextSibling);
                                    if (null === markerInstance) {
                                        markerInstance = null;
                                        break b;
                                    }
                                }
                                inRootOrSingleton = markerInstance.data;
                                markerInstance = inRootOrSingleton === FORM_STATE_IS_MATCHING || inRootOrSingleton === FORM_STATE_IS_NOT_MATCHING ? markerInstance : null;
                            }
                            if (markerInstance) {
                                nextHydratableInstance = getNextHydratable(markerInstance.nextSibling);
                                isMatching = markerInstance.data === FORM_STATE_IS_MATCHING;
                                break a;
                            }
                        }
                        throwOnHydrationMismatch(isMatching);
                    }
                    isMatching = !1;
                }
                isMatching && (initialStateProp = ssrFormState[0]);
            }
        }
        ssrFormState = mountWorkInProgressHook();
        ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
        isMatching = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: actionStateReducer,
            lastRenderedState: initialStateProp
        };
        ssrFormState.queue = isMatching;
        ssrFormState = dispatchSetState.bind(null, currentlyRenderingFiber, isMatching);
        isMatching.dispatch = ssrFormState;
        isMatching = mountStateImpl(!1);
        inRootOrSingleton = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !1, isMatching.queue);
        isMatching = mountWorkInProgressHook();
        markerInstance = {
            state: initialStateProp,
            dispatch: null,
            action: action,
            pending: null
        };
        isMatching.queue = markerInstance;
        ssrFormState = dispatchActionState.bind(null, currentlyRenderingFiber, markerInstance, inRootOrSingleton, ssrFormState);
        markerInstance.dispatch = ssrFormState;
        isMatching.memoizedState = action;
        return [
            initialStateProp,
            ssrFormState,
            !1
        ];
    }
    function updateActionState(action) {
        var stateHook = updateWorkInProgressHook();
        return updateActionStateImpl(stateHook, currentHook, action);
    }
    function updateActionStateImpl(stateHook, currentStateHook, action) {
        currentStateHook = updateReducerImpl(stateHook, currentStateHook, actionStateReducer)[0];
        stateHook = updateReducer(basicStateReducer)[0];
        if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then) try {
            var state = useThenable(currentStateHook);
        } catch (x) {
            if (x === SuspenseException) throw SuspenseActionException;
            throw x;
        }
        else state = currentStateHook;
        currentStateHook = updateWorkInProgressHook();
        var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
        action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(HasEffect | Passive, createEffectInstance(), actionStateActionEffect.bind(null, actionQueue, action), null));
        return [
            state,
            dispatch,
            stateHook
        ];
    }
    function actionStateActionEffect(actionQueue, action) {
        actionQueue.action = action;
    }
    function rerenderActionState(action) {
        var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
        if (null !== currentStateHook) return updateActionStateImpl(stateHook, currentStateHook, action);
        updateWorkInProgressHook();
        stateHook = stateHook.memoizedState;
        currentStateHook = updateWorkInProgressHook();
        var dispatch = currentStateHook.queue.dispatch;
        currentStateHook.memoizedState = action;
        return [
            stateHook,
            dispatch,
            !1
        ];
    }
    function pushSimpleEffect(tag, inst, create, createDeps) {
        tag = {
            tag: tag,
            create: create,
            deps: createDeps,
            inst: inst,
            next: null
        };
        inst = currentlyRenderingFiber.updateQueue;
        null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
        create = inst.lastEffect;
        null === create ? inst.lastEffect = tag.next = tag : (createDeps = create.next, create.next = tag, tag.next = createDeps, inst.lastEffect = tag);
        return tag;
    }
    function createEffectInstance() {
        return {
            destroy: void 0,
            resource: void 0
        };
    }
    function mountRef(initialValue) {
        var hook = mountWorkInProgressHook();
        initialValue = {
            current: initialValue
        };
        return hook.memoizedState = initialValue;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create, createDeps) {
        var hook = mountWorkInProgressHook();
        createDeps = void 0 === createDeps ? null : createDeps;
        currentlyRenderingFiber.flags |= fiberFlags;
        hook.memoizedState = pushSimpleEffect(HasEffect | hookFlags, createEffectInstance(), create, createDeps);
    }
    function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var inst = hook.memoizedState.inst;
        null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(HasEffect | hookFlags, inst, create, deps));
    }
    function mountEffect(create, createDeps) {
        (currentlyRenderingFiber.mode & StrictEffectsMode) !== NoMode && (currentlyRenderingFiber.mode & NoStrictPassiveEffectsMode) === NoMode ? mountEffectImpl(276826112, Passive, create, createDeps) : mountEffectImpl(8390656, Passive, create, createDeps);
    }
    function mountLayoutEffect(create, deps) {
        var fiberFlags = 4194308;
        (currentlyRenderingFiber.mode & StrictEffectsMode) !== NoMode && (fiberFlags |= 134217728);
        return mountEffectImpl(fiberFlags, Layout, create, deps);
    }
    function imperativeHandleEffect(create, ref) {
        if ("function" === typeof ref) {
            create = create();
            var refCleanup = ref(create);
            return function() {
                "function" === typeof refCleanup ? refCleanup() : ref(null);
            };
        }
        if (null !== ref && void 0 !== ref) return ref.hasOwnProperty("current") || console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(ref).join(", ") + "}"), create = create(), ref.current = create, function() {
            ref.current = null;
        };
    }
    function mountImperativeHandle(ref, create, deps) {
        "function" !== typeof create && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", null !== create ? typeof create : "null");
        deps = null !== deps && void 0 !== deps ? deps.concat([
            ref
        ]) : null;
        var fiberFlags = 4194308;
        (currentlyRenderingFiber.mode & StrictEffectsMode) !== NoMode && (fiberFlags |= 134217728);
        mountEffectImpl(fiberFlags, Layout, imperativeHandleEffect.bind(null, create, ref), deps);
    }
    function updateImperativeHandle(ref, create, deps) {
        "function" !== typeof create && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", null !== create ? typeof create : "null");
        deps = null !== deps && void 0 !== deps ? deps.concat([
            ref
        ]) : null;
        updateEffectImpl(4, Layout, imperativeHandleEffect.bind(null, create, ref), deps);
    }
    function mountCallback(callback, deps) {
        mountWorkInProgressHook().memoizedState = [
            callback,
            void 0 === deps ? null : deps
        ];
        return callback;
    }
    function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var prevState = hook.memoizedState;
        if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
        hook.memoizedState = [
            callback,
            deps
        ];
        return callback;
    }
    function mountMemo(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var nextValue = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(!0);
            try {
                nextCreate();
            } finally{
                setIsStrictModeForDevtools(!1);
            }
        }
        hook.memoizedState = [
            nextValue,
            deps
        ];
        return nextValue;
    }
    function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var prevState = hook.memoizedState;
        if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
        prevState = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(!0);
            try {
                nextCreate();
            } finally{
                setIsStrictModeForDevtools(!1);
            }
        }
        hook.memoizedState = [
            prevState,
            deps
        ];
        return prevState;
    }
    function mountDeferredValue(value, initialValue) {
        var hook = mountWorkInProgressHook();
        return mountDeferredValueImpl(hook, value, initialValue);
    }
    function updateDeferredValue(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return updateDeferredValueImpl(hook, currentHook.memoizedState, value, initialValue);
    }
    function rerenderDeferredValue(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(hook, currentHook.memoizedState, value, initialValue);
    }
    function mountDeferredValueImpl(hook, value, initialValue) {
        if (void 0 === initialValue || 0 !== (renderLanes & 1073741824)) return hook.memoizedState = value;
        hook.memoizedState = initialValue;
        hook = requestDeferredLane();
        currentlyRenderingFiber.lanes |= hook;
        workInProgressRootSkippedLanes |= hook;
        return initialValue;
    }
    function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
        if (objectIs(value, prevValue)) return value;
        if (null !== currentTreeHiddenStackCursor.current) return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = !0), hook;
        if (0 === (renderLanes & 42)) return didReceiveUpdate = !0, hook.memoizedState = value;
        hook = requestDeferredLane();
        currentlyRenderingFiber.lanes |= hook;
        workInProgressRootSkippedLanes |= hook;
        return prevValue;
    }
    function startTransition(fiber, queue, pendingState, finishedState, callback) {
        var previousPriority = ReactDOMSharedInternals.p;
        ReactDOMSharedInternals.p = 0 !== previousPriority && previousPriority < ContinuousEventPriority ? previousPriority : ContinuousEventPriority;
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        dispatchOptimisticSetState(fiber, !1, queue, pendingState);
        currentTransition._updatedFibers = new Set();
        try {
            var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
                var thenableForFinishedState = chainThenableValue(returnValue, finishedState);
                dispatchSetStateInternal(fiber, queue, thenableForFinishedState, requestUpdateLane(fiber));
            } else dispatchSetStateInternal(fiber, queue, finishedState, requestUpdateLane(fiber));
        } catch (error) {
            dispatchSetStateInternal(fiber, queue, {
                then: function() {},
                status: "rejected",
                reason: error
            }, requestUpdateLane(fiber));
        } finally{
            ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, null === prevTransition && currentTransition._updatedFibers && (fiber = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < fiber && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
        }
    }
    function startHostTransition(formFiber, pendingState, action, formData) {
        if (5 !== formFiber.tag) throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");
        var queue = ensureFormComponentIsStateful(formFiber).queue;
        startTransition(formFiber, queue, pendingState, NotPendingTransition, null === action ? noop$2 : function() {
            requestFormReset$1(formFiber);
            return action(formData);
        });
    }
    function ensureFormComponentIsStateful(formFiber) {
        var existingStateHook = formFiber.memoizedState;
        if (null !== existingStateHook) return existingStateHook;
        existingStateHook = {
            memoizedState: NotPendingTransition,
            baseState: NotPendingTransition,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: basicStateReducer,
                lastRenderedState: NotPendingTransition
            },
            next: null
        };
        var initialResetState = {};
        existingStateHook.next = {
            memoizedState: initialResetState,
            baseState: initialResetState,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: basicStateReducer,
                lastRenderedState: initialResetState
            },
            next: null
        };
        formFiber.memoizedState = existingStateHook;
        formFiber = formFiber.alternate;
        null !== formFiber && (formFiber.memoizedState = existingStateHook);
        return existingStateHook;
    }
    function requestFormReset$1(formFiber) {
        null === ReactSharedInternals.T && console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");
        var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
        dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane(formFiber));
    }
    function mountTransition() {
        var stateHook = mountStateImpl(!1);
        stateHook = startTransition.bind(null, currentlyRenderingFiber, stateHook.queue, !0, !1);
        mountWorkInProgressHook().memoizedState = stateHook;
        return [
            !1,
            stateHook
        ];
    }
    function updateTransition() {
        var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
            "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
            start
        ];
    }
    function rerenderTransition() {
        var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
            "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
            start
        ];
    }
    function useHostTransitionStatus() {
        return readContext(HostTransitionContext);
    }
    function mountId() {
        var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
        if (isHydrating) {
            var treeId = treeContextOverflow;
            var idWithLeadingBit = treeContextId;
            treeId = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + treeId;
            identifierPrefix = "\u00ab" + identifierPrefix + "R" + treeId;
            treeId = localIdCounter++;
            0 < treeId && (identifierPrefix += "H" + treeId.toString(32));
            identifierPrefix += "\u00bb";
        } else treeId = globalClientIdCounter++, identifierPrefix = "\u00ab" + identifierPrefix + "r" + treeId.toString(32) + "\u00bb";
        return hook.memoizedState = identifierPrefix;
    }
    function mountRefresh() {
        return mountWorkInProgressHook().memoizedState = refreshCache.bind(null, currentlyRenderingFiber);
    }
    function refreshCache(fiber, seedKey) {
        for(var provider = fiber.return; null !== provider;){
            switch(provider.tag){
                case 24:
                case 3:
                    var lane = requestUpdateLane(provider);
                    fiber = createUpdate(lane);
                    var root = enqueueUpdate(provider, fiber, lane);
                    null !== root && (scheduleUpdateOnFiber(root, provider, lane), entangleTransitions(root, provider, lane));
                    provider = createCache();
                    null !== seedKey && void 0 !== seedKey && null !== root && console.error("The seed argument is not enabled outside experimental channels.");
                    fiber.payload = {
                        cache: provider
                    };
                    return;
            }
            provider = provider.return;
        }
    }
    function dispatchReducerAction(fiber, queue, action) {
        var args = arguments;
        "function" === typeof args[3] && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
        args = requestUpdateLane(fiber);
        var update = {
            lane: args,
            revertLane: 0,
            action: action,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, update) : (update = enqueueConcurrentHookUpdate(fiber, queue, update, args), null !== update && (scheduleUpdateOnFiber(update, fiber, args), entangleTransitionUpdate(update, queue, args)));
        markStateUpdateScheduled(fiber, args);
    }
    function dispatchSetState(fiber, queue, action) {
        var args = arguments;
        "function" === typeof args[3] && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
        args = requestUpdateLane(fiber);
        dispatchSetStateInternal(fiber, queue, action, args);
        markStateUpdateScheduled(fiber, args);
    }
    function dispatchSetStateInternal(fiber, queue, action, lane) {
        var update = {
            lane: lane,
            revertLane: 0,
            action: action,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
        else {
            var alternate = fiber.alternate;
            if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate)) {
                var prevDispatcher = ReactSharedInternals.H;
                ReactSharedInternals.H = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                    var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
                    update.hasEagerState = !0;
                    update.eagerState = eagerState;
                    if (objectIs(eagerState, currentState)) return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), !1;
                } catch (error) {} finally{
                    ReactSharedInternals.H = prevDispatcher;
                }
            }
            action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
            if (null !== action) return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), !0;
        }
        return !1;
    }
    function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
        null === ReactSharedInternals.T && 0 === currentEntangledLane && console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition.");
        action = {
            lane: 2,
            revertLane: requestTransitionLane(),
            action: action,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (isRenderPhaseUpdate(fiber)) {
            if (throwIfDuringRender) throw Error("Cannot update optimistic state while rendering.");
            console.error("Cannot call startTransition while rendering.");
        } else throwIfDuringRender = enqueueConcurrentHookUpdate(fiber, queue, action, 2), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
        markStateUpdateScheduled(fiber, 2);
    }
    function isRenderPhaseUpdate(fiber) {
        var alternate = fiber.alternate;
        return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
    }
    function enqueueRenderPhaseUpdate(queue, update) {
        didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = !0;
        var pending = queue.pending;
        null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
        queue.pending = update;
    }
    function entangleTransitionUpdate(root, queue, lane) {
        if (0 !== (lane & 4194048)) {
            var queueLanes = queue.lanes;
            queueLanes &= root.pendingLanes;
            lane |= queueLanes;
            queue.lanes = lane;
            markRootEntangled(root, lane);
        }
    }
    function pushDebugInfo(debugInfo) {
        var previousDebugInfo = currentDebugInfo;
        null != debugInfo && (currentDebugInfo = null === previousDebugInfo ? debugInfo : previousDebugInfo.concat(debugInfo));
        return previousDebugInfo;
    }
    function validateFragmentProps(element, fiber, returnFiber) {
        for(var keys = Object.keys(element.props), i = 0; i < keys.length; i++){
            var key = keys[i];
            if ("children" !== key && "key" !== key) {
                null === fiber && (fiber = createFiberFromElement(element, returnFiber.mode, 0), fiber._debugInfo = currentDebugInfo, fiber.return = returnFiber);
                runWithFiberInDEV(fiber, function(erroredKey) {
                    console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", erroredKey);
                }, key);
                break;
            }
        }
    }
    function unwrapThenable(thenable) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = createThenableState());
        return trackUsedThenable(thenableState, thenable, index);
    }
    function coerceRef(workInProgress, element) {
        element = element.props.ref;
        workInProgress.ref = void 0 !== element ? element : null;
    }
    function throwOnInvalidObjectType(returnFiber, newChild) {
        if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE) throw Error('A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.');
        returnFiber = Object.prototype.toString.call(newChild);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber) + "). If you meant to render a collection of children, use an array instead.");
    }
    function warnOnFunctionType(returnFiber, invalidChild) {
        var parentName = getComponentNameFromFiber(returnFiber) || "Component";
        ownerHasFunctionTypeWarning[parentName] || (ownerHasFunctionTypeWarning[parentName] = !0, invalidChild = invalidChild.displayName || invalidChild.name || "Component", 3 === returnFiber.tag ? console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  root.render(%s)", invalidChild, invalidChild, invalidChild) : console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  <%s>{%s}</%s>", invalidChild, invalidChild, parentName, invalidChild, parentName));
    }
    function warnOnSymbolType(returnFiber, invalidChild) {
        var parentName = getComponentNameFromFiber(returnFiber) || "Component";
        ownerHasSymbolTypeWarning[parentName] || (ownerHasSymbolTypeWarning[parentName] = !0, invalidChild = String(invalidChild), 3 === returnFiber.tag ? console.error("Symbols are not valid as a React child.\n  root.render(%s)", invalidChild) : console.error("Symbols are not valid as a React child.\n  <%s>%s</%s>", parentName, invalidChild, parentName));
    }
    function createChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
            if (shouldTrackSideEffects) {
                var deletions = returnFiber.deletions;
                null === deletions ? (returnFiber.deletions = [
                    childToDelete
                ], returnFiber.flags |= 16) : deletions.push(childToDelete);
            }
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
            if (!shouldTrackSideEffects) return null;
            for(; null !== currentFirstChild;)deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
            return null;
        }
        function mapRemainingChildren(currentFirstChild) {
            for(var existingChildren = new Map(); null !== currentFirstChild;)null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
            return existingChildren;
        }
        function useFiber(fiber, pendingProps) {
            fiber = createWorkInProgress(fiber, pendingProps);
            fiber.index = 0;
            fiber.sibling = null;
            return fiber;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
            newFiber.index = newIndex;
            if (!shouldTrackSideEffects) return newFiber.flags |= 1048576, lastPlacedIndex;
            newIndex = newFiber.alternate;
            if (null !== newIndex) return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
            newFiber.flags |= 67108866;
            return lastPlacedIndex;
        }
        function placeSingleChild(newFiber) {
            shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
            return newFiber;
        }
        function updateTextNode(returnFiber, current, textContent, lanes) {
            if (null === current || 6 !== current.tag) return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current._debugOwner = returnFiber, current._debugTask = returnFiber._debugTask, current._debugInfo = currentDebugInfo, current;
            current = useFiber(current, textContent);
            current.return = returnFiber;
            current._debugInfo = currentDebugInfo;
            return current;
        }
        function updateElement(returnFiber, current, element, lanes) {
            var elementType = element.type;
            if (elementType === REACT_FRAGMENT_TYPE) return current = updateFragment(returnFiber, current, element.props.children, lanes, element.key), validateFragmentProps(element, current, returnFiber), current;
            if (null !== current && (current.elementType === elementType || isCompatibleFamilyForHotReloading(current, element) || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && callLazyInitInDEV(elementType) === current.type)) return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current._debugOwner = element._owner, current._debugInfo = currentDebugInfo, current;
            current = createFiberFromElement(element, returnFiber.mode, lanes);
            coerceRef(current, element);
            current.return = returnFiber;
            current._debugInfo = currentDebugInfo;
            return current;
        }
        function updatePortal(returnFiber, current, portal, lanes) {
            if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current._debugInfo = currentDebugInfo, current;
            current = useFiber(current, portal.children || []);
            current.return = returnFiber;
            current._debugInfo = currentDebugInfo;
            return current;
        }
        function updateFragment(returnFiber, current, fragment, lanes, key) {
            if (null === current || 7 !== current.tag) return current = createFiberFromFragment(fragment, returnFiber.mode, lanes, key), current.return = returnFiber, current._debugOwner = returnFiber, current._debugTask = returnFiber._debugTask, current._debugInfo = currentDebugInfo, current;
            current = useFiber(current, fragment);
            current.return = returnFiber;
            current._debugInfo = currentDebugInfo;
            return current;
        }
        function createChild(returnFiber, newChild, lanes) {
            if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return newChild = createFiberFromText("" + newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild._debugOwner = returnFiber, newChild._debugTask = returnFiber._debugTask, newChild._debugInfo = currentDebugInfo, newChild;
            if ("object" === typeof newChild && null !== newChild) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        return lanes = createFiberFromElement(newChild, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = pushDebugInfo(newChild._debugInfo), lanes._debugInfo = currentDebugInfo, currentDebugInfo = returnFiber, lanes;
                    case REACT_PORTAL_TYPE:
                        return newChild = createFiberFromPortal(newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild._debugInfo = currentDebugInfo, newChild;
                    case REACT_LAZY_TYPE:
                        var _prevDebugInfo = pushDebugInfo(newChild._debugInfo);
                        newChild = callLazyInitInDEV(newChild);
                        returnFiber = createChild(returnFiber, newChild, lanes);
                        currentDebugInfo = _prevDebugInfo;
                        return returnFiber;
                }
                if (isArrayImpl(newChild) || getIteratorFn(newChild)) return lanes = createFiberFromFragment(newChild, returnFiber.mode, lanes, null), lanes.return = returnFiber, lanes._debugOwner = returnFiber, lanes._debugTask = returnFiber._debugTask, returnFiber = pushDebugInfo(newChild._debugInfo), lanes._debugInfo = currentDebugInfo, currentDebugInfo = returnFiber, lanes;
                if ("function" === typeof newChild.then) return _prevDebugInfo = pushDebugInfo(newChild._debugInfo), returnFiber = createChild(returnFiber, unwrapThenable(newChild), lanes), currentDebugInfo = _prevDebugInfo, returnFiber;
                if (newChild.$$typeof === REACT_CONTEXT_TYPE) return createChild(returnFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
            "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
            return null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, lanes) {
            var key = null !== oldFiber ? oldFiber.key : null;
            if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
            if ("object" === typeof newChild && null !== newChild) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        return newChild.key === key ? (key = pushDebugInfo(newChild._debugInfo), returnFiber = updateElement(returnFiber, oldFiber, newChild, lanes), currentDebugInfo = key, returnFiber) : null;
                    case REACT_PORTAL_TYPE:
                        return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
                    case REACT_LAZY_TYPE:
                        return key = pushDebugInfo(newChild._debugInfo), newChild = callLazyInitInDEV(newChild), returnFiber = updateSlot(returnFiber, oldFiber, newChild, lanes), currentDebugInfo = key, returnFiber;
                }
                if (isArrayImpl(newChild) || getIteratorFn(newChild)) {
                    if (null !== key) return null;
                    key = pushDebugInfo(newChild._debugInfo);
                    returnFiber = updateFragment(returnFiber, oldFiber, newChild, lanes, null);
                    currentDebugInfo = key;
                    return returnFiber;
                }
                if ("function" === typeof newChild.then) return key = pushDebugInfo(newChild._debugInfo), returnFiber = updateSlot(returnFiber, oldFiber, unwrapThenable(newChild), lanes), currentDebugInfo = key, returnFiber;
                if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateSlot(returnFiber, oldFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
            "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
            return null;
        }
        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
            if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
            if ("object" === typeof newChild && null !== newChild) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        return newIdx = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, existingChildren = pushDebugInfo(newChild._debugInfo), returnFiber = updateElement(returnFiber, newIdx, newChild, lanes), currentDebugInfo = existingChildren, returnFiber;
                    case REACT_PORTAL_TYPE:
                        return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
                    case REACT_LAZY_TYPE:
                        var _prevDebugInfo7 = pushDebugInfo(newChild._debugInfo);
                        newChild = callLazyInitInDEV(newChild);
                        returnFiber = updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes);
                        currentDebugInfo = _prevDebugInfo7;
                        return returnFiber;
                }
                if (isArrayImpl(newChild) || getIteratorFn(newChild)) return newIdx = existingChildren.get(newIdx) || null, existingChildren = pushDebugInfo(newChild._debugInfo), returnFiber = updateFragment(returnFiber, newIdx, newChild, lanes, null), currentDebugInfo = existingChildren, returnFiber;
                if ("function" === typeof newChild.then) return _prevDebugInfo7 = pushDebugInfo(newChild._debugInfo), returnFiber = updateFromMap(existingChildren, returnFiber, newIdx, unwrapThenable(newChild), lanes), currentDebugInfo = _prevDebugInfo7, returnFiber;
                if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateFromMap(existingChildren, returnFiber, newIdx, readContextDuringReconciliation(returnFiber, newChild), lanes);
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
            "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
            return null;
        }
        function warnOnInvalidKey(returnFiber, workInProgress, child, knownKeys) {
            if ("object" !== typeof child || null === child) return knownKeys;
            switch(child.$$typeof){
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                    warnForMissingKey(returnFiber, workInProgress, child);
                    var key = child.key;
                    if ("string" !== typeof key) break;
                    if (null === knownKeys) {
                        knownKeys = new Set();
                        knownKeys.add(key);
                        break;
                    }
                    if (!knownKeys.has(key)) {
                        knownKeys.add(key);
                        break;
                    }
                    runWithFiberInDEV(workInProgress, function() {
                        console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", key);
                    });
                    break;
                case REACT_LAZY_TYPE:
                    child = callLazyInitInDEV(child), warnOnInvalidKey(returnFiber, workInProgress, child, knownKeys);
            }
            return knownKeys;
        }
        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
            for(var knownKeys = null, resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++){
                oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
                var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
                if (null === newFiber) {
                    null === oldFiber && (oldFiber = nextOldFiber);
                    break;
                }
                knownKeys = warnOnInvalidKey(returnFiber, newFiber, newChildren[newIdx], knownKeys);
                shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
                currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
                null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
            }
            if (newIdx === newChildren.length) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
            if (null === oldFiber) {
                for(; newIdx < newChildren.length; newIdx++)oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (knownKeys = warnOnInvalidKey(returnFiber, oldFiber, newChildren[newIdx], knownKeys), currentFirstChild = placeChild(oldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
                isHydrating && pushTreeFork(returnFiber, newIdx);
                return resultingFirstChild;
            }
            for(oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)nextOldFiber = updateFromMap(oldFiber, returnFiber, newIdx, newChildren[newIdx], lanes), null !== nextOldFiber && (knownKeys = warnOnInvalidKey(returnFiber, nextOldFiber, newChildren[newIdx], knownKeys), shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(null === nextOldFiber.key ? newIdx : nextOldFiber.key), currentFirstChild = placeChild(nextOldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
            shouldTrackSideEffects && oldFiber.forEach(function(child) {
                return deleteChild(returnFiber, child);
            });
            isHydrating && pushTreeFork(returnFiber, newIdx);
            return resultingFirstChild;
        }
        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
            if (null == newChildren) throw Error("An iterable object provided no iterator.");
            for(var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, knownKeys = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()){
                oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
                var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
                if (null === newFiber) {
                    null === oldFiber && (oldFiber = nextOldFiber);
                    break;
                }
                knownKeys = warnOnInvalidKey(returnFiber, newFiber, step.value, knownKeys);
                shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
                currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
                null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
            }
            if (step.done) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
            if (null === oldFiber) {
                for(; !step.done; newIdx++, step = newChildren.next())oldFiber = createChild(returnFiber, step.value, lanes), null !== oldFiber && (knownKeys = warnOnInvalidKey(returnFiber, oldFiber, step.value, knownKeys), currentFirstChild = placeChild(oldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
                isHydrating && pushTreeFork(returnFiber, newIdx);
                return resultingFirstChild;
            }
            for(oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())nextOldFiber = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== nextOldFiber && (knownKeys = warnOnInvalidKey(returnFiber, nextOldFiber, step.value, knownKeys), shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(null === nextOldFiber.key ? newIdx : nextOldFiber.key), currentFirstChild = placeChild(nextOldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
            shouldTrackSideEffects && oldFiber.forEach(function(child) {
                return deleteChild(returnFiber, child);
            });
            isHydrating && pushTreeFork(returnFiber, newIdx);
            return resultingFirstChild;
        }
        function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
            "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (validateFragmentProps(newChild, null, returnFiber), newChild = newChild.props.children);
            if ("object" === typeof newChild && null !== newChild) {
                switch(newChild.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        var prevDebugInfo = pushDebugInfo(newChild._debugInfo);
                        a: {
                            for(var key = newChild.key; null !== currentFirstChild;){
                                if (currentFirstChild.key === key) {
                                    key = newChild.type;
                                    if (key === REACT_FRAGMENT_TYPE) {
                                        if (7 === currentFirstChild.tag) {
                                            deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
                                            lanes = useFiber(currentFirstChild, newChild.props.children);
                                            lanes.return = returnFiber;
                                            lanes._debugOwner = newChild._owner;
                                            lanes._debugInfo = currentDebugInfo;
                                            validateFragmentProps(newChild, lanes, returnFiber);
                                            returnFiber = lanes;
                                            break a;
                                        }
                                    } else if (currentFirstChild.elementType === key || isCompatibleFamilyForHotReloading(currentFirstChild, newChild) || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && callLazyInitInDEV(key) === currentFirstChild.type) {
                                        deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
                                        lanes = useFiber(currentFirstChild, newChild.props);
                                        coerceRef(lanes, newChild);
                                        lanes.return = returnFiber;
                                        lanes._debugOwner = newChild._owner;
                                        lanes._debugInfo = currentDebugInfo;
                                        returnFiber = lanes;
                                        break a;
                                    }
                                    deleteRemainingChildren(returnFiber, currentFirstChild);
                                    break;
                                } else deleteChild(returnFiber, currentFirstChild);
                                currentFirstChild = currentFirstChild.sibling;
                            }
                            newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(newChild.props.children, returnFiber.mode, lanes, newChild.key), lanes.return = returnFiber, lanes._debugOwner = returnFiber, lanes._debugTask = returnFiber._debugTask, lanes._debugInfo = currentDebugInfo, validateFragmentProps(newChild, lanes, returnFiber), returnFiber = lanes) : (lanes = createFiberFromElement(newChild, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes._debugInfo = currentDebugInfo, returnFiber = lanes);
                        }
                        returnFiber = placeSingleChild(returnFiber);
                        currentDebugInfo = prevDebugInfo;
                        return returnFiber;
                    case REACT_PORTAL_TYPE:
                        a: {
                            prevDebugInfo = newChild;
                            for(newChild = prevDebugInfo.key; null !== currentFirstChild;){
                                if (currentFirstChild.key === newChild) {
                                    if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === prevDebugInfo.containerInfo && currentFirstChild.stateNode.implementation === prevDebugInfo.implementation) {
                                        deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
                                        lanes = useFiber(currentFirstChild, prevDebugInfo.children || []);
                                        lanes.return = returnFiber;
                                        returnFiber = lanes;
                                        break a;
                                    } else {
                                        deleteRemainingChildren(returnFiber, currentFirstChild);
                                        break;
                                    }
                                } else deleteChild(returnFiber, currentFirstChild);
                                currentFirstChild = currentFirstChild.sibling;
                            }
                            lanes = createFiberFromPortal(prevDebugInfo, returnFiber.mode, lanes);
                            lanes.return = returnFiber;
                            returnFiber = lanes;
                        }
                        return placeSingleChild(returnFiber);
                    case REACT_LAZY_TYPE:
                        return prevDebugInfo = pushDebugInfo(newChild._debugInfo), newChild = callLazyInitInDEV(newChild), returnFiber = reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes), currentDebugInfo = prevDebugInfo, returnFiber;
                }
                if (isArrayImpl(newChild)) return prevDebugInfo = pushDebugInfo(newChild._debugInfo), returnFiber = reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes), currentDebugInfo = prevDebugInfo, returnFiber;
                if (getIteratorFn(newChild)) {
                    prevDebugInfo = pushDebugInfo(newChild._debugInfo);
                    key = getIteratorFn(newChild);
                    if ("function" !== typeof key) throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
                    var newChildren = key.call(newChild);
                    if (newChildren === newChild) {
                        if (0 !== returnFiber.tag || "[object GeneratorFunction]" !== Object.prototype.toString.call(returnFiber.type) || "[object Generator]" !== Object.prototype.toString.call(newChildren)) didWarnAboutGenerators || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators = !0;
                    } else newChild.entries !== key || didWarnAboutMaps || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
                    returnFiber = reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes);
                    currentDebugInfo = prevDebugInfo;
                    return returnFiber;
                }
                if ("function" === typeof newChild.then) return prevDebugInfo = pushDebugInfo(newChild._debugInfo), returnFiber = reconcileChildFibersImpl(returnFiber, currentFirstChild, unwrapThenable(newChild), lanes), currentDebugInfo = prevDebugInfo, returnFiber;
                if (newChild.$$typeof === REACT_CONTEXT_TYPE) return reconcileChildFibersImpl(returnFiber, currentFirstChild, readContextDuringReconciliation(returnFiber, newChild), lanes);
                throwOnInvalidObjectType(returnFiber, newChild);
            }
            if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return prevDebugInfo = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, prevDebugInfo), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(prevDebugInfo, returnFiber.mode, lanes), lanes.return = returnFiber, lanes._debugOwner = returnFiber, lanes._debugTask = returnFiber._debugTask, lanes._debugInfo = currentDebugInfo, returnFiber = lanes), placeSingleChild(returnFiber);
            "function" === typeof newChild && warnOnFunctionType(returnFiber, newChild);
            "symbol" === typeof newChild && warnOnSymbolType(returnFiber, newChild);
            return deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return function(returnFiber, currentFirstChild, newChild, lanes) {
            var prevDebugInfo = currentDebugInfo;
            currentDebugInfo = null;
            try {
                thenableIndexCounter = 0;
                var firstChildFiber = reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
                thenableState = null;
                return firstChildFiber;
            } catch (x) {
                if (x === SuspenseException || x === SuspenseActionException) throw x;
                var fiber = createFiber(29, x, null, returnFiber.mode);
                fiber.lanes = lanes;
                fiber.return = returnFiber;
                var debugInfo = fiber._debugInfo = currentDebugInfo;
                fiber._debugOwner = returnFiber._debugOwner;
                fiber._debugTask = returnFiber._debugTask;
                if (null != debugInfo) {
                    for(var i = debugInfo.length - 1; 0 <= i; i--)if ("string" === typeof debugInfo[i].stack) {
                        fiber._debugOwner = debugInfo[i];
                        fiber._debugTask = debugInfo[i].debugTask;
                        break;
                    }
                }
                return fiber;
            } finally{
                currentDebugInfo = prevDebugInfo;
            }
        };
    }
    function pushPrimaryTreeSuspenseHandler(handler) {
        var current = handler.alternate;
        push(suspenseStackCursor, suspenseStackCursor.current & SubtreeSuspenseContextMask, handler);
        push(suspenseHandlerStackCursor, handler, handler);
        null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
    }
    function pushOffscreenSuspenseHandler(fiber) {
        if (22 === fiber.tag) {
            if (push(suspenseStackCursor, suspenseStackCursor.current, fiber), push(suspenseHandlerStackCursor, fiber, fiber), null === shellBoundary) {
                var current = fiber.alternate;
                null !== current && null !== current.memoizedState && (shellBoundary = fiber);
            }
        } else reuseSuspenseHandlerOnStack(fiber);
    }
    function reuseSuspenseHandlerOnStack(fiber) {
        push(suspenseStackCursor, suspenseStackCursor.current, fiber);
        push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current, fiber);
    }
    function popSuspenseHandler(fiber) {
        pop(suspenseHandlerStackCursor, fiber);
        shellBoundary === fiber && (shellBoundary = null);
        pop(suspenseStackCursor, fiber);
    }
    function findFirstSuspended(row) {
        for(var node = row; null !== node;){
            if (13 === node.tag) {
                var state = node.memoizedState;
                if (null !== state && (state = state.dehydrated, null === state || state.data === SUSPENSE_PENDING_START_DATA || isSuspenseInstanceFallback(state))) return node;
            } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
                if (0 !== (node.flags & 128)) return node;
            } else if (null !== node.child) {
                node.child.return = node;
                node = node.child;
                continue;
            }
            if (node === row) break;
            for(; null === node.sibling;){
                if (null === node.return || node.return === row) return null;
                node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
        }
        return null;
    }
    function warnOnInvalidCallback(callback) {
        if (null !== callback && "function" !== typeof callback) {
            var key = String(callback);
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
        }
    }
    function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
        var prevState = workInProgress.memoizedState, partialState = getDerivedStateFromProps(nextProps, prevState);
        if (workInProgress.mode & StrictLegacyMode) {
            setIsStrictModeForDevtools(!0);
            try {
                partialState = getDerivedStateFromProps(nextProps, prevState);
            } finally{
                setIsStrictModeForDevtools(!1);
            }
        }
        void 0 === partialState && (ctor = getComponentNameFromType(ctor) || "Component", didWarnAboutUndefinedDerivedState.has(ctor) || (didWarnAboutUndefinedDerivedState.add(ctor), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", ctor)));
        prevState = null === partialState || void 0 === partialState ? prevState : assign({}, prevState, partialState);
        workInProgress.memoizedState = prevState;
        0 === workInProgress.lanes && (workInProgress.updateQueue.baseState = prevState);
    }
    function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
        var instance = workInProgress.stateNode;
        if ("function" === typeof instance.shouldComponentUpdate) {
            oldProps = instance.shouldComponentUpdate(newProps, newState, nextContext);
            if (workInProgress.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(!0);
                try {
                    oldProps = instance.shouldComponentUpdate(newProps, newState, nextContext);
                } finally{
                    setIsStrictModeForDevtools(!1);
                }
            }
            void 0 === oldProps && console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentNameFromType(ctor) || "Component");
            return oldProps;
        }
        return ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : !0;
    }
    function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
        var oldState = instance.state;
        "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
        "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
        instance.state !== oldState && (workInProgress = getComponentNameFromFiber(workInProgress) || "Component", didWarnAboutStateAssignmentForComponent.has(workInProgress) || (didWarnAboutStateAssignmentForComponent.add(workInProgress), console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", workInProgress)), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
    }
    function resolveClassComponentProps(Component, baseProps) {
        var newProps = baseProps;
        if ("ref" in baseProps) {
            newProps = {};
            for(var propName in baseProps)"ref" !== propName && (newProps[propName] = baseProps[propName]);
        }
        if (Component = Component.defaultProps) {
            newProps === baseProps && (newProps = assign({}, newProps));
            for(var _propName in Component)void 0 === newProps[_propName] && (newProps[_propName] = Component[_propName]);
        }
        return newProps;
    }
    function defaultOnUncaughtError(error) {
        reportGlobalError(error);
        console.warn("%s\n\n%s\n", componentName ? "An error occurred in the <" + componentName + "> component." : "An error occurred in one of your React components.", "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://react.dev/link/error-boundaries to learn more about error boundaries.");
    }
    function defaultOnCaughtError(error) {
        var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component." : "The above error occurred in one of your React components.", recreateMessage = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((errorBoundaryName || "Anonymous") + ".");
        if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
            var JSCompiler_inline_result = error.environmentName;
            error = [
                "%o\n\n%s\n\n%s\n",
                error,
                componentNameMessage,
                recreateMessage
            ].slice(0);
            "string" === typeof error[0] ? error.splice(0, 1, badgeFormat + error[0], badgeStyle, pad + JSCompiler_inline_result + pad, resetStyle) : error.splice(0, 0, badgeFormat, badgeStyle, pad + JSCompiler_inline_result + pad, resetStyle);
            error.unshift(console);
            JSCompiler_inline_result = bind.apply(console.error, error);
            JSCompiler_inline_result();
        } else console.error("%o\n\n%s\n\n%s\n", error, componentNameMessage, recreateMessage);
    }
    function defaultOnRecoverableError(error) {
        reportGlobalError(error);
    }
    function logUncaughtError(root, errorInfo) {
        try {
            componentName = errorInfo.source ? getComponentNameFromFiber(errorInfo.source) : null;
            errorBoundaryName = null;
            var error = errorInfo.value;
            if (null !== ReactSharedInternals.actQueue) ReactSharedInternals.thrownErrors.push(error);
            else {
                var onUncaughtError = root.onUncaughtError;
                onUncaughtError(error, {
                    componentStack: errorInfo.stack
                });
            }
        } catch (e$5) {
            setTimeout(function() {
                throw e$5;
            });
        }
    }
    function logCaughtError(root, boundary, errorInfo) {
        try {
            componentName = errorInfo.source ? getComponentNameFromFiber(errorInfo.source) : null;
            errorBoundaryName = getComponentNameFromFiber(boundary);
            var onCaughtError = root.onCaughtError;
            onCaughtError(errorInfo.value, {
                componentStack: errorInfo.stack,
                errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
            });
        } catch (e$6) {
            setTimeout(function() {
                throw e$6;
            });
        }
    }
    function createRootErrorUpdate(root, errorInfo, lane) {
        lane = createUpdate(lane);
        lane.tag = CaptureUpdate;
        lane.payload = {
            element: null
        };
        lane.callback = function() {
            runWithFiberInDEV(errorInfo.source, logUncaughtError, root, errorInfo);
        };
        return lane;
    }
    function createClassErrorUpdate(lane) {
        lane = createUpdate(lane);
        lane.tag = CaptureUpdate;
        return lane;
    }
    function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
        if ("function" === typeof getDerivedStateFromError) {
            var error = errorInfo.value;
            update.payload = function() {
                return getDerivedStateFromError(error);
            };
            update.callback = function() {
                markFailedErrorBoundaryForHotReloading(fiber);
                runWithFiberInDEV(errorInfo.source, logCaughtError, root, fiber, errorInfo);
            };
        }
        var inst = fiber.stateNode;
        null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
            markFailedErrorBoundaryForHotReloading(fiber);
            runWithFiberInDEV(errorInfo.source, logCaughtError, root, fiber, errorInfo);
            "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = new Set([
                this
            ]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
            callComponentDidCatchInDEV(this, errorInfo);
            "function" === typeof getDerivedStateFromError || 0 === (fiber.lanes & 2) && console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentNameFromFiber(fiber) || "Unknown");
        });
    }
    function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
        sourceFiber.flags |= 32768;
        isDevToolsPresent && restorePendingUpdaters(root, rootRenderLanes);
        if (null !== value && "object" === typeof value && "function" === typeof value.then) {
            returnFiber = sourceFiber.alternate;
            null !== returnFiber && propagateParentContextChanges(returnFiber, sourceFiber, rootRenderLanes, !0);
            isHydrating && (didSuspendOrErrorDEV = !0);
            sourceFiber = suspenseHandlerStackCursor.current;
            if (null !== sourceFiber) {
                switch(sourceFiber.tag){
                    case 13:
                        return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && workInProgressRootExitStatus === RootInProgress && (workInProgressRootExitStatus = RootSuspended), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = new Set([
                            value
                        ]) : returnFiber.add(value), attachPingListener(root, value, rootRenderLanes)), !1;
                    case 22:
                        return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([
                                value
                            ])
                        }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = new Set([
                            value
                        ]) : sourceFiber.add(value)), attachPingListener(root, value, rootRenderLanes)), !1;
                }
                throw Error("Unexpected Suspense handler tag (" + sourceFiber.tag + "). This is a bug in React.");
            }
            attachPingListener(root, value, rootRenderLanes);
            renderDidSuspendDelayIfPossible();
            return !1;
        }
        if (isHydrating) return didSuspendOrErrorDEV = !0, returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && queueHydrationError(createCapturedValueAtFiber(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.", {
            cause: value
        }), sourceFiber))) : (value !== HydrationMismatchException && queueHydrationError(createCapturedValueAtFiber(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.", {
            cause: value
        }), sourceFiber)), root = root.current.alternate, root.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(root.stateNode, value, rootRenderLanes), enqueueCapturedUpdate(root, rootRenderLanes), workInProgressRootExitStatus !== RootSuspendedWithDelay && (workInProgressRootExitStatus = RootErrored)), !1;
        var error = createCapturedValueAtFiber(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", {
            cause: value
        }), sourceFiber);
        null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [
            error
        ] : workInProgressRootConcurrentErrors.push(error);
        workInProgressRootExitStatus !== RootSuspendedWithDelay && (workInProgressRootExitStatus = RootErrored);
        if (null === returnFiber) return !0;
        value = createCapturedValueAtFiber(value, sourceFiber);
        sourceFiber = returnFiber;
        do {
            switch(sourceFiber.tag){
                case 3:
                    return sourceFiber.flags |= 65536, root = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root, root = createRootErrorUpdate(sourceFiber.stateNode, value, root), enqueueCapturedUpdate(sourceFiber, root), !1;
                case 1:
                    if (returnFiber = sourceFiber.type, error = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== error && "function" === typeof error.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(error)))) return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(rootRenderLanes, root, sourceFiber, value), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), !1;
            }
            sourceFiber = sourceFiber.return;
        }while (null !== sourceFiber);
        return !1;
    }
    function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
        workInProgress.child = null === current ? mountChildFibers(workInProgress, null, nextChildren, renderLanes) : reconcileChildFibers(workInProgress, current.child, nextChildren, renderLanes);
    }
    function updateForwardRef(current, workInProgress, Component, nextProps, renderLanes) {
        Component = Component.render;
        var ref = workInProgress.ref;
        if ("ref" in nextProps) {
            var propsWithoutRef = {};
            for(var key in nextProps)"ref" !== key && (propsWithoutRef[key] = nextProps[key]);
        } else propsWithoutRef = nextProps;
        prepareToReadContext(workInProgress);
        markComponentRenderStarted(workInProgress);
        nextProps = renderWithHooks(current, workInProgress, Component, propsWithoutRef, ref, renderLanes);
        key = checkDidRenderIdHook();
        markComponentRenderStopped();
        if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        isHydrating && key && pushMaterializedTreeId(workInProgress);
        workInProgress.flags |= 1;
        reconcileChildren(current, workInProgress, nextProps, renderLanes);
        return workInProgress.child;
    }
    function updateMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
        if (null === current) {
            var type = Component.type;
            if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare) return Component = resolveFunctionForHotReloading(type), workInProgress.tag = 15, workInProgress.type = Component, validateFunctionComponentInDev(workInProgress, type), updateSimpleMemoComponent(current, workInProgress, Component, nextProps, renderLanes);
            current = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);
            current.ref = workInProgress.ref;
            current.return = workInProgress;
            return workInProgress.child = current;
        }
        type = current.child;
        if (!checkScheduledUpdateOrContext(current, renderLanes)) {
            var prevProps = type.memoizedProps;
            Component = Component.compare;
            Component = null !== Component ? Component : shallowEqual;
            if (Component(prevProps, nextProps) && current.ref === workInProgress.ref) return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        }
        workInProgress.flags |= 1;
        current = createWorkInProgress(type, nextProps);
        current.ref = workInProgress.ref;
        current.return = workInProgress;
        return workInProgress.child = current;
    }
    function updateSimpleMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
        if (null !== current) {
            var prevProps = current.memoizedProps;
            if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref && workInProgress.type === current.type) {
                if (didReceiveUpdate = !1, workInProgress.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes)) 0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
                else return workInProgress.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
            }
        }
        return updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes);
    }
    function updateOffscreenComponent(current, workInProgress, renderLanes) {
        var nextProps = workInProgress.pendingProps, nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
        if ("hidden" === nextProps.mode) {
            if (0 !== (workInProgress.flags & 128)) {
                nextProps = null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
                if (null !== current) {
                    nextChildren = workInProgress.child = current.child;
                    for(prevState = 0; null !== nextChildren;)prevState = prevState | nextChildren.lanes | nextChildren.childLanes, nextChildren = nextChildren.sibling;
                    workInProgress.childLanes = prevState & ~nextProps;
                } else workInProgress.childLanes = 0, workInProgress.child = null;
                return deferHiddenOffscreenComponent(current, workInProgress, nextProps, renderLanes);
            }
            if (0 !== (renderLanes & 536870912)) workInProgress.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, null !== current && pushTransition(workInProgress, null !== prevState ? prevState.cachePool : null), null !== prevState ? pushHiddenContext(workInProgress, prevState) : reuseHiddenContextOnStack(workInProgress), pushOffscreenSuspenseHandler(workInProgress);
            else return workInProgress.lanes = workInProgress.childLanes = 536870912, deferHiddenOffscreenComponent(current, workInProgress, null !== prevState ? prevState.baseLanes | renderLanes : renderLanes, renderLanes);
        } else null !== prevState ? (pushTransition(workInProgress, prevState.cachePool), pushHiddenContext(workInProgress, prevState), reuseSuspenseHandlerOnStack(workInProgress), workInProgress.memoizedState = null) : (null !== current && pushTransition(workInProgress, null), reuseHiddenContextOnStack(workInProgress), reuseSuspenseHandlerOnStack(workInProgress));
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function deferHiddenOffscreenComponent(current, workInProgress, nextBaseLanes, renderLanes) {
        var JSCompiler_inline_result = peekCacheFromPool();
        JSCompiler_inline_result = null === JSCompiler_inline_result ? null : {
            parent: CacheContext._currentValue,
            pool: JSCompiler_inline_result
        };
        workInProgress.memoizedState = {
            baseLanes: nextBaseLanes,
            cachePool: JSCompiler_inline_result
        };
        null !== current && pushTransition(workInProgress, null);
        reuseHiddenContextOnStack(workInProgress);
        pushOffscreenSuspenseHandler(workInProgress);
        null !== current && propagateParentContextChanges(current, workInProgress, renderLanes, !0);
        return null;
    }
    function markRef(current, workInProgress) {
        var ref = workInProgress.ref;
        if (null === ref) null !== current && null !== current.ref && (workInProgress.flags |= 4194816);
        else {
            if ("function" !== typeof ref && "object" !== typeof ref) throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
            if (null === current || current.ref !== ref) workInProgress.flags |= 4194816;
        }
    }
    function updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes) {
        if (Component.prototype && "function" === typeof Component.prototype.render) {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutBadClass[componentName] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName), didWarnAboutBadClass[componentName] = !0);
        }
        workInProgress.mode & StrictLegacyMode && ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
        null === current && (validateFunctionComponentInDev(workInProgress, workInProgress.type), Component.contextTypes && (componentName = getComponentNameFromType(Component) || "Unknown", didWarnAboutContextTypes[componentName] || (didWarnAboutContextTypes[componentName] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", componentName))));
        prepareToReadContext(workInProgress);
        markComponentRenderStarted(workInProgress);
        Component = renderWithHooks(current, workInProgress, Component, nextProps, void 0, renderLanes);
        nextProps = checkDidRenderIdHook();
        markComponentRenderStopped();
        if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
        workInProgress.flags |= 1;
        reconcileChildren(current, workInProgress, Component, renderLanes);
        return workInProgress.child;
    }
    function replayFunctionComponent(current, workInProgress, nextProps, Component, secondArg, renderLanes) {
        prepareToReadContext(workInProgress);
        markComponentRenderStarted(workInProgress);
        hookTypesUpdateIndexDev = -1;
        ignorePreviousDependencies = null !== current && current.type !== workInProgress.type;
        workInProgress.updateQueue = null;
        nextProps = renderWithHooksAgain(workInProgress, Component, nextProps, secondArg);
        finishRenderingHooks(current, workInProgress);
        Component = checkDidRenderIdHook();
        markComponentRenderStopped();
        if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        isHydrating && Component && pushMaterializedTreeId(workInProgress);
        workInProgress.flags |= 1;
        reconcileChildren(current, workInProgress, nextProps, renderLanes);
        return workInProgress.child;
    }
    function updateClassComponent(current, workInProgress, Component, nextProps, renderLanes) {
        switch(shouldErrorImpl(workInProgress)){
            case !1:
                var _instance = workInProgress.stateNode, state = new workInProgress.type(workInProgress.memoizedProps, _instance.context).state;
                _instance.updater.enqueueSetState(_instance, state, null);
                break;
            case !0:
                workInProgress.flags |= 128;
                workInProgress.flags |= 65536;
                _instance = Error("Simulated error coming from DevTools");
                var lane = renderLanes & -renderLanes;
                workInProgress.lanes |= lane;
                state = workInProgressRoot;
                if (null === state) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
                lane = createClassErrorUpdate(lane);
                initializeClassErrorUpdate(lane, state, workInProgress, createCapturedValueAtFiber(_instance, workInProgress));
                enqueueCapturedUpdate(workInProgress, lane);
        }
        prepareToReadContext(workInProgress);
        if (null === workInProgress.stateNode) {
            state = emptyContextObject;
            _instance = Component.contextType;
            "contextType" in Component && null !== _instance && (void 0 === _instance || _instance.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(Component) && (didWarnAboutInvalidateContextType.add(Component), lane = void 0 === _instance ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" !== typeof _instance ? " However, it is set to a " + typeof _instance + "." : _instance.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(_instance).join(", ") + "}.", console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(Component) || "Component", lane));
            "object" === typeof _instance && null !== _instance && (state = readContext(_instance));
            _instance = new Component(nextProps, state);
            if (workInProgress.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(!0);
                try {
                    _instance = new Component(nextProps, state);
                } finally{
                    setIsStrictModeForDevtools(!1);
                }
            }
            state = workInProgress.memoizedState = null !== _instance.state && void 0 !== _instance.state ? _instance.state : null;
            _instance.updater = classComponentUpdater;
            workInProgress.stateNode = _instance;
            _instance._reactInternals = workInProgress;
            _instance._reactInternalInstance = fakeInternalInstance;
            "function" === typeof Component.getDerivedStateFromProps && null === state && (state = getComponentNameFromType(Component) || "Component", didWarnAboutUninitializedState.has(state) || (didWarnAboutUninitializedState.add(state), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", state, null === _instance.state ? "null" : "undefined", state)));
            if ("function" === typeof Component.getDerivedStateFromProps || "function" === typeof _instance.getSnapshotBeforeUpdate) {
                var foundWillUpdateName = lane = state = null;
                "function" === typeof _instance.componentWillMount && !0 !== _instance.componentWillMount.__suppressDeprecationWarning ? state = "componentWillMount" : "function" === typeof _instance.UNSAFE_componentWillMount && (state = "UNSAFE_componentWillMount");
                "function" === typeof _instance.componentWillReceiveProps && !0 !== _instance.componentWillReceiveProps.__suppressDeprecationWarning ? lane = "componentWillReceiveProps" : "function" === typeof _instance.UNSAFE_componentWillReceiveProps && (lane = "UNSAFE_componentWillReceiveProps");
                "function" === typeof _instance.componentWillUpdate && !0 !== _instance.componentWillUpdate.__suppressDeprecationWarning ? foundWillUpdateName = "componentWillUpdate" : "function" === typeof _instance.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
                if (null !== state || null !== lane || null !== foundWillUpdateName) {
                    _instance = getComponentNameFromType(Component) || "Component";
                    var newApiName = "function" === typeof Component.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    didWarnAboutLegacyLifecyclesAndDerivedState.has(_instance) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_instance), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", _instance, newApiName, null !== state ? "\n  " + state : "", null !== lane ? "\n  " + lane : "", null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : ""));
                }
            }
            _instance = workInProgress.stateNode;
            state = getComponentNameFromType(Component) || "Component";
            _instance.render || (Component.prototype && "function" === typeof Component.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", state) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", state));
            !_instance.getInitialState || _instance.getInitialState.isReactClassApproved || _instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", state);
            _instance.getDefaultProps && !_instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", state);
            _instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", state);
            Component.childContextTypes && !didWarnAboutChildContextTypes.has(Component) && (didWarnAboutChildContextTypes.add(Component), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", state));
            Component.contextTypes && !didWarnAboutContextTypes$1.has(Component) && (didWarnAboutContextTypes$1.add(Component), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", state));
            "function" === typeof _instance.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", state);
            Component.prototype && Component.prototype.isPureReactComponent && "undefined" !== typeof _instance.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(Component) || "A pure component");
            "function" === typeof _instance.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", state);
            "function" === typeof _instance.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", state);
            "function" === typeof _instance.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", state);
            "function" === typeof _instance.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", state);
            lane = _instance.props !== nextProps;
            void 0 !== _instance.props && lane && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", state);
            _instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", state, state);
            "function" !== typeof _instance.getSnapshotBeforeUpdate || "function" === typeof _instance.componentDidUpdate || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(Component) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(Component), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(Component)));
            "function" === typeof _instance.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", state);
            "function" === typeof _instance.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", state);
            "function" === typeof Component.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", state);
            (lane = _instance.state) && ("object" !== typeof lane || isArrayImpl(lane)) && console.error("%s.state: must be set to an object or null", state);
            "function" === typeof _instance.getChildContext && "object" !== typeof Component.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", state);
            _instance = workInProgress.stateNode;
            _instance.props = nextProps;
            _instance.state = workInProgress.memoizedState;
            _instance.refs = {};
            initializeUpdateQueue(workInProgress);
            state = Component.contextType;
            _instance.context = "object" === typeof state && null !== state ? readContext(state) : emptyContextObject;
            _instance.state === nextProps && (state = getComponentNameFromType(Component) || "Component", didWarnAboutDirectlyAssigningPropsToState.has(state) || (didWarnAboutDirectlyAssigningPropsToState.add(state), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", state)));
            workInProgress.mode & StrictLegacyMode && ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, _instance);
            ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, _instance);
            _instance.state = workInProgress.memoizedState;
            state = Component.getDerivedStateFromProps;
            "function" === typeof state && (applyDerivedStateFromProps(workInProgress, Component, state, nextProps), _instance.state = workInProgress.memoizedState);
            "function" === typeof Component.getDerivedStateFromProps || "function" === typeof _instance.getSnapshotBeforeUpdate || "function" !== typeof _instance.UNSAFE_componentWillMount && "function" !== typeof _instance.componentWillMount || (state = _instance.state, "function" === typeof _instance.componentWillMount && _instance.componentWillMount(), "function" === typeof _instance.UNSAFE_componentWillMount && _instance.UNSAFE_componentWillMount(), state !== _instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromFiber(workInProgress) || "Component"), classComponentUpdater.enqueueReplaceState(_instance, _instance.state, null)), processUpdateQueue(workInProgress, nextProps, _instance, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction(), _instance.state = workInProgress.memoizedState);
            "function" === typeof _instance.componentDidMount && (workInProgress.flags |= 4194308);
            (workInProgress.mode & StrictEffectsMode) !== NoMode && (workInProgress.flags |= 134217728);
            _instance = !0;
        } else if (null === current) {
            _instance = workInProgress.stateNode;
            var unresolvedOldProps = workInProgress.memoizedProps;
            lane = resolveClassComponentProps(Component, unresolvedOldProps);
            _instance.props = lane;
            var oldContext = _instance.context;
            foundWillUpdateName = Component.contextType;
            state = emptyContextObject;
            "object" === typeof foundWillUpdateName && null !== foundWillUpdateName && (state = readContext(foundWillUpdateName));
            newApiName = Component.getDerivedStateFromProps;
            foundWillUpdateName = "function" === typeof newApiName || "function" === typeof _instance.getSnapshotBeforeUpdate;
            unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
            foundWillUpdateName || "function" !== typeof _instance.UNSAFE_componentWillReceiveProps && "function" !== typeof _instance.componentWillReceiveProps || (unresolvedOldProps || oldContext !== state) && callComponentWillReceiveProps(workInProgress, _instance, nextProps, state);
            hasForceUpdate = !1;
            var oldState = workInProgress.memoizedState;
            _instance.state = oldState;
            processUpdateQueue(workInProgress, nextProps, _instance, renderLanes);
            suspendIfUpdateReadFromEntangledAsyncAction();
            oldContext = workInProgress.memoizedState;
            unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof newApiName && (applyDerivedStateFromProps(workInProgress, Component, newApiName, nextProps), oldContext = workInProgress.memoizedState), (lane = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, lane, nextProps, oldState, oldContext, state)) ? (foundWillUpdateName || "function" !== typeof _instance.UNSAFE_componentWillMount && "function" !== typeof _instance.componentWillMount || ("function" === typeof _instance.componentWillMount && _instance.componentWillMount(), "function" === typeof _instance.UNSAFE_componentWillMount && _instance.UNSAFE_componentWillMount()), "function" === typeof _instance.componentDidMount && (workInProgress.flags |= 4194308), (workInProgress.mode & StrictEffectsMode) !== NoMode && (workInProgress.flags |= 134217728)) : ("function" === typeof _instance.componentDidMount && (workInProgress.flags |= 4194308), (workInProgress.mode & StrictEffectsMode) !== NoMode && (workInProgress.flags |= 134217728), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = oldContext), _instance.props = nextProps, _instance.state = oldContext, _instance.context = state, _instance = lane) : ("function" === typeof _instance.componentDidMount && (workInProgress.flags |= 4194308), (workInProgress.mode & StrictEffectsMode) !== NoMode && (workInProgress.flags |= 134217728), _instance = !1);
        } else {
            _instance = workInProgress.stateNode;
            cloneUpdateQueue(current, workInProgress);
            state = workInProgress.memoizedProps;
            foundWillUpdateName = resolveClassComponentProps(Component, state);
            _instance.props = foundWillUpdateName;
            newApiName = workInProgress.pendingProps;
            oldState = _instance.context;
            oldContext = Component.contextType;
            lane = emptyContextObject;
            "object" === typeof oldContext && null !== oldContext && (lane = readContext(oldContext));
            unresolvedOldProps = Component.getDerivedStateFromProps;
            (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof _instance.getSnapshotBeforeUpdate) || "function" !== typeof _instance.UNSAFE_componentWillReceiveProps && "function" !== typeof _instance.componentWillReceiveProps || (state !== newApiName || oldState !== lane) && callComponentWillReceiveProps(workInProgress, _instance, nextProps, lane);
            hasForceUpdate = !1;
            oldState = workInProgress.memoizedState;
            _instance.state = oldState;
            processUpdateQueue(workInProgress, nextProps, _instance, renderLanes);
            suspendIfUpdateReadFromEntangledAsyncAction();
            var newState = workInProgress.memoizedState;
            state !== newApiName || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(workInProgress, Component, unresolvedOldProps, nextProps), newState = workInProgress.memoizedState), (foundWillUpdateName = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, foundWillUpdateName, nextProps, oldState, newState, lane) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof _instance.UNSAFE_componentWillUpdate && "function" !== typeof _instance.componentWillUpdate || ("function" === typeof _instance.componentWillUpdate && _instance.componentWillUpdate(nextProps, newState, lane), "function" === typeof _instance.UNSAFE_componentWillUpdate && _instance.UNSAFE_componentWillUpdate(nextProps, newState, lane)), "function" === typeof _instance.componentDidUpdate && (workInProgress.flags |= 4), "function" === typeof _instance.getSnapshotBeforeUpdate && (workInProgress.flags |= 1024)) : ("function" !== typeof _instance.componentDidUpdate || state === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof _instance.getSnapshotBeforeUpdate || state === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = newState), _instance.props = nextProps, _instance.state = newState, _instance.context = lane, _instance = foundWillUpdateName) : ("function" !== typeof _instance.componentDidUpdate || state === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof _instance.getSnapshotBeforeUpdate || state === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), _instance = !1);
        }
        lane = _instance;
        markRef(current, workInProgress);
        state = 0 !== (workInProgress.flags & 128);
        if (lane || state) {
            lane = workInProgress.stateNode;
            setCurrentFiber(workInProgress);
            if (state && "function" !== typeof Component.getDerivedStateFromError) Component = null, profilerStartTime = -1;
            else {
                markComponentRenderStarted(workInProgress);
                Component = callRenderInDEV(lane);
                if (workInProgress.mode & StrictLegacyMode) {
                    setIsStrictModeForDevtools(!0);
                    try {
                        callRenderInDEV(lane);
                    } finally{
                        setIsStrictModeForDevtools(!1);
                    }
                }
                markComponentRenderStopped();
            }
            workInProgress.flags |= 1;
            null !== current && state ? (workInProgress.child = reconcileChildFibers(workInProgress, current.child, null, renderLanes), workInProgress.child = reconcileChildFibers(workInProgress, null, Component, renderLanes)) : reconcileChildren(current, workInProgress, Component, renderLanes);
            workInProgress.memoizedState = lane.state;
            current = workInProgress.child;
        } else current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        renderLanes = workInProgress.stateNode;
        _instance && renderLanes.props !== nextProps && (didWarnAboutReassigningProps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromFiber(workInProgress) || "a component"), didWarnAboutReassigningProps = !0);
        return current;
    }
    function mountHostRootWithoutHydrating(current, workInProgress, nextChildren, renderLanes) {
        resetHydrationState();
        workInProgress.flags |= 256;
        reconcileChildren(current, workInProgress, nextChildren, renderLanes);
        return workInProgress.child;
    }
    function validateFunctionComponentInDev(workInProgress, Component) {
        Component && Component.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", Component.displayName || Component.name || "Component");
        "function" === typeof Component.getDerivedStateFromProps && (workInProgress = getComponentNameFromType(Component) || "Unknown", didWarnAboutGetDerivedStateOnFunctionComponent[workInProgress] || (console.error("%s: Function components do not support getDerivedStateFromProps.", workInProgress), didWarnAboutGetDerivedStateOnFunctionComponent[workInProgress] = !0));
        "object" === typeof Component.contextType && null !== Component.contextType && (Component = getComponentNameFromType(Component) || "Unknown", didWarnAboutContextTypeOnFunctionComponent[Component] || (console.error("%s: Function components do not support contextType.", Component), didWarnAboutContextTypeOnFunctionComponent[Component] = !0));
    }
    function mountSuspenseOffscreenState(renderLanes) {
        return {
            baseLanes: renderLanes,
            cachePool: getSuspendedCache()
        };
    }
    function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes) {
        current = null !== current ? current.childLanes & ~renderLanes : 0;
        primaryTreeDidDefer && (current |= workInProgressDeferredLane);
        return current;
    }
    function updateSuspenseComponent(current, workInProgress, renderLanes) {
        var JSCompiler_object_inline_digest_2451;
        var JSCompiler_object_inline_stack_2452 = workInProgress.pendingProps;
        shouldSuspendImpl(workInProgress) && (workInProgress.flags |= 128);
        var JSCompiler_object_inline_componentStack_2453 = !1;
        var didSuspend = 0 !== (workInProgress.flags & 128);
        (JSCompiler_object_inline_digest_2451 = didSuspend) || (JSCompiler_object_inline_digest_2451 = null !== current && null === current.memoizedState ? !1 : 0 !== (suspenseStackCursor.current & ForceSuspenseFallback));
        JSCompiler_object_inline_digest_2451 && (JSCompiler_object_inline_componentStack_2453 = !0, workInProgress.flags &= -129);
        JSCompiler_object_inline_digest_2451 = 0 !== (workInProgress.flags & 32);
        workInProgress.flags &= -33;
        if (null === current) {
            if (isHydrating) {
                JSCompiler_object_inline_componentStack_2453 ? pushPrimaryTreeSuspenseHandler(workInProgress) : reuseSuspenseHandlerOnStack(workInProgress);
                if (isHydrating) {
                    var JSCompiler_object_inline_message_2450 = nextHydratableInstance;
                    var JSCompiler_temp;
                    if (!(JSCompiler_temp = !JSCompiler_object_inline_message_2450)) {
                        c: {
                            var instance = JSCompiler_object_inline_message_2450;
                            for(JSCompiler_temp = rootOrSingletonContext; 8 !== instance.nodeType;){
                                if (!JSCompiler_temp) {
                                    JSCompiler_temp = null;
                                    break c;
                                }
                                instance = getNextHydratable(instance.nextSibling);
                                if (null === instance) {
                                    JSCompiler_temp = null;
                                    break c;
                                }
                            }
                            JSCompiler_temp = instance;
                        }
                        null !== JSCompiler_temp ? (warnIfNotHydrating(), workInProgress.memoizedState = {
                            dehydrated: JSCompiler_temp,
                            treeContext: null !== treeContextProvider ? {
                                id: treeContextId,
                                overflow: treeContextOverflow
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, instance = createFiber(18, null, null, NoMode), instance.stateNode = JSCompiler_temp, instance.return = workInProgress, workInProgress.child = instance, hydrationParentFiber = workInProgress, nextHydratableInstance = null, JSCompiler_temp = !0) : JSCompiler_temp = !1;
                        JSCompiler_temp = !JSCompiler_temp;
                    }
                    JSCompiler_temp && (warnNonHydratedInstance(workInProgress, JSCompiler_object_inline_message_2450), throwOnHydrationMismatch(workInProgress));
                }
                JSCompiler_object_inline_message_2450 = workInProgress.memoizedState;
                if (null !== JSCompiler_object_inline_message_2450 && (JSCompiler_object_inline_message_2450 = JSCompiler_object_inline_message_2450.dehydrated, null !== JSCompiler_object_inline_message_2450)) return isSuspenseInstanceFallback(JSCompiler_object_inline_message_2450) ? workInProgress.lanes = 32 : workInProgress.lanes = 536870912, null;
                popSuspenseHandler(workInProgress);
            }
            JSCompiler_object_inline_message_2450 = JSCompiler_object_inline_stack_2452.children;
            JSCompiler_object_inline_stack_2452 = JSCompiler_object_inline_stack_2452.fallback;
            if (JSCompiler_object_inline_componentStack_2453) return reuseSuspenseHandlerOnStack(workInProgress), JSCompiler_object_inline_componentStack_2453 = workInProgress.mode, JSCompiler_object_inline_message_2450 = mountWorkInProgressOffscreenFiber({
                mode: "hidden",
                children: JSCompiler_object_inline_message_2450
            }, JSCompiler_object_inline_componentStack_2453), JSCompiler_object_inline_stack_2452 = createFiberFromFragment(JSCompiler_object_inline_stack_2452, JSCompiler_object_inline_componentStack_2453, renderLanes, null), JSCompiler_object_inline_message_2450.return = workInProgress, JSCompiler_object_inline_stack_2452.return = workInProgress, JSCompiler_object_inline_message_2450.sibling = JSCompiler_object_inline_stack_2452, workInProgress.child = JSCompiler_object_inline_message_2450, JSCompiler_object_inline_componentStack_2453 = workInProgress.child, JSCompiler_object_inline_componentStack_2453.memoizedState = mountSuspenseOffscreenState(renderLanes), JSCompiler_object_inline_componentStack_2453.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_object_inline_digest_2451, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, JSCompiler_object_inline_stack_2452;
            pushPrimaryTreeSuspenseHandler(workInProgress);
            return mountSuspensePrimaryChildren(workInProgress, JSCompiler_object_inline_message_2450);
        }
        var prevState = current.memoizedState;
        if (null !== prevState && (JSCompiler_object_inline_message_2450 = prevState.dehydrated, null !== JSCompiler_object_inline_message_2450)) {
            if (didSuspend) workInProgress.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags &= -257, workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes)) : null !== workInProgress.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress), workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null) : (reuseSuspenseHandlerOnStack(workInProgress), JSCompiler_object_inline_componentStack_2453 = JSCompiler_object_inline_stack_2452.fallback, JSCompiler_object_inline_message_2450 = workInProgress.mode, JSCompiler_object_inline_stack_2452 = mountWorkInProgressOffscreenFiber({
                mode: "visible",
                children: JSCompiler_object_inline_stack_2452.children
            }, JSCompiler_object_inline_message_2450), JSCompiler_object_inline_componentStack_2453 = createFiberFromFragment(JSCompiler_object_inline_componentStack_2453, JSCompiler_object_inline_message_2450, renderLanes, null), JSCompiler_object_inline_componentStack_2453.flags |= 2, JSCompiler_object_inline_stack_2452.return = workInProgress, JSCompiler_object_inline_componentStack_2453.return = workInProgress, JSCompiler_object_inline_stack_2452.sibling = JSCompiler_object_inline_componentStack_2453, workInProgress.child = JSCompiler_object_inline_stack_2452, reconcileChildFibers(workInProgress, current.child, null, renderLanes), JSCompiler_object_inline_stack_2452 = workInProgress.child, JSCompiler_object_inline_stack_2452.memoizedState = mountSuspenseOffscreenState(renderLanes), JSCompiler_object_inline_stack_2452.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_object_inline_digest_2451, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, workInProgress = JSCompiler_object_inline_componentStack_2453);
            else if (pushPrimaryTreeSuspenseHandler(workInProgress), isHydrating && console.error("We should not be hydrating here. This is a bug in React. Please file a bug."), isSuspenseInstanceFallback(JSCompiler_object_inline_message_2450)) {
                JSCompiler_object_inline_digest_2451 = JSCompiler_object_inline_message_2450.nextSibling && JSCompiler_object_inline_message_2450.nextSibling.dataset;
                if (JSCompiler_object_inline_digest_2451) {
                    JSCompiler_temp = JSCompiler_object_inline_digest_2451.dgst;
                    var message = JSCompiler_object_inline_digest_2451.msg;
                    instance = JSCompiler_object_inline_digest_2451.stck;
                    var componentStack = JSCompiler_object_inline_digest_2451.cstck;
                }
                JSCompiler_object_inline_message_2450 = message;
                JSCompiler_object_inline_digest_2451 = JSCompiler_temp;
                JSCompiler_object_inline_stack_2452 = instance;
                JSCompiler_temp = JSCompiler_object_inline_componentStack_2453 = componentStack;
                JSCompiler_object_inline_componentStack_2453 = JSCompiler_object_inline_message_2450 ? Error(JSCompiler_object_inline_message_2450) : Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
                JSCompiler_object_inline_componentStack_2453.stack = JSCompiler_object_inline_stack_2452 || "";
                JSCompiler_object_inline_componentStack_2453.digest = JSCompiler_object_inline_digest_2451;
                JSCompiler_object_inline_digest_2451 = void 0 === JSCompiler_temp ? null : JSCompiler_temp;
                JSCompiler_object_inline_stack_2452 = {
                    value: JSCompiler_object_inline_componentStack_2453,
                    source: null,
                    stack: JSCompiler_object_inline_digest_2451
                };
                "string" === typeof JSCompiler_object_inline_digest_2451 && CapturedStacks.set(JSCompiler_object_inline_componentStack_2453, JSCompiler_object_inline_stack_2452);
                queueHydrationError(JSCompiler_object_inline_stack_2452);
                workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
            } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), JSCompiler_object_inline_digest_2451 = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || JSCompiler_object_inline_digest_2451) {
                JSCompiler_object_inline_digest_2451 = workInProgressRoot;
                if (null !== JSCompiler_object_inline_digest_2451 && (JSCompiler_object_inline_stack_2452 = renderLanes & -renderLanes, JSCompiler_object_inline_stack_2452 = 0 !== (JSCompiler_object_inline_stack_2452 & 42) ? 1 : getBumpedLaneForHydrationByLane(JSCompiler_object_inline_stack_2452), JSCompiler_object_inline_stack_2452 = 0 !== (JSCompiler_object_inline_stack_2452 & (JSCompiler_object_inline_digest_2451.suspendedLanes | renderLanes)) ? 0 : JSCompiler_object_inline_stack_2452, 0 !== JSCompiler_object_inline_stack_2452 && JSCompiler_object_inline_stack_2452 !== prevState.retryLane)) throw prevState.retryLane = JSCompiler_object_inline_stack_2452, enqueueConcurrentRenderForLane(current, JSCompiler_object_inline_stack_2452), scheduleUpdateOnFiber(JSCompiler_object_inline_digest_2451, current, JSCompiler_object_inline_stack_2452), SelectiveHydrationException;
                JSCompiler_object_inline_message_2450.data === SUSPENSE_PENDING_START_DATA || renderDidSuspendDelayIfPossible();
                workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
            } else JSCompiler_object_inline_message_2450.data === SUSPENSE_PENDING_START_DATA ? (workInProgress.flags |= 192, workInProgress.child = current.child, workInProgress = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(JSCompiler_object_inline_message_2450.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, didSuspendOrErrorDEV = !1, hydrationDiffRootDEV = null, rootOrSingletonContext = !1, null !== current && (warnIfNotHydrating(), idStack[idStackIndex++] = treeContextId, idStack[idStackIndex++] = treeContextOverflow, idStack[idStackIndex++] = treeContextProvider, treeContextId = current.id, treeContextOverflow = current.overflow, treeContextProvider = workInProgress), workInProgress = mountSuspensePrimaryChildren(workInProgress, JSCompiler_object_inline_stack_2452.children), workInProgress.flags |= 4096);
            return workInProgress;
        }
        if (JSCompiler_object_inline_componentStack_2453) return reuseSuspenseHandlerOnStack(workInProgress), JSCompiler_object_inline_componentStack_2453 = JSCompiler_object_inline_stack_2452.fallback, JSCompiler_object_inline_message_2450 = workInProgress.mode, JSCompiler_temp = current.child, instance = JSCompiler_temp.sibling, JSCompiler_object_inline_stack_2452 = createWorkInProgress(JSCompiler_temp, {
            mode: "hidden",
            children: JSCompiler_object_inline_stack_2452.children
        }), JSCompiler_object_inline_stack_2452.subtreeFlags = JSCompiler_temp.subtreeFlags & 65011712, null !== instance ? JSCompiler_object_inline_componentStack_2453 = createWorkInProgress(instance, JSCompiler_object_inline_componentStack_2453) : (JSCompiler_object_inline_componentStack_2453 = createFiberFromFragment(JSCompiler_object_inline_componentStack_2453, JSCompiler_object_inline_message_2450, renderLanes, null), JSCompiler_object_inline_componentStack_2453.flags |= 2), JSCompiler_object_inline_componentStack_2453.return = workInProgress, JSCompiler_object_inline_stack_2452.return = workInProgress, JSCompiler_object_inline_stack_2452.sibling = JSCompiler_object_inline_componentStack_2453, workInProgress.child = JSCompiler_object_inline_stack_2452, JSCompiler_object_inline_stack_2452 = JSCompiler_object_inline_componentStack_2453, JSCompiler_object_inline_componentStack_2453 = workInProgress.child, JSCompiler_object_inline_message_2450 = current.child.memoizedState, null === JSCompiler_object_inline_message_2450 ? JSCompiler_object_inline_message_2450 = mountSuspenseOffscreenState(renderLanes) : (JSCompiler_temp = JSCompiler_object_inline_message_2450.cachePool, null !== JSCompiler_temp ? (instance = CacheContext._currentValue, JSCompiler_temp = JSCompiler_temp.parent !== instance ? {
            parent: instance,
            pool: instance
        } : JSCompiler_temp) : JSCompiler_temp = getSuspendedCache(), JSCompiler_object_inline_message_2450 = {
            baseLanes: JSCompiler_object_inline_message_2450.baseLanes | renderLanes,
            cachePool: JSCompiler_temp
        }), JSCompiler_object_inline_componentStack_2453.memoizedState = JSCompiler_object_inline_message_2450, JSCompiler_object_inline_componentStack_2453.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_object_inline_digest_2451, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, JSCompiler_object_inline_stack_2452;
        pushPrimaryTreeSuspenseHandler(workInProgress);
        renderLanes = current.child;
        current = renderLanes.sibling;
        renderLanes = createWorkInProgress(renderLanes, {
            mode: "visible",
            children: JSCompiler_object_inline_stack_2452.children
        });
        renderLanes.return = workInProgress;
        renderLanes.sibling = null;
        null !== current && (JSCompiler_object_inline_digest_2451 = workInProgress.deletions, null === JSCompiler_object_inline_digest_2451 ? (workInProgress.deletions = [
            current
        ], workInProgress.flags |= 16) : JSCompiler_object_inline_digest_2451.push(current));
        workInProgress.child = renderLanes;
        workInProgress.memoizedState = null;
        return renderLanes;
    }
    function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
        primaryChildren = mountWorkInProgressOffscreenFiber({
            mode: "visible",
            children: primaryChildren
        }, workInProgress.mode);
        primaryChildren.return = workInProgress;
        return workInProgress.child = primaryChildren;
    }
    function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
        offscreenProps = createFiber(22, offscreenProps, null, mode);
        offscreenProps.lanes = 0;
        offscreenProps.stateNode = {
            _visibility: OffscreenVisible,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        };
        return offscreenProps;
    }
    function retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes) {
        reconcileChildFibers(workInProgress, current.child, null, renderLanes);
        current = mountSuspensePrimaryChildren(workInProgress, workInProgress.pendingProps.children);
        current.flags |= 2;
        workInProgress.memoizedState = null;
        return current;
    }
    function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
        fiber.lanes |= renderLanes;
        var alternate = fiber.alternate;
        null !== alternate && (alternate.lanes |= renderLanes);
        scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
    }
    function validateSuspenseListNestedChild(childSlot, index) {
        var isAnArray = isArrayImpl(childSlot);
        childSlot = !isAnArray && "function" === typeof getIteratorFn(childSlot);
        return isAnArray || childSlot ? (isAnArray = isAnArray ? "array" : "iterable", console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", isAnArray, index, isAnArray), !1) : !0;
    }
    function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode) {
        var renderState = workInProgress.memoizedState;
        null === renderState ? workInProgress.memoizedState = {
            isBackwards: isBackwards,
            rendering: null,
            renderingStartTime: 0,
            last: lastContentRow,
            tail: tail,
            tailMode: tailMode
        } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode);
    }
    function updateSuspenseListComponent(current, workInProgress, renderLanes) {
        var nextProps = workInProgress.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
        nextProps = nextProps.children;
        if (void 0 !== revealOrder && "forwards" !== revealOrder && "backwards" !== revealOrder && "together" !== revealOrder && !didWarnAboutRevealOrder[revealOrder]) {
            if (didWarnAboutRevealOrder[revealOrder] = !0, "string" === typeof revealOrder) switch(revealOrder.toLowerCase()){
                case "together":
                case "forwards":
                case "backwards":
                    console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                    break;
                case "forward":
                case "backward":
                    console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                    break;
                default:
                    console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
            }
            else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
        }
        void 0 === tailMode || didWarnAboutTailOptions[tailMode] || ("collapsed" !== tailMode && "hidden" !== tailMode ? (didWarnAboutTailOptions[tailMode] = !0, console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', tailMode)) : "forwards" !== revealOrder && "backwards" !== revealOrder && (didWarnAboutTailOptions[tailMode] = !0, console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', tailMode)));
        a: if (("forwards" === revealOrder || "backwards" === revealOrder) && void 0 !== nextProps && null !== nextProps && !1 !== nextProps) {
            if (isArrayImpl(nextProps)) for(var i = 0; i < nextProps.length; i++){
                if (!validateSuspenseListNestedChild(nextProps[i], i)) break a;
            }
            else if (i = getIteratorFn(nextProps), "function" === typeof i) {
                if (i = i.call(nextProps)) for(var step = i.next(), _i = 0; !step.done; step = i.next()){
                    if (!validateSuspenseListNestedChild(step.value, _i)) break a;
                    _i++;
                }
            } else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', revealOrder);
        }
        reconcileChildren(current, workInProgress, nextProps, renderLanes);
        nextProps = suspenseStackCursor.current;
        if (0 !== (nextProps & ForceSuspenseFallback)) nextProps = nextProps & SubtreeSuspenseContextMask | ForceSuspenseFallback, workInProgress.flags |= 128;
        else {
            if (null !== current && 0 !== (current.flags & 128)) a: for(current = workInProgress.child; null !== current;){
                if (13 === current.tag) null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
                else if (19 === current.tag) scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
                else if (null !== current.child) {
                    current.child.return = current;
                    current = current.child;
                    continue;
                }
                if (current === workInProgress) break a;
                for(; null === current.sibling;){
                    if (null === current.return || current.return === workInProgress) break a;
                    current = current.return;
                }
                current.sibling.return = current.return;
                current = current.sibling;
            }
            nextProps &= SubtreeSuspenseContextMask;
        }
        push(suspenseStackCursor, nextProps, workInProgress);
        switch(revealOrder){
            case "forwards":
                renderLanes = workInProgress.child;
                for(revealOrder = null; null !== renderLanes;)current = renderLanes.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes), renderLanes = renderLanes.sibling;
                renderLanes = revealOrder;
                null === renderLanes ? (revealOrder = workInProgress.child, workInProgress.child = null) : (revealOrder = renderLanes.sibling, renderLanes.sibling = null);
                initSuspenseListRenderState(workInProgress, !1, revealOrder, renderLanes, tailMode);
                break;
            case "backwards":
                renderLanes = null;
                revealOrder = workInProgress.child;
                for(workInProgress.child = null; null !== revealOrder;){
                    current = revealOrder.alternate;
                    if (null !== current && null === findFirstSuspended(current)) {
                        workInProgress.child = revealOrder;
                        break;
                    }
                    current = revealOrder.sibling;
                    revealOrder.sibling = renderLanes;
                    renderLanes = revealOrder;
                    revealOrder = current;
                }
                initSuspenseListRenderState(workInProgress, !0, renderLanes, null, tailMode);
                break;
            case "together":
                initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
                break;
            default:
                workInProgress.memoizedState = null;
        }
        return workInProgress.child;
    }
    function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
        null !== current && (workInProgress.dependencies = current.dependencies);
        profilerStartTime = -1;
        workInProgressRootSkippedLanes |= workInProgress.lanes;
        if (0 === (renderLanes & workInProgress.childLanes)) {
            if (null !== current) {
                if (propagateParentContextChanges(current, workInProgress, renderLanes, !1), 0 === (renderLanes & workInProgress.childLanes)) return null;
            } else return null;
        }
        if (null !== current && workInProgress.child !== current.child) throw Error("Resuming work not yet implemented.");
        if (null !== workInProgress.child) {
            current = workInProgress.child;
            renderLanes = createWorkInProgress(current, current.pendingProps);
            workInProgress.child = renderLanes;
            for(renderLanes.return = workInProgress; null !== current.sibling;)current = current.sibling, renderLanes = renderLanes.sibling = createWorkInProgress(current, current.pendingProps), renderLanes.return = workInProgress;
            renderLanes.sibling = null;
        }
        return workInProgress.child;
    }
    function checkScheduledUpdateOrContext(current, renderLanes) {
        if (0 !== (current.lanes & renderLanes)) return !0;
        current = current.dependencies;
        return null !== current && checkIfContextChanged(current) ? !0 : !1;
    }
    function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes) {
        switch(workInProgress.tag){
            case 3:
                pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
                pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
                resetHydrationState();
                break;
            case 27:
            case 5:
                pushHostContext(workInProgress);
                break;
            case 4:
                pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
                break;
            case 10:
                pushProvider(workInProgress, workInProgress.type, workInProgress.memoizedProps.value);
                break;
            case 12:
                0 !== (renderLanes & workInProgress.childLanes) && (workInProgress.flags |= 4);
                workInProgress.flags |= 2048;
                var stateNode = workInProgress.stateNode;
                stateNode.effectDuration = -0;
                stateNode.passiveEffectDuration = -0;
                break;
            case 13:
                stateNode = workInProgress.memoizedState;
                if (null !== stateNode) {
                    if (null !== stateNode.dehydrated) return pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags |= 128, null;
                    if (0 !== (renderLanes & workInProgress.child.childLanes)) return updateSuspenseComponent(current, workInProgress, renderLanes);
                    pushPrimaryTreeSuspenseHandler(workInProgress);
                    current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
                    return null !== current ? current.sibling : null;
                }
                pushPrimaryTreeSuspenseHandler(workInProgress);
                break;
            case 19:
                var didSuspendBefore = 0 !== (current.flags & 128);
                stateNode = 0 !== (renderLanes & workInProgress.childLanes);
                stateNode || (propagateParentContextChanges(current, workInProgress, renderLanes, !1), stateNode = 0 !== (renderLanes & workInProgress.childLanes));
                if (didSuspendBefore) {
                    if (stateNode) return updateSuspenseListComponent(current, workInProgress, renderLanes);
                    workInProgress.flags |= 128;
                }
                didSuspendBefore = workInProgress.memoizedState;
                null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
                push(suspenseStackCursor, suspenseStackCursor.current, workInProgress);
                if (stateNode) break;
                else return null;
            case 22:
            case 23:
                return workInProgress.lanes = 0, updateOffscreenComponent(current, workInProgress, renderLanes);
            case 24:
                pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
        }
        return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    }
    function beginWork(current, workInProgress, renderLanes) {
        if (workInProgress._debugNeedsRemount && null !== current) {
            renderLanes = createFiberFromTypeAndProps(workInProgress.type, workInProgress.key, workInProgress.pendingProps, workInProgress._debugOwner || null, workInProgress.mode, workInProgress.lanes);
            renderLanes._debugStack = workInProgress._debugStack;
            renderLanes._debugTask = workInProgress._debugTask;
            var returnFiber = workInProgress.return;
            if (null === returnFiber) throw Error("Cannot swap the root fiber.");
            current.alternate = null;
            workInProgress.alternate = null;
            renderLanes.index = workInProgress.index;
            renderLanes.sibling = workInProgress.sibling;
            renderLanes.return = workInProgress.return;
            renderLanes.ref = workInProgress.ref;
            renderLanes._debugInfo = workInProgress._debugInfo;
            if (workInProgress === returnFiber.child) returnFiber.child = renderLanes;
            else {
                var prevSibling = returnFiber.child;
                if (null === prevSibling) throw Error("Expected parent to have a child.");
                for(; prevSibling.sibling !== workInProgress;)if (prevSibling = prevSibling.sibling, null === prevSibling) throw Error("Expected to find the previous sibling.");
                prevSibling.sibling = renderLanes;
            }
            workInProgress = returnFiber.deletions;
            null === workInProgress ? (returnFiber.deletions = [
                current
            ], returnFiber.flags |= 16) : workInProgress.push(current);
            renderLanes.flags |= 2;
            return renderLanes;
        }
        if (null !== current) {
            if (current.memoizedProps !== workInProgress.pendingProps || workInProgress.type !== current.type) didReceiveUpdate = !0;
            else {
                if (!checkScheduledUpdateOrContext(current, renderLanes) && 0 === (workInProgress.flags & 128)) return didReceiveUpdate = !1, attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes);
                didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
            }
        } else {
            didReceiveUpdate = !1;
            if (returnFiber = isHydrating) warnIfNotHydrating(), returnFiber = 0 !== (workInProgress.flags & 1048576);
            returnFiber && (returnFiber = workInProgress.index, warnIfNotHydrating(), pushTreeId(workInProgress, treeForkCount, returnFiber));
        }
        workInProgress.lanes = 0;
        switch(workInProgress.tag){
            case 16:
                a: if (returnFiber = workInProgress.pendingProps, current = callLazyInitInDEV(workInProgress.elementType), workInProgress.type = current, "function" === typeof current) shouldConstruct(current) ? (returnFiber = resolveClassComponentProps(current, returnFiber), workInProgress.tag = 1, workInProgress.type = current = resolveFunctionForHotReloading(current), workInProgress = updateClassComponent(null, workInProgress, current, returnFiber, renderLanes)) : (workInProgress.tag = 0, validateFunctionComponentInDev(workInProgress, current), workInProgress.type = current = resolveFunctionForHotReloading(current), workInProgress = updateFunctionComponent(null, workInProgress, current, returnFiber, renderLanes));
                else {
                    if (void 0 !== current && null !== current) {
                        if (prevSibling = current.$$typeof, prevSibling === REACT_FORWARD_REF_TYPE) {
                            workInProgress.tag = 11;
                            workInProgress.type = current = resolveForwardRefForHotReloading(current);
                            workInProgress = updateForwardRef(null, workInProgress, current, returnFiber, renderLanes);
                            break a;
                        } else if (prevSibling === REACT_MEMO_TYPE) {
                            workInProgress.tag = 14;
                            workInProgress = updateMemoComponent(null, workInProgress, current, returnFiber, renderLanes);
                            break a;
                        }
                    }
                    workInProgress = "";
                    null !== current && "object" === typeof current && current.$$typeof === REACT_LAZY_TYPE && (workInProgress = " Did you wrap a component in React.lazy() more than once?");
                    current = getComponentNameFromType(current) || current;
                    throw Error("Element type is invalid. Received a promise that resolves to: " + current + ". Lazy element type must resolve to a class or function." + workInProgress);
                }
                return workInProgress;
            case 0:
                return updateFunctionComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
            case 1:
                return returnFiber = workInProgress.type, prevSibling = resolveClassComponentProps(returnFiber, workInProgress.pendingProps), updateClassComponent(current, workInProgress, returnFiber, prevSibling, renderLanes);
            case 3:
                a: {
                    pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
                    if (null === current) throw Error("Should have a current fiber. This is a bug in React.");
                    returnFiber = workInProgress.pendingProps;
                    var prevState = workInProgress.memoizedState;
                    prevSibling = prevState.element;
                    cloneUpdateQueue(current, workInProgress);
                    processUpdateQueue(workInProgress, returnFiber, null, renderLanes);
                    var nextState = workInProgress.memoizedState;
                    returnFiber = nextState.cache;
                    pushProvider(workInProgress, CacheContext, returnFiber);
                    returnFiber !== prevState.cache && propagateContextChanges(workInProgress, [
                        CacheContext
                    ], renderLanes, !0);
                    suspendIfUpdateReadFromEntangledAsyncAction();
                    returnFiber = nextState.element;
                    if (prevState.isDehydrated) {
                        if (prevState = {
                            element: returnFiber,
                            isDehydrated: !1,
                            cache: nextState.cache
                        }, workInProgress.updateQueue.baseState = prevState, workInProgress.memoizedState = prevState, workInProgress.flags & 256) {
                            workInProgress = mountHostRootWithoutHydrating(current, workInProgress, returnFiber, renderLanes);
                            break a;
                        } else if (returnFiber !== prevSibling) {
                            prevSibling = createCapturedValueAtFiber(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), workInProgress);
                            queueHydrationError(prevSibling);
                            workInProgress = mountHostRootWithoutHydrating(current, workInProgress, returnFiber, renderLanes);
                            break a;
                        } else {
                            current = workInProgress.stateNode.containerInfo;
                            switch(current.nodeType){
                                case 9:
                                    current = current.body;
                                    break;
                                default:
                                    current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
                            }
                            nextHydratableInstance = getNextHydratable(current.firstChild);
                            hydrationParentFiber = workInProgress;
                            isHydrating = !0;
                            hydrationErrors = null;
                            didSuspendOrErrorDEV = !1;
                            hydrationDiffRootDEV = null;
                            rootOrSingletonContext = !0;
                            current = mountChildFibers(workInProgress, null, returnFiber, renderLanes);
                            for(workInProgress.child = current; current;)current.flags = current.flags & -3 | 4096, current = current.sibling;
                        }
                    } else {
                        resetHydrationState();
                        if (returnFiber === prevSibling) {
                            workInProgress = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
                            break a;
                        }
                        reconcileChildren(current, workInProgress, returnFiber, renderLanes);
                    }
                    workInProgress = workInProgress.child;
                }
                return workInProgress;
            case 26:
                return markRef(current, workInProgress), null === current ? (current = getResource(workInProgress.type, null, workInProgress.pendingProps, null)) ? workInProgress.memoizedState = current : isHydrating || (current = workInProgress.type, renderLanes = workInProgress.pendingProps, returnFiber = requiredContext(rootInstanceStackCursor.current), returnFiber = getOwnerDocumentFromRootContainer(returnFiber).createElement(current), returnFiber[internalInstanceKey] = workInProgress, returnFiber[internalPropsKey] = renderLanes, setInitialProperties(returnFiber, current, renderLanes), markNodeAsHoistable(returnFiber), workInProgress.stateNode = returnFiber) : workInProgress.memoizedState = getResource(workInProgress.type, current.memoizedProps, workInProgress.pendingProps, current.memoizedState), null;
            case 27:
                return pushHostContext(workInProgress), null === current && isHydrating && (returnFiber = requiredContext(rootInstanceStackCursor.current), prevSibling = getHostContext(), returnFiber = workInProgress.stateNode = resolveSingletonInstance(workInProgress.type, workInProgress.pendingProps, returnFiber, prevSibling, !1), didSuspendOrErrorDEV || (prevSibling = diffHydratedProperties(returnFiber, workInProgress.type, workInProgress.pendingProps, prevSibling), null !== prevSibling && (buildHydrationDiffNode(workInProgress, 0).serverProps = prevSibling)), hydrationParentFiber = workInProgress, rootOrSingletonContext = !0, prevSibling = nextHydratableInstance, isSingletonScope(workInProgress.type) ? (previousHydratableOnEnteringScopedSingleton = prevSibling, nextHydratableInstance = getNextHydratable(returnFiber.firstChild)) : nextHydratableInstance = prevSibling), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), markRef(current, workInProgress), null === current && (workInProgress.flags |= 4194304), workInProgress.child;
            case 5:
                return null === current && isHydrating && (prevState = getHostContext(), returnFiber = validateDOMNesting(workInProgress.type, prevState.ancestorInfo), prevSibling = nextHydratableInstance, (nextState = !prevSibling) || (nextState = canHydrateInstance(prevSibling, workInProgress.type, workInProgress.pendingProps, rootOrSingletonContext), null !== nextState ? (workInProgress.stateNode = nextState, didSuspendOrErrorDEV || (prevState = diffHydratedProperties(nextState, workInProgress.type, workInProgress.pendingProps, prevState), null !== prevState && (buildHydrationDiffNode(workInProgress, 0).serverProps = prevState)), hydrationParentFiber = workInProgress, nextHydratableInstance = getNextHydratable(nextState.firstChild), rootOrSingletonContext = !1, prevState = !0) : prevState = !1, nextState = !prevState), nextState && (returnFiber && warnNonHydratedInstance(workInProgress, prevSibling), throwOnHydrationMismatch(workInProgress))), pushHostContext(workInProgress), prevSibling = workInProgress.type, prevState = workInProgress.pendingProps, nextState = null !== current ? current.memoizedProps : null, returnFiber = prevState.children, shouldSetTextContent(prevSibling, prevState) ? returnFiber = null : null !== nextState && shouldSetTextContent(prevSibling, nextState) && (workInProgress.flags |= 32), null !== workInProgress.memoizedState && (prevSibling = renderWithHooks(current, workInProgress, TransitionAwareHostComponent, null, null, renderLanes), HostTransitionContext._currentValue = prevSibling), markRef(current, workInProgress), reconcileChildren(current, workInProgress, returnFiber, renderLanes), workInProgress.child;
            case 6:
                return null === current && isHydrating && (current = workInProgress.pendingProps, renderLanes = getHostContext(), returnFiber = renderLanes.ancestorInfo.current, current = null != returnFiber ? validateTextNesting(current, returnFiber.tag, renderLanes.ancestorInfo.implicitRootScope) : !0, renderLanes = nextHydratableInstance, (returnFiber = !renderLanes) || (returnFiber = canHydrateTextInstance(renderLanes, workInProgress.pendingProps, rootOrSingletonContext), null !== returnFiber ? (workInProgress.stateNode = returnFiber, hydrationParentFiber = workInProgress, nextHydratableInstance = null, returnFiber = !0) : returnFiber = !1, returnFiber = !returnFiber), returnFiber && (current && warnNonHydratedInstance(workInProgress, renderLanes), throwOnHydrationMismatch(workInProgress))), null;
            case 13:
                return updateSuspenseComponent(current, workInProgress, renderLanes);
            case 4:
                return pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo), returnFiber = workInProgress.pendingProps, null === current ? workInProgress.child = reconcileChildFibers(workInProgress, null, returnFiber, renderLanes) : reconcileChildren(current, workInProgress, returnFiber, renderLanes), workInProgress.child;
            case 11:
                return updateForwardRef(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
            case 7:
                return reconcileChildren(current, workInProgress, workInProgress.pendingProps, renderLanes), workInProgress.child;
            case 8:
                return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
            case 12:
                return workInProgress.flags |= 4, workInProgress.flags |= 2048, returnFiber = workInProgress.stateNode, returnFiber.effectDuration = -0, returnFiber.passiveEffectDuration = -0, reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
            case 10:
                return returnFiber = workInProgress.type, prevSibling = workInProgress.pendingProps, prevState = prevSibling.value, "value" in prevSibling || hasWarnedAboutUsingNoValuePropOnContextProvider || (hasWarnedAboutUsingNoValuePropOnContextProvider = !0, console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")), pushProvider(workInProgress, returnFiber, prevState), reconcileChildren(current, workInProgress, prevSibling.children, renderLanes), workInProgress.child;
            case 9:
                return prevSibling = workInProgress.type._context, returnFiber = workInProgress.pendingProps.children, "function" !== typeof returnFiber && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), prepareToReadContext(workInProgress), prevSibling = readContext(prevSibling), markComponentRenderStarted(workInProgress), returnFiber = callComponentInDEV(returnFiber, prevSibling, void 0), markComponentRenderStopped(), workInProgress.flags |= 1, reconcileChildren(current, workInProgress, returnFiber, renderLanes), workInProgress.child;
            case 14:
                return updateMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
            case 15:
                return updateSimpleMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
            case 19:
                return updateSuspenseListComponent(current, workInProgress, renderLanes);
            case 31:
                return returnFiber = workInProgress.pendingProps, renderLanes = workInProgress.mode, returnFiber = {
                    mode: returnFiber.mode,
                    children: returnFiber.children
                }, null === current ? (current = mountWorkInProgressOffscreenFiber(returnFiber, renderLanes), current.ref = workInProgress.ref, workInProgress.child = current, current.return = workInProgress, workInProgress = current) : (current = createWorkInProgress(current.child, returnFiber), current.ref = workInProgress.ref, workInProgress.child = current, current.return = workInProgress, workInProgress = current), workInProgress;
            case 22:
                return updateOffscreenComponent(current, workInProgress, renderLanes);
            case 24:
                return prepareToReadContext(workInProgress), returnFiber = readContext(CacheContext), null === current ? (prevSibling = peekCacheFromPool(), null === prevSibling && (prevSibling = workInProgressRoot, prevState = createCache(), prevSibling.pooledCache = prevState, retainCache(prevState), null !== prevState && (prevSibling.pooledCacheLanes |= renderLanes), prevSibling = prevState), workInProgress.memoizedState = {
                    parent: returnFiber,
                    cache: prevSibling
                }, initializeUpdateQueue(workInProgress), pushProvider(workInProgress, CacheContext, prevSibling)) : (0 !== (current.lanes & renderLanes) && (cloneUpdateQueue(current, workInProgress), processUpdateQueue(workInProgress, null, null, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction()), prevSibling = current.memoizedState, prevState = workInProgress.memoizedState, prevSibling.parent !== returnFiber ? (prevSibling = {
                    parent: returnFiber,
                    cache: returnFiber
                }, workInProgress.memoizedState = prevSibling, 0 === workInProgress.lanes && (workInProgress.memoizedState = workInProgress.updateQueue.baseState = prevSibling), pushProvider(workInProgress, CacheContext, returnFiber)) : (returnFiber = prevState.cache, pushProvider(workInProgress, CacheContext, returnFiber), returnFiber !== prevSibling.cache && propagateContextChanges(workInProgress, [
                    CacheContext
                ], renderLanes, !0))), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
            case 29:
                throw workInProgress.pendingProps;
        }
        throw Error("Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function markUpdate(workInProgress) {
        workInProgress.flags |= 4;
    }
    function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
        if ("stylesheet" !== resource.type || (resource.state.loading & Inserted) !== NotLoaded) workInProgress.flags &= -16777217;
        else if (workInProgress.flags |= 16777216, !preloadResource(resource)) {
            resource = suspenseHandlerStackCursor.current;
            if (null !== resource && ((workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null !== shellBoundary : (workInProgressRootRenderLanes & 62914560) !== workInProgressRootRenderLanes && 0 === (workInProgressRootRenderLanes & 536870912) || resource !== shellBoundary)) throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
            workInProgress.flags |= 8192;
        }
    }
    function scheduleRetryEffect(workInProgress, retryQueue) {
        null !== retryQueue && (workInProgress.flags |= 4);
        workInProgress.flags & 16384 && (retryQueue = 22 !== workInProgress.tag ? claimNextRetryLane() : 536870912, workInProgress.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        if (!isHydrating) switch(renderState.tailMode){
            case "hidden":
                hasRenderedATailFallback = renderState.tail;
                for(var lastTailNode = null; null !== hasRenderedATailFallback;)null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
                null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
                break;
            case "collapsed":
                lastTailNode = renderState.tail;
                for(var _lastTailNode = null; null !== lastTailNode;)null !== lastTailNode.alternate && (_lastTailNode = lastTailNode), lastTailNode = lastTailNode.sibling;
                null === _lastTailNode ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : _lastTailNode.sibling = null;
        }
    }
    function bubbleProperties(completedWork) {
        var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
        if (didBailout) {
            if ((completedWork.mode & ProfileMode) !== NoMode) {
                for(var _treeBaseDuration = completedWork.selfBaseDuration, _child2 = completedWork.child; null !== _child2;)newChildLanes |= _child2.lanes | _child2.childLanes, subtreeFlags |= _child2.subtreeFlags & 65011712, subtreeFlags |= _child2.flags & 65011712, _treeBaseDuration += _child2.treeBaseDuration, _child2 = _child2.sibling;
                completedWork.treeBaseDuration = _treeBaseDuration;
            } else for(_treeBaseDuration = completedWork.child; null !== _treeBaseDuration;)newChildLanes |= _treeBaseDuration.lanes | _treeBaseDuration.childLanes, subtreeFlags |= _treeBaseDuration.subtreeFlags & 65011712, subtreeFlags |= _treeBaseDuration.flags & 65011712, _treeBaseDuration.return = completedWork, _treeBaseDuration = _treeBaseDuration.sibling;
        } else if ((completedWork.mode & ProfileMode) !== NoMode) {
            _treeBaseDuration = completedWork.actualDuration;
            _child2 = completedWork.selfBaseDuration;
            for(var child = completedWork.child; null !== child;)newChildLanes |= child.lanes | child.childLanes, subtreeFlags |= child.subtreeFlags, subtreeFlags |= child.flags, _treeBaseDuration += child.actualDuration, _child2 += child.treeBaseDuration, child = child.sibling;
            completedWork.actualDuration = _treeBaseDuration;
            completedWork.treeBaseDuration = _child2;
        } else for(_treeBaseDuration = completedWork.child; null !== _treeBaseDuration;)newChildLanes |= _treeBaseDuration.lanes | _treeBaseDuration.childLanes, subtreeFlags |= _treeBaseDuration.subtreeFlags, subtreeFlags |= _treeBaseDuration.flags, _treeBaseDuration.return = completedWork, _treeBaseDuration = _treeBaseDuration.sibling;
        completedWork.subtreeFlags |= subtreeFlags;
        completedWork.childLanes = newChildLanes;
        return didBailout;
    }
    function completeWork(current, workInProgress, renderLanes) {
        var newProps = workInProgress.pendingProps;
        popTreeContext(workInProgress);
        switch(workInProgress.tag){
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return bubbleProperties(workInProgress), null;
            case 1:
                return bubbleProperties(workInProgress), null;
            case 3:
                renderLanes = workInProgress.stateNode;
                newProps = null;
                null !== current && (newProps = current.memoizedState.cache);
                workInProgress.memoizedState.cache !== newProps && (workInProgress.flags |= 2048);
                popProvider(CacheContext, workInProgress);
                popHostContainer(workInProgress);
                renderLanes.pendingContext && (renderLanes.context = renderLanes.pendingContext, renderLanes.pendingContext = null);
                if (null === current || null === current.child) popHydrationState(workInProgress) ? (emitPendingHydrationWarnings(), markUpdate(workInProgress)) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress.flags & 256) || (workInProgress.flags |= 1024, upgradeHydrationErrorsToRecoverable());
                bubbleProperties(workInProgress);
                return null;
            case 26:
                return renderLanes = workInProgress.memoizedState, null === current ? (markUpdate(workInProgress), null !== renderLanes ? (bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes)) : (bubbleProperties(workInProgress), workInProgress.flags &= -16777217)) : renderLanes ? renderLanes !== current.memoizedState ? (markUpdate(workInProgress), bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes)) : (bubbleProperties(workInProgress), workInProgress.flags &= -16777217) : (current.memoizedProps !== newProps && markUpdate(workInProgress), bubbleProperties(workInProgress), workInProgress.flags &= -16777217), null;
            case 27:
                popHostContext(workInProgress);
                renderLanes = requiredContext(rootInstanceStackCursor.current);
                var _type = workInProgress.type;
                if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
                else {
                    if (!newProps) {
                        if (null === workInProgress.stateNode) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                        bubbleProperties(workInProgress);
                        return null;
                    }
                    current = getHostContext();
                    popHydrationState(workInProgress) ? prepareToHydrateHostInstance(workInProgress, current) : (current = resolveSingletonInstance(_type, newProps, renderLanes, current, !0), workInProgress.stateNode = current, markUpdate(workInProgress));
                }
                bubbleProperties(workInProgress);
                return null;
            case 5:
                popHostContext(workInProgress);
                renderLanes = workInProgress.type;
                if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
                else {
                    if (!newProps) {
                        if (null === workInProgress.stateNode) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                        bubbleProperties(workInProgress);
                        return null;
                    }
                    _type = getHostContext();
                    if (popHydrationState(workInProgress)) prepareToHydrateHostInstance(workInProgress, _type);
                    else {
                        current = requiredContext(rootInstanceStackCursor.current);
                        validateDOMNesting(renderLanes, _type.ancestorInfo);
                        _type = _type.context;
                        current = getOwnerDocumentFromRootContainer(current);
                        switch(_type){
                            case HostContextNamespaceSvg:
                                current = current.createElementNS(SVG_NAMESPACE, renderLanes);
                                break;
                            case HostContextNamespaceMath:
                                current = current.createElementNS(MATH_NAMESPACE, renderLanes);
                                break;
                            default:
                                switch(renderLanes){
                                    case "svg":
                                        current = current.createElementNS(SVG_NAMESPACE, renderLanes);
                                        break;
                                    case "math":
                                        current = current.createElementNS(MATH_NAMESPACE, renderLanes);
                                        break;
                                    case "script":
                                        current = current.createElement("div");
                                        current.innerHTML = "<script>\x3c/script>";
                                        current = current.removeChild(current.firstChild);
                                        break;
                                    case "select":
                                        current = "string" === typeof newProps.is ? current.createElement("select", {
                                            is: newProps.is
                                        }) : current.createElement("select");
                                        newProps.multiple ? current.multiple = !0 : newProps.size && (current.size = newProps.size);
                                        break;
                                    default:
                                        current = "string" === typeof newProps.is ? current.createElement(renderLanes, {
                                            is: newProps.is
                                        }) : current.createElement(renderLanes), -1 === renderLanes.indexOf("-") && (renderLanes !== renderLanes.toLowerCase() && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", renderLanes), "[object HTMLUnknownElement]" !== Object.prototype.toString.call(current) || hasOwnProperty.call(warnedUnknownTags, renderLanes) || (warnedUnknownTags[renderLanes] = !0, console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", renderLanes)));
                                }
                        }
                        current[internalInstanceKey] = workInProgress;
                        current[internalPropsKey] = newProps;
                        a: for(_type = workInProgress.child; null !== _type;){
                            if (5 === _type.tag || 6 === _type.tag) current.appendChild(_type.stateNode);
                            else if (4 !== _type.tag && 27 !== _type.tag && null !== _type.child) {
                                _type.child.return = _type;
                                _type = _type.child;
                                continue;
                            }
                            if (_type === workInProgress) break a;
                            for(; null === _type.sibling;){
                                if (null === _type.return || _type.return === workInProgress) break a;
                                _type = _type.return;
                            }
                            _type.sibling.return = _type.return;
                            _type = _type.sibling;
                        }
                        workInProgress.stateNode = current;
                        a: switch(setInitialProperties(current, renderLanes, newProps), renderLanes){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                current = !!newProps.autoFocus;
                                break a;
                            case "img":
                                current = !0;
                                break a;
                            default:
                                current = !1;
                        }
                        current && markUpdate(workInProgress);
                    }
                }
                bubbleProperties(workInProgress);
                workInProgress.flags &= -16777217;
                return null;
            case 6:
                if (current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
                else {
                    if ("string" !== typeof newProps && null === workInProgress.stateNode) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    current = requiredContext(rootInstanceStackCursor.current);
                    renderLanes = getHostContext();
                    if (popHydrationState(workInProgress)) {
                        current = workInProgress.stateNode;
                        renderLanes = workInProgress.memoizedProps;
                        _type = !didSuspendOrErrorDEV;
                        newProps = null;
                        var returnFiber = hydrationParentFiber;
                        if (null !== returnFiber) switch(returnFiber.tag){
                            case 3:
                                _type && (_type = diffHydratedTextForDevWarnings(current, renderLanes, newProps), null !== _type && (buildHydrationDiffNode(workInProgress, 0).serverProps = _type));
                                break;
                            case 27:
                            case 5:
                                newProps = returnFiber.memoizedProps, _type && (_type = diffHydratedTextForDevWarnings(current, renderLanes, newProps), null !== _type && (buildHydrationDiffNode(workInProgress, 0).serverProps = _type));
                        }
                        current[internalInstanceKey] = workInProgress;
                        current = current.nodeValue === renderLanes || null !== newProps && !0 === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes) ? !0 : !1;
                        current || throwOnHydrationMismatch(workInProgress);
                    } else _type = renderLanes.ancestorInfo.current, null != _type && validateTextNesting(newProps, _type.tag, renderLanes.ancestorInfo.implicitRootScope), current = getOwnerDocumentFromRootContainer(current).createTextNode(newProps), current[internalInstanceKey] = workInProgress, workInProgress.stateNode = current;
                }
                bubbleProperties(workInProgress);
                return null;
            case 13:
                newProps = workInProgress.memoizedState;
                if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
                    _type = popHydrationState(workInProgress);
                    if (null !== newProps && null !== newProps.dehydrated) {
                        if (null === current) {
                            if (!_type) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                            _type = workInProgress.memoizedState;
                            _type = null !== _type ? _type.dehydrated : null;
                            if (!_type) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
                            _type[internalInstanceKey] = workInProgress;
                            bubbleProperties(workInProgress);
                            (workInProgress.mode & ProfileMode) !== NoMode && null !== newProps && (_type = workInProgress.child, null !== _type && (workInProgress.treeBaseDuration -= _type.treeBaseDuration));
                        } else emitPendingHydrationWarnings(), resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4, bubbleProperties(workInProgress), (workInProgress.mode & ProfileMode) !== NoMode && null !== newProps && (_type = workInProgress.child, null !== _type && (workInProgress.treeBaseDuration -= _type.treeBaseDuration));
                        _type = !1;
                    } else _type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = _type), _type = !0;
                    if (!_type) {
                        if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
                        popSuspenseHandler(workInProgress);
                        return null;
                    }
                }
                popSuspenseHandler(workInProgress);
                if (0 !== (workInProgress.flags & 128)) return workInProgress.lanes = renderLanes, (workInProgress.mode & ProfileMode) !== NoMode && transferActualDuration(workInProgress), workInProgress;
                renderLanes = null !== newProps;
                current = null !== current && null !== current.memoizedState;
                renderLanes && (newProps = workInProgress.child, _type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (_type = newProps.alternate.memoizedState.cachePool.pool), returnFiber = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (returnFiber = newProps.memoizedState.cachePool.pool), returnFiber !== _type && (newProps.flags |= 2048));
                renderLanes !== current && renderLanes && (workInProgress.child.flags |= 8192);
                scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
                bubbleProperties(workInProgress);
                (workInProgress.mode & ProfileMode) !== NoMode && renderLanes && (current = workInProgress.child, null !== current && (workInProgress.treeBaseDuration -= current.treeBaseDuration));
                return null;
            case 4:
                return popHostContainer(workInProgress), null === current && listenToAllSupportedEvents(workInProgress.stateNode.containerInfo), bubbleProperties(workInProgress), null;
            case 10:
                return popProvider(workInProgress.type, workInProgress), bubbleProperties(workInProgress), null;
            case 19:
                pop(suspenseStackCursor, workInProgress);
                _type = workInProgress.memoizedState;
                if (null === _type) return bubbleProperties(workInProgress), null;
                newProps = 0 !== (workInProgress.flags & 128);
                returnFiber = _type.rendering;
                if (null === returnFiber) {
                    if (newProps) cutOffTailIfNeeded(_type, !1);
                    else {
                        if (workInProgressRootExitStatus !== RootInProgress || null !== current && 0 !== (current.flags & 128)) for(current = workInProgress.child; null !== current;){
                            returnFiber = findFirstSuspended(current);
                            if (null !== returnFiber) {
                                workInProgress.flags |= 128;
                                cutOffTailIfNeeded(_type, !1);
                                current = returnFiber.updateQueue;
                                workInProgress.updateQueue = current;
                                scheduleRetryEffect(workInProgress, current);
                                workInProgress.subtreeFlags = 0;
                                current = renderLanes;
                                for(renderLanes = workInProgress.child; null !== renderLanes;)resetWorkInProgress(renderLanes, current), renderLanes = renderLanes.sibling;
                                push(suspenseStackCursor, suspenseStackCursor.current & SubtreeSuspenseContextMask | ForceSuspenseFallback, workInProgress);
                                return workInProgress.child;
                            }
                            current = current.sibling;
                        }
                        null !== _type.tail && now$1() > workInProgressRootRenderTargetTime && (workInProgress.flags |= 128, newProps = !0, cutOffTailIfNeeded(_type, !1), workInProgress.lanes = 4194304);
                    }
                } else {
                    if (!newProps) {
                        if (current = findFirstSuspended(returnFiber), null !== current) {
                            if (workInProgress.flags |= 128, newProps = !0, current = current.updateQueue, workInProgress.updateQueue = current, scheduleRetryEffect(workInProgress, current), cutOffTailIfNeeded(_type, !0), null === _type.tail && "hidden" === _type.tailMode && !returnFiber.alternate && !isHydrating) return bubbleProperties(workInProgress), null;
                        } else 2 * now$1() - _type.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes && (workInProgress.flags |= 128, newProps = !0, cutOffTailIfNeeded(_type, !1), workInProgress.lanes = 4194304);
                    }
                    _type.isBackwards ? (returnFiber.sibling = workInProgress.child, workInProgress.child = returnFiber) : (current = _type.last, null !== current ? current.sibling = returnFiber : workInProgress.child = returnFiber, _type.last = returnFiber);
                }
                if (null !== _type.tail) return current = _type.tail, _type.rendering = current, _type.tail = current.sibling, _type.renderingStartTime = now$1(), current.sibling = null, renderLanes = suspenseStackCursor.current, renderLanes = newProps ? renderLanes & SubtreeSuspenseContextMask | ForceSuspenseFallback : renderLanes & SubtreeSuspenseContextMask, push(suspenseStackCursor, renderLanes, workInProgress), current;
                bubbleProperties(workInProgress);
                return null;
            case 22:
            case 23:
                return popSuspenseHandler(workInProgress), popHiddenContext(workInProgress), newProps = null !== workInProgress.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress.flags |= 8192) : newProps && (workInProgress.flags |= 8192), newProps ? 0 !== (renderLanes & 536870912) && 0 === (workInProgress.flags & 128) && (bubbleProperties(workInProgress), workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192)) : bubbleProperties(workInProgress), renderLanes = workInProgress.updateQueue, null !== renderLanes && scheduleRetryEffect(workInProgress, renderLanes.retryQueue), renderLanes = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress.memoizedState && null !== workInProgress.memoizedState.cachePool && (newProps = workInProgress.memoizedState.cachePool.pool), newProps !== renderLanes && (workInProgress.flags |= 2048), null !== current && pop(resumedCache, workInProgress), null;
            case 24:
                return renderLanes = null, null !== current && (renderLanes = current.memoizedState.cache), workInProgress.memoizedState.cache !== renderLanes && (workInProgress.flags |= 2048), popProvider(CacheContext, workInProgress), bubbleProperties(workInProgress), null;
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error("Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function unwindWork(current, workInProgress) {
        popTreeContext(workInProgress);
        switch(workInProgress.tag){
            case 1:
                return current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, (workInProgress.mode & ProfileMode) !== NoMode && transferActualDuration(workInProgress), workInProgress) : null;
            case 3:
                return popProvider(CacheContext, workInProgress), popHostContainer(workInProgress), current = workInProgress.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
            case 26:
            case 27:
            case 5:
                return popHostContext(workInProgress), null;
            case 13:
                popSuspenseHandler(workInProgress);
                current = workInProgress.memoizedState;
                if (null !== current && null !== current.dehydrated) {
                    if (null === workInProgress.alternate) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
                    resetHydrationState();
                }
                current = workInProgress.flags;
                return current & 65536 ? (workInProgress.flags = current & -65537 | 128, (workInProgress.mode & ProfileMode) !== NoMode && transferActualDuration(workInProgress), workInProgress) : null;
            case 19:
                return pop(suspenseStackCursor, workInProgress), null;
            case 4:
                return popHostContainer(workInProgress), null;
            case 10:
                return popProvider(workInProgress.type, workInProgress), null;
            case 22:
            case 23:
                return popSuspenseHandler(workInProgress), popHiddenContext(workInProgress), null !== current && pop(resumedCache, workInProgress), current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, (workInProgress.mode & ProfileMode) !== NoMode && transferActualDuration(workInProgress), workInProgress) : null;
            case 24:
                return popProvider(CacheContext, workInProgress), null;
            case 25:
                return null;
            default:
                return null;
        }
    }
    function unwindInterruptedWork(current, interruptedWork) {
        popTreeContext(interruptedWork);
        switch(interruptedWork.tag){
            case 3:
                popProvider(CacheContext, interruptedWork);
                popHostContainer(interruptedWork);
                break;
            case 26:
            case 27:
            case 5:
                popHostContext(interruptedWork);
                break;
            case 4:
                popHostContainer(interruptedWork);
                break;
            case 13:
                popSuspenseHandler(interruptedWork);
                break;
            case 19:
                pop(suspenseStackCursor, interruptedWork);
                break;
            case 10:
                popProvider(interruptedWork.type, interruptedWork);
                break;
            case 22:
            case 23:
                popSuspenseHandler(interruptedWork);
                popHiddenContext(interruptedWork);
                null !== current && pop(resumedCache, interruptedWork);
                break;
            case 24:
                popProvider(CacheContext, interruptedWork);
        }
    }
    function shouldProfile(current) {
        return (current.mode & ProfileMode) !== NoMode;
    }
    function commitHookLayoutEffects(finishedWork, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListMount(hookFlags, finishedWork), recordEffectDuration()) : commitHookEffectListMount(hookFlags, finishedWork);
    }
    function commitHookLayoutUnmountEffects(finishedWork, nearestMountedAncestor, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListUnmount(hookFlags, finishedWork, nearestMountedAncestor), recordEffectDuration()) : commitHookEffectListUnmount(hookFlags, finishedWork, nearestMountedAncestor);
    }
    function commitHookEffectListMount(flags, finishedWork) {
        try {
            var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
            if (null !== lastEffect) {
                var firstEffect = lastEffect.next;
                updateQueue = firstEffect;
                do {
                    if ((updateQueue.tag & flags) === flags && ((flags & Passive) !== NoFlags ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted && injectedProfilingHooks.markComponentPassiveEffectMountStarted(finishedWork) : (flags & Layout) !== NoFlags && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted && injectedProfilingHooks.markComponentLayoutEffectMountStarted(finishedWork), lastEffect = void 0, (flags & Insertion) !== NoFlags && (isRunningInsertionEffect = !0), lastEffect = runWithFiberInDEV(finishedWork, callCreateInDEV, updateQueue), (flags & Insertion) !== NoFlags && (isRunningInsertionEffect = !1), (flags & Passive) !== NoFlags ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped && injectedProfilingHooks.markComponentPassiveEffectMountStopped() : (flags & Layout) !== NoFlags && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped && injectedProfilingHooks.markComponentLayoutEffectMountStopped(), void 0 !== lastEffect && "function" !== typeof lastEffect)) {
                        var hookName = void 0;
                        hookName = 0 !== (updateQueue.tag & Layout) ? "useLayoutEffect" : 0 !== (updateQueue.tag & Insertion) ? "useInsertionEffect" : "useEffect";
                        var addendum = void 0;
                        addendum = null === lastEffect ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : "function" === typeof lastEffect.then ? "\n\nIt looks like you wrote " + hookName + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + hookName + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching" : " You returned: " + lastEffect;
                        runWithFiberInDEV(finishedWork, function(n, a) {
                            console.error("%s must not return anything besides a function, which is used for clean-up.%s", n, a);
                        }, hookName, addendum);
                    }
                    updateQueue = updateQueue.next;
                }while (updateQueue !== firstEffect);
            }
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor) {
        try {
            var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
            if (null !== lastEffect) {
                var firstEffect = lastEffect.next;
                updateQueue = firstEffect;
                do {
                    if ((updateQueue.tag & flags) === flags) {
                        var inst = updateQueue.inst, destroy = inst.destroy;
                        void 0 !== destroy && (inst.destroy = void 0, (flags & Passive) !== NoFlags ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted && injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(finishedWork) : (flags & Layout) !== NoFlags && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted && injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(finishedWork), (flags & Insertion) !== NoFlags && (isRunningInsertionEffect = !0), lastEffect = finishedWork, runWithFiberInDEV(lastEffect, callDestroyInDEV, lastEffect, nearestMountedAncestor, destroy), (flags & Insertion) !== NoFlags && (isRunningInsertionEffect = !1), (flags & Passive) !== NoFlags ? null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped && injectedProfilingHooks.markComponentPassiveEffectUnmountStopped() : (flags & Layout) !== NoFlags && null !== injectedProfilingHooks && "function" === typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped && injectedProfilingHooks.markComponentLayoutEffectUnmountStopped());
                    }
                    updateQueue = updateQueue.next;
                }while (updateQueue !== firstEffect);
            }
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function commitHookPassiveMountEffects(finishedWork, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListMount(hookFlags, finishedWork), recordEffectDuration()) : commitHookEffectListMount(hookFlags, finishedWork);
    }
    function commitHookPassiveUnmountEffects(finishedWork, nearestMountedAncestor, hookFlags) {
        shouldProfile(finishedWork) ? (startEffectTimer(), commitHookEffectListUnmount(hookFlags, finishedWork, nearestMountedAncestor), recordEffectDuration()) : commitHookEffectListUnmount(hookFlags, finishedWork, nearestMountedAncestor);
    }
    function commitClassCallbacks(finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        if (null !== updateQueue) {
            var instance = finishedWork.stateNode;
            finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (instance.props !== finishedWork.memoizedProps && console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"), instance.state !== finishedWork.memoizedState && console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"));
            try {
                runWithFiberInDEV(finishedWork, commitCallbacks, updateQueue, instance);
            } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
        }
    }
    function callGetSnapshotBeforeUpdates(instance, prevProps, prevState) {
        return instance.getSnapshotBeforeUpdate(prevProps, prevState);
    }
    function commitClassSnapshot(finishedWork, current) {
        var prevProps = current.memoizedProps, prevState = current.memoizedState;
        current = finishedWork.stateNode;
        finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (current.props !== finishedWork.memoizedProps && console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"), current.state !== finishedWork.memoizedState && console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"));
        try {
            var resolvedPrevProps = resolveClassComponentProps(finishedWork.type, prevProps, finishedWork.elementType === finishedWork.type);
            var snapshot = runWithFiberInDEV(finishedWork, callGetSnapshotBeforeUpdates, current, resolvedPrevProps, prevState);
            prevProps = didWarnAboutUndefinedSnapshotBeforeUpdate;
            void 0 !== snapshot || prevProps.has(finishedWork.type) || (prevProps.add(finishedWork.type), runWithFiberInDEV(finishedWork, function() {
                console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentNameFromFiber(finishedWork));
            }));
            current.__reactInternalSnapshotBeforeUpdate = snapshot;
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
        instance.props = resolveClassComponentProps(current.type, current.memoizedProps);
        instance.state = current.memoizedState;
        shouldProfile(current) ? (startEffectTimer(), runWithFiberInDEV(current, callComponentWillUnmountInDEV, current, nearestMountedAncestor, instance), recordEffectDuration()) : runWithFiberInDEV(current, callComponentWillUnmountInDEV, current, nearestMountedAncestor, instance);
    }
    function commitAttachRef(finishedWork) {
        var ref = finishedWork.ref;
        if (null !== ref) {
            switch(finishedWork.tag){
                case 26:
                case 27:
                case 5:
                    var instanceToUse = finishedWork.stateNode;
                    break;
                case 30:
                    instanceToUse = finishedWork.stateNode;
                    break;
                default:
                    instanceToUse = finishedWork.stateNode;
            }
            if ("function" === typeof ref) {
                if (shouldProfile(finishedWork)) try {
                    startEffectTimer(), finishedWork.refCleanup = ref(instanceToUse);
                } finally{
                    recordEffectDuration();
                }
                else finishedWork.refCleanup = ref(instanceToUse);
            } else "string" === typeof ref ? console.error("String refs are no longer supported.") : ref.hasOwnProperty("current") || console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", getComponentNameFromFiber(finishedWork)), ref.current = instanceToUse;
        }
    }
    function safelyAttachRef(current, nearestMountedAncestor) {
        try {
            runWithFiberInDEV(current, commitAttachRef, current);
        } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
        }
    }
    function safelyDetachRef(current, nearestMountedAncestor) {
        var ref = current.ref, refCleanup = current.refCleanup;
        if (null !== ref) {
            if ("function" === typeof refCleanup) try {
                if (shouldProfile(current)) try {
                    startEffectTimer(), runWithFiberInDEV(current, refCleanup);
                } finally{
                    recordEffectDuration(current);
                }
                else runWithFiberInDEV(current, refCleanup);
            } catch (error) {
                captureCommitPhaseError(current, nearestMountedAncestor, error);
            } finally{
                current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
            }
            else if ("function" === typeof ref) try {
                if (shouldProfile(current)) try {
                    startEffectTimer(), runWithFiberInDEV(current, ref, null);
                } finally{
                    recordEffectDuration(current);
                }
                else runWithFiberInDEV(current, ref, null);
            } catch (error$7) {
                captureCommitPhaseError(current, nearestMountedAncestor, error$7);
            }
            else ref.current = null;
        }
    }
    function commitProfiler(finishedWork, current, commitStartTime, effectDuration) {
        var _finishedWork$memoize = finishedWork.memoizedProps, id = _finishedWork$memoize.id, onCommit = _finishedWork$memoize.onCommit;
        _finishedWork$memoize = _finishedWork$memoize.onRender;
        current = null === current ? "mount" : "update";
        currentUpdateIsNested && (current = "nested-update");
        "function" === typeof _finishedWork$memoize && _finishedWork$memoize(id, current, finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitStartTime);
        "function" === typeof onCommit && onCommit(finishedWork.memoizedProps.id, current, effectDuration, commitStartTime);
    }
    function commitProfilerPostCommitImpl(finishedWork, current, commitStartTime, passiveEffectDuration) {
        var _finishedWork$memoize2 = finishedWork.memoizedProps;
        finishedWork = _finishedWork$memoize2.id;
        _finishedWork$memoize2 = _finishedWork$memoize2.onPostCommit;
        current = null === current ? "mount" : "update";
        currentUpdateIsNested && (current = "nested-update");
        "function" === typeof _finishedWork$memoize2 && _finishedWork$memoize2(finishedWork, current, passiveEffectDuration, commitStartTime);
    }
    function commitHostMount(finishedWork) {
        var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
        try {
            runWithFiberInDEV(finishedWork, commitMount, instance, type, props, finishedWork);
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function commitHostUpdate(finishedWork, newProps, oldProps) {
        try {
            runWithFiberInDEV(finishedWork, commitUpdate, finishedWork.stateNode, finishedWork.type, oldProps, newProps, finishedWork);
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function isHostParent(fiber) {
        return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
    }
    function getHostSibling(fiber) {
        a: for(;;){
            for(; null === fiber.sibling;){
                if (null === fiber.return || isHostParent(fiber.return)) return null;
                fiber = fiber.return;
            }
            fiber.sibling.return = fiber.return;
            for(fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;){
                if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
                if (fiber.flags & 2) continue a;
                if (null === fiber.child || 4 === fiber.tag) continue a;
                else fiber.child.return = fiber, fiber = fiber.child;
            }
            if (!(fiber.flags & 2)) return fiber.stateNode;
        }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
        var tag = node.tag;
        if (5 === tag || 6 === tag) node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
        else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node)) for(insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node;)insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
    }
    function insertOrAppendPlacementNode(node, before, parent) {
        var tag = node.tag;
        if (5 === tag || 6 === tag) node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
        else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node)) for(insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node;)insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
    }
    function commitPlacement(finishedWork) {
        for(var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber;){
            if (isHostParent(parentFiber)) {
                hostParentFiber = parentFiber;
                break;
            }
            parentFiber = parentFiber.return;
        }
        if (null == hostParentFiber) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        switch(hostParentFiber.tag){
            case 27:
                hostParentFiber = hostParentFiber.stateNode;
                parentFiber = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, parentFiber, hostParentFiber);
                break;
            case 5:
                parentFiber = hostParentFiber.stateNode;
                hostParentFiber.flags & 32 && (resetTextContent(parentFiber), hostParentFiber.flags &= -33);
                hostParentFiber = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, hostParentFiber, parentFiber);
                break;
            case 3:
            case 4:
                hostParentFiber = hostParentFiber.stateNode.containerInfo;
                parentFiber = getHostSibling(finishedWork);
                insertOrAppendPlacementNodeIntoContainer(finishedWork, parentFiber, hostParentFiber);
                break;
            default:
                throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
        }
    }
    function commitHostSingletonAcquisition(finishedWork) {
        var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
        try {
            runWithFiberInDEV(finishedWork, acquireSingletonInstance, finishedWork.type, props, singleton, finishedWork);
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function commitBeforeMutationEffects(root, firstChild) {
        root = root.containerInfo;
        eventsEnabled = _enabled;
        root = getActiveElementDeep(root);
        if (hasSelectionCapabilities(root)) {
            if ("selectionStart" in root) var JSCompiler_temp = {
                start: root.selectionStart,
                end: root.selectionEnd
            };
            else a: {
                JSCompiler_temp = (JSCompiler_temp = root.ownerDocument) && JSCompiler_temp.defaultView || window;
                var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
                if (selection && 0 !== selection.rangeCount) {
                    JSCompiler_temp = selection.anchorNode;
                    var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
                    selection = selection.focusOffset;
                    try {
                        JSCompiler_temp.nodeType, focusNode.nodeType;
                    } catch (e$2) {
                        JSCompiler_temp = null;
                        break a;
                    }
                    var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root, parentNode = null;
                    b: for(;;){
                        for(var next;;){
                            node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
                            node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
                            3 === node.nodeType && (length += node.nodeValue.length);
                            if (null === (next = node.firstChild)) break;
                            parentNode = node;
                            node = next;
                        }
                        for(;;){
                            if (node === root) break b;
                            parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
                            parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
                            if (null !== (next = node.nextSibling)) break;
                            node = parentNode;
                            parentNode = node.parentNode;
                        }
                        node = next;
                    }
                    JSCompiler_temp = -1 === start || -1 === end ? null : {
                        start: start,
                        end: end
                    };
                } else JSCompiler_temp = null;
            }
            JSCompiler_temp = JSCompiler_temp || {
                start: 0,
                end: 0
            };
        } else JSCompiler_temp = null;
        selectionInformation = {
            focusedElem: root,
            selectionRange: JSCompiler_temp
        };
        _enabled = !1;
        for(nextEffect = firstChild; null !== nextEffect;)if (firstChild = nextEffect, root = firstChild.child, 0 !== (firstChild.subtreeFlags & 1024) && null !== root) root.return = firstChild, nextEffect = root;
        else for(; null !== nextEffect;){
            root = firstChild = nextEffect;
            JSCompiler_temp = root.alternate;
            anchorOffset = root.flags;
            switch(root.tag){
                case 0:
                    break;
                case 11:
                case 15:
                    break;
                case 1:
                    0 !== (anchorOffset & 1024) && null !== JSCompiler_temp && commitClassSnapshot(root, JSCompiler_temp);
                    break;
                case 3:
                    if (0 !== (anchorOffset & 1024)) {
                        if (root = root.stateNode.containerInfo, JSCompiler_temp = root.nodeType, 9 === JSCompiler_temp) clearContainerSparingly(root);
                        else if (1 === JSCompiler_temp) switch(root.nodeName){
                            case "HEAD":
                            case "HTML":
                            case "BODY":
                                clearContainerSparingly(root);
                                break;
                            default:
                                root.textContent = "";
                        }
                    }
                    break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    if (0 !== (anchorOffset & 1024)) throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
            }
            root = firstChild.sibling;
            if (null !== root) {
                root.return = firstChild.return;
                nextEffect = root;
                break;
            }
            nextEffect = firstChild.return;
        }
    }
    function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
        var flags = finishedWork.flags;
        switch(finishedWork.tag){
            case 0:
            case 11:
            case 15:
                recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                flags & 4 && commitHookLayoutEffects(finishedWork, Layout | HasEffect);
                break;
            case 1:
                recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                if (flags & 4) {
                    if (finishedRoot = finishedWork.stateNode, null === current) finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (finishedRoot.props !== finishedWork.memoizedProps && console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"), finishedRoot.state !== finishedWork.memoizedState && console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance")), shouldProfile(finishedWork) ? (startEffectTimer(), runWithFiberInDEV(finishedWork, callComponentDidMountInDEV, finishedWork, finishedRoot), recordEffectDuration()) : runWithFiberInDEV(finishedWork, callComponentDidMountInDEV, finishedWork, finishedRoot);
                    else {
                        var prevProps = resolveClassComponentProps(finishedWork.type, current.memoizedProps);
                        current = current.memoizedState;
                        finishedWork.type.defaultProps || "ref" in finishedWork.memoizedProps || didWarnAboutReassigningProps || (finishedRoot.props !== finishedWork.memoizedProps && console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"), finishedRoot.state !== finishedWork.memoizedState && console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance"));
                        shouldProfile(finishedWork) ? (startEffectTimer(), runWithFiberInDEV(finishedWork, callComponentDidUpdateInDEV, finishedWork, finishedRoot, prevProps, current, finishedRoot.__reactInternalSnapshotBeforeUpdate), recordEffectDuration()) : runWithFiberInDEV(finishedWork, callComponentDidUpdateInDEV, finishedWork, finishedRoot, prevProps, current, finishedRoot.__reactInternalSnapshotBeforeUpdate);
                    }
                }
                flags & 64 && commitClassCallbacks(finishedWork);
                flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
                break;
            case 3:
                current = pushNestedEffectDurations();
                recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                if (flags & 64 && (flags = finishedWork.updateQueue, null !== flags)) {
                    prevProps = null;
                    if (null !== finishedWork.child) switch(finishedWork.child.tag){
                        case 27:
                        case 5:
                            prevProps = finishedWork.child.stateNode;
                            break;
                        case 1:
                            prevProps = finishedWork.child.stateNode;
                    }
                    try {
                        runWithFiberInDEV(finishedWork, commitCallbacks, flags, prevProps);
                    } catch (error) {
                        captureCommitPhaseError(finishedWork, finishedWork.return, error);
                    }
                }
                finishedRoot.effectDuration += popNestedEffectDurations(current);
                break;
            case 27:
                null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
            case 26:
            case 5:
                recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                null === current && flags & 4 && commitHostMount(finishedWork);
                flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
                break;
            case 12:
                if (flags & 4) {
                    flags = pushNestedEffectDurations();
                    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                    finishedRoot = finishedWork.stateNode;
                    finishedRoot.effectDuration += bubbleNestedEffectDurations(flags);
                    try {
                        runWithFiberInDEV(finishedWork, commitProfiler, finishedWork, current, commitStartTime, finishedRoot.effectDuration);
                    } catch (error) {
                        captureCommitPhaseError(finishedWork, finishedWork.return, error);
                    }
                } else recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                break;
            case 13:
                recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
                flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(null, finishedWork), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
                break;
            case 22:
                flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
                if (!flags) {
                    current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
                    prevProps = offscreenSubtreeIsHidden;
                    var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
                    offscreenSubtreeIsHidden = flags;
                    (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, 0 !== (finishedWork.subtreeFlags & 8772)) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
                    offscreenSubtreeIsHidden = prevProps;
                    offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
                }
                break;
            case 30:
                break;
            default:
                recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        }
    }
    function detachFiberAfterEffects(fiber) {
        var alternate = fiber.alternate;
        null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
        fiber.child = null;
        fiber.deletions = null;
        fiber.sibling = null;
        5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
        fiber.stateNode = null;
        fiber._debugOwner = null;
        fiber.return = null;
        fiber.dependencies = null;
        fiber.memoizedProps = null;
        fiber.memoizedState = null;
        fiber.pendingProps = null;
        fiber.stateNode = null;
        fiber.updateQueue = null;
    }
    function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
        for(parent = parent.child; null !== parent;)commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
    }
    function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount) try {
            injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
        } catch (err) {
            hasLoggedError || (hasLoggedError = !0, console.error("React instrumentation encountered an error: %s", err));
        }
        switch(deletedFiber.tag){
            case 26:
                offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
                break;
            case 27:
                offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
                var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
                isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = !1);
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                runWithFiberInDEV(deletedFiber, releaseSingletonInstance, deletedFiber.stateNode);
                hostParent = prevHostParent;
                hostParentIsContainer = prevHostParentIsContainer;
                break;
            case 5:
                offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
            case 6:
                prevHostParent = hostParent;
                prevHostParentIsContainer = hostParentIsContainer;
                hostParent = null;
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                hostParent = prevHostParent;
                hostParentIsContainer = prevHostParentIsContainer;
                if (null !== hostParent) {
                    if (hostParentIsContainer) try {
                        runWithFiberInDEV(deletedFiber, removeChildFromContainer, hostParent, deletedFiber.stateNode);
                    } catch (error) {
                        captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
                    }
                    else try {
                        runWithFiberInDEV(deletedFiber, removeChild, hostParent, deletedFiber.stateNode);
                    } catch (error) {
                        captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
                    }
                }
                break;
            case 18:
                null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearSuspenseBoundary(9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot, deletedFiber.stateNode), retryIfBlockedOn(finishedRoot)) : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
                break;
            case 4:
                prevHostParent = hostParent;
                prevHostParentIsContainer = hostParentIsContainer;
                hostParent = deletedFiber.stateNode.containerInfo;
                hostParentIsContainer = !0;
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                hostParent = prevHostParent;
                hostParentIsContainer = prevHostParentIsContainer;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                offscreenSubtreeWasHidden || commitHookEffectListUnmount(Insertion, deletedFiber, nearestMountedAncestor);
                offscreenSubtreeWasHidden || commitHookLayoutUnmountEffects(deletedFiber, nearestMountedAncestor, Layout);
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                break;
            case 1:
                offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(deletedFiber, nearestMountedAncestor, prevHostParent));
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                break;
            case 21:
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                break;
            case 22:
                offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
                offscreenSubtreeWasHidden = prevHostParent;
                break;
            default:
                recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
        }
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot)))) try {
            runWithFiberInDEV(finishedWork, commitHydratedSuspenseInstance, finishedRoot);
        } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function getRetryCache(finishedWork) {
        switch(finishedWork.tag){
            case 13:
            case 19:
                var retryCache = finishedWork.stateNode;
                null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
                return retryCache;
            case 22:
                return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
            default:
                throw Error("Unexpected Suspense handler tag (" + finishedWork.tag + "). This is a bug in React.");
        }
    }
    function attachSuspenseRetryListeners(finishedWork, wakeables) {
        var retryCache = getRetryCache(finishedWork);
        wakeables.forEach(function(wakeable) {
            var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
            if (!retryCache.has(wakeable)) {
                retryCache.add(wakeable);
                if (isDevToolsPresent) {
                    if (null !== inProgressLanes && null !== inProgressRoot) restorePendingUpdaters(inProgressRoot, inProgressLanes);
                    else throw Error("Expected finished root and lanes to be set. This is a bug in React.");
                }
                wakeable.then(retry, retry);
            }
        });
    }
    function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
        var deletions = parentFiber.deletions;
        if (null !== deletions) for(var i = 0; i < deletions.length; i++){
            var root = root$jscomp$0, returnFiber = parentFiber, deletedFiber = deletions[i], parent = returnFiber;
            a: for(; null !== parent;){
                switch(parent.tag){
                    case 27:
                        if (isSingletonScope(parent.type)) {
                            hostParent = parent.stateNode;
                            hostParentIsContainer = !1;
                            break a;
                        }
                        break;
                    case 5:
                        hostParent = parent.stateNode;
                        hostParentIsContainer = !1;
                        break a;
                    case 3:
                    case 4:
                        hostParent = parent.stateNode.containerInfo;
                        hostParentIsContainer = !0;
                        break a;
                }
                parent = parent.return;
            }
            if (null === hostParent) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
            commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber);
            hostParent = null;
            hostParentIsContainer = !1;
            root = deletedFiber;
            returnFiber = root.alternate;
            null !== returnFiber && (returnFiber.return = null);
            root.return = null;
        }
        if (parentFiber.subtreeFlags & 13878) for(parentFiber = parentFiber.child; null !== parentFiber;)commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
    }
    function commitMutationEffectsOnFiber(finishedWork, root) {
        var current = finishedWork.alternate, flags = finishedWork.flags;
        switch(finishedWork.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                flags & 4 && (commitHookEffectListUnmount(Insertion | HasEffect, finishedWork, finishedWork.return), commitHookEffectListMount(Insertion | HasEffect, finishedWork), commitHookLayoutUnmountEffects(finishedWork, finishedWork.return, Layout | HasEffect));
                break;
            case 1:
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
                flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
                break;
            case 26:
                var hoistableRoot = currentHoistableRoot;
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
                if (flags & 4) {
                    if (root = null !== current ? current.memoizedState : null, flags = finishedWork.memoizedState, null === current) {
                        if (null === flags) {
                            if (null === finishedWork.stateNode) {
                                a: {
                                    flags = finishedWork.type;
                                    current = finishedWork.memoizedProps;
                                    root = hoistableRoot.ownerDocument || hoistableRoot;
                                    b: switch(flags){
                                        case "title":
                                            hoistableRoot = root.getElementsByTagName("title")[0];
                                            if (!hoistableRoot || hoistableRoot[internalHoistableMarker] || hoistableRoot[internalInstanceKey] || hoistableRoot.namespaceURI === SVG_NAMESPACE || hoistableRoot.hasAttribute("itemprop")) hoistableRoot = root.createElement(flags), root.head.insertBefore(hoistableRoot, root.querySelector("head > title"));
                                            setInitialProperties(hoistableRoot, flags, current);
                                            hoistableRoot[internalInstanceKey] = finishedWork;
                                            markNodeAsHoistable(hoistableRoot);
                                            flags = hoistableRoot;
                                            break a;
                                        case "link":
                                            var maybeNodes = getHydratableHoistableCache("link", "href", root).get(flags + (current.href || ""));
                                            if (maybeNodes) {
                                                for(var i = 0; i < maybeNodes.length; i++)if (hoistableRoot = maybeNodes[i], hoistableRoot.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && hoistableRoot.getAttribute("rel") === (null == current.rel ? null : current.rel) && hoistableRoot.getAttribute("title") === (null == current.title ? null : current.title) && hoistableRoot.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                                                    maybeNodes.splice(i, 1);
                                                    break b;
                                                }
                                            }
                                            hoistableRoot = root.createElement(flags);
                                            setInitialProperties(hoistableRoot, flags, current);
                                            root.head.appendChild(hoistableRoot);
                                            break;
                                        case "meta":
                                            if (maybeNodes = getHydratableHoistableCache("meta", "content", root).get(flags + (current.content || ""))) {
                                                for(i = 0; i < maybeNodes.length; i++)if (hoistableRoot = maybeNodes[i], checkAttributeStringCoercion(current.content, "content"), hoistableRoot.getAttribute("content") === (null == current.content ? null : "" + current.content) && hoistableRoot.getAttribute("name") === (null == current.name ? null : current.name) && hoistableRoot.getAttribute("property") === (null == current.property ? null : current.property) && hoistableRoot.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && hoistableRoot.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                                                    maybeNodes.splice(i, 1);
                                                    break b;
                                                }
                                            }
                                            hoistableRoot = root.createElement(flags);
                                            setInitialProperties(hoistableRoot, flags, current);
                                            root.head.appendChild(hoistableRoot);
                                            break;
                                        default:
                                            throw Error('getNodesForType encountered a type it did not expect: "' + flags + '". This is a bug in React.');
                                    }
                                    hoistableRoot[internalInstanceKey] = finishedWork;
                                    markNodeAsHoistable(hoistableRoot);
                                    flags = hoistableRoot;
                                }
                                finishedWork.stateNode = flags;
                            } else mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode);
                        } else finishedWork.stateNode = acquireResource(hoistableRoot, flags, finishedWork.memoizedProps);
                    } else root !== flags ? (null === root ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : root.count--, null === flags ? mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode) : acquireResource(hoistableRoot, flags, finishedWork.memoizedProps)) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
                }
                break;
            case 27:
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
                null !== current && flags & 4 && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
                break;
            case 5:
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
                if (finishedWork.flags & 32) {
                    root = finishedWork.stateNode;
                    try {
                        runWithFiberInDEV(finishedWork, resetTextContent, root);
                    } catch (error) {
                        captureCommitPhaseError(finishedWork, finishedWork.return, error);
                    }
                }
                flags & 4 && null != finishedWork.stateNode && (root = finishedWork.memoizedProps, commitHostUpdate(finishedWork, root, null !== current ? current.memoizedProps : root));
                flags & 1024 && (needsFormReset = !0, "form" !== finishedWork.type && console.error("Unexpected host component type. Expected a form. This is a bug in React."));
                break;
            case 6:
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                if (flags & 4) {
                    if (null === finishedWork.stateNode) throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                    flags = finishedWork.memoizedProps;
                    current = null !== current ? current.memoizedProps : flags;
                    root = finishedWork.stateNode;
                    try {
                        runWithFiberInDEV(finishedWork, commitTextUpdate, root, current, flags);
                    } catch (error) {
                        captureCommitPhaseError(finishedWork, finishedWork.return, error);
                    }
                }
                break;
            case 3:
                hoistableRoot = pushNestedEffectDurations();
                tagCaches = null;
                maybeNodes = currentHoistableRoot;
                currentHoistableRoot = getHoistableRoot(root.containerInfo);
                recursivelyTraverseMutationEffects(root, finishedWork);
                currentHoistableRoot = maybeNodes;
                commitReconciliationEffects(finishedWork);
                if (flags & 4 && null !== current && current.memoizedState.isDehydrated) try {
                    runWithFiberInDEV(finishedWork, commitHydratedContainer, root.containerInfo);
                } catch (error) {
                    captureCommitPhaseError(finishedWork, finishedWork.return, error);
                }
                needsFormReset && (needsFormReset = !1, recursivelyResetForms(finishedWork));
                root.effectDuration += popNestedEffectDurations(hoistableRoot);
                break;
            case 4:
                flags = currentHoistableRoot;
                currentHoistableRoot = getHoistableRoot(finishedWork.stateNode.containerInfo);
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                currentHoistableRoot = flags;
                break;
            case 12:
                flags = pushNestedEffectDurations();
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                finishedWork.stateNode.effectDuration += bubbleNestedEffectDurations(flags);
                break;
            case 13:
                recursivelyTraverseMutationEffects(root, finishedWork);
                commitReconciliationEffects(finishedWork);
                finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now$1());
                flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
                break;
            case 22:
                hoistableRoot = null !== finishedWork.memoizedState;
                var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
                offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
                offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
                recursivelyTraverseMutationEffects(root, finishedWork);
                offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
                offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
                commitReconciliationEffects(finishedWork);
                if (flags & 8192) a: for(root = finishedWork.stateNode, root._visibility = hoistableRoot ? root._visibility & ~OffscreenVisible : root._visibility | OffscreenVisible, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root = finishedWork;;){
                    if (5 === root.tag || 26 === root.tag) {
                        if (null === current) {
                            wasHidden = current = root;
                            try {
                                maybeNodes = wasHidden.stateNode, hoistableRoot ? runWithFiberInDEV(wasHidden, hideInstance, maybeNodes) : runWithFiberInDEV(wasHidden, unhideInstance, wasHidden.stateNode, wasHidden.memoizedProps);
                            } catch (error) {
                                captureCommitPhaseError(wasHidden, wasHidden.return, error);
                            }
                        }
                    } else if (6 === root.tag) {
                        if (null ==