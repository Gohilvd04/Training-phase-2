import React from "react";
import Person from "./Person";
function NameList() {
  const persons = [
    {
      id: 1,
      name: "Vd",
      age: 21,
      skill: "Dev",
    },
    {
      id: 2,
      name: "cd",
      age: 23,
      skill: "art",
    },
    {
      id: 3,
      name: "ld",
      age: 40,
      skill: "sup wom",
    },
  ];

  const personList = persons.map(person => <Person key = {person.id} person = {person} />);
  return <div>{personList}</div>;
}

export default NameList; 
