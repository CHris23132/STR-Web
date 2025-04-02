/**
 * Import required functions & modules
 */
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const fetch = require("node-fetch"); // or any HTTP client you prefer

/**
 * Trigger fires when a new document is created in the "properties" collection
 */
exports.sendPropertyToHostfully = onDocumentCreated("properties/{docId}", async (event) => {
  try {
    // Grab the new document data
    const propertyData = event.data.data();

    // Prepare the payload for Hostfully - adjust the fields as needed 
    // so they map properly from your Firestore document to Hostfully’s /leads endpoint
    const payload = {
      // Example fields (replace with real ones from your propertyData):
      listingId: propertyData.listingId,
      firstName: propertyData.firstName,
      lastName: propertyData.lastName,
      email: propertyData.email,
      phone: propertyData.phone,
      message: propertyData.message,
      language: propertyData.language,
      arrivalDate: propertyData.arrivalDate,
      departureDate: propertyData.departureDate,
      adults: propertyData.adults,
      children: propertyData.children,
      // ... Add any other fields Hostfully needs
    };

    // Post the new lead data to the Hostfully endpoint
    const response = await fetch("https://api.hostfully.com/api/v3/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Replace this with how you manage your secrets in production
        "X-API-KEY": "ukNruuLswAygrvUi", 
      },
      body: JSON.stringify(payload),
    });

    // Parse the response
    const result = await response.json();
    logger.info("Successfully sent data to Hostfully", result);
  } catch (error) {
    logger.error("Error sending data to Hostfully:", error);
  }
});

/**
 * Example HTTP function just for reference (if you want one)
 */
// const {onRequest} = require("firebase-functions/v2/https");
// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });