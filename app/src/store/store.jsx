import { configureStore } from "@reduxjs/toolkit";
import staticData from "./StaticDataReducer";
import ldlData from "./LdlDataReducer";
const store = configureStore({
  reducer: {
    staticData: staticData,
    ldlData: ldlData,
  },
});

export default store;
