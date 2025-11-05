import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true,
}));

// --- API route ---
app.post("/api/sendEmail", async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(req.body);

    if (!name || !email || !message || !subject) {
        return res.status(400).json({ success: false, error: "Missing fields" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev", // sender’s name and email
            to: "tarrancesiyabonga@gmail.com",   // your fixed email
            subject: `${subject}`,
            html: `
        <h4>Email from your portfolio</h4>
        <p><strong>From:</strong>Email: (${email})</p>
        <p><strong>Name:</strong>Name: ${name}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`,
        });

        res.json({ success: true });
    } catch (err) {
        console.error("Email send failed:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// --- Serve Vite build in production ---
if (process.env.NODE_ENV === "production") {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("/*", (_, res) => {
        res.sendFile(path.join(distPath, "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
