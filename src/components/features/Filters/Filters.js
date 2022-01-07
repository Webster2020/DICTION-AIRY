import React, { useState } from 'react';
import styles from './Filters.module.scss';

import { Button } from '../../common/Button/Button';
import { MainButtons } from '../MainButtons/MainButtons';
import { FiltersForm } from '../FiltersForm/FiltersForm';

const Component = () => {
  const [filters, setFilters] = useState(false);

  const filtersVisible = (e, bool) => {
    e.preventDefault();
    console.log('close');
    setFilters(bool);
  };

  return (
    <div>
      <MainButtons>
        <Button variant='home' onClick={(e) => filtersVisible(e, true)}>
          <h2>FILTERS</h2>
        </Button>
      </MainButtons>
      {filters && (
        <div className={styles.f}>
          <Button variant='x' onClick={(e) => filtersVisible(e, false)}>
            <h3 className={'fx'}>x</h3>
          </Button>
          <FiltersForm close={setFilters} />
        </div>
      )}
    </div>
  );
};

export { Component as Filters, Component as FiltersComponent };
