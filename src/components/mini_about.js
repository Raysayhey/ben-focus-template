/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Colors, Fonts } from '../constants'

import MiniAboutImage from '../assets/images/mini-about.png'

import { SectionHead, SectionDescription } from '../components/section_data'
import NormalSection from '../components/normal_section'

export default () => {
  return (
    <NormalSection>
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <SectionHead centered title="Wer Wie Wo" />
          </div>
          <div className="col-4">
            <div
              css={css`
                background-color: ${Colors.primary};
                padding: 4.5rem 2.5rem 1.5rem;
              `}>
              <div
                css={css`
                  color: ${Colors.white};
                  font-family: ${Fonts.head};
                  margin-bottom: 2rem;
                  font-size: 2rem;
                  text-transform: uppercase;
                `}>
                Who We Are
              </div>
              <SectionDescription color={Colors.white}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam provident, ipsam ea odio sit, voluptates sequi placeat
                eveniet fugiat quod consequatur
              </SectionDescription>
            </div>
          </div>
          <div className="col-4">
            <img src={MiniAboutImage} alt="About Us and more" width="100%" />
          </div>
          <div className="col-4">
            <div
              css={css`
                font-family: ${Fonts.head};
                margin-bottom: 1rem;
                font-size: 2rem;
                text-transform: uppercase;
              `}>
              Profil Foto
            </div>
            <div
              css={css`
                color: ${Colors.primary};
                margin-bottom: 1.5rem;
                font-size: 1rem;
              `}>
              Fotografie & Video
            </div>
            <SectionDescription>
              Ich gestalte gerne Webseiten und Handy Apps. Programmierung, Design, Fotos - alles aus einer Hand.
              Kontaktieren Sie uns falls Ihnen eine Webseite gefällt und wir stellen etwas für Sie zusammen.
            </SectionDescription>
          </div>
        </div>
      </div>
    </NormalSection>
  )
}
