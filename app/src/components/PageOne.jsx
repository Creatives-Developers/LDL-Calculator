import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import {
  setLdlValue,
  updateSelectedCriteriaApplyOnPatient,
} from "../store/LdlDataReducer";
import { getLdlInMg, getLdlInMol } from "../util";
export default function PageOne({ paginate }) {
  const {
    projetName,
    pageTitle,
    unintPerLiter,
    unintPerDLiter,
    question,
    answers,
  } = useSelector((state) => state.staticData.pageOne);
  const { ldlValue, criteriaApplyOnPatient } = useSelector(
    (state) => state.ldlData
  );
  const dispatch = useDispatch();
  return (
    <section className="page page-one">
      <h1>{projetName}</h1>
      <article className="patient-ldl">
        <p className="title"> {pageTitle}</p>
        <div className="input-container">
          <div className="input-item">
            <p>{unintPerLiter}</p>
            <InputNumber
              value={ldlValue}
              onChange={(e) => {
                dispatch(setLdlValue(e.value));
              }}
              min={0}
              maxFractionDigits={1}
              onCut={(e) => {
                dispatch(setLdlValue(""));
              }}
            />
          </div>

          <div className="input-item">
            <p>{unintPerDLiter}</p>
            <InputNumber
              value={getLdlInMg(ldlValue)}
              onChange={(e) => {
                dispatch(setLdlValue(getLdlInMol(e.value)));
              }}
              min={0}
              maxFractionDigits={1}
              onCut={(e) => {
                dispatch(setLdlValue(""));
              }}
            />
          </div>
        </div>
      </article>
      <article className="patient-criteria">
        <p>{question}</p>
        <div className="answers-container">
          {answers.map(({ id, message }) => (
            <div className="answer" key={id}>
              <Checkbox
                inputId={id}
                checked={criteriaApplyOnPatient.includes(id)}
                onChange={() => {
                  dispatch(updateSelectedCriteriaApplyOnPatient(id));
                }}
              />
              <label htmlFor={id}>{message}</label>
            </div>
          ))}
        </div>
      </article>
      <footer>
        <Button
          icon="pi pi-caret-right"
          label="Next"
          iconPos="right"
          disabled={!ldlValue || !criteriaApplyOnPatient.length}
          onClick={() => {
            paginate(1);
          }}
        />
      </footer>
    </section>
  );
}
