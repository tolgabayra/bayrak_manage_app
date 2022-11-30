import { Button, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { appAxios } from '../utils/appAxios'
import { signIn, getCsrfToken, } from 'next-auth/react';



function signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const toast = useToast()
  const router = useRouter()

  const submitLogin = async () => {
    const res = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: `/home`
    })

    if (res?.status === 200) {
      toast({
        title: 'Login is successfull.',
        description: "You are being redirected to the homepage",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })

      setTimeout(() => {
        router.push("/home")
      }, 3000);
    } else {
      toast({
        title: 'Login is not successfull !!',
        description: "Please review your indivation",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
    }

  }




  return (
    <div className="flex h-screen bg-indigo-500">
      
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
        </header>
        <div>
          <div className='mb-4'>
            <Input onChange={(e) => setEmail(e.target.value)} bgColor="white" placeholder='Email' />
          </div>
          <div className='mb-4'>
            <InputGroup size='md'>
              <Input
                onChange={(e) => setPassword(e.target.value)}
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
            <button onClick={submitLogin} className="w-full bg-indigo-700 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
              Sign In
            </button>
          </div>
        </div>
        <footer>
          <Link href="/reset_password" className="text-indigo-700 duration-300 hover:text-blue-800 text-sm float-left">Forgot Password?</Link>
          <Link href="/signup" className="text-indigo-700 hover:text-blue-800 text-sm float-right">Sign Up</Link>
        </footer>
      </div>
    </div>
  )
}

export default signin