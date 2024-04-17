import '../../App.scss';

export const Person = ({ name, age, sex, isMarried, PartnerName }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined
        && <p className="Person__age">I am {age}</p>
      }
      <p className="Person__partner">
        {!isMarried
          && 'I am not married'
        }
        {isMarried
          && sex === 'm'
          && `${PartnerName} is my wife`
        }
        {isMarried
          && sex === 'f'
          && `${PartnerName} is my husband`
        }
      </p>
    </section>
  );
};
