import Form from 'react-bootstrap/Form';
import '../styles/index.css';

const Search = () => (
  <div className="searchBar">
    <Form className="d-flex">
      <Form.Control
        style={{ width: '50%' }}
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </Form>
  </div>
);

export default Search;
