import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default props => {
   const [ project, setProject ] = useState(props.projects);

   const removeFromDom = projectId => {
      setProjects(projects.filter(project => project._id != projectId));
   }

   return(
      <div className="container mb-3 text-start">
         <Link to={'/project/new'} className="nav-link">Add an Project</Link>

         { projects &&
            projects.map((project, idx) => { 
               return(
                  <div className="col-4 my-3 mx-auto d-flex align-items-center justify-content-between" key={idx}>
                     <span className="fw-bold">{project.name}</span>
                     <div>
                        <Link to={`/project/${project._id}`} className="btn btn-sm btn-warning">Edit</Link>
                        <DeleteButton projectId={project._id} successCallback={() => removeFromDom(project._id)} />
                     </div>
                  </div>)
               })
         }
      </div>
   )
};
