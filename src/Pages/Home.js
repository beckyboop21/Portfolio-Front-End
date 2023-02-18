import React from 'react';
import AgeModal from '../Components/AgeModal';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';

function Home() {
  const [showModal, setShowModal] = React.useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <AgeModal showModal={showModal} handleCloseModal={handleCloseModal} />
      <h2>Welcome</h2>
      <h3>Canna Tech app!</h3>
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Home;



  
// import React from 'react';

// function Home(props) {
//     const { showModal, handleCloseModal } = props;
//     return (
//         <div className='home'>
//              <>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>You must be 21 or over to use this app</h2>
//             <button onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//             <div className='homeBox'>
//                 <h1 className='welcomepg'>Welcome to my <br/>  Canna Tech App</h1><br/>
//                 <h3 className='welcomeMsg'>You can view, edit and add (or remove) strain information, and also check whether a strain is a_vibe!</h3>
//             </div>
//         </div>
//     );
// }

// export default Home;