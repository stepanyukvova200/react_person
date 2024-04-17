import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={37}
      sex="m"
      isMarried={true}
      partnerName="Natasha"
    />
    <Person
      name="Olya"
      sex="f"
      isMarried={true}
      partnerName="Maksym" />
    <Person
      name="Alex"
      age={25}
      sex="m"
      isMarried={false}
    />
  </div>
);
