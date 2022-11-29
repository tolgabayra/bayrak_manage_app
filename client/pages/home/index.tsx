import React, { useEffect, useState } from 'react'
import {
  getSession,
  signIn,
  signOut,
  useSession
} from 'next-auth/react'



const index = () => {
  const [loading, setLoading] = useState(true)
  const { data: session } = useSession()


  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      console.log({
        session
      })
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }

    securePage()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }
  return <>
    <h1>Home page</h1>
  


    <button className=' bg-red-500 m-3 p-3' onClick={() => signOut()}>Sign out</button>
  </>
}


export default index