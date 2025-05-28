import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './components/sections/Login';
import Register from './components/sections/Register';


const App: React.FC = () => {
  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <AnimatePresence mode="wait">
      {showRegister ? (
        <motion.div key="register" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Register onBackToLogin={() => setShowRegister(false)} />
        </motion.div>
      ) : (
        <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Login onCreateAccount={() => setShowRegister(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;

