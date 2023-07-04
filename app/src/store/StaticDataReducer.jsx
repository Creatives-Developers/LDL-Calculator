import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageOne: {
    projetName: "LDL-C Predicatability Calculator",
    pageTitle: "Patient's Current LDL-C",
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
      { id: "ans-4", message: "Severe CKD {eGFR <30 mL/min/1.73 m²}" },
      {
        id: "ans-5",
        message:
          "DM with target organ damage, or at least three major risk factors, or early onset of T1DM of long duration {>20 years}",
      },
      {
        id: "ans-6",
        message: "Early onset of T1DM of long duration (>20 years)",
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
    title: "Recommended LDL-C Target",
    subTitle: 'As per 2019 ESC Guidelines, this is a "Very High" Risk Patient',
    question: `Patient's Current Treatment`,
    recommendPrefix: "LDL-C Target should be less than",
    recommendsuffix: "+ ≥ 50% LDL-C Reduction from baseline",
    answers: [
      {
        id: "ans_1",
        message: "No Current LLA medication (Naïve Patient)",
      },
      {
        id: "ans_2",
        message: "Moderate intensity statin ",
      },
      {
        id: "ans_3",
        message: "Moderate intensity statin plus ezetimibe",
      },
      {
        id: "ans_4",
        message: "High intensity statin ",
      },
      {
        id: "ans_5",
        message: "High intensity statin plus ezetimibe",
      },
    ],
    choiseEightMessage: `This is not a "very high risk patient", kindly refer back to ESC 2019 guidelines for LDL-C targets recommendations`,
  },
  pageThree: {
    data: {
      ans_1: [
        {
          message: `Add Moderate intensity statin + ezetimibe`,
          estimatedReduction: 45,
        },
        {
          message: `Add High intensity statin + ezetimibe`,
          estimatedReduction: 65,
        },
        {
          message: `Add high intensity statin + ezetimibe + PCSK9 inhibitor`,
          estimatedReduction: 85,
        },
      ],
      ans_2: [
        { message: `Add ezetimibe`, estimatedReduction: 15 },
        {
          message: `Uptitrate to High intensity statin + ezetimibe`,
          estimatedReduction: 21,
        },
        {
          message: `Uptitrate to High intensity statin + ezetimibe + PCSK9 inhibitor`,
          estimatedReduction: 81,
        },
      ],
      ans_3: [
        {
          message: `Uptitrate to High intensity statin + ezetimibe`,
          estimatedReduction: 6,
        },
        {
          message: `Uptitrate to High intensity statin + ezetimibe + PCSK9 inhibitor`,
          estimatedReduction: 66,
        },
      ],
      ans_4: [
        {
          message: `Add ezetimibe`,
          estimatedReduction: 15,
        },
        {
          message: `Add ezetimibe + PCSK9 inhibitor`,
          estimatedReduction: 75,
        },
      ],
      ans_5: [
        {
          message: `Add PCSK9i`,
          estimatedReduction: 60,
        },
      ],
    },
    acheiveMessage: `Estimated New LDL-C Achieved`,
    estimationReductionTitle: "Predictability Percentage of LDL-C Reduction",
    targetTitle: "Conclusion",
  },
};

const staticData = createSlice({
  name: "staticData",
  initialState,
});

export default staticData.reducer;
