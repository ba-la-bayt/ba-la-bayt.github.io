/*
  BA-LA-BAYT EVENTS — edit this file to add new events.

  A published event MUST have a real confirmed date in YYYY-MM-DD format.
  Never put an estimated or tentative date here as though it were confirmed.

  To publish the prepared talk below:
    1. Add its confirmed date, e.g. "YYYY-MM-DD" (replace with a real date).
    2. Add the confirmed time (never publish a street address).
    3. Add registrationUrl if applicable (otherwise leave it blank).
    4. Change published from false to true.
    5. Save and upload this file to GitHub.

  To add more, copy the { ... } event object inside the array,
  separate adjacent objects with commas.
*/
window.BALABAYT_EVENTS = [
  {
    id: "nir-oz-testimonies",
    published: true, // HIDDEN until confirmed details are entered.
    date: "2026-10-18", // YYYY-MM-DD, e.g. 2026-12-05 ONLY IF IT IS THE ACTUAL DATE.
    time: "19:00", // e.g. 19:00 (24-hour clock)
    category: { en: "Community talk", he: "מפגש קהילתי" },
    title: {
      en: "From the Inferno of the Safe Room and the Tunnels of Gaza to the Path of Healing and Recovery (Personal stories from Kibbutz Nir Oz)",
      he: "מהתופת בממד ובמנהרות בעזה, אל הדרך לריפוי ולהחלמה  (עדויות אישיות מקיבוץ ניר עוז)"
    },
    description: {
      en: "Hear from Nili Margalit and Eyal Barad about their experiences of October 7, captivity, survival, and the impact on the Nir Oz community.",
      he: "מפגש עם נילי מרגלית ואייל ברעד, שישתפו בחוויותיהם מ־7 באוקטובר, בשבי, בהישרדות ובהשפעת המתקפה על קהילת ניר עוז."
    },
    registrationUrl: "https://forms.gle/dbS2DvkCFnZUHeaP7", // Add registration link only if there is one.
    qrImage: "assets/favicon.png" // Optional: file in assets/, generated from the registration link.
  }
];
