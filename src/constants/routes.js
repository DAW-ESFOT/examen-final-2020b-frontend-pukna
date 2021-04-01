const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro",
  // ARTICLES: "/articles",
  PRODUCTS: "/products",
  MYPRODUCTS: "/misproducts/",
  // REPRODUCTS: "/regproducts/",
  ABOUT: "/about"


  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,

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
