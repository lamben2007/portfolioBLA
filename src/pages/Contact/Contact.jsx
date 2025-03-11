import { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import './Contact.scss';


//
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_lrbt1rr", "template_4y7k3it", form.current, "3_ppLm4vFnMGV9x1a")
      .then((result) => {
        console.log("Email envoyé avec succès :", result);
        alert("Message envoyé ! ID de réponse : " + result.text);
        setFormData({ nom: "", prenom: "", email: "", societe: "", message: "" }); // Réinitialiser le formulaire
        form.current.reset();
      })
      .catch((error) => {
        alert("Erreur : " + error.text);
      });
  };

  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    societe: "",
    message: "",
  });

  //
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Données du formulaire :", formData);
  //   alert("Formulaire envoyé !");
  // };




  //
  return (
    <div className="divContact">

      <h2 className="mb-4">Formulaire de Contact</h2>
      <Form ref={form} onSubmit={sendEmail}>

        {/* Ligne Nom & Prénom */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre prénom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Ligne Email & Société */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Société</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom de votre société"
                name="societe"
                value={formData.societe}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Champ Message */}
        <Form.Group className="mb-3">
          <Form.Label>Votre message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Tapez votre message ici..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Bouton Envoyer */}
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>




    </div>
  )
}

export default Contact