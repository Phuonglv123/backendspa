'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 module.exports = {
    active: async ctx => {
      let navigations = await strapi.query('navigation').find({ active: true, navigation_null: true }, ['children']);
      navigations = navigations.map(n => {
        return {
          name: n.name,
          slug: n.slug,
          order: n.order,
          enable: n.enable,
          icon: n.icon ? n.icon.url : '',
          children :n.children
          // id: n.id,
        }
      }).sort((a, b) => (a.order > b.order) ? 1 : -1)
      ctx.send(navigations);
    }
  };
