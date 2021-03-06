import React from 'react';
import { useSelector } from 'react-redux';
import { getDeskList } from '../selectors/desk'
import Desk from '../components/Desk';

const DeskContainer = ({ navigation }) => {
  const desk = useSelector((state) => getDeskList(state));

  return (
    <Desk
      loading={desk.loading}
      error={desk.error}
      list={desk.results}
      navigate={navigation.navigate}
    />
  );
};

export default DeskContainer;
