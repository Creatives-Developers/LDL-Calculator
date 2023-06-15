export const getLdlInMg = (ldlInMol) => {
  return ldlInMol == 0 ? "" : (ldlInMol * 38.67).toFixed(2);
};

export const getLdlInMol = (ldlInMg) => {
  return ldlInMg == 0 ? "" : (ldlInMg / 38.67).toFixed(2);
};

export const getTargetLdl = (ldl = 0, criteriaApplied = []) => {
  console.log(ldl, criteriaApplied);
  let targetLdl = 0;
  if (criteriaApplied.includes("ans-7") && ldl > 2) {
    targetLdl = 1;
  } else if (!criteriaApplied.includes("ans-7") && ldl > 2.8) {
    targetLdl = 1.4;
  } else {
    targetLdl = (ldl / 2).toFixed(2);
  }

  return targetLdl;
};
