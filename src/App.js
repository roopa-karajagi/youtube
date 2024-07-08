import { Provider } from 'react-redux';
import './App.css';
import BodyComponent from './components/body/Body';
import Header from './components/header/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './components/body/maincomp/MainComp';
import WatchVideo from './components/body/watchcomp/WatchVideo';
import DemoMemo from './components/demo/Memo';
import DemoRef from './components/demo/Ref';


/**
 * 
 * YouTube Structure
 *  Header
 *  Body Component 
 *    - Side bar
 *      -- Menu Items
 *    - Main Container
 *    - Button List
 *    - Video Container
 *    - Video Card
 *
 */

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<BodyComponent />,
    children: [ 
      {
        path:'/',
        element:<MainComponent />
      },
      {
        path:'/watch',
        element:<WatchVideo />
      },
      {
        path:'/demo',
        element:<>
        <DemoMemo/>
        <DemoRef />
        </>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div className="m-5">
      <Header/>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
