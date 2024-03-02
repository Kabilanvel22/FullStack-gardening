import React, { useState } from 'react';
import '../../assets/css/Feedback.css';



function Feedback() {
  const [selectedRating, setSelectedRating] = useState('Satisfied');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleRatingClick = (e) => {
    if (!feedbackSubmitted && e.target.classList.contains('rating-img')) {
      setSelectedRating(e.target.nextElementSibling.innerHTML);
    }
  };

  const handleSendReview = () => {
    if (!feedbackSubmitted) {
      setShowFeedback(true);
      setFeedbackSubmitted(true);
    } else {
      alert('Feedback already submitted.');
    }
  };

  return (
    <>
      <div>
        <div className="panel-container">
          <strong>How satisfied are you with our <br />
            customer support performance?</strong>
          <div
            className={`ratings-container ${feedbackSubmitted ? 'disabled' : ''}`}
            onClick={handleRatingClick}
          >
            <div className="rating">
              <img src="https://i.ibb.co/fYN2rVn/no.png" alt="" className="rating-img" />
              <small>Unhappy</small>
            </div>

            <div className="rating">
              <img src="https://i.ibb.co/3M8Ddsf/neutral.png" alt="" className="rating-img" />
              <small>Neutral</small>
            </div>

            <div className="rating">
              <img src="https://i.ibb.co/VVDYGLZ/yes.png" alt="" className="rating-img" />
              <small>Satisfied</small>
            </div>
          </div>
          <button className="btn" onClick={handleSendReview} disabled={feedbackSubmitted}>
            Send Review
          </button>
          {showFeedback && (
            <div className='mt-3'>
              <i className='bx bxs-heart'></i>
              <strong> Thank You!</strong>
              <br />
              <strong>Feedback: {selectedRating}</strong>
              <p>We'll use your feedback to improve our customer support</p>

            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Feedback;