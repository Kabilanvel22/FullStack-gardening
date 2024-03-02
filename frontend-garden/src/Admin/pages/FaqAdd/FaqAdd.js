import React, { useEffect, useState } from 'react'
import "../../../assets/css/FaqAdd.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

function FaqAdd() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [errors, setErrors] = useState({});
    const nav = useNavigate();
    const {id} = useParams();
  
    const details = {
      question,answer
    };
    const faqData = async() => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
      const response = await axios.post("http://localhost:8080/api/v1/admin/send/ques",details);
      console.log(response.data);
    };
  
    const updateData = async() => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
      const response = await axios.put(`http://localhost:8080/api/v1/admin/update/ques/${id}`,details);
      console.log(response.data);
    }
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
          const response = await axios.get(`http://localhost:8080/api/v1/admin/getfaq/${id}`);
          setQuestion(response.data.question);
          setAnswer(response.data.answer);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    },[]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      if (!question.trim()) {
        validationErrors.question = "question is required";
      }
  
      if (!answer.trim()) {
        validationErrors.answer = "Answer is required";
      }
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        if(id){
              updateData();
              nav("/admin/faqlist");
  
      }else{
            faqData();
            nav("/admin/faqlist");
      }
         
      }
    }
  
    const title = () => {
  
      if(id){
          return <h1>Update FAQ</h1>
      }else{
          return <h1>Add FAQ</h1>
      }
  }
  return (
    <>
    <AdminNavbar/>
    <div className="add-faq">
    {title()}
    <h3 className="add-faq-heading">FAQ Form</h3>
      <div className="add-faq-container">
        <div className="add-faq-head">
          <div className="row" >
            <div id="cm6">
              <form className="add-faq-form">
                <div className="mb-3">
                  <label>Question</label>
                  <input
                    type="text"
                    className="faq-form-control"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter Question"
                  />
                  <h6 className='error'>{errors.question && <span>{errors.question}</span>}</h6>
                </div>
                <div className="mb-3">
                  <label>Answer</label>
                  <input
                    type="text"
                    className="faq-form-control"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter Answer"
                  />
                  <h6 className='error'>{errors.answer && <span>{errors.answer}</span>}</h6>
                </div>
                <button className="faq-add-sub " onClick={handleSubmit} id="submit-btn" type="submit">
                  Submit
                </button>
                <button className="faq-add-can" id="cancel-btn">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default FaqAdd;