import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ClientEmailTemplateProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function ClientEmailTemplate({
  name,
}: ClientEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Welcome to Koala, the sales intelligence platform that helps you
            uncover qualified leads and close deals faster.
          </Text>

          <Text style={paragraph}>
            Best wishes,
            <br />
            Juila Ayers.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            You received this email because you contacted Julia Ayers via her
            website. If you didn&apos;t contact her, please inform this email:
            info@webdesignbydoe.co.uk.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

ClientEmailTemplate.PreviewProps = {
  name: "Alan",
} as ClientEmailTemplateProps;

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
