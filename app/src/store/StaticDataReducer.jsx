import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageOne: {
    title: "LDL-C Predictability Calculator",
    unintPerLiter: "mmol/L",
    unintPerDLiter: "mg/dL",
    question:
      "Kindly choose any of the below criteria that apply on this patient profile:",
    answers: [
      {
        id: "ans-1",
        message: "Documented ASCVD, either clinical or unequivocal on imaging",
      },
      {
        id: "ans-2",
        message: "A calculated SCORE >_10% for 10-year risk of fatal CVD",
      },
      {
        id: "ans-3",
        message: "FH with ASCVD or with another major risk factor",
      },
      { id: "ans-4", message: "Severe CKD (eGFR <30 mL/min)" },
      {
        id: "ans-5",
        message: "DM & target organ damage: ≥3 major risk factors",
      },
      {
        id: "ans-6",
        message: "early onset of T1DM of long duration (>20 years)",
      },
      {
        id: "ans-7",
        message:
          " ASCVD patient who experienced a second vascular event within 2 years (not necessarily of the same type as the first event)",
      },
      {
        id: "ans-8",
        message: "None of these criteria applies on this patient",
      },
    ],
  },
  pageTwo: {
    title: "Conclusion",
    subTitle: 'As per 2019 ESC Guidelines, this is a "Very High" Risk Patient',
    targetText: "Target LDL-C Should Be",
    question: `Patient's Current Treatment`,
    answers: [
      {
        id: "ans-1",
        message: "No Current LLA medication (Naïve Patient)",
      },
      {
        id: "ans-2",
        message: "Moderate intensity statin ",
      },
      {
        id: "ans-3",
        message: "Moderate intensity statin plus ezetimibe",
      },
      {
        id: "ans-4",
        message: "High intensity statin ",
      },
      {
        id: "ans-5",
        message: "High intensity statin plus ezetimibe",
      },
      {
        id: "ans-6",
        message: "PCSK9 inhibitor ",
      },
      {
        id: "ans-7",
        message: "PCSK9 inhibitor plus high intensity statin",
      },
    ],
    choiseEightMessage: `This is not a "very risk patient",kindly refer back to ESC 2019 guidelines for LDL-C targets recommendations`,
  },
};

const staticData = createSlice({
  name: "staticData",
  initialState,
});

export default staticData.reducer;
