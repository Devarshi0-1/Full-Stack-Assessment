import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { server } from '@/main'
import { useStore } from '@/store'
import axios from 'axios'
import { useEffect } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Navigate, useNavigate } from 'react-router-dom'

const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        password: '5fXCZmmSyaZw',
        dateOfBirth: '14/09/2002',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        password: 'pgxe9HNEq4Es',
        dateOfBirth: '20/04/2008',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        password: 'YMh6FwCePWFj',
        dateOfBirth: '03/11/2001',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        password: 'YnvYBDgYKx4Y',
        dateOfBirth: '22/09/2004',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        password: 'DdY9LDUBQaCP',
        dateOfBirth: '30/01/2004',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        password: 'Ve9X5NqeEDAc',
        dateOfBirth: '16/05/2002',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        password: 'BHCSynTvLKsj',
        dateOfBirth: '16/04/2007',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        password: 'yh4kzWEAJZjy',
        dateOfBirth: '04/03/2005',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        email: 'Chaim_McDermott@dana.io',
        password: '5FcLCcW59Bu2',
        dateOfBirth: '26/03/2002',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        password: '23Z4jDZXZD85',
        dateOfBirth: '18/07/2009',
    },
]

const Home = () => {
    const { isAuthenticated, setIsAuthenticated, setUser } = useStore()

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${server}/users/me`, {
                withCredentials: true,
            })
            .then((res) => {
                setUser(res.data.user)
                setIsAuthenticated(true)
            })
            .catch((err) => {
                setUser({})
                navigate('/login')
                setIsAuthenticated(false)
            })
    }, [isAuthenticated])

    const handleLogout = async () => {
        try {
            await axios.get(`${server}/users/logout`, {
                withCredentials: true,
            })

            setIsAuthenticated(false)
            setUser({})
        } catch (error) {
            console.log(error.message)
        }
    }

    if (!isAuthenticated) return <Navigate to='/login' />

    return (
        <main className='flex h-screen w-full bg-slate-900 text-white'>
            <Table className='text-2xl'>
                <TableCaption>A list of Users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date Of Birth</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Password</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={user.id}>
                            <TableCell className='font-medium'>
                                {index + 1}
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.dateOfBirth}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <button
                onClick={handleLogout}
                className='absolute bottom-2 right-2 flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-black transition-[background-color] hover:bg-slate-200'>
                Logout
                <FiLogOut />
            </button>
        </main>
    )
}

export default Home
