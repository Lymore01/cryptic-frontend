// import React from 'react'

import { Link } from "react-router-dom"
import AuthLayout from "../auth/AuthLayout"

const Landing = () => {
  return (
    <AuthLayout title="">
       <div className="flex flex-1 flex-col gap-[10px]">
        <span>In the process of making it beautiful... 👩‍💻😁</span>
        <div>
          <span>
            sign in for now: <Link to={"/sign-in"} className="underline text-[#ff9500] cursor-pointer">sign-in</Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Landing