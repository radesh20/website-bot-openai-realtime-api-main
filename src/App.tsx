import { useState } from 'react';
import { motion } from 'framer-motion';
import { VoiceChat } from './pages/VoiceChat';
import { ScrapeForm } from './pages/ScrapeForm';
import { Login } from './pages/Login';
import './App.scss';

// Set your correct secret key here
const CORRECT_SECRET_KEY = 'radesh@20';

function AboutAgent() {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="about-agent"
    >
      <h2>About the AI Agent</h2>
      <p>
        Our AI agent is designed to assist users in various tasks, including voice chat, scraping content, and more. 
        It utilizes advanced machine learning techniques to provide accurate and context-aware responses.
      </p>
    </motion.div>
  );
}

function App() {
  const [scrapedContent, setScrapedContent] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  const handleScrapedContent = (content: string) => {
    setScrapedContent(content);
  };

  const handleLogin = (username: string, secretKey: string) => {
    // Validate the secret key
    if (secretKey === CORRECT_SECRET_KEY) {
      setUsername(username);
      setIsLoggedIn(true); // Mark user as logged in
    } else {
      alert('Invalid secret key. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="app-container"
    >
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>Welcome, {username}</h1>
          <AboutAgent />
          {scrapedContent ? (
            <VoiceChat scrapedContent={scrapedContent} />
          ) : (
            <ScrapeForm onScrapedContent={handleScrapedContent} />
          )}
        </>
      )}
    </motion.div>
  );
}

export default App;
