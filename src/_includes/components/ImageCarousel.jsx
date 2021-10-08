import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import '@reach/tabs/styles.css'

const ImageCarousel = ({ talks }) => (
  <div>
    <h2>Other legendary talks!</h2>
    <Tabs className="talk-carousel">
      <TabList className="talk-carousel__tablist">
        {talks.map((talk) => (
          <Tab key={talk.title} className="talk-carousel__tab">
            <img src={talk.picture} alt={talk.title}></img>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {talks.map((talk) => (
          <TabPanel key={talk.title}>
            <div className="talk-carousel__tabpanel">
              <img src={talk.picture} alt={talk.title}></img>
              <div>
                <h3>{talk.title}</h3>
                <dl>
                  {talk.speakers.map((speaker) => (
                    <div key={speaker.name}>
                      <dt>{speaker.name}</dt>
                      <dd>{speaker.title}</dd>
                    </div>
                  ))}
                </dl>
                <a href={talk.url}>Learn more</a>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  </div>
)

export default ImageCarousel
