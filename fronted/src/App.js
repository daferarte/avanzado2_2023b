import {BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate, useParams} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import SignIn from './users/SignIn';

let Hello = ()=>{
  return (
    <div>
      <h1>Hola estudiantes</h1>
    </div>
  );
}

let NotImplemented = ()=>{
  return (
    <div>
      <h1>Esta pagina aun no se encuentra lista</h1>
      <Link to='/'>Ir al inicio</Link>
    </div>
  );
}

let UsersOutlet = ()=>{

  let navigate = useNavigate();

  let redirect = ()=>{
    navigate('/');
  };

  return (
    <div>
      <button onClick={redirect}>Ir al inicio</button>
      <Outlet/>
    </div>
  );
}

let UserShow = ()=>{
  let {id} = useParams();
  
  return (
    <div>
      <h1>Usuario {id}</h1>
    </div>
  )
}

let Error404 = ()=>{
  return (
    <div>
      <h1>Esta pagina no existe - 404</h1>
      <Link to='/'>Ir al inicio</Link>
    </div>
  );
}

function App() {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Hello/>} />

          <Route path='/login' element={<NotImplemented/>} />

          <Route path='usuarios' element={<UsersOutlet/>}>
            <Route path=':id' element={<UserShow/>} />
            <Route path='agregar' element={isAuth?<SignIn/>:<Navigate to='/'/>} />
            <Route path='editar/:id' element={<NotImplemented/>} />
            <Route path='eliminar/:id' element={<NotImplemented/>} />
          </Route>

          <Route path='personas' element={isAuth?<UsersOutlet/>:<Navigate to='/'/>}>
            <Route path=':id' element={<NotImplemented/>} />
            <Route path='agregar' element={<NotImplemented/>} />
            <Route path='editar/:id' element={<NotImplemented/>} />
            <Route path='eliminar/:id' element={<NotImplemented/>} />
          </Route>

          <Route path='*' element={<Error404/>} />

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
