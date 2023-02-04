import { Divider, makeStyles, Tab, Tabs } from "@mui/material";
import { useState } from "react";

import Component1 from "../../components/Component/Component1";
import Component2 from "../../components/Component/Component2";

import ComponentFix1 from "../../components/FixComponents/Component1";
import ComponentFix2 from "../../components/FixComponents/Component2";

import ComponentSuperFix1 from '../../components/SuperFixComponets/Component1'
import ComponentSuperFix2 from '../../components/SuperFixComponets/Component2'

const index = () => {

  const [value, setValue] = useState(0)

  const handleChange = (e:any, newValue:any) => {
    setValue(newValue)
  }

  const a11yProps = (index:number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  return (
    <div>
      <div>Hola Mundo</div>
      <Tabs value={value} onChange={handleChange} aria-label=''>
        <Tab label="Item One" {...a11yProps(0)}/>
        <Tab label="Item One" {...a11yProps(1)}/>
      </Tabs>
      {/* <div role="tabpanel">{value === 0 ? <Component1 /> : <Component2/>}</div> */}
      <Divider component="div" />
      {/* <div role="tabpanel">{value === 0 ? <ComponentFix1 /> : <ComponentFix2/>}</div>
      <Divider component="div" /> */}
      {/* <div role="tabpanel">{value === 0 ? <ComponentSuperFix1 /> : <ComponentSuperFix2/>}</div> */}
    </div>
  );
}

export default index;