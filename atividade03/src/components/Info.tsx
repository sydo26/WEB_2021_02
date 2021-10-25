import React from "react";
import { citiesVotesSelector, resetAction } from "../store/features/count";

import styled from "./info.module.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/config";

export type InfoProps = {};

export const Info: React.FC<InfoProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const citiesVotes = useSelector(citiesVotesSelector);

  const valuesCitiesVotes = Object.values(citiesVotes);

  const totalVotes = valuesCitiesVotes.length
    ? valuesCitiesVotes.reduce((p, c) => p + c)
    : 0;

  return (
    <div className={styled.info}>
      <table>
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Votos</th>
            <th>Porcentagem</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(citiesVotes)
            .sort(([k1, v1], [k2, v2]) => {
              return v2 - v1;
            })
            .map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value} voto(s)</td>
                  <td>
                    {new Intl.NumberFormat("en-US", {
                      style: "percent",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(value / totalVotes)}
                  </td>
                </tr>
              );
            })}
        </tbody>

        <tfoot>
          <tr>
            <th>Resultado</th>
            <td>{totalVotes} voto(s)</td>
            <td>100%</td>
          </tr>
        </tfoot>
      </table>
      <button
        disabled={!totalVotes}
        onClick={() => dispatch(resetAction([]))}
        className={styled.resetall}
      >
        Resetar todos
      </button>
    </div>
  );
};
