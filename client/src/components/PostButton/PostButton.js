import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import PostForm from "../PostForm/PostForm";
import API from "../../lib/API";
import ModalCon from "../../contexts/ModalContext";

function PostButton() {
    const modalCon = useContext(ModalCon);

    const [show, setShow] = useState(false);

    useEffect(() => {
        handleClick();
    }, [modalCon.showCon]);

    const handleClick = () => {
        if (modalCon.showCon === false) {
            handleClose();
            modalCon.afterClose(undefined);
        } else {
            handleClose();
        }
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="info" onClick={handleShow} style={{ position: "fixed", bottom: "5%", right: "25%",}}>
                New Post
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