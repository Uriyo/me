'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Invalid email format.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL as string, {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.status === "success") {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to subscribe. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>
        If this sounds valuable, enter your email to receive notification for
        the next post
      </p>
      <div className="flex w-full max-w-sm mt-10 items-center space-x-2">
        <Input
          className=""
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="font-bold"
          type="button"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
}
