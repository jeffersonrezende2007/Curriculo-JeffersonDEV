// src/modules/Curriculo/Contato/ContatoPage.tsx

"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Title,
  ContentWrapper,
  LeftColumn,
  ThankYouCard,
  Greeting,
  ThankYouText,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactLabel,
  ContactValue,
  SocialLinks,
  SocialLink,
  RightColumn,
  FormCard,
  FormTitle,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Button,
  SuccessMessage,
  ErrorMessage,
} from "./ContatoPage.styles";
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiSend,
  FiHeart,
  FiSmile 
} from "react-icons/fi";

export default function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const resp = await emailjs.send(
        "service_wzy7cnd",       // SERVICE ID
        "template_9ocnuvt",      // TEMPLATE ID
        formData,
        "_G4gr8utuCB-Am5k_"      // PUBLIC KEY
      );

      if (resp.status === 200) {
        setSent(true);
        setError(false);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Title>Entre em Contato</Title>

      <ContentWrapper>
        {/* Coluna Esquerda - Agradecimento */}
        <LeftColumn>
          <ThankYouCard>
            <Greeting>Obrigado pela visita!</Greeting>
            
            <ThankYouText>
              Fico muito feliz que você chegou até aqui. 
              Se tiver alguma pergunta, oportunidade ou apenas quiser trocar uma ideia sobre tecnologia, 
              desenvolvimento ou dados, será um prazer conversar com você!
            </ThankYouText>

            <div className="flex items-center gap-2 text-blue-400 mt-4">
              <FiSmile size={24} />
              <span className="text-lg">Respondo em até 24 horas</span>
            </div>

            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <FiMail size={24} />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>E-mail</ContactLabel>
                  <ContactValue>jeffersonrezende2007@gmail.com</ContactValue>
                </ContactText>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FiPhone size={24} />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>Telefone</ContactLabel>
                  <ContactValue>(11) 98100-8159</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactInfo>

            <div className="mt-8 text-sm text-neutral-500 flex items-center justify-center gap-1">
              Feito por Jefferson Rezende
            </div>
          </ThankYouCard>
        </LeftColumn>

        {/* Coluna Direita - Formulário */}
        <RightColumn>
          <FormCard>
            <FormTitle>Envie uma mensagem</FormTitle>

            {!sent ? (
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label>Seu nome</Label>
                  <Input 
                    name="name" 
                    placeholder="Digite seu nome completo" 
                    required 
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Seu e-mail</Label>
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="voce@email.com" 
                    required 
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Mensagem</Label>
                  <TextArea 
                    name="message" 
                    placeholder="Digite sua mensagem aqui..." 
                    required 
                  />
                </InputGroup>

                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                {error && (
                  <ErrorMessage>
                    Erro ao enviar mensagem. Tente novamente.
                  </ErrorMessage>
                )}
              </Form>
            ) : (
              <SuccessMessage>
                <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
                <p className="text-lg">
                  Obrigado pelo contato! Responderei em breve em seu E-mail.
                </p>
              </SuccessMessage>
            )}
          </FormCard>
        </RightColumn>
      </ContentWrapper>
    </Container>
  );
}