import axios from 'axios'
import {useEffect} from 'react'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/');
                console.log('Success: ', response.data)
            }catch(error){
                console.error('Error fectching data', error)
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard