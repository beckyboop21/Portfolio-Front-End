import React from 'react';

function AgeModal(props) {
  const { showModal, handleCloseModal } = props;

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>You must be 21 or over to use this app</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default AgeModal;
