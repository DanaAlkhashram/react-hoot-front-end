import { Link } from 'react-router-dom'

const HootList = (props) => {
  if (!props.hoots || !Array.isArray(props.hoots)) {
    return <p>Loading hoots...</p>
  }

  return (
    <main>
      <h1>Hoot List</h1>
      {props.hoots.length === 0 ? (
        <p>No hoots found.</p>
      ) : (
        props.hoots.map((hoot) => (
          <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
            <article>  
              <header>
                <h2>{hoot.title}</h2>
                <p>
                  {hoot.author?.username ?? 'Unknown'} posted on {new Date(hoot.createdAt).toLocaleDateString()}
                </p>
              </header>
              <p>{hoot.text}</p>
            </article>
          </Link>
        ))
      )}
    </main>
  )
}

export default HootList
