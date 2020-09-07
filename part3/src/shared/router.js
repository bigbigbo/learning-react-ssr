import HomePage from './pages/home';
import AboutPage from './pages/about';

const routes = [
  {
    path: '/',
    icon: 'home',
    name: '首页',
    component: HomePage,
  },
  {
    path: '/home',
    icon: 'home',
    name: '首页',
    component: HomePage,
  },
  {
    path: '/demo',
    icon: 'appstore',
    name: '关于',
    component: AboutPage,
  },
];

export default routes;
