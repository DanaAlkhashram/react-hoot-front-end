import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as hootService from '../../services/hootService'

const HootDetails = () => {

  const { hootId } = useParams()

  const [hoot, setHoot] = useState()
  
  useEffect(() => {
    // fetch a single hoot
    const fetchHoot = async () => {
      // call the hoot service
      const hootData = await hootService.show(hootId)
      setHoot(hootData)
    }
    fetchHoot()
  }, [hootId])

  if (!hoot) return <main>Loading...</main>

  return (
    <main>
      <header>
        <p>{hoot.category.toUpperCase()}</p>
        <h1>{hoot.title}</h1>
        <p>
          {hoot.author.username} posted on {new Date(hoot.createdAt).toLocaleDateString()}
        </p>
      </header>
    </main>
  )
}

export default HootDetails