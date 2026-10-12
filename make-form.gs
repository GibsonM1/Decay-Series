/**
 * Builds the Google Form + response Sheet for a class interactive and prints the prefill link.
 * Reusable for any game: change the SETTINGS below.
 *
 * How to run (about 2 minutes, once per game):
 *   1. Go to script.google.com > New project. Delete what's there and paste this whole file.
 *   2. Click Run (createSubmissionForm). Approve the permissions when Google asks.
 *   3. Open View > Execution log (it opens automatically). Copy the link after the word PREFILL.
 *      Paste it into formPrefillUrl in the game's CONFIG block (or send it to Claude to push).
 * The Form and Sheet land in your Drive root. Move them wherever you like; the link keeps working.
 */
const SETTINGS = {
  title: "U-238 Decay Series: make-up submissions",
  description: "Your answers are already filled in from the U-238 Decay Series activity. Check them, then press Submit.",
  // each field: the question title, and the placeholder word the game swaps for the student's answer
  fields: [
    { title: "Name", placeholder: "STUDENTNAME", long: false },
    { title: "Period", placeholder: "CLASSPERIOD", long: false },
    { title: "Scores", placeholder: "SCORES", long: true },
    { title: "Written work", placeholder: "WRITTEN", long: true }
  ],
  // true = record the student's school Google account (they must be signed in), so a name can't be faked
  collectEmail: true
};

function createSubmissionForm() {
  const form = FormApp.create(SETTINGS.title).setDescription(SETTINGS.description)
    .setConfirmationMessage("Got it. Your work was sent.").setShowLinkToRespondAgain(false);
  if (SETTINGS.collectEmail) { try { form.setCollectEmail(true); } catch (e) { Logger.log("Could not turn on email collection: " + e); } }
  const items = SETTINGS.fields.map((f) => (f.long ? form.addParagraphTextItem() : form.addTextItem()).setTitle(f.title));
  const sheet = SpreadsheetApp.create(SETTINGS.title + " (responses)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  let resp = form.createResponse();
  items.forEach((item, i) => { resp = resp.withItemResponse(item.createResponse(SETTINGS.fields[i].placeholder)); });
  const prefill = resp.toPrefilledUrl();
  Logger.log("PREFILL " + prefill);
  Logger.log("Edit the Form: " + form.getEditUrl());
  Logger.log("Responses Sheet: " + sheet.getUrl());
}
