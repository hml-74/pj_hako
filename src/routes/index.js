import Home from '~/pages/Home';
import Compose from '~/pages/Compose';
import Convert from '~/pages/Convert';
import Publication from '~/pages/Publication';
import Discuss from '~/pages/Discuss';

export const publicRoutes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Compose', path: '/compose', component: Compose },
  { name: 'Convert', path: '/convert', component: Convert },
  { name: 'Publication', path: '/publication', component: Publication },
  { name: 'Discuss', path: '/discuss', component: Discuss },
];
