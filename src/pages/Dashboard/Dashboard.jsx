import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LabelButton, ToggleButton } from "components";
import { fetchData } from "./actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const global = useSelector(state => state.global);
  const tracks = useSelector(state => state.tracks);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, fetchData]);

  return (
    <>
      <LabelButton label="Coucou" isToggled={true} />
      <ToggleButton>Coucou</ToggleButton>
    </>
  );
}

export default Dashboard;