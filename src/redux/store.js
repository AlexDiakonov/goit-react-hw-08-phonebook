import contactsReducer from "../redux/contactsReducer";
import authReducer from "../redux/auth/authReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middlewareSettings = getDefaultMiddleware();
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: [...middlewareSettings],
});

export const persistor = persistStore(store);
export default store;
