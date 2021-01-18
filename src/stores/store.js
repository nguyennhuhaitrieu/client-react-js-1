import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/rootReducers';
import rootSaga from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const PERSIST_KEY = 'root';

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['login', 'isRemindVocabulary'],
  transforms: [createTransform(
    inboundState => ({ ...inboundState, error: '' }),
    outboundState => ({ ...outboundState, error: '' }),
    { whitelist: ['login'] },
  )],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
