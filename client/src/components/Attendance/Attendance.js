import React, { useEffect, useState, useContext } from 'react';
import { Card, ListGroup } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";


function Attendance(props) {
    const auth = useContext(AuthContext);

    const [signups, setSignups] = useState([]);

    useEffect(() => {
        API.Posts.getSignups(auth.authToken, props.id)
        .then(data => setSignups(data.data));
    }, [props.id]);

    return (
        <Card style={{ width: '18rem', display: props.isShowing ? "block" : "none" }}>
            <ListGroup variant="flush">
            <ListGroup.Item><strong>Attendance</strong></ListGroup.Item>
            {signups.map(username => <ListGroup.Item>{username}</ListGroup.Item>)}
            </ListGroup>
        </Card>
    );
}

export default Attendance;