import React, { useState, useMemo } from "react";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "primereact/checkbox";
import { getEstimatedLdl, getTargetLdl, getLdlInMg } from "../util";
import { resetLdlData } from "../store/LdlDataReducer";
export default function PageThree({ paginate }) {
  const [selectedOption, setSelectedOption] = useState({});
  const { unintPerLiter, unintPerDLiter } = useSelector(
    (state) => state.staticData.pageOne
  );
  const { ldlValue, criteriaApplyOnPatient, patientTreatment } = useSelector(
    (state) => state.ldlData
  );
  const { answers } = useSelector((state) => state.staticData.pageTwo);
  const { data, acheiveMessage, targetTitle, estimationReductionTitle } =
    useSelector((state) => state.staticData.pageThree);
  const targetLdlInMol = useMemo(() => {
    return getTargetLdl(ldlValue, criteriaApplyOnPatient);
  }, [ldlValue, criteriaApplyOnPatient]);
  const estimationLdlInMol = useMemo(() => {
    return getEstimatedLdl(ldlValue, selectedOption.estimatedReduction);
  }, [ldlValue, selectedOption]);

  const isReachTarget = useMemo(() => {
    return estimationLdlInMol < targetLdlInMol;
  }, [targetLdlInMol, estimationLdlInMol]);

  const dispatch = useDispatch();
  return (
    <section className="page page-three">
      <article>
        <p className="title">
          {answers.find((ans) => ans.id === patientTreatment)?.message}
        </p>
      </article>
      <article className="options">
        <div className="answers-container ">
          {data[patientTreatment]?.map(({ message, estimatedReduction }) => (
            <div className="answer" key={message}>
              <Checkbox
                inputId={message}
                checked={selectedOption.message === message}
                onChange={() => {
                  setSelectedOption({ message, estimatedReduction });
                }}
              />
              <label htmlFor={message}>{`${message} `}</label>
            </div>
          ))}
        </div>
      </article>
      {selectedOption.estimatedReduction && (
        <article className="estimation-result">
          <div className="estimation-reduction">
            <p>{estimationReductionTitle}</p>
            <span>{`${selectedOption.estimatedReduction}% `}</span>
          </div>
          <div>
            <p>{acheiveMessage}</p>
            <span>{`${estimationLdlInMol} ${unintPerLiter}`}</span>
            <span>{`${Math.round(
              getLdlInMg(estimationLdlInMol)
            )} ${unintPerDLiter}`}</span>
          </div>
          <div>
            <p>{targetTitle}</p>
            {isReachTarget ? (
              <p className="success">{"Reaching LDL-C Target"}</p>
            ) : (
              <p className="danger">{"Not Reaching LDL-C Target"}</p>
            )}
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
        <Button
          icon="pi pi-replay"
          label="Start Over"
          iconPos="right"
          onClick={() => {
            paginate(1);
            dispatch(resetLdlData());
          }}
        />
      </footer>
    </section>
  );
}
