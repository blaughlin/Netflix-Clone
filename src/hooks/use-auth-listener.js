import {useState, useEffect, useContext} from 'react'
import {FirebaseContext} from '../context/firebase' 

export default function useAuthListener() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('autUser'))
        )
    const { firebase } = useContext(FirebaseContext)
    
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser){
                localStorage.setItem('authuser', JSON.stringify(authUser))
                setUser(authUser)
            } else {
                localStorage.removeItem('authuser')
                setUser(null)
            }
        })
        return () => listener()
    }, [])
    return { user }
}