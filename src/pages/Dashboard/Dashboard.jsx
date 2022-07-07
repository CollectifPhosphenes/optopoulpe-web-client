import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LabelButton from "components/LabelButton/LabelButton";
import { fetchData } from "./actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, fetchData]);

  return <LabelButton label="Coucou" isToggled={true} />;
}

export default Dashboard;