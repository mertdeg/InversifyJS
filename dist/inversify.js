/**
 * inversify v.0.0.7 - A lightweight IoC container written in TypeScript.
 * Copyright (c) 2015 Remo H. Jansen
 * MIT inversify.io/LICENSE
 * http://inversify.io
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.inversify=e()}}(function(){return function e(n,t,i){function r(f,p){if(!t[f]){if(!n[f]){var u="function"==typeof require&&require;if(!p&&u)return u(f,!0);if(o)return o(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var c=t[f]={exports:{}};n[f][0].call(c.exports,function(e){var t=n[f][1][e];return r(t?t:e)},c,c.exports,e,n,t,i)}return t[f].exports}for(var o="function"==typeof require&&require,f=0;f<i.length;f++)r(i[f]);return r}({1:[function(e,n,t){var i=e("./kernel"),r=e("./type_binding"),o=e("./type_binding_scope"),f={Kernel:i,TypeBindingScopeEnum:o,TypeBinding:r};n.exports=f},{"./kernel":2,"./type_binding":3,"./type_binding_scope":4}],2:[function(e,n,t){var i=(e("./type_binding_scope"),function(){function e(){this._bindings=new Object}return e.prototype.bind=function(e){this._validateBinding(e)===!0&&(this._bindings[e.runtimeIdentifier]=e)},e.prototype.unbind=function(e){var n=this._bindings[e];if("undefined"==typeof n)throw new Error("Could not resolve service "+e);delete this._bindings[e]},e.prototype.unbindAll=function(){this._bindings=new Object},e.prototype.resolve=function(e){var n=this._bindings[e];if("undefined"==typeof n)throw new Error("Could not resolve service "+e);if(1===n.scope&&null!==n.cache)return n.cache;var t=this._injectDependencies(n.implementationType);return n.cache=t,t},e.prototype._validateBinding=function(e){var n=!0;if("string"!=typeof e.runtimeIdentifier){var t="Expected type of "+e.runtimeIdentifier+" to be string";console.log(t),n=!1}if("undefined"!=typeof this._bindings[e.runtimeIdentifier]){var t="Dublicated binding runtime identifier "+e.runtimeIdentifier;console.log(t),n=!1}if("function"!=typeof e.implementationType){var t="Expected "+e.implementationType+" to be a constructor";console.log(t),n=!1}return n},e.prototype._getConstructorArguments=function(e){var n,t,i,r,o,f;return o=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,f=/([^\s,]+)/g,n=e.toString().replace(o,""),t=n.indexOf("(")+1,i=n.indexOf(")"),r=n.slice(t,i).match(f),null===r&&(r=[]),r},e.prototype._injectDependencies=function(e){var n=this._getConstructorArguments(e);if(0===n.length)return new e;for(var t=[],i=null,r=0;r<n.length;r++){var o=n[r];i=this.resolve(o),t.push(i)}return this._construct(e,t)},e.prototype._construct=function(e,n){function t(){e.apply(this,n)}return t.prototype=e.prototype,new t},e}());n.exports=i},{"./type_binding_scope":4}],3:[function(e,n,t){var i=e("./type_binding_scope"),r=function(){function e(e,n,t){if(this.runtimeIdentifier=e,this.implementationType=n,this.cache=null,"undefined"==typeof t)this.scope=0;else{if(!i[t]){var r="Invalid scope type "+t;throw new Error(r)}this.scope=t}}return e}();n.exports=r},{"./type_binding_scope":4}],4:[function(e,n,t){var i;!function(e){e[e.Transient=0]="Transient",e[e.Singleton=1]="Singleton"}(i||(i={})),n.exports=i},{}]},{},[1])(1)});