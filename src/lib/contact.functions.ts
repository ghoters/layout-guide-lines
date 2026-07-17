import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

    const escape = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `
      <h2>Nowa wiadomość z formularza 3dmodele.pl</h2>
      <p><strong>Imię:</strong> ${escape(data.name)}</p>
      <p><strong>E-mail:</strong> ${escape(data.email)}</p>
      <p><strong>Wiadomość:</strong></p>
      <p style="white-space:pre-wrap">${escape(data.message)}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "3dmodele.pl <formularz@3dmodele.pl>",
        to: ["sebjara.ghoters@gmail.com"],
        reply_to: data.email,
        subject: `Nowa wiadomość od ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend error [${res.status}]: ${body}`);
      throw new Error(`Nie udało się wysłać wiadomości (${res.status})`);
    }

    return { ok: true };
  });