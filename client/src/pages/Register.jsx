import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { server } from '../main'
import { useStore } from '../store'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    const { isAuthenticated, setIsAuthenticated, setUser } = useStore()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${server}/users/me`, {
                withCredentials: true,
            })
            .then((res) => {
                setUser(res.data.user)
                setIsAuthenticated(true)
                navigate('/')
            })
            .catch((err) => {
                setUser({})
                setIsAuthenticated(false)
            })
    }, [isAuthenticated])

    const handleFormSubmit = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post(
                `${server}/users/new`,
                {
                    username,
                    email,
                    dateOfBirth,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                },
            )
            setLoading(false)
            setIsAuthenticated(true)
            setUser(data)
        } catch (err) {
            setError(true)
            setIsAuthenticated(false)
            setUser({})
        } finally {
            setLoading(false)
        }
    }

    if (isAuthenticated) return <Navigate to='/' />

    return (
        <main className='flex h-screen w-full items-center justify-center bg-slate-900'>
            <form className='flex w-1/3 min-w-[300px] flex-col gap-10 text-2xl'>
                <h1 className='text-center text-3xl text-white'>SIGN IN</h1>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-3 rounded-md bg-white bg-opacity-10 pl-4 text-white'>
                        <label
                            htmlFor='username'
                            className='cursor-pointer text-3xl'>
                            <FaRegUser />
                        </label>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full bg-transparent px-3 py-2'
                            id='username'
                            name='username'
                            placeholder='Username'
                        />
                    </div>
                    <div className='flex items-center gap-3 rounded-md bg-white bg-opacity-10 pl-4 text-white'>
                        <label
                            htmlFor='email'
                            className='cursor-pointer text-3xl'>
                            <MdOutlineMail />
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full bg-transparent px-3 py-2'
                            id='email'
                            name='email'
                            placeholder='Email'
                        />
                    </div>
                    <div className='flex w-fit items-center gap-3 rounded-md bg-white bg-opacity-10 pl-4 text-white'>
                        <label
                            htmlFor='dob'
                            className=' cursor-pointer text-white '>
                            DOB
                        </label>
                        <input
                            type='date'
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className='bg-transparent px-3 py-2'
                            id='dob'
                            name='dateOfBirth'
                        />
                    </div>
                    <div className='flex items-center gap-3 rounded-md bg-white bg-opacity-10 pl-4 text-white'>
                        <label
                            htmlFor='password'
                            className='cursor-pointer text-3xl'>
                            <RiLockPasswordLine />
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full bg-transparent px-3 py-2'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <Link to='/login' className='text-xl text-white'>
                        Already having an account?
                    </Link>
                    <button
                        onClick={handleFormSubmit}
                        type='button'
                        className='rounded-md bg-white px-3 py-1 text-black transition-[background-color] hover:bg-slate-200'
                        disabled={loading}>
                        Sign In
                    </button>
                </div>
            </form>
        </main>
    )
}
export default Register
