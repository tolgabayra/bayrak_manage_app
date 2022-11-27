import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import AuthContext from '../../auth/authContext'

function Home() {
    const {user} = useContext(AuthContext)
    const router = useRouter()

    if (!user) {
        setTimeout(() => {
            router.push("/signin")
        }, 2000)
        return <div>You are not authenticated</div>
        
    }else{
        return (
            <div>
                <h3>Home sayfası, Hoş Geldin</h3>
            </div>
        )
    }


 
}

export default Home