
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


// import React from 'react';

// function AgeModal(props) {
//   const { showModal, handleCloseModal } = props;

//   return (
//     <>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>You must be 21 or over to use this app</h2>
//             <button onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AgeModal;
