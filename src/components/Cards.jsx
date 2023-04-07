import Card from './Card';

export default function Cards({ character, onClose }) {
  return (
    <div>
      {
        character && character.map(({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          )
        })
      }
    </div>
  );
}
