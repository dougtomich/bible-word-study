# EmailJS Setup — Free Email Delivery (~10 minutes)

EmailJS sends emails directly from the browser. Free tier = 200 emails/month.
No backend, no monthly bill, no credit card required.

---

## Step 1 — Create a free EmailJS account

Go to https://www.emailjs.com and click **Sign Up Free**.
Use your Gmail or create an account with email/password.

---

## Step 2 — Connect your Gmail (or any email)

1. In the EmailJS dashboard, click **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose **Gmail**
4. Click **Connect Account** and sign in with your Google account
5. Give it a name like `Bible Word Study`
6. Click **Create Service**
7. **Copy the Service ID** shown (looks like `service_xxxxxxx`) — you'll need it in Step 5

---

## Step 3 — Create the Subscriber Welcome Email template

This email goes to the person who signs up.

1. Click **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Set:
   - **Template Name**: `Subscriber Welcome`
   - **Subject**: `Your free Greek & Hebrew word guide`
   - **To Email**: `{{to_email}}`
4. In the **Content** box, paste this (you can customise the wording):

```
Hi there,

Thank you for subscribing to Bible Word Study!

Your free guide — 10 Greek & Hebrew Words Every Christian Should Know — 
should have opened in a new window. If you need to download it again, 
just click the link below:

{{download_url}}

The link will open the guide instantly — no sign-in required.

Grace & peace,
Bible Word Study
biblewordanalysis.com
```

5. Click **Save**
6. **Copy the Template ID** (looks like `template_xxxxxxx`)

---

## Step 4 — Create the Owner Notification template (optional but recommended)

This email notifies YOU every time someone subscribes, so you can build your list.

1. Click **Create New Template** again
2. Set:
   - **Template Name**: `New Subscriber Notification`
   - **Subject**: `New subscriber: {{subscriber_email}}`
   - **To Email**: `{{owner_email}}`
3. In the **Content** box, paste:

```
New subscriber on Bible Word Study:

Email: {{subscriber_email}}

They've been sent the welcome email and PDF download link.
```

4. Click **Save**
5. **Copy this Template ID** too

---

## Step 5 — Get your Public Key

1. In the EmailJS dashboard, click your account name (top right) → **Account**
2. Under **API Keys**, copy your **Public Key** (looks like `XXXXXXXXXXXXXXXX`)

---

## Step 6 — Create your .env file

In the root of the project (same folder as `package.json`), create a file called `.env`:

```
VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key_here
VITE_EMAILJS_SERVICE_ID=paste_your_service_id_here
VITE_EMAILJS_SUBSCRIBER_TEMPLATE=paste_subscriber_template_id_here
VITE_EMAILJS_NOTIFY_TEMPLATE=paste_notify_template_id_here
VITE_OWNER_EMAIL=your@email.com
```

Replace each value with what you copied in the steps above.
Replace `your@email.com` with the email address you want notifications sent to.

> ⚠️ The `.env` file is in `.gitignore` — it will NOT be pushed to GitHub. Your keys stay private.

---

## Step 7 — Add the env vars to Netlify

Since `.env` is not pushed to GitHub, you need to tell Netlify these values:

1. Go to https://app.netlify.com → your site → **Site configuration** → **Environment variables**
2. Click **Add a variable** for each of the 5 values above
3. Use the exact same key names (VITE_EMAILJS_PUBLIC_KEY, etc.)
4. Click **Save**

Then trigger a new deploy:

```
npm run build
npx netlify-cli deploy --prod --dir=dist
```

---

## Step 8 — Test it

1. Open https://biblewordanalysis.com
2. Enter your own email in the lead magnet form
3. Click **Download Free PDF →**
4. You should:
   - See the PDF open in a popup ✓
   - Receive a welcome email with the re-download link ✓
   - Receive a notification email with your address ✓

---

## Free Tier Limits

| Service    | Free limit            | Notes                            |
|------------|-----------------------|----------------------------------|
| EmailJS    | 200 emails/month      | ~100 new subscribers/month       |
| Netlify    | 100GB bandwidth/month | More than enough for testing     |

When you're ready to scale beyond 200/month, EmailJS paid plans start at $15/month.
At that point you'll have proof the site is working and it's worth investing.

---

## Troubleshooting

**PDF opens but no email arrives**
- Check the EmailJS dashboard → History to see if the send was attempted
- Make sure the .env variables are set in Netlify (not just locally)
- Re-deploy after adding env vars

**"Popup blocked" message**
- The PDF opens in a popup window — some browsers block popups
- Tell your users: "If the PDF doesn't open, check your browser's popup blocker"
- The Re-open PDF button in the success state gives them a second chance

**Email goes to spam**
- Gmail connected via EmailJS uses your personal Gmail to send
- Recipients are less likely to mark it as spam since it comes from a real address
- Ask early subscribers to add your email to their contacts
