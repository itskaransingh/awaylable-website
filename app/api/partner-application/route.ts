const PARTNER_TYPES = new Set([
  "Agency partner",
  "Tech partner",
  "Affiliate partner",
]);

function getText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const webhookUrl = process.env.PARTNER_FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      { ok: false, message: "Partner form webhook is not configured." },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const payload = {
    partner_type: getText(formData.get("partner_type")),
    name: getText(formData.get("name")),
    email: getText(formData.get("email")),
    country_code: getText(formData.get("country_code")) || "+91",
    phone: getText(formData.get("phone")),
    url: getText(formData.get("url")),
    message: getText(formData.get("message")),
  };

  if (!PARTNER_TYPES.has(payload.partner_type)) {
    return Response.json(
      { ok: false, message: "Please choose a valid partner type." },
      { status: 400 },
    );
  }

  if (!payload.email) {
    return Response.json(
      { ok: false, message: "Business email is required." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return Response.json(
        { ok: false, message: "Google Sheets rejected the submission." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, message: "Could not submit the form. Please try again." },
      { status: 502 },
    );
  }
}
