import { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import io from 'socket.io-client';
import Main from './views/Main';
import Chat from './components/Chat';

const Header = () => {
  return(
    <>
      <div className="container text-center mt-4 p-2 border border-0 rounded bg-light text-dark ">
        <h1 className="display-4">MERN Chat</h1>
      </div>
      <Outlet />
    </>
  )
}

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  return (
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Main />} />
          <Route path='/chat/:chatName' element={<Chat />} />
          <Route path='*' element={<BadLink />} />
        </Route>
      </Routes>
  );
}

export default App;
