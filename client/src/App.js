import { Routes, Route } from 'react-router-dom';

const Home = () => {
  return( <div className="container text-center text-warning mt-4"><h1 className="display-6">welcome to the site</h1></div> )
}

const BadLink = () => {
  return( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )
}

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='*' element={<BadLink />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
