"use strict";

/**
 *  project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi.query("api::project.project").count({ where: query });
  },
});
