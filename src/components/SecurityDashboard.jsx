import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Table } from 'flowbite-react';
import axios from 'axios';

export default function SecurityDashboard() {
  const { currentPersonnel } = useSelector((state) => state.securityPersonnel);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get('/api/chat/security');
        setChats(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chats:', error);
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  const handleLiveStatus = async () => {
    try {
      await axios.put('/api/security/live-status', { isLive: !currentPersonnel.isLive });
      // Update the Redux store or refetch the personnel data
    } catch (error) {
      console.error('Error updating live status:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold my-7 text-center'>Security Dashboard</h1>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h2 className='text-xl font-semibold'>Welcome, {currentPersonnel.name}</h2>
          <p>Category: {currentPersonnel.category}</p>
        </div>
        <Button
          gradientDuoTone={currentPersonnel.isLive ? 'greenToBlue' : 'pinkToOrange'}
          onClick={handleLiveStatus}
        >
          {currentPersonnel.isLive ? 'Go Offline' : 'Go Live'}
        </Button>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Last Message</Table.HeadCell>
          <Table.HeadCell>Time</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {chats.map((chat) => (
            <Table.Row key={chat._id}>
              <Table.Cell>{chat.user.username}</Table.Cell>
              <Table.Cell>{chat.lastMessage}</Table.Cell>
              <Table.Cell>{new Date(chat.updatedAt).toLocaleString()}</Table.Cell>
              <Table.Cell>
                <Button size='sm'>View Chat</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

