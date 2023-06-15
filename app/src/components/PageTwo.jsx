import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { getTargetLdl, getLdlInMg } from "../util";
export default function PageTwo({ paginate }) {
  const { title, subTitle, targetText, question, answers, choiseEightMessage } =
    useSelector((state) => state.staticData.pageTwo);
  const { unintPerLiter, unintPerDLiter } = useSelector(
    (state) => state.staticData.pageOne
  );
  const { ldlValue, criteriaApplyOnPatient } = useSelector(
    (state) => state.ldlData
  );

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
            <p className="hint">{choiseEightMessage}</p>
          ) : (
            <>
              <span>{targetText}</span>
              <span className="value">{`${targetLdlInMol} ${unintPerLiter}`}</span>
              <span className="value">{`${getLdlInMg(
                targetLdlInMol
              )} ${unintPerDLiter}`}</span>
            </>
          )}
        </p>
      </article>
      <article className="patient-treatment">
        <p>{question}</p>
        <div className="answers-container">
          {answers.map(({ id, message }) => (
            <div className="answer" key={id}>
              <Checkbox
                inputId={id}
                // checked={criteriaApplyOnPatient.includes(id)}
                // onChange={() => {
                //   dispatch(updateSelectedCriteriaApplyOnPatient(id));
                // }}
              />
              <label htmlFor={id}>{message}</label>
            </div>
          ))}
        </div>
      </article>
      <footer className="space-bwteen">
        <Button
          icon="pi pi-caret-left"
          label="Back"
          iconPos="left"
          onClick={() => {
            paginate(-1);
          }}
        />
        <Button
          icon="pi pi-caret-right"
          label="Next"
          iconPos="right"
          onClick={() => {
            paginate(1);
          }}
        />
      </footer>
    </section>
  );
}
