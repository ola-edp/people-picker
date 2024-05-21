/* eslint-disable react/prop-types */
import { Person } from './Person';
import './PeopleList.css'

export const PeopleList = ({ people, title }) => {
  return <section className='PeopleList'>
    <h1>{title}</h1>
    {(people && people.length === 0) ?
      <h2>No one is in this list.</h2>
      :
      <section className="peopleWrapper">
        {people?.map((p) => <Person person={p} key={p.id} />)}
      </section>
    }
  </section>
}