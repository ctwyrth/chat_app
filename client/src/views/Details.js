import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';

export default props => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [ errors, setErrors ] = useState();
   const [ loaded, setLoaded ] = useState(false);
   const [ project, setProject ] = useState();

   useEffect(() => {
      axios.get('http://localhost:8000/api/project/' + id)
         .then(res => {
            setAuthor(res.data);
            setLoaded(true);
         })
         .catch(err => console.log(err));
   }, []);

   const updateProject = project => {
      axios.put('http://localhost:8000/api/project/' + id + '/update', project)
         .then(res => navigate('/'))
         .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
               errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
         });
   }

   return(
      <div className="container my-4">
         { loaded &&
            <>
               <ProjectForm onSubmitProp={updateProject} errors={errors} initialName={project.name} />
            </>
         }
      </div>
   )
}
