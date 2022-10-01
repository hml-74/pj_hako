import Home from '~/pages/Home';
import Compose from '~/pages/Compose';
import Convert from '~/pages/Convert';
import Publication from '~/pages/Publication';
import Discuss from '~/pages/Discuss';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/compose', component: Compose },
  { path: '/convert', component: Convert },
  { path: '/publication', component: Publication },
  { path: '/discuss', component: Discuss },
];
