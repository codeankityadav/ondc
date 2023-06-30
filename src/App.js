import React from 'react' 
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistor, store } from './redux/store';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <MainNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
