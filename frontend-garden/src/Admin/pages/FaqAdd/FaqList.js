import React, { useEffect, useState } from 'react'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

function FaqList() {

    const [faq, setFaq] = useState([]);
    const getData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
        const response = await axios.get("http://localhost:8080/api/v1/admin/get/ques");
        setFaq(response.data);
        console.log("data", response.data);
    };
    const handleDelete = async (id) => {
        console.log("Id:", id);
        if (window.confirm('Sure to Delete?')) {
            const response = await axios.delete(`http://localhost:8080/api/v1/admin/delete/ques/${id}`);
            axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
        }
        getData();
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
        <AdminNavbar/>
            <div id="faq-view_container">
                <h1 id="faq-view_title">FAQS</h1>
                <Link to="/admin/addfaq">
                    <button id="faq-addbtn">Add Faq</button>
                </Link>
                <Table id="faq-view_table">
                    <TableHead id="faq-view_head">
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody id="faq-view_body">
                        {faq &&
                            faq.map((faqs) => (
                                <TableRow key={faqs.FaqId}>
                                    <TableCell id="question">{faqs.question}</TableCell>
                                    <TableCell id="answer">{faqs.answer}</TableCell>
                                    <TableCell id="action">
                                        <Link to={`/admin/update/ques/${faqs.FaqId}`}>
                                            <button id="faq-actions">Update</button>
                                        </Link>
                                        <button id="faq-action-del" onClick={() => handleDelete(faqs.plantId)} style={{ marginTop: "10px" }}>
                                            Delete!
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>

                </Table>
            </div>
        </div>
    )
}

export default FaqList