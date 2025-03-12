import { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import './Contact.scss';

/**
 * Composant Contact
 * Permet d'afficher un formulaire de contact et d'envoyer un email via emailjs.
 *
 * @returns {JSX.Element} Le formulaire de contact pour permettre à l'utilisateur d'envoyer un message.
 */
function Contact() {

  // Référence du formulaire pour pouvoir y accéder et l'envoyer via emailjs
  const form = useRef();

  // Fonction pour envoyer l'email avec les données du formulaire
  const sendEmail = (e) => {

    // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();

    // Envoi du formulaire via emailjs en utilisant un service et un modèle spécifiés
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        // Si l'email est envoyé avec succès, on affiche un message dans la console
        console.log("Email envoyé avec succès :", result);
        alert("Message envoyé ! ID de réponse : " + result.text); // Affichage d'un message d'alerte avec l'ID de réponse

        // Réinitialiser les données du formulaire après envoi
        setFormData({ nom: "", prenom: "", email: "", societe: "", message: "" });
        form.current.reset(); // Réinitialiser le formulaire
      })
      .catch((error) => {
        // Si une erreur se produit lors de l'envoi, afficher un message d'erreur
        alert("Erreur : " + error.text);
      });
  };

  // Hook useEffect pour faire défiler la page vers le haut lors du premier rendu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hook useState pour gérer l'état des données du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    societe: "",
    message: "",
  });

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    // Mettre à jour les données du formulaire lorsque l'utilisateur saisit quelque chose
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Retourner le JSX pour rendre le formulaire à l'écran
  return (
    <div className="divContact">

      <h1 className="mb-4">Formulaire de Contact</h1>

      <Form ref={form} onSubmit={sendEmail}>

        {/* Ligne Nom & Prénom */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="nom">
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
            <Form.Group controlId="prenom">
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
            <Form.Group controlId="email">
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
            <Form.Group controlId="societe">
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
        <Form.Group className="mb-3" controlId="message">
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