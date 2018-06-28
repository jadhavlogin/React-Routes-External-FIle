
import Calculator from './appOne/Calculator';
import Feeds from './appTwo/Feeds';
import AppFour from './appFour/AppFour';
import AppThree from './appThree/AppThree';

const Routes = [{
    path: '/calculator',
    component: Calculator
  }, {
    path: '/feed',
    component: Feeds
  }, {
    path: '/appThree',
    component: AppThree
  }, {
    path: '/appFour',
    component: AppFour
  }
];

export default Routes;