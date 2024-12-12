import React from 'react'
import EditContentForm from '../components/EditContentForm'
import { useParams } from 'react-router-dom'

const EditContent = () => {
  const {id} = useParams(); 

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4 py-3 sm:p-10'>
      <EditContentForm id={id}/>
    </div>
  )
}

export default EditContent
