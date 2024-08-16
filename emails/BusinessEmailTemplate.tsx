import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BusinessEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function BusinessEmailTemplate({
  name,
  email,
  message,
}: BusinessEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New website enquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Hi Julia,</Text>
          <Text style={paragraph}>
            You have received a new enquiry from your website. Here are the
            details:
          </Text>
          <Text style={paragraph}>
            <strong>Name:</strong> {name}
            <br />
            <strong>Email:</strong> {email}
            <br />
            <strong>Message:</strong> {message}
          </Text>
          <Text style={paragraph}>They are awaiting your response.</Text>
        </Container>
      </Body>
    </Html>
  );
}

BusinessEmailTemplate.PreviewProps = {
  name: "Alan",
  email: "test@test.com",
  message: "Hi, I'm interested in your services.",
} as BusinessEmailTemplateProps;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
