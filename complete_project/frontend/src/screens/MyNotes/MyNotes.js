import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Badge,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useEffect, useState } from "react";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const fetchNodes = async () => {
    const { data } = await axios.get("/api/notes");

    setNotes(data);
  };

  console.log(notes)

  useEffect(() => {
    fetchNodes();
  }, []);

  return (
    <MainScreen title="Welcome back Amir Rajabi">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontsize: 18,
                }}
              >
                <CustomToggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </CustomToggle>
              </span>

              <div>
                <Button href={`/note/${note._id}`} variamnt="primary">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - data
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
