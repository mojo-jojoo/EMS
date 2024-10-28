// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const AllTask = () => {

//    const [userData,setUserData] =  useContext(AuthContext)

   
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
//         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//             <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//             <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
//             <h5 className='text-lg font-medium w-1/5'>Completed</h5>
//             <h5 className='text-lg font-medium w-1/5'>Failed</h5>
//         </div>
//         <div className=''>
//         {userData.map(function(elem,idx){
//             return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
//             <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
//             <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
//         </div>
//         })}
//         </div>
        
        
//     </div>
//   )
// }

// export default AllTask


import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-md mt-5 shadow-md animate-fadeIn'>
      <div className='bg-gradient-to-r from-red-500 to-red-600 py-2 px-4 flex justify-between rounded-md mb-3'>
        {['Employee Name', 'New Task', 'Active Task', 'Completed', 'Failed'].map((header, idx) => (
          <h5 key={idx} className='text-lg font-medium w-1/5 text-white'>
            {header}
          </h5>
        ))}
      </div>
      <div>
        {userData.map((elem, idx) => (
          <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-md'>
            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
            {['newTask', 'active', 'completed', 'failed'].map((status, index) => (
              <h3
                key={index}
                className={`text-lg font-medium w-1/5 ${
                  {
                    newTask: 'text-blue-400',
                    active: 'text-yellow-400',
                    completed: 'text-white',
                    failed: 'text-red-600'
                  }[status]
                }`}
              >
                {elem.taskCounts[status]}
              </h3>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;