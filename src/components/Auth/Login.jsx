// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

    

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const submitHandler = (e)=>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setEmail("")
//         setPassword("")
//     }


//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-emerald-600 p-20'>
//             <form 
//             onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'
//             >
//                 <input 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
//                 />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
//                 <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105">
                <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">Employee Management System</h2>
                <form 
                    onSubmit={(e) => submitHandler(e)}
                    className="flex flex-col items-center"
                >
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="w-full outline-none bg-gray-50 border border-blue-400 font-medium text-gray-700 py-3 px-4 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4"
                        type="email" 
                        placeholder="Enter your email" 
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className="w-full outline-none bg-gray-50 border border-blue-400 font-medium text-gray-700 py-3 px-4 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-6"
                        type="password" 
                        placeholder="Enter password" 
                    />
                    <button 
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login

