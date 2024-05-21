import PropTypes from 'prop-types';

export const Person = (props) => {
  const person = props.person;
  const width = Math.floor(Math.random() * (202 - 198 + 1)) + 198;
  const height = Math.floor(Math.random() * (202 - 198 + 1)) + 198;
  return <section className="Person card flex-grow-1">
    <img src={`${person.imageUrl}`} className='card-img-top' height="250px" />
    <div className='card-body'>
      <h3 className='card-title'>{person.first} {person.last}</h3>
      <table>
        <tbody>
          <tr><td>Email</td><td>{person.email}</td></tr>
          <tr><td>Age</td><td>{person.age}</td></tr>
        </tbody>
      </table>
    </div>
  </section>
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
}