import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default props => {
   const [ chatName, setChatName ] = useState("");
   const navigate = useNavigate();

   const handleOnSubmit = (e) => {
      e.preventDefault();
      navigate('/chat/' + chatName);
   }

   return (
      <div className="container my-4 mx-auto">
         <form className="col-4 border border-1 border-primary rounded bg-light p-4 mx-auto" onSubmit={handleOnSubmit}>
            <label htmlFor="chatName" className="form-label">I want to start chatting with the name:</label>
            <input type="text" name="chatName" id="chatName" className="form-control mb-3" onChange={e => setChatName(e.target.value)} value={chatName} />
            <div className="text-end">
               <input type="submit" name="submit" value="Chat" className="col-3 btn btn-sm btn-primary" />
            </div>
         </form>
      </div>
   )
}
