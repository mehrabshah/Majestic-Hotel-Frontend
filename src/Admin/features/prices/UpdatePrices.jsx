import React from "react";
import Tabs from "../../components/ui/Tabs";
import AddCalenderPrice from "./AddCalenderPrice";

function UpdatePrices() {
  return (
    <div className='"rounded-md border border-gray-200 bg-gray-0 p-6 shadow-sm"'>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab index={1}>Double Room</Tabs.Tab>
          <Tabs.Tab index={2}>Twin Room</Tabs.Tab>
          <Tabs.Tab index={3}>Single Room</Tabs.Tab>
          <Tabs.Tab index={4}>Double Room with Sea View</Tabs.Tab>
          <Tabs.Tab index={5}>Superior Double Room Sea View</Tabs.Tab>
          <Tabs.Tab index={6}>Twin Room with Sea View</Tabs.Tab>
          <Tabs.Tab index={7}>Family Room</Tabs.Tab>
          <Tabs.Tab index={8}>Single Room Sea View</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.TabPanel index={1}>
            <AddCalenderPrice  categoryId={1}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={2}>
            <AddCalenderPrice  categoryId={2}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={3}>
            <AddCalenderPrice  categoryId={3}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={4}>
            <AddCalenderPrice  categoryId={4}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={5}>
            <AddCalenderPrice  categoryId={5}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={6}>
            <AddCalenderPrice  categoryId={6}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={7}>
            <AddCalenderPrice  categoryId={7}/>
          </Tabs.TabPanel>
          <Tabs.TabPanel index={8}>
            <AddCalenderPrice  categoryId={8}/>
          </Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    </div>
  );
}

export default UpdatePrices;
