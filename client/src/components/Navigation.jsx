import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default props => {
   return(
      <>
         <div className="container-fluid bg-success bg-gradient border-bottom border-2 border-dark">
            <div className="row mx-auto" style={{width: 85+'%'}}>
               <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient ">
                  <div className="container-fluid">
                     <span className="navbar-brand">Project!</span>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                           <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                           <li className="nav-item"><Link to="/project/new" className="nav-link">Add Project</Link></li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
         <Outlet />
      </>
   )
};
