# Player Registration Module TODO

## Phase 1: Firebase Setup and Configuration
- [x] Update src/app/firebase.js to include Firestore initialization
- [ ] Manually create 'sports' collection in Firestore with documents for each sport (Football:01, Volleyball:02, etc., based on ASM events)

## Phase 2: Backend - Cloud Function
- [x] Create functions/ folder
- [x] Create functions/package.json with dependencies: firebase-functions, firebase-admin, cors, qrcode, nodemailer, twilio
- [x] Create functions/index.js with registerAndGenerateId function logic (C.L.E.A.R. ID generation, QR code, Firestore save, email/WhatsApp placeholders)

## Phase 3: Frontend - React Components and Pages
- [x] Create src/components/RegistrationForm.tsx (TypeScript component with form, state, validation, axios post)
- [x] Create src/app/events/ASM/register/page.tsx (Next.js page using RegistrationForm)
- [x] Update src/app/events/ASM/page.tsx to link "Register Now" to /events/ASM/register

## Phase 4: Dependencies and Installation
- [x] Add frontend dependencies to package.json: firebase, axios, react-hot-toast
- [x] Install dependencies: npm install firebase axios react-hot-toast
- [x] For Cloud Function: cd functions && npm install

## Phase 5: Testing and Deployment
- [ ] Deploy Cloud Function: firebase deploy --only functions
- [ ] Test registration form locally
- [ ] Verify Firestore data, QR code storage, notifications (placeholders)
- [ ] Update security rules for production

## Notes
- C.L.E.A.R. ID: DDMM-AcademicStatus-RollNumber-SportID-Random (3-char)
- Sports: Map ASM events to sportIDs (e.g., Football:01, Volleyball:02, etc.)
- Notifications: Placeholder code for email (Nodemailer) and WhatsApp (Twilio)
- Environment variables for API keys via Firebase CLI
