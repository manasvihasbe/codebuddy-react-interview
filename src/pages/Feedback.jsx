import Button from 'react-bootstrap/Button';
import '../styles/index.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Feedback({ show, handleClose }) {
  return (
    <div className="feedbackForm">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback about bing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <span>
                Please click on the specific area of the page that your feedback is related to.
              </span>
              <Form>
                {['radio'].map(type => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check type={type} id={`default-${type}`} label="Suggest" />
                    <Form.Check type={type} id={`default-${type}`} label="Like" />
                    <Form.Check type={type} id={`default-${type}`} label="Dislike" />
                  </div>
                ))}
              </Form>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your feedback here. To help protect your privacy, do not include peronal information link your name or email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Include a screenshot" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Send
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Feedback;
