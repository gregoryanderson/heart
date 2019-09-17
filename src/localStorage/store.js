import throttle from "lodash.throttle";

const persistedState = loadState();
const store = createStore(app, persistedState);

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites
  });
});

store.subscribe(
  throttle(() => {
    saveState({
      favorites: store.getState().favorites
    });
  }, 1000)
);
