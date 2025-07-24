# Bondex QA Task Submission

This repository contains my deliverables for the Quality Assurance Engineering take-home assignment for **Bondex**. This task was part of the interview and hiring process.

---

## About the Task

The QA task involved testing the Bondex web application available at [https://bondex.app](https://bondex.app). The main objectives were to:

- Perform exploratory testing covering critical user flows (sign-up, wallet connect, token claiming, invite links)
- Identify, document, and report bugs with clear repro steps and evidence
- Draft manual test cases targeting core functionalities
- (Optional) Automate a key test case using Playwright

---

## Repository Structure

Bondex_QA_Task/
│
├── images/ # Screenshots and evidence for bug reports
├── additional_fix es.md # Evaluation of additional functional and UX observations found
├── bug_report_1.md # First detailed bug report
├── bug_report_2.md # Second detailed bug report
├── playwright_spec.js # Playwright automated test script for Google Play button bug
├── summary.txt # Summary of test strategy and next steps
└── test_cases.md # Manual test cases in clear table and Gherkin format

yaml
Copy
Edit

---

## How to Use

- Review the **bug reports** to understand identified issues with reproducible steps and screenshots.  
- Check **test_cases.md** for detailed manual test cases that cover critical paths.  
- The **playwright_spec.js** file contains an automated test script runnable via Playwright.  
- Additional UI/UX observations are documented in **additional_fix es.md**.  
- Summary and recommended next steps are in **summary.txt**.

---

## Running the Playwright Test

Make sure you have [Playwright](https://playwright.dev) installed. Run the test with:

```bash
npx playwright test playwright_spec.js
Contact
This submission was created by nikki44k for the Bondex QA Engineering position application.

Thank you for reviewing my work!

yaml
Copy
Edit

---

If you want, I can prepare this as a ready-to-upload `.md` file for you too!
