import { Button, Card, CardBody, CardHeader, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react"

function Login() {
  return (
    <section className="min-h-screen flex justify-center">
      <Card className="w-full mx-20 my-10">
        <CardHeader color="blue-gray" className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center">Register here</CardHeader>
        <CardBody>
          <Tabs className="overflow-visible" value="buy">
            <TabsHeader>
              <Tab value="buy">Buy Voucher</Tab>
              <Tab value="data">Bio Data</Tab>
              <Tab value="confirm">Confirm</Tab>
              <TabsBody>
                <TabPanel value="buy" className="flex flex-col ">
                  <Input label="Name"></Input>
                  <Button color="green" className="capitalize">Buy voucher</Button>
                </TabPanel>

              </TabsBody>
            </TabsHeader>
          </Tabs>
        </CardBody>
      </Card>
    </section>
  )
}

export default Login
