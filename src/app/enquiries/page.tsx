import { Metadata } from "next";

import ContactForm from "@/Components/ContactForm";

export const metadata: Metadata = {
  title: "Enquiries",
  description:
    "Contact Julia Ayers for enquiries regarding the purchase of her art, if you have any questions, or if you would like to request a commission.",
};

export default function Enquiries() {
  return (
    <main className="min-h-screen px-4">
      <section className="flex flex-col gap-20 items-center py-20">
        <div className="max-w-screen-sm">
          <h2 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-4xl font-bold">
            Enquiries
            <hr className="w-20 h-0.5 bg-primary rounded-full mt-4" />
          </h2>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-lg mt-4 m-auto">
            If you would like to enquire about purchasing a painting, or would
            like to request a commission, please fill out the form below.
          </p>
        </div>
        <div className=" w-full">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
