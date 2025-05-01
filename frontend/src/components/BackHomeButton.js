import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      style={{
        marginTop: '20px',
        padding: '8px 16px',
        fontSize: '14px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      ⬅ Back to Home
    </button>
  );
};

export default BackHomeButton;
