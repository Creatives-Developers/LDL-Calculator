import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ldlValue: "" /* mmol/L */,
  criteriaApplyOnPatient: [],
};

const ldlData = createSlice({
  name: "ldlData",
  initialState,
  reducers: {
    setLdlValue: (state, action) => {
      return {
        ...state,
        ldlValue: action.payload,
      };
    },
    updateSelectedCriteriaApplyOnPatient: (state, action) => {
      let criteriaApplyOnPatient = [...state.criteriaApplyOnPatient];
      criteriaApplyOnPatient.includes(action.payload)
        ? (criteriaApplyOnPatient = criteriaApplyOnPatient.filter(
            (id) => id !== action.payload
          ))
        : criteriaApplyOnPatient.push(action.payload);
      return {
        ...state,
        criteriaApplyOnPatient: criteriaApplyOnPatient,
      };
    },
  },
});
export const { setLdlValue, updateSelectedCriteriaApplyOnPatient } =
  ldlData.actions;
export default ldlData.reducer;
