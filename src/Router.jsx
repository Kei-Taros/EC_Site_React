import React from 'react'
import { Switch, Route } from "react-router-dom";
import { SignIn, ProductList, SignUp, Reset, ProductEdit, ProductDetail, Home } from './templates'
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
        <Route exact path="(/)?" component={Home/*ProductList*/} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
        <Route exact path={"/product/:id"} component={ProductDetail} />
        <Route path={"/productlist"} component={ProductList} />
      </Auth>
    </Switch>
  )
}
export default Router;

/*
 [�\�[�X�R�[�h�T��]
 �e�y�[�W���ƂɃ����N��ݒ肵�Ă���
 */

