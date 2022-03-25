import React from 'react';
import axios from 'axios';

export default props => {
   const { projectId, successCallback } = props;

   const deleteProduct = e => {
      axios.delete('http://localhost:8000/api/project/' + projectId + '/delete')
         .then(res => { successCallback(); })
         .catch(err => console.log(err));
   }

   return <button className="btn btn-sm btn-warning ms-2" onClick={deleteProject} >Remove</button>
}