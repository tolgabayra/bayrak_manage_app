import Link from 'next/link'
import React from 'react'

type Props = {}

function reset_password({}: Props) {
  return (
    <div className="flex h-screen bg-indigo-500">
    <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
      <header>
        <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>
      <form>
  
        <div>
          <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
          <input className="w-full p-2 mb-1 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
          <div className='text-xs mb-3 text-indigo-400'>Enter your registered e-mail address</div>
        </div>

        <div>
          <button className="w-full bg-indigo-700 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
            Reset Password
          </button>
        </div>
      </form>
      <footer>
        <Link href="/signin" className="text-indigo-700 hover:text-blue-800 text-sm float-right">&#60;- Back To Sign In</Link>
      </footer>
    </div>
  </div>
  )
}

export default reset_password