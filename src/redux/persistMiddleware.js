const persistMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  try {
      localStorage.setItem('appState', JSON.stringify(state));
  } catch (error) {
      console.error('Error saving state to localStorage:', error);
  }
  return result;
};
const loadState = () => {
  try {
      const serializedState = localStorage.getItem('appState');
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (error) {
      console.error('Error loading state from localStorage:', error);
      return undefined;
  }
};

export { persistMiddleware, loadState };