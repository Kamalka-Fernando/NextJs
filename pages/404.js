import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() =>{
        setTimeout(() => {
            //router.go(-1)
            router.push('/')
        }, 3000);
        console.log("UseEffect Works!")
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oooopss...........</h1>
            <h2>That cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Home page</a></Link></p>
        </div>
     );
}
 
export default NotFound;