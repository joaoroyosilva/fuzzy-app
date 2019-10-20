import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dash from '~/pages/Dash';
import Variable from '~/pages/Variable';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dash} />
      <Route path="/variables" component={Variable} />
    </Switch>
  );
}
