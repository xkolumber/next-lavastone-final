import { generateEmailHtml } from "@/app/components/generateEmailHtml";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { email, images } = await req.json();
  const emailHtml = generateEmailHtml({ images });

  try {
    const data = await resend.emails.send({
      from: "hello@lavastone.sk",
      to: email,
      subject: "Lavastone | Obľúbené kúsky",
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
