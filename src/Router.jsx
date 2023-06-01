import React from 'react'
import { Switch, Route } from "react-router-dom";
import { SignIn, Home, SignUp, Reset, ProductEdit } from './templates'
import Auth from "./Auth"

function Router() {
  console.log("Router");
  return (

    /* <BrowserRouter>����push(url)�Ńy�[�W�J�ڂ��ł��Ȃ� */
    /* ��Switch�ɕύX(react-router-dom:Ver.5�n) */
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signin/reset" component={Reset} />

      <Auth>
        <Route exact path="(/)?" component={Home} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
      </Auth>
    </Switch>
  )
}
export default Router;

/*
 [�\�[�X�R�[�h�T��]
 �e�y�[�W���ƂɃ����N��ݒ肵�Ă���
 */

