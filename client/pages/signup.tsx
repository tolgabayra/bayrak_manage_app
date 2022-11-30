import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { appAxios } from '../utils/appAxios'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'


type Props = {}

function signup({ }: Props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const toast = useToast()
  const router = useRouter()

  const submitRegister = () => {
    appAxios.post("auth/register", {
      username,
      email,
      password
    }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
        setTimeout(() => {
          router.push("/signin")
        }, 3000)
      })
      .catch(err => {
        console.log(err);
        toast({
          title: 'Account not created !',
          description: "Please review your indivation",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })

      })
  }



  return (
    <div className="flex h-screen bg-indigo-500">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
        </header>
        <div>
          <div className='mb-4'>
            <Input onChange={(e) => setUsername(e.target.value)} bgColor="white" placeholder='Username' />
          </div>
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
            <button onClick={submitRegister} className="w-full bg-indigo-700 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
              Sign Up
            </button>
          </div>
        </div>
        <footer>
          <Link href="/reset_password" className="text-indigo-700 duration-300 hover:text-blue-800 text-sm float-left">Forgot Password?</Link>
          <Link href="/signin" className="text-indigo-700 hover:text-blue-800 text-sm float-right">Sign In</Link>
        </footer>
      </div>
    </div>
  )
}

export default signup