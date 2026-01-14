import { Navigate, useLocation } from "react-router"
import { useAppSelector } from "../store/hooks"
import { PropsWithChildren, FC } from "react"

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
    const { token } = useAppSelector(state => state.auth)
    const location = useLocation

    return token ? children : <Navigate to="/login" replace state={{ from: location }}/>
}

export default AuthGuard