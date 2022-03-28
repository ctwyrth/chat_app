import { useState, useEffect } from 'react';
import io from "socket.io-client";
import { useParams } from 'react-router-dom';

const socket = io.connect('http://localhost:4000');

export default props => {
   const { chatName } = useParams();
   const [ state, setState ] = useState({message: '', name: chatName});
   const [ chat, setChat ] = useState([]);

   const onMessageSubmit = async () => {
      if (state.message !== "") {
         const {name, message} = state;
         await socket.emit('send_message', {name, message});
         setChat((chat) => [...chat, {name, message}]);
         setState({name, message: ''});
      }
   }
   
   useEffect(() => {
      socket.on('receive_message', ({name, message}) => {
         setChat((chat) => [...chat, {name, message}]);
      });
   }, [socket]);

   const onTextChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
      console.log("onTextChange firing:", state);
   }


   return (
      <div className="container mt-4">
         <form className="col-6 mx-auto" onSubmit={onMessageSubmit}>
            <div className="input-group mb-3">
               <input type="text" name="message" className="form-control" onChange={e => onTextChange(e)} onKeyPress={(e) => {e.key === "Enter" && onMessageSubmit()}} value={state.message} />
               <button className="btn btn-secondary">Send</button>
            </div>
         </form>
         <div className="col-6 mx-auto border border-1 border-info rounded p-2">
            <h4>Chat Log:</h4>
            { chat.map(({name, message}, idx) => {
               return (
                  <div key={idx} className={chatName === name ? 'text-start ps-2' : 'text-end pe-2'}>
                     <p><strong>{name}:</strong> <span>{message}</span></p>
                  </div>
               )}
            )}
         </div>
      </div>
   );
}