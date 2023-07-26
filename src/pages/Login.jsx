import { Button, Card, CardBody, CardHeader, Input, Radio, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react"

function Login() {
  return (
    <section className="min-h-screen flex justify-center px-2">
      <Card className="w-full max-w-xl lg:mx-20 my-10">
        <CardHeader color="blue-gray" className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center">Register here</CardHeader>
        <CardBody>
          <Tabs className="overflow-visible" value="buy">
            <TabsHeader className="relative z-0">
              <Tab value="buy">Buy Voucher</Tab>
              <Tab value="data">Bio Data</Tab>
              <Tab value="confirm">Confirm</Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel  value="buy" className="mt-12 flex flex-col gap-4 justify-center items-center">
                  <Input label="Name"></Input>
                  <Button color="green" className="capitalize">Buy voucher</Button>
                </TabPanel>
                <TabPanel value="data" className="flex flex-col ">
               <form className="mt-12 flex flex-col gap-4 ">
                    <Input label="Name"></Input>
                    <Radio name="gender" label="Male"></Radio>
                    <Radio name="gender" label="Female"></Radio>
                    <Input label="Contact" type="tel"></Input>
                    <Input label="Email" type="email"></Input>
                    <Input label="Nationality"></Input>
                    <Button color="blue" className="capitalize self-center">Submit</Button>
               </form>
                </TabPanel>
                <TabPanel value="confirm" className="flex flex-col gap-10">
                  <h2 className="font-bold text-2xl">Confrim Infromation</h2>
                  <Button color="green" className="capitalize w-3/5 self-center">Confirm</Button>
                </TabPanel>

            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </section>
  )
}

export default Login
