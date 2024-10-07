import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
  const {userid} = useParams()
  return(<div className='text-center bg-gray-400 text-3xl text-white p-4'>User:{userid}</div>)

}
export default User