import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';

const Home = () => {
  return( <div className="container text-center text-warning mt-4"><h1 className="display-6">welcome to the site</h1></div> )
}

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  const [ socket ] = useState(() => io(':8000'));

  useEffect(() => {
    console.log("Is this running?");
    socket.on("Welcome", data => console.log(data));
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
    
    // <div className="container">
    //   <Routes>
    //     <Route path='/' element={<Navigation />}>
    //       <Route index element={<Home />} />
    //       <Route path='*' element={<BadLink />} />
    //     </Route>
    //   </Routes>
      
    // </div>
  );
}

export default App;
