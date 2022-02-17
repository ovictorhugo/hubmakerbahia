import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useRouter } from "next/router"

const ProtectedRoute = (ProtectedComponent) => {

   return (props) => {

      if (typeof window !== "undefined") {
         const Router = useRouter()

         const { userIsLoggedIn } = useUserAuth();

         if (userIsLoggedIn) {
            Router.replace("/")
            return null
         } else {
            return <ProtectedComponent {...props} />
         }
      }

      return null
   }
}

export default ProtectedRoute