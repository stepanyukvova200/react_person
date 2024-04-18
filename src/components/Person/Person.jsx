const getMarriageStatus = (person) => {
  if (!person.isMarried) {
    return 'I am not married';
  } else if (person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  } else if (person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age !== undefined
      && <p className="Person__age">I am {person.age}</p>
    }
    <p className="Person__partner">
      {getMarriageStatus(person)}
    </p>
  </section>
);
