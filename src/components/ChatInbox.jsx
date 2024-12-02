// import { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { Button, TextInput } from 'flowbite-react';
// import axios from 'axios';

// export default function ChatInbox({ chatId }) {
//   const { currentPersonnel } = useSelector((state) => state.securityPersonnel);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [file, setFile] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(`/api/chat/${chatId}`);
//         setMessages(res.data);
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };

//     fetchMessages();
//     // Set up real-time updates here (e.g., using WebSocket or Server-Sent Events)
//   }, [chatId]);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.preventDefault());
//     if (!newMessage.trim() && !file) return;

//     try {
//       const formData = new FormData();
//       formData.append('message', newMessage);
//       if (file) {
//         formData.append('file', file);
//       }

//       const res = await axios.post(`/api/chat/${chatId}/message`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMessages([...messages, res.data]);
//       setNewMessage('');
//       setFile(null);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <div
//             key={message._id}
//             className={`flex ${
//               message.sender === currentPersonnel._id ? 'justify-end' : 'justify-start'
//             }`}
//           >
//             <div
//               className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
//                 message.sender === currentPersonnel._id
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-200 dark:bg-gray-700'
//               }`}
//             >
//               <p>{message.content}</p>
//               {message.fileUrl && (
//                 <a
//                   href={message.fileUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm underline"
//                 >
//                   Attached File
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
//         <div className="flex items-center space-x-2">
//           <TextInput
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1"
//           />
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//             id="file-upload"
//           />
//           <label htmlFor="file-upload" className="cursor-pointer">
//             <svg
//               className="w-6 h-6 text-gray-500 hover:text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
//               />
//             </svg>
//           </label>
//           <Button type="submit" gradientDuoTone="purpleToBlue">
//             Send
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }




import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Button, TextInput } from 'flowbite-react';
// import axios from 'axios';


export default function ChatInbox({ chatId }) {
  const { currentPersonnel } = useSelector((state) => state.securityPersonnel);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [file, setFile] = useState(null);
  const chatContainerRef = useRef(null);

  // const API_URL = import.meta.envREACT_APP_BACKEND_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await get(`${API_URL}/api/chat/${chatId}`);
        setMessages(res.data);
      } catch (error) {
        console.error('Error fetching messages:', error.response ? error.response.data : error.message);
      }
    };

    if (chatId) {
      fetchMessages();
    }
    // Set up real-time updates here (e.g., using WebSocket or Server-Sent Events)
  }, [chatId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() && !file) return;

    try {
      const formData = new FormData();
      formData.append('message', newMessage);
      if (file) {
        formData.append('file', file);
      }

      const res = await post(`${API_URL}/api/chat/${chatId}/message`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessages([...messages, res.data]);
      setNewMessage('');
      setFile(null);
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col h-full">
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`flex ${
              message.sender === currentPersonnel._id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === currentPersonnel._id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <p>{message.content}</p>
              {message.fileUrl && (
                <a
                  href={message.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline"
                >
                  Attached File
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <TextInput
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-500 hover:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </label>
          <Button type="submit" gradientDuoTone="purpleToBlue">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

