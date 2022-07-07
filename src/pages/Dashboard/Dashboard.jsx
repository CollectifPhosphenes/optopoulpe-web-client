import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LabelButton, ToggleButton } from "components";
import { fetchData } from "./actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, fetchData]);

  return (
    <>
      <LabelButton label="Coucou" isToggled={true} />
      <ToggleButton />
    </>
  );
}

export default Dashboard;