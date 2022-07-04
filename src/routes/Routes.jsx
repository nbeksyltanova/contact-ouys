import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Akes from "../pages/Akes";
import ComemtPages from "../pages/ComemtPages";
import { AppContext } from "../AppContext";

const Routes = () => {
  const [seach, setSeach] = React.useState("");

  const onSeachInput = (e) => {
    setSeach(e.target.value);
  };
  return (
    <AppContext.Provider value={{ seach, onSeachInput }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog/:slug" component={Product} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <Route path="/akes" component={Akes} />
        <Route path="/comt" component={ComemtPages} />
      </Switch>
    </AppContext.Provider>
  );
};

export default Routes;
