import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { setPatientTreatment, resetLdlData } from "../store/LdlDataReducer";
import { getTargetLdl, getLdlInMg } from "../util";
export default function PageTwo({ paginate }) {
  const { unintPerLiter, unintPerDLiter } = useSelector(
    (state) => state.staticData.pageOne
  );
  const {
    title,
    subTitle,
    question,
    answers,
    choiseEightMessage,
    recommendPrefix,
    recommendsuffix,
  } = useSelector((state) => state.staticData.pageTwo);

  const { ldlValue, criteriaApplyOnPatient, patientTreatment } = useSelector(
    (state) => state.ldlData
  );
  const dispatch = useDispatch();
  const targetLdlInMol = useMemo(() => {
    return getTargetLdl(ldlValue, criteriaApplyOnPatient);
  }, [ldlValue, criteriaApplyOnPatient]);
  return (
    <section className="page page-two">
      <article className="conclusion">
        <p className="title">{title}</p>
        <p className="sub-title">{subTitle}</p>
        <div className="target">
          {criteriaApplyOnPatient.includes("ans-8") ? (
            <span className="hint">{choiseEightMessage}</span>
          ) : (
            <>
              <span className="prefix">{recommendPrefix}</span>
              <div>
                <span className="value">{`${targetLdlInMol} ${unintPerLiter}`}</span>
                <span className="value">{`${getLdlInMg(targetLdlInMol).toFixed(
                  1
                )} ${unintPerDLiter}`}</span>
              </div>
              <span className="suffix">{recommendsuffix}</span>
            </>
          )}
        </div>
      </article>
      {!criteriaApplyOnPatient.includes("ans-8") && (
        <article className="patient-treatment">
          <p>{question}</p>
          <div className="answers-container">
            {answers.map(({ id, message }) => (
              <div className="answer" key={id}>
                <Checkbox
                  inputId={id}
                  checked={patientTreatment === id}
                  onChange={() => {
                    dispatch(setPatientTreatment(id));
                  }}
                />
                <label htmlFor={id}>{message}</label>
              </div>
            ))}
          </div>
        </article>
      )}
      <footer className="space-bwteen">
        <Button
          icon="pi pi-caret-left"
          label="Back"
          iconPos="left"
          onClick={() => {
            paginate(-1);
          }}
        />
        {criteriaApplyOnPatient.includes("ans-8") ? (
          <Button
            icon="pi pi-replay"
            label="Start Over"
            iconPos="right"
            onClick={() => {
              paginate(-1);
              dispatch(resetLdlData());
            }}
          />
        ) : (
          <Button
            disabled={!patientTreatment.length}
            icon="pi pi-caret-right"
            label="Next"
            iconPos="right"
            onClick={() => {
              paginate(1);
            }}
          />
        )}
      </footer>
    </section>
  );
}
