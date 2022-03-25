import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/AuthorForm';

export default props => {
   const navigate = useNavigate();

   // Creates a new item
   const createProject = project => {
      axios.post('http://localhost:8000/api/project/new', project)
         .then(res => navigate('/'))
         .catch(err => console.log(err));
   }

   return (
      <div className="container my-4">
         <h1 className="display-5">Favorite Projects:</h1>
         <ProjectForm onSubmitProp={createProject} initialName="" />
      </div>
   )
}