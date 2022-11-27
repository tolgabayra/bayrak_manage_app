import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { appAxios } from '../utils/appAxios'


function signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const submitSignin = () => {
    appAxios.post("/api/v1/auth/login", {

    })
  }






  return (
    <div className="flex h-screen bg-indigo-500">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
        </header>
        <form>

          <div className='mb-4'>
            <Input bgColor="white" placeholder='Email' />
          </div>
          <div className='mb-4'>
            <InputGroup size='md'>
              <Input

                bgColor="white"
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <div>
            <button className="w-full bg-indigo-700 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <footer>
          <Link href="/reset_password" className="text-indigo-700 duration-300 hover:text-blue-800 text-sm float-left">Forgot Password?</Link>
          <Link href="/signup" className="text-indigo-700 hover:text-blue-800 text-sm float-right">Sign Up</Link>
        </footer>
      </div>
    </div>
  )
}

export default signin