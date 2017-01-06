/*!
 * common.js - p2p constants for bcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2016, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

var USER_VERSION = require('../../package.json').version;

/**
 * Default protocol version.
 * @const {Number}
 * @default
 */

exports.PROTOCOL_VERSION = 70014;

/**
 * Minimum protocol version we're willing to talk to.
 * @const {Number}
 * @default
 */

exports.MIN_VERSION = 70001;

/**
 * Service bits.
 * @enum {Number}
 * @default
 */

exports.services = {
  /**
   * Whether network services are enabled.
   */

  NETWORK: 1 << 0,

  /**
   * Whether the peer supports the getutxos packet.
   */

  GETUTXO: 1 << 1,

  /**
   * Whether the peer supports BIP37.
   */

  BLOOM: 1 << 2,

  /**
   * Whether the peer supports segregated witness.
   */

  WITNESS: 1 << 3
};

/**
 * BCoin's services (we support everything).
 * @const {Number}
 * @default
 */

exports.LOCAL_SERVICES = 0
  | exports.services.NETWORK
  | exports.services.GETUTXO
  | exports.services.BLOOM
  | exports.services.WITNESS;

/**
 * Required services (network and segwit).
 * @const {Number}
 * @default
 */

exports.REQUIRED_SERVICES = 0
  | exports.services.NETWORK
  | exports.services.WITNESS;

/**
 * Default user agent: `/bcoin:[version]/`.
 * @const {String}
 * @default
 */

exports.USER_AGENT = '/bcoin:' + USER_VERSION + '/';

/**
 * Max message size (~4mb with segwit, formerly 2mb)
 * @const {Number}
 * @default
 */

exports.MAX_MESSAGE = 4 * 1000 * 1000;

/**
 * Amount of time to ban misbheaving peers.
 * @const {Number}
 * @default
 */

exports.BAN_TIME = 24 * 60 * 60;

/**
 * Ban score threshold before ban is placed in effect.
 * @const {Number}
 * @default
 */

exports.BAN_SCORE = 100;