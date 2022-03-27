import { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import { useParams } from 'react-router-dom';


export default props => {
   const [ socket ] = useState(() => io(':4000'));

   const { chatName } = useParams();
   const [ state, setState ] = useState({message: '', name: chatName});
   const [ chat, setChat ] = useState([]);

   useEffect(() => {
      socket.on('message', ({name, message}) => {
         setChat([...chat, {name, message}]);
         console.log(chat)
      });
      return () => socket.disconnect(true);
   }, [chat]);

   const onTextChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
      console.log("onTextChange firing:", state);
   }

   const onMessageSubmit = (e) => {
      const {name, message} = state;
      socket.emit('message', {name, message});
      e.preventDefault();
      setState({message: '', name});
      console.log(state);
      console.log(chat);
   }

   const renderChat = () => {
      return chat.map(({name, message}, idx) => (
         <div key={idx} className="ps-2">
            <p><strong>{name}:</strong> <span>{message}</span></p>
         </div>
      ))
   }

   return (
      <div className="container mt-4">
         <form className="col-6 mx-auto" onSubmit={onMessageSubmit}>
            <div className="input-group mb-3">
               <input type="text" name="message" className="form-control" onChange={e => onTextChange(e)} value={state.message} />
               <button className="btn btn-secondary">Send</button>
            </div>
         </form>
         <div className="col-6 mx-auto border border-1 border-info rounded p-2">
            <h4>Chat Log:</h4>
            { renderChat() }
         </div>
      </div>
   );
}