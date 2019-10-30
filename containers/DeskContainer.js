import React from 'react';
import { useSelector } from 'react-redux';
import { getDesk } from '../selectors/desk'
import Desk from '../components/Desk';

const DeskContainer = () => {
  const desk = useSelector((state) => getDesk(state));

  return <Desk
    loading={desk.loading}
    error={desk.error}
    list={desk.results}
  />
};

export default DeskContainer;
