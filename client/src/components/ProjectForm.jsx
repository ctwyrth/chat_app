import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default props => {
   const { initialProject, onSubmitProp, errors } = props;
   const [ project, setProject ] = useState(initialProject);
   const navigate = useNavigate();

   const handleOnSubmit = (e) => {
      e.preventDefault();
      onSubmitProp({ project });
      setProject("");
   }

   return(
      <div className="container my-4">
         { initialProject === "" ? <div className="mb-3 text-center"><span className="h4">Add a Project:</span></div> : <div className="mb-3 text-center"><span className="h4">Update Project:</span></div> }
         <form className="col-6 bg-light border border-dark rounded p-4 mx-auto" onSubmit={ handleOnSubmit }>
            <div className="row mb-4">
               <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
               { errors && errors.map((err, i) => {
                  return(
                     <div className="col-sm-10" key={i}>
                        <input type="text" name="name" id="name" className="form-control is-invalid" onChange={e => setProject(e.target.value)} value={project} />
                        <div id="validationErrors" className="invalid-feedback">
                           { err }
                        </div>
                     </div>
                  )}
               )}
               { !errors &&
                  <div className="col-sm-10">
                     <input type="text" name="name" id="name" className="form-control" onChange={e => setProject(e.target.value)} value={project} />
                  </div>
               }
            </div>
            <div className="text-center">
               <button className="col-2 btn btn-sm btn-info me-2" onClick={e => { e.preventDefault(); navigate('/')}}>Cancel</button>
               <input type="submit" className="col-2 btn btn-sm btn-info" value={initialName === "" ? 'Create' : 'Update'} />
            </div>
         </form>
      </div>
   )
};