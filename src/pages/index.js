/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import Wrap from '../layouts/wrap'

import { Colors, Fonts } from '../constants'

import HomeAboutImg from '../assets/images/home-about.png'

import { SectionHead, SectionDescription } from '../components/section_data'
import MiniAbout from '../components/mini_about'
import MiniProject from '../components/mini_project'
import MiniService from '../components/mini_service'
import MainServices from '../components/main_services'
import NormalSection from '../components/normal_section'
import SiteButton from '../components/site_button'

export default () => (
  <Wrap pageTitle="Home">
    <NormalSection color={Colors.white}>
      <div className="container">
        <div className="row">
          <MiniService
            index="01"
            title="Text und Mehr"
            to="/services"
            className="col-4">
            <SectionDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              dignissimos! Expedita, sint doloremque? Eveniet, obcaecati!
              Aliquam odio omnis error quas dolores. Consequuntur officiis cum
              inventore dignissimos aliquam odio laudantium accusamus.
            </SectionDescription>
          </MiniService>
          <MiniService
            index="02"
            title="4K Video"
            to="/services"
            className="col-4">
            <SectionDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              dignissimos! Expedita, sint doloremque? Eveniet, obcaecati!
              Aliquam odio omnis error quas dolores. Consequuntur officiis cum
              inventore dignissimos aliquam odio laudantium accusamus.
            </SectionDescription>
          </MiniService>
          <MiniService
            index="03"
            title="Multimedia"
            to="/services"
            className="col-4">
            <SectionDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              dignissimos! Expedita, sint doloremque? Eveniet, obcaecati!
              Aliquam odio omnis error quas dolores. Consequuntur officiis cum
              inventore dignissimos aliquam odio laudantium accusamus.
            </SectionDescription>
          </MiniService>
        </div>
      </div>
    </NormalSection>
    <NormalSection image={HomeAboutImg} imageRight color={Colors.light}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SectionHead title="Fotografie & Video" />
            <SectionDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              dignissimos! Expedita, sint doloremque? Eveniet, obcaecati!
              Aliquam odio omnis error quas dolores. Consequuntur officiis cum
              inventore dignissimos aliquam odio laudantium accusamus.
            </SectionDescription>
            <br />
            <br />
            <SiteButton
              to="/contact"
              textColor={Colors.white}
              color={Colors.primary}
              label="Kontaktieren Sie uns"
            />
          </div>
        </div>
      </div>
    </NormalSection>
    <NormalSection color={Colors.primary}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHead
              color={Colors.white}
              title="Qualität & Flexibel"
            />
          </div>
          {[
            {
              title: 'Qualität',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo hic optio, unde eligendi obcaecati laboriosam quos atque',
            },
            {
              title: 'Einfach einfacher',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo hic optio, unde eligendi obcaecati laboriosam quos atque',
            },
            {
              title: 'Schneller',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo hic optio, unde eligendi obcaecati laboriosam quos atque',
            },
          ].map(item => {
            return (
              <div className="col-4">
                <div
                  css={css`
                    color: ${Colors.white};
                    font-family: ${Fonts.head};
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                  `}>
                  {item.title}
                </div>
                <SectionDescription color={Colors.white}>
                  {item.body}
                </SectionDescription>
              </div>
            )
          })}
        </div>
      </div>
    </NormalSection>
    <MainServices featured />
    <NormalSection color={Colors.light}>
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <SectionHead centered title="Projekte" />
          </div>
          {[
            {
              title: 'Fotostudio',
              date: 'August 2, 2019',
              slug: 'project-slug',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa perspiciatis, eaque unde accusantium voluptates dolor placeat?',
            },
            {
              title: 'Lichter',
              date: 'August 2, 2019',
              slug: 'project-slug',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa perspiciatis, eaque unde accusantium voluptates dolor placeat?',
            },
            {
              title: 'Aufnahme',
              date: 'August 2, 2019',
              slug: 'project-slug',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa perspiciatis, eaque unde accusantium voluptates dolor placeat?',
            },
          ].map(item => {
            return (
              <MiniProject
                className="col-4"
                title={item.title}
                date={item.date}
                slug={item.slug}>
                {item.body}
              </MiniProject>
            )
          })}
        </div>
      </div>
    </NormalSection>
    <MiniAbout />
  </Wrap>
)
