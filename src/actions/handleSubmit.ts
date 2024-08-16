"use server";

import { Resend } from "resend";

import { BusinessEmailTemplate, ClientEmailTemplate } from "@/../emails";

export default async function handleSubmit(formData: FormData) {
  const { name, email, message, _gotcha } = Object.fromEntries(
    formData.entries()
  ) as {
    name: string;
    email: string;
    message: string;
    _gotcha: string;
  };

  if (_gotcha) {
    return null;
  }

  if (!name || !email || !message) {
    return alert("Please fill in all fields.");
  }

  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL!;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const clientEmailResponse = await resend.emails.send({
      from: businessEmail,
      to: "llamasnutty@gmail.com",
      subject: "Thank you for your enquiry",
      react: ClientEmailTemplate({ name }),
    });

    if (clientEmailResponse.error) {
      throw new Error("Failed to send email to client");
    }

    const businessEmailResponse = await resend.emails.send({
      from: businessEmail,
      to: "llamasnutty@gmail.com",
      subject: "New website enquiry",
      react: BusinessEmailTemplate({ name, email, message }),
    });

    if (businessEmailResponse.error) {
      throw new Error("Failed to send email to business");
    }

    return true;
  } catch (error) {
    return new Error("Failed to send email");
  }
}
