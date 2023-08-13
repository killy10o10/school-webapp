import { Button, Card, CardBody, CardHeader, Input, Radio, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Register() {
  const [userNameExist, setUserNameExist] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.state === null) {
      navigate('/login')
      setUserNameExist(false)
    }
    else{
      setUserNameExist(true)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col bg-blue-gray-50 px-2">
     {userNameExist && <Typography variant="h4" className="font-poppins select-none lg:mx-10">welcome {location.state.userName}, Complete your registration here ⬇️</Typography> }
      <Card className="lg:mx-10 my-10">
        <CardHeader color="blue-gray" className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center">Register here</CardHeader>
        <CardBody>
          <Tabs className="overflow-visible" value="bio-data-guardian-data">
            <TabsHeader className="relative z-0">
              <Tab value="bio-data-guardian-data">Bio Data & Guardian Details</Tab>
              <Tab value="preview">Preview and Submit</Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="bio-data-guardian-data" className="flex flex-col ">
                  <Tabs value="bio-data">
                    <TabsHeader>
                      <Tab value="bio-data">Bio Data</Tab>
                      <Tab value="guardian-data">Guardian Details</Tab>
                    </TabsHeader>
                    <TabsBody 
                      animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                      }}
                    >
                      <TabPanel value="bio-data">
                        <form className="mt-12 flex flex-col lg:grid grid-cols-3 gap-4 ">
                          <div className="grid gap-5">
                            <Input label="Name"></Input>
                            <Input label="Contact" type="tel"></Input>
                            <Input label="Email" type="email"></Input>
                            <Input label="Nationality"></Input>
                            <div className="flex items-center justify-center">
                              <label htmlFor="gender">Gender</label>
                              <Radio name="gender" label="Male"></Radio>
                              <Radio name="gender" label="Female"></Radio>
                            </div>
                          </div>
                          <Button color="blue" className="capitalize self-center">Save and proceed</Button>
                        </form>
                      </TabPanel>
                      <TabPanel value="guardian-data">
                        <Typography variant="h5">Guardian Details</Typography>
                        <form className="mt-12 flex flex-col lg:grid grid-cols-3 gap-4 ">
                          <div className="grid gap-5">
                            <Input label="Name"></Input>
                            <Input label="Contact" type="tel"></Input>
                            <Input label="Email" type="email"></Input>
                            <Input label="Nationality"></Input>
                            <div className="flex items-center justify-center">
                              <label htmlFor="gender">Gender</label>
                              <Radio name="gender" label="Male"></Radio>
                              <Radio name="gender" label="Female"></Radio>
                            </div>
                          </div>
                          <Button color="blue" className="capitalize self-center">Save and Continue</Button>
                        </form>
                      </TabPanel>
                    </TabsBody>
                  </Tabs>
                </TabPanel>
                <TabPanel value="preview" className="flex flex-col gap-10">
                  <h2 className="font-bold text-2xl">Preview and Submit</h2>
                  <Button color="green" className="capitalize w-3/5 self-center">Confirm</Button>
                </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </section>
  )
}

export default Register;
