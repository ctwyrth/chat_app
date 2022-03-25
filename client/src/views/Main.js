import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProjectList from '../components/ProjectList';

export default props => {
   const [ projects, setProjects ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/projects')
         .then(response => { setProjects(response.data); setLoaded(true) })
         .catch(error => console.log(error));
   }, []);

   // Pulls deleted item from the list view
   const removeFromDom = authorId => {
      setProjects(projects.filter(project => project._id != projectId))
   }

   return (
      <div className="container my-4">
         <h1 className="display-6">Favorite Projects:</h1>
         {loaded && <ProjectList projects={ projects } removeFromDom={ removeFromDom } />}
      </div>
   )
}
