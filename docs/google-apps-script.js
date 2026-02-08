/**
 * Google Apps Script for Contact Form Backend
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet with columns: Timestamp, Name, Email, Message, Source, PageURL
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Click "Deploy" > "New deployment"
 * 5. Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Click "Deploy" and copy the Web App URL
 * 9. Add the URL to .env.local as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Parse incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (make sure you're on the correct sheet)
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Sheet1') || ss.getActiveSheet();
    
    // If this is the first submission, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message', 'Source', 'PageURL']);
    }
    
    // Append row with form data
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name || '',      // Name
      data.email || '',     // Email
      data.message || '',   // Message
      data.source || '',    // Source
      data.pageUrl || ''    // Page URL
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing in browser)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'Contact Form API is running',
      message: 'This endpoint accepts POST requests only'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function to verify setup
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message",
        source: "Test",
        pageUrl: "http://localhost:9002"
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
