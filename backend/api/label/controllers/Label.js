'use strict';

/**
 * Label.js controller
 *
 * @description: A set of functions called "actions" for managing `Label`.
 */

module.exports = {

  /**
   * Retrieve label records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.label.search(ctx.query);
    } else {
      return strapi.services.label.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a label record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.label.fetch(ctx.params);
  },

  /**
   * Count label records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.label.count(ctx.query, populate);
  },

  /**
   * Create a/an label record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.label.add(ctx.request.body);
  },

  /**
   * Update a/an label record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.label.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an label record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.label.remove(ctx.params);
  }
};
