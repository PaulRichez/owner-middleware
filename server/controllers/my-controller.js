'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('owner-middleware')
      .service('myService')
      .getWelcomeMessage();
  },
});
