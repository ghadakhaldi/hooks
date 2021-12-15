import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Add = ({ handleAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    handleAdd(newMovie);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    });
    handleClose();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>title</Modal.Title>
          <input type="text" name="title" onChange={handleChange} />

          <Modal.Title>description</Modal.Title>
          <input type="text" name="description" onChange={handleChange} />

          <Modal.Title>posterUrl</Modal.Title>
          <input type="url" name="posterURL" onChange={handleChange} />

          <Modal.Title>rating</Modal.Title>
          <input
            type="number"
            min="0"
            max="10"
            name="rating"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
