import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

const store = configureStore({
  reducer: reducers,
  // Otras configuraciones de la tienda aquí...
  devTools: process.env.NODE_ENV !== 'production', // Opciones para las herramientas de desarrollo de Redux
});

export default store;
