const FORM_ENDPOINT = "https://form.taxi/s/jbw9im8g";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "" };
  }

  try {
    const body = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body;

    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body,
      headers: {
        "Content-Type": event.headers["content-type"] || "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    if (res.ok) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ok: true }),
      };
    }

    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Form submission failed" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
