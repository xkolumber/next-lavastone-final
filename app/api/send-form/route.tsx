import { generateEmailContactPage } from "@/app/components/generateEmailContactPage";
import { generateEmailHtml } from "@/app/components/generateEmailHtml";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { name, email, number, images, service, message } = await req.json();
  const emailHtml = generateEmailContactPage({
    name,
    email,
    number,
    images,
    service,
    message,
  });
  try {
    const data = await resend.emails.send({
      from: "hello@lavastone.sk",
      to: "hello@lavastone.sk",
      subject: "Lavastone | Dotaz od zákazníka",
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
