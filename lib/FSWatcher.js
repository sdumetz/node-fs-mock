// Generated by CoffeeScript 1.6.3
(function() {
  var EventEmitter, FSWatcher,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EventEmitter = require('events').EventEmitter;

  FSWatcher = (function(_super) {
    __extends(FSWatcher, _super);

    FSWatcher.prototype.listener = null;

    function FSWatcher(listener) {
      this.listener = listener;
      FSWatcher.__super__.constructor.apply(this, arguments);
      this.addListener('change', this.listener);
    }

    FSWatcher.prototype.close = function() {
      return this.removeListener('change', this.listener);
    };

    return FSWatcher;

  })(EventEmitter);

  module.exports = FSWatcher;

}).call(this);