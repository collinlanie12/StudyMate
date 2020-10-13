import React, { useEffect, useState, useContext } from 'react';
import { Card, ListGroup } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

import "./Attendance.css"

const title = {
    fontSize: "15px"
}

const user = {
    fontSize: "13px"
}

function Attendance(props) {
    const auth = useContext(AuthContext);

    const [signups, setSignups] = useState([]);

    useEffect(() => {
        API.Posts.getSignups(auth.authToken, props.id)
            .then(data => setSignups(data.data));
    }, [props.id]);

    return (
        <Card className="AttendCard" style={{ width: '18rem', display: props.isShowing ? "inline-block" : "none" }}>
            <ListGroup variant="flush">
                <ListGroup.Item className="t" style={title}><strong>Students attending this session</strong></ListGroup.Item>
                {signups.map(username => <ListGroup.Item className="i" style={user}>{username}</ListGroup.Item>)}
            </ListGroup>
        </Card>
    );
}

export default Attendance;