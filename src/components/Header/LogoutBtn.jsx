import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/auth'
import { logout } from '../../Store/AuthSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const logoutHandler = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            setLoading(true)
            authService.logout().then(() => {
                dispatch(logout())
                setLoading(false)
            }).catch((error) => {
                console.error("Logout failed:", error)
                setLoading(false)
            })
        }
    }

    return (
        <button
            className={`inline-block px-6 py-2 rounded-full transition duration-200 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-500'
            }`}
            onClick={logoutHandler}
            disabled={loading} 
            aria-label="Logout"
        >
            {loading ? (
                <span>Logging out...</span> 
            ) : (
                'Logout'
            )}
        </button>
    )
}

export default LogoutBtn
