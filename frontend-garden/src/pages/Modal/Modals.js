import React from 'react'
import { useSelector } from 'react-redux';
import "../../assets/css/Modals.css"

function Modals({onClose }) {
  const det = useSelector((state) => state.productall.products);
  if (!det) {
    return null; 
  }

  return (
    <>
       <div className="modal-container">
           <div className="modal-header">
           <div className="titleCloseBtn">
           <button onClick={onClose}> X </button>
           </div>
               <div className="model-title">
                    <h2 className="model-title-info">
                     Description for {det.name}
                  </h2>
               </div>
               <div className="model-body">
                 <p>{det.details}</p>
               </div>
           </div>
       </div>
    </>
  )
}
export default Modals;


