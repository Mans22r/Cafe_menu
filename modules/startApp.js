import createHomePage from './homepage.js';
import createNavBar from './navBar.js';
import navigate from './navigation.js';

const startApp = () => {
  createNavBar();
  createHomePage();
  navigate();
};

export default startApp;
