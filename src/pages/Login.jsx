import { Card, CardBody, CardHeader, Typography, Input, Checkbox, Button, } from "@material-tailwind/react"

function Login() {
  return (
    <section className="min-h-screen flex justify-center px-2">
      <Card className="w-full max-w-xl lg:mx-20 my-10">
        <CardHeader color="blue-gray" className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center font-bold text-2xl">Log in here</CardHeader>
        <CardBody className="flex flex-col items-center">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </Typography>
      </form>
        </CardBody>
      </Card>
    </section>
  )
}

export default Login
