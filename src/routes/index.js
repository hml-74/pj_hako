// layout
import { HasSliderLayout } from '~/layouts';

import config from '~/configs';
import Home from '~/pages/Home';
import Compose from '~/pages/Compose';
import Convert from '~/pages/Convert';
import Publication from '~/pages/Publication';
import Discuss from '~/pages/Discuss';
import Profile from '~/pages/Profile';

export const publicRoutes = [
  { name: 'Home', path: config.routes.home, component: Home, layout: HasSliderLayout },
  { name: 'Compose', path: config.routes.compose, component: Compose },
  { name: 'Convert', path: config.routes.convert, component: Convert },
  { name: 'Publication', path: config.routes.publication, component: Publication },
  { name: 'Discuss', path: config.routes.discuss, component: Discuss },
  { path: config.routes.profile, component: Profile },
];
