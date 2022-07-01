import {
  Container,
  Title,
  SubTitel,
  MailContainer,
  Mail,
  Button,
} from "./mailList.style";

const MailList = () => {
  return (
    <Container>
      <Title>Save time, save money!</Title>
      <SubTitel>Sign up and we'll send the best deals to you</SubTitel>
      <MailContainer>
        <Mail placeholder="Your email" />
        <Button>Subscribe</Button>
      </MailContainer>
    </Container>
  );
};

export default MailList;
