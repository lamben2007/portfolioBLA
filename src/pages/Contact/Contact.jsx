import { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import './Contact.scss';

/**
 * Composant Contact
 * Permet aux utilisateurs d'envoyer un message via un formulaire de contact.
 * Utilise emailjs pour l'envoi des emails et affiche un message de statut en fonction du résultat.
 * 
 * @returns {JSX.Element} Le formulaire de contact.
 */
function Contact() {
  // Référence du formulaire pour envoi via emailjs
  const form = useRef();

  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    societe: "",
    message: "",
  });

  // État pour afficher les messages de statut d'envoi
  const [statusMessage, setStatusMessage] = useState(null);

  // État pour indiquer si un envoi est en cours
  const [isSending, setIsSending] = useState(false);

  // Effet pour faire défiler la page vers le haut lors du premier rendu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Gère la modification des champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Gère l'envoi du formulaire et l'envoi de l'email via emailjs
  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    setIsSending(true); // Indique que l'envoi est en cours
    setStatusMessage("Message en cours d'envoi..."); // Affiche un message d'attente

    // Envoi des données du formulaire via emailjs
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log("Email envoyé avec succès :", result);
        setStatusMessage("Votre message a été envoyé avec succès."); // Message de succès
        setFormData({ nom: "", prenom: "", email: "", societe: "", message: "" }); // Réinitialise les champs du formulaire
        form.current.reset(); // Réinitialise le formulaire
      })
      .catch((error) => {
        console.log("Échec envoi email", error);
        setStatusMessage("Une erreur est survenue lors de l'envoi de votre message."); // Message d'erreur en cas d'échec
      })
      .finally(() => {
        setIsSending(false); // Réinitialise l'état d'envoi après la tentative
      });
  };


  // Rendu
  return (
    <div className="divContact">
      <h1 className="mb-4">Formulaire de Contact</h1>
      <Form ref={form} onSubmit={sendEmail}>
        {/* Ligne Nom & Prénom */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" name="nom" value={formData.nom} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="prenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre prénom" name="prenom" value={formData.prenom} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        {/* Ligne Email & Société */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="societe">
              <Form.Label>Société</Form.Label>
              <Form.Control type="text" placeholder="Nom de votre société" name="societe" value={formData.societe} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        {/* Champ Message */}
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Votre message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Tapez votre message ici..." name="message" value={formData.message} onChange={handleChange} required />
        </Form.Group>
        {/* Bouton Envoyer */}
        <Button variant="primary" type="submit" disabled={isSending}>
          {isSending ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </Form>

      {/* Message de statut après l'envoi */}
      {statusMessage && <Alert className="mt-3" variant={isSending ? "info" : "success"}>{statusMessage}</Alert>}
      
    </div>
  );
}

export default Contact;