export const getLdlInMg = (ldlInMol) => {
  return ldlInMol == 0 ? "" : ldlInMol * 38.67;
};

export const getLdlInMol = (ldlInMg) => {
  return ldlInMg == 0 ? "" : ldlInMg / 38.67;
};

export const getTargetLdl = (ldl = 0, criteriaApplied = []) => {
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

export const getEstimatedLdl = (currentLdl, estimatedReduction = 0) => {
  const reductionPercentage = (100 - estimatedReduction) / 100.0;
  return (currentLdl * reductionPercentage).toFixed(2);
};

export const wrapIntoLink = (statement, targetWord, route = "#") => {
  return statement.split(" ").map((word) => {
    if (targetWord === word.replaceAll("__", " ")) {
      return (
        <a key={word} href={route} target="_blank" rel="noreferrer">
          {targetWord}
        </a>
      );
    } else {
      return ` ${word} `;
    }
  });
};
