import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { format, isToday, isYesterday } from 'date-fns'; // Import from date-fns
import mentorsData from '../../Constants/MentorData.json';

const Team = () => {
  const { mentorId, teamName } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [mentorData, setMentorData] = useState(null);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const foundMentor = mentorsData.find(mentor => mentor._id === mentorId);
    if (foundMentor) {
      setMentorData(foundMentor);
      const foundTeam = foundMentor.teams.find(team => team.name === teamName);
      if (foundTeam) {
        setTeam(foundTeam);
      }
    }
  }, [mentorId, teamName]);

  useEffect(() => {
    if (mentorData && team) {
      const loadedMessages = getChatsForTeam();
      setMessages(loadedMessages);
    }
  }, [mentorData, team]);

  // Function to get the chat messages from localStorage
  const getChatsForTeam = () => {
    if (team && mentorData) {
      const chatKey = `${team.name}-${mentorData.mentor.name}-chats`; // Using team.name and mentor.name
      const storedMessages = JSON.parse(localStorage.getItem(chatKey));
      return storedMessages || [];
    }
    return [];
  };

  // Function to send a new message and save it in localStorage
  const sendMessageToBackend = (message) => {
    if (team && mentorData) {
      const chatKey = `${team.name}-${mentorData.mentor.name}-chats`; // Using team.name and mentor.name
      const existingMessages = JSON.parse(localStorage.getItem(chatKey)) || [];
      const updatedMessages = [...existingMessages, message];
      localStorage.setItem(chatKey, JSON.stringify(updatedMessages));
      console.log('Message sent and saved locally:', message);
    }
  };

  const handleSendResponse = () => {
    if (newMessage.trim()) {
      const message = {
        id: new Date().getTime(),
        text: newMessage,
        sender: 'mentor',
        type: newMessage.includes('github.com') ? 'PR' : 'message',
        timestamp: new Date(),
      };
      sendMessageToBackend(message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendResponse();
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const formatMessageDate = (date) => {
    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
    return format(date, 'dd MMM yyyy');
  };

  const formatTime = (date) => {
    return format(date, 'hh:mm a');
  };

  const groupMessagesByDate = (messages) => {
    const grouped = {};
    messages.forEach((message) => {
      const messageDate = formatMessageDate(new Date(message.timestamp));
      if (!grouped[messageDate]) {
        grouped[messageDate] = [];
      }
      grouped[messageDate].push(message);
    });
    return grouped;
  };

  if (!mentorData) {
    return <div>Mentor not found</div>;
  }

  if (!team) {
    return <div>Team not found</div>;
  }

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="teamDetail" style={{ marginTop: '95px' }}>
      <div className="btn-group mx-2">
        <button
          className="btn btn-info rounded-pill dropdown-toggle fw-bold fs-5"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {teamName}
        </button>
        <ul className="dropdown-menu">
          {team.members.map((member, index) => (
            <li key={index} className="mx-2 fw-bold" style={{ color: '#0B2239' }}>
              {member}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-container">
        <div className="chat-header" style={{ backgroundColor: '#0B2239', color: '#fff' }}>
          <h2>Student Review</h2>
        </div>
        <div className="chat-messages">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '10px 0' }}>
                {date}
              </div>
              {groupedMessages[date].map((message) => (
                <div
                  key={message.id}
                  className={`chat-message ${message.sender === 'mentor' ? 'mentor-message' : 'received-message'}`}
                >
                  <div style={{ fontSize: 'small', color: 'gray' }}>
                    {message.sender}
                  </div>
                  <div>{message.text}</div>
                  <div style={{ fontSize: 'small', color: 'gray', textAlign: 'right' }}>
                    {formatTime(new Date(message.timestamp))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSendResponse}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
