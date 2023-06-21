import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { setPatientTreatment, resetLdlData } from "../store/LdlDataReducer";
import { getTargetLdl, getLdlInMg, wrapIntoLink } from "../util";
export default function PageTwo({ paginate }) {
  const { unintPerLiter, unintPerDLiter } = useSelector(
    (state) => state.staticData.pageOne
  );
  const { title, subTitle, targetText, question, answers, choiseEightMessage } =
    useSelector((state) => state.staticData.pageTwo);

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
        <p className="target">
          {criteriaApplyOnPatient.includes("ans-8") ? (
            <span className="hint">
              {wrapIntoLink(
                choiseEightMessage,
                "ESC 2019 guidelines",
                "https://academic.oup.com/eurheartj/article/41/1/111/5556353"
              )}
            </span>
          ) : (
            <>
              <span>{targetText}</span>
              <span className="value">{`${targetLdlInMol} ${unintPerLiter}`}</span>
              <span className="value">{`${getLdlInMg(targetLdlInMol).toFixed(
                2
              )} ${unintPerDLiter}`}</span>
            </>
          )}
        </p>
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
