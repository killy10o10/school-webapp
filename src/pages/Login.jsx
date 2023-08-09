import {
  Card,
  CardBody,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import loginHero from '../assets/login-hero.png'

function Login() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      <div className='bg-blue-900'>
        <img className='object-contain h-[100%]' src={loginHero} alt="" />
      </div>
      <div className='flex flex-col justify-center px-2 items-center bg-blue-gray-50'>
        <Typography variant="h2" color="gray" className="font-poppins">Sign Up Here</Typography>
        <Card className="my-10 flex flex-col items-center justify-center h-[400px]">
          <CardBody className="flex flex-col items-center">
            <form className="mt-8 mb-2 w-80">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Name" />
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Password" />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: '-ml-2.5' }}
              />
              <Button className="mt-6" fullWidth>
                Sign up
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Login;
