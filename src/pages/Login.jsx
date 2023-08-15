import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';
import loginHero from '../assets/login-hero.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    userName: "",
    voucherCode: "",
    voucherSerial: ""
  })

  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    })) 
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const {userName, voucherCode, voucherSerial} = user;
    if(userName.length === 0 || voucherCode.length === 0 || voucherSerial.length === 0) {
      setMessage('Please provide a username, voucher code and voucher serial!')
    }
    else{
      setMessage(null)
      navigate('/register', {state: user})
    }

  }


  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      <div className='bg-blue-900'>
        <img className='object-contain h-[100%]' src={loginHero} alt="" loading="lazy" />
      </div>
      <div className='flex flex-col justify-center px-2 items-center bg-blue-gray-50'>
        <Typography variant="h2" color="gray" className="font-poppins">Login Here</Typography>
        <Card className="my-10 flex flex-col items-center justify-center h-[400px]">
          <CardBody className="flex flex-col items-center">
            <form className="mt-8 mb-2 w-80">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Name" name='userName' onChange={handleChange} />
                <Input size="lg" label="Voucer Code" name='voucherCode' onChange={handleChange} />
                <Input type="password" size="lg" label="Voucher serial" name='voucherSerial' onChange={handleChange} />
              </div>
              <Button className="mt-6" fullWidth onClick={handleSignIn}>
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
          {message && <p className="text-red-500 italic">{message}</p>}
      </div>
    </section>
  );
}

export default Login;
