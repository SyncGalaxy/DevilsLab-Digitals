/**
 * Google Apps Script for DevilsLab Contact Form Backend
 *
 * WHAT THIS DOES:
 * 1. Receives contact form submissions from the DevilsLab website.
 * 2. Saves the lead into Google Sheets.
 * 3. Sends an email notification to work@devilslab.co.in.
 *
 * WHERE TO PASTE:
 * Google Sheet → Extensions → Apps Script
 *
 * DEPLOY SETTINGS:
 * Deploy → New deployment → Web app
 * Execute as: Me
 * Who has access: Anyone
 *
 * ENV VARIABLE IN NEXT.JS:
 * NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_apps_script_web_app_url
 */

const NOTIFICATION_EMAIL = "work@devilslab.co.in";
const SHEET_NAME = "Sheet1";

const HEADERS = [
  "Timestamp",
  "Name",
  "Company",
  "Website",
  "Email",
  "Phone",
  "Need Help With",
  "Budget Range",
  "Timeline",
  "Preferred Contact",
  "Message",
  "Source",
  "Page URL"
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No post data received");
    }

    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();

    ensureHeaders(sheet);

    const row = [
      new Date(),
      data.name || "",
      data.company || "",
      data.website || "",
      data.email || "",
      data.phone || "",
      data.needHelp || "",
      data.budgetRange || "",
      data.timeline || "",
      data.preferredContact || "",
      data.message || "",
      data.source || "",
      data.pageUrl || ""
    ];

    sheet.appendRow(row);

    sendEmailNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "DevilsLab inquiry saved successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Contact form error: " + error.toString());

    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function ensureHeaders(sheet) {
  const lastRow = sheet.getLastRow();

  if (lastRow === 0) {
    sheet.appendRow(HEADERS);
    styleHeaderRow(sheet);
    return;
  }

  const currentHeaders = sheet
    .getRange(1, 1, 1, HEADERS.length)
    .getValues()[0];

  const headersAreMissing = currentHeaders[0] !== "Timestamp" || currentHeaders.length < HEADERS.length;

  if (headersAreMissing) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    styleHeaderRow(sheet);
  }
}

function styleHeaderRow(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);

  headerRange
    .setFontWeight("bold")
    .setBackground("#1e293b")
    .setFontColor("#ffffff");

  sheet.setFrozenRows(1);
}

function sendEmailNotification(data) {
  const subject = "New DevilsLab Website Inquiry";

  const body =
`New DevilsLab website inquiry received.

Name:
${data.name || "Not provided"}

Company:
${data.company || "Not provided"}

Website:
${data.website || "Not provided"}

Email:
${data.email || "Not provided"}

Phone:
${data.phone || "Not provided"}

Need Help With:
${data.needHelp || "Not provided"}

Budget Range:
${data.budgetRange || "Not provided"}

Timeline:
${data.timeline || "Not provided"}

Preferred Contact:
${data.preferredContact || "Not provided"}

Project Details:
${data.message || "Not provided"}

Source:
${data.source || "Not provided"}

Page URL:
${data.pageUrl || "Not provided"}

---
DevilsLab Contact Form`;

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    body: body,
    replyTo: data.email || NOTIFICATION_EMAIL
  });
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "DevilsLab Contact Form API is running",
      message: "This endpoint accepts POST requests only"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: "Test User",
        company: "Test Company",
        website: "https://example.com",
        email: "test@example.com",
        phone: "+91 99999 99999",
        needHelp: "Growth System",
        budgetRange: "$1,500 - $3,000",
        timeline: "This month",
        preferredContact: "WhatsApp",
        message: "This is a test message for the new DevilsLab contact form.",
        source: "Test Function",
        pageUrl: "http://localhost:9002/#contact"
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}