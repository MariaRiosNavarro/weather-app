export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}

//warning dont forget to give the right value!!!!
//der fehler war dass wir in der <li> nicht der richtige inhalt drin war.
//Wir hatten {activity} und musste {activity.name} damit die "name" value von <form>
//hier hinzugefügt wird.
