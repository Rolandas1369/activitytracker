import axios from "axios";
import { useEffect } from "react";





const HomePage = () => {

    let get_data = () => {
        const config = {
            headers: { Authorization: `JWT ${localStorage.getItem('access_token')}` }
        };



            axios.get( 
            'http://activitytracker.xyz/api/workingtimes/',
            
            config
            ).then(console.log).catch(console.log);
                }


    useEffect(() => {
        get_data()
    }, [])

    return (
        <div>
            HomePage
        </div>
    )
}

export default HomePage;