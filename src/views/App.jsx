import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import SingIn from "./auth/SignIn.jsx"
import SingUp from "./auth/Singup.jsx";
import {ContextProvider} from "./Contex/ContextProvider.jsx";


function App() {
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
  return (
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            {/*user client*/}
            <Route path="/" exact element={<Home/>} />

            <Route path="/login" element={<SingIn/>}/>
            <Route path="/register" element={<SingUp/>}/>

            {/*user client*/}
            {
              ACCESS_TOKEN  ? (
                  <>
                    {/*admin panel links*/}

                    {/*admin panel links*/}
                  </>
              ):(
                  ''
              )
            }




          </Routes>
        </BrowserRouter>

      </ContextProvider>


  );
}

export default App;
