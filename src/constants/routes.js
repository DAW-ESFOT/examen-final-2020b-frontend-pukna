/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro",
  ARTICLES: "/articles",
  PRODUCTS: "/products",
  PRODUCTSID: "/products/:id",

  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,
  ABOUT: "/about",
};

const privateRoutes = {
  HOME: "/",
  // ARTICLE_ID: "/articulo/:id",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
