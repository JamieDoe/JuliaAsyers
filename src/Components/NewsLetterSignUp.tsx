"use client";

import * as React from "react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export function NewsLetterSignUp() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("You've been subscribed to my newsletter!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl">Sign up to my newsletter</h2>
      <div className="flex flex-col sm:flex-row w-full max-w-sm items-center gap-2">
        <Input type="email" required placeholder="Email" name="email" />
        <Button type="submit" className="w-full sm:w-fit">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
