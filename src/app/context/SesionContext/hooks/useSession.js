import { useContext } from 'react'
import { AuthContext } from '../../../services/Auth'
const useSession = () => useContext(AuthContext)

export default useSession
