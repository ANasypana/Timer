import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Navigation
import { book } from './book';

import { Timer } from "../bus/timer";
import { DefaultPage } from "../common/layout/defaultPage";
import {Navbar} from "../common/layout/navbar";


export const Routes = () => {
  return (
    <>
      <Navbar/>
      <section className='container'>
        <Switch>
          <Route exact path={book.root} render={() => <DefaultPage />}/>
          <Route path={book.timer} render={() => <Timer />}/>
          <Route render={() => <DefaultPage/>} />
        </Switch>
      </section>
    </>
  )
}