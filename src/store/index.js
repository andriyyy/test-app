import { createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Paragraf from "../services/Paragraf";
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        paragraf: new Paragraf(),
      })
    )
  )
);

export default store;
