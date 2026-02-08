# Google Sheets Contact Form Integration

## Setup Instructions

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "devilsLab Contact Form Submissions"
4. Add these column headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Message`
   - E1: `Source`
   - F1: `PageURL`

### Step 2: Create Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any default code
3. Copy and paste the code from [`docs/google-apps-script.js`](./google-apps-script.js)
4. Click **Save** (💾 icon)
5. Name the project: "Contact Form Backend"

### Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: `Contact Form API`
   - **Execute as**: `Me (your@email.com)`
   - **Who has access**: `Anyone`
5. Click **Deploy**
6. **Authorize access** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" > "Go to Contact Form Backend (unsafe)"
   - Click "Allow"
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/.../exec`)

### Step 4: Update Environment Variable

1. Open `.env.local` in your project
2. Replace `your_google_apps_script_url_here` with your copied URL:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Save the file
4. Restart your dev server: `npm run dev`

### Step 5: Test the Integration

1. Go to your website: `http://localhost:9002/#contact`
2. Fill out the contact form
3. Click "Send Message"
4. Check your Google Sheet - a new row should appear with the submission

## How It Works

1. **User submits form** → Frontend validates data
2. **POST request** → Sends JSON to Google Apps Script
3. **Apps Script** → Appends row to Google Sheet
4. **Success response** → Opens WhatsApp with user's message
5. **WhatsApp message format**:
   ```
   Hi devilsLab team 👋
   
   [User's exact message]
   ```

## Important Notes

- ✅ Form data is stored in Google Sheets (your backup)
- ✅ User is automatically redirected to WhatsApp
- ✅ WhatsApp message contains ONLY the user's message (no templates)
- ✅ `.env.local` is not pushed to GitHub (your URL is safe)
- ❌ Do NOT share your Apps Script URL publicly

## Troubleshooting

### "Failed to send" error
- Verify the Apps Script URL in `.env.local` is correct
- Check that the deployment is set to "Anyone" access
- Make sure you authorized the script to access your Google Sheet

### Data not appearing in sheet

**Most Common Issue: Need to REDEPLOY after code changes**

1. Open your Apps Script editor
2. Click **Deploy** > **Manage deployments**
3. Click the pencil icon (✏️) next to your existing deployment
4. Change **Version**: Select "New version"
5. Click **Deploy**
6. Try submitting the form again

**Other checks:**
- Open Apps Script > **Executions** tab to see error logs
- Make sure the sheet is named "Sheet1" or update the script
- Run the `testDoPost()` function in Apps Script to verify it works
- Check browser console (F12) for frontend errors
- Verify the URL in `.env.local` ends with `/exec` (not `/dev`)

**Test the API directly:**
1. Open your Apps Script URL in a browser
2. You should see: `{"status":"Contact Form API is running"}`
3. If you see an error, the deployment isn't active

### WhatsApp not opening
- Check browser console for errors
- Verify phone number in `.env.local` is correct format: `919100360159`
- Test WhatsApp URL manually: `https://wa.me/919100360159?text=test`

### Form submits but data doesn't save
- Check if Sheet1 exists (or rename in script to match your sheet name)
- Open Apps Script Executions tab - see if function ran
- Look for "Error: " messages in execution logs
- Make sure you authorized the script to write to the sheet
