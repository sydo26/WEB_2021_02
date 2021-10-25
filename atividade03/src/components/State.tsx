import { useAppDispatch } from "../store/config";
import {
  citiesVotesSelector,
  decrementAction,
  incrementAction,
  resetAction,
} from "../store/features/count";
import React from "react";

import styled from "./state.module.css";
import { useSelector } from "react-redux";

export type StateProps = {};

export const State: React.FC<StateProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const citiesVotes = useSelector(citiesVotesSelector);

  function handleChangeVotes(
    cityName: string,
    type: "vote" | "unvote" | "reset"
  ) {
    switch (type) {
      case "vote":
        return dispatch(incrementAction({ key: cityName }));
      case "unvote":
        return dispatch(decrementAction({ key: cityName }));
      case "reset":
        return dispatch(resetAction([{ key: cityName }]));
      default:
        return;
    }
  }

  return (
    <div className={styled.state}>
      <div className="cities">
        {React.Children.map(children as React.ReactElement, (child) => {
          return React.cloneElement(child, {
            onChange: handleChangeVotes,
            votes: citiesVotes[child.props.name],
          });
        })}
      </div>
    </div>
  );
};
