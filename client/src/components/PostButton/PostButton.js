import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import PostForm from "../PostForm/PostForm";
import API from "../../lib/API";

function PostButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{ position: "fixed", bottom: "50px", right: "500px",}}>
                CLICK ME
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PostButton;