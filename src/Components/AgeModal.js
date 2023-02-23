
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgeModal from './AgeModal';

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <AgeModal showModal={showModal} handleCloseModal={handleCloseModal} />
      <Link to='/strains'>
        <h1>Ready for the Good Vibes?</h1>
      </Link>
    </div>
  );
}

export default Home;



