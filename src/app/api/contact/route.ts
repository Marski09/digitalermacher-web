import { NextRequest, NextResponse } from "next/server";

const FORM_ENDPOINT = "https://form.taxi/s/jbw9im8g";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Form submission failed" },
      { status: res.status }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
