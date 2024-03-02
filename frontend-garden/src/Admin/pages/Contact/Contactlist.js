import React, { useEffect, useState } from 'react'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

function Contactlist() {
    const [query,setQuery] = useState([]);
    const getData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
        const response = await axios.get("http://localhost:8080/api/v1/contact/get/query");
        setQuery(response.data);
        console.log("data", response.data);
    };
    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
        <AdminNavbar/>
            <div id="faq-view_container">
                <h1 id="faq-view_title">Query</h1>
                <Table id="faq-view_table">
                    <TableHead id="faq-view_head">
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody id="faq-view_body">
                        {query &&
                            query.map((cont) => (
                                <TableRow key={cont.ContactId}>
                                    <TableCell id="question">{cont.name}</TableCell>
                                    <TableCell id="answer">{cont.email}</TableCell>
                                    <TableCell id="answer">{cont.phone}</TableCell>
                                    <TableCell id="answer">{cont.subject}</TableCell>
                                    <TableCell id="answer">{cont.message}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>

                </Table>
            </div>
        </div>
    )
}

export default Contactlist