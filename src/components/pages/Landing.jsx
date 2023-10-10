/* eslint-disable react/no-unescaped-entities */
// React functional imports
import { Link } from "react-router-dom";

// Data object imports for text, statistics, images, ect.
import Sphere from "../Sphere"

// Data to apply map functions
import cardData from '@/assets/js/cardData.js'
import footerData from '@/assets/js/footerData.js'
import spikeyData from '@/assets/js/spikeyData.js'
import textData from '@/assets/js/trackingText.js'

// Image imports
import loopPrintWave from '@/assets/imgs/loopPrint-wave.webp'
import loopPrintHeader from '@/assets/imgs/loopPrint-header.webp'
import innovated from '@/assets/imgs/innovated.webp'
import loopPrintSymbol from '@/assets/imgs/loopPrint-symbol.webp'
import soundpickr from '@/assets/imgs/soundpickr.webp'
import dawnAudio from '@/assets/imgs/dawn-audio.webp'

// React Bootstrap
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '@/assets/css/landing.css'
import { motion } from "framer-motion"

// Landing component
export default function Landing() {
  const initialTopPosition = { opacity: 0, y: -100 }
  const initialBottomPosition = { opacity: 0, y: 100 }
  const initialLeftPosition = { opacity: 0, x: -100 };
  const initialRightPosition = { opacity: 0, x: 100 };
  const finalPosition = { opacity: 1, x: 0, y: 0 };
  return (
    <>
      <Container fluid className='landing-container'>
        <Container fluid className='mb-5 heading-container'>
          <Row>
            <Col className='justify-content-center text-center pt-1' xs={12} sm={2} md={2}>
              <Image src={loopPrintWave} alt="sound-wave" />
              <p className="logo-text text-light">CRYPTOLOOPS</p>
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col className='text-center'>
              <motion.div
                initial={initialTopPosition}
                whileInView={finalPosition}
                transition={{ duration: 2 }}
              ><Image fluid src={loopPrintHeader} alt="banner" /></motion.div>

            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col md={5}>
              <motion.h1
                initial={initialLeftPosition}
                whileInView={finalPosition}
                transition={{ duration: 2 }}
                className='text-purple text-center'
              >SECURE + TRACK</motion.h1>
              <motion.h1
                initial={initialLeftPosition}
                whileInView={finalPosition}
                transition={{ duration: 2 }}
                className='text-light-purple text-center'
              >YOUR MUSIC</motion.h1>
            </Col>
            <Col id='empower-col' className='px-5' md={5}>
              <motion.h3
                initial={initialRightPosition}
                whileInView={finalPosition}
                transition={{ duration: 2 }}
                className='text-light text-center'
              >Empowering the music industry with easy to use tracking for fair compensation through our platform</motion.h3>
            </Col>
          </Row>
        </Container>
        <Container fluid className='px-5'>
          <Row className='bg-dark-grey'>
            <Col id='bg-left-col' className='d-flex flex-column align-items-center p-5 mt-5' md={5}>
              <Image className='w-50 py-1' src={loopPrintSymbol} alt="thumbprint" />
              <motion.div
                initial={initialLeftPosition}
                whileInView={finalPosition}
                transition={{ duration: 2 }}
              >
                <h3 className='text-light px-5 py-1 w-100 text-center '>THE LATEST TECH</h3>
                <h3 className='text-light-purple px-5 py-1 w-100 text-center'>IN MUSIC RIGHTS MANAGEMENT</h3>
                <p className="text-dull px-5 py-1 latest-tech-text"><strong>LoopPRINT</strong> adds important informationsuch as artist names, splits, share, admin rights and more, to an audio file or song using advanced techniques, ensuring accurate tracking of all usage of a creatives musical works.</p>
              </motion.div>
            </Col>
            <Col md={7}>
              <Container fluid className='d-flex flex-column justify-content-center align-items-center'>
                <Row className='d-flex justify-content-center px-5'>
                  <Col md={5} className='mx-4'>
                    <motion.div
                      initial={initialBottomPosition}
                      whileInView={finalPosition}
                      transition={{ duration: 2 }}
                    >
                      {cardData.cardData0.map((card, index) => (
                        <Card key={index} className='bg-dark justify-content-center align-items-center p-3 my-3'>
                          <Card.Img fluid variant="top" src={card.cardImg} alt={card.cardTitle} className='p-2 w-50' />
                          <Card.Body>
                            <Card.Title className='text-light'>{card.cardTitle}</Card.Title>
                            <Card.Text className='text-dull'>{card.cardText}<strong>{card.cardStrong}</strong></Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </motion.div>
                  </Col>
                  <Col md={5} className='mx-4 mt-5'>
                    <motion.div
                      initial={initialTopPosition}
                      whileInView={finalPosition}
                      transition={{ duration: 2 }}
                    >
                      {cardData.cardData1.map((card, index) => (
                        <Card key={index} className='bg-dark justify-content-center align-items-center p-3 my-3'>
                          <Card.Img fluid variant="top" src={card.cardImg} alt={card.cardTitle} className='p-2 w-50' />
                          <Card.Body>
                            <Card.Title className='text-light'>{card.cardTitle}</Card.Title>
                            <Card.Text className='text-dull'>{card.cardText}<strong>{card.cardStrong}</strong></Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </motion.div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className='px-5 tracking-container'>
          <Row className='bg-dark-grey'>
            <Col id='tracking-bg' className='d-flex flex-column align-items-center justify-content-center p-5 text-center' md={6}>
              <motion.div
                initial={initialBottomPosition}
                whileInView={finalPosition}
                transition={{ duration: 2 }}
              >
                <h2 className='text-light w-100 display-5 tracking googly-eyes'>UNPRECEDENTED</h2>
                <h1 className='text-purple w-100 display-2 tracking googly-eyes'>TRACKING</h1>
                <h2 className='text-light px-5 w-100 mt-4 display-4 tracking googly-eyes'>STREAMLINED</h2>
                <h2 className='text-purple px-5 w-100 display-3 tracking googly-eyes'>REPORTING</h2>
              </motion.div>
            </Col>
            <Col className='p-5' md={6}>
              <Container fluid className='d-flex flex-column justify-content-center align-items-center'>
                <Row>
                  <Col md={8} className='mb-5'>
                    <motion.div
                      initial={initialRightPosition}
                      whileInView={finalPosition}
                      transition={{ duration: 2 }}
                    >
                      {textData.map((option, index) => (
                        <p key={index} className='text-dull py-1'>
                          {index % 2 === 0 ? <strong>{option.description}</strong> : option.description}
                        </p>
                      ))}
                    </motion.div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid id='spikey-container'>
          <Row>
            <h3 className='text-purple text-center display-6 mt-5'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                The Music<span className='text-light'> Industry</span>
              </motion.div>
            </h3>
          </Row>
          <Row className='text-purple mt-5'>
            {spikeyData.map((item, index) => (
              <Col
                key={index}
                className='justify-content-center text-center'
              >
                <h3>{item.number}</h3>
                <p className='text-secondary border-bottom p-2'>
                  {item.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
        <Container fluid className='partners-container'>
          <Row className='bg-dark-grey partners-row'>
            <Col id='our-partners' className='d-flex flex-column align-items-center p-5 border' md={4}>
              <h3 className='text-light text-center display-6'>OUR<span className='text-purple'> PARTNERS</span></h3>
            </Col>
            <Col className='d-flex flex-column align-items-center p-5 border' md={4}>
              <img src={soundpickr} className='soundpickr-img'></img>
            </Col>
            <Col className='d-flex flex-column align-items-center p-4 border' md={4}>
              <img src={dawnAudio} className='dawnAudio-img'></img>
            </Col>
          </Row>
          <Row className='bg-dark-grey'>
            <Col md={8} className='mb-5 mt-5 threeD-container'>
              <h3 className='text-light text-center display-6'>WORLDWIDE</h3>
              <h3 className='text-purple text-center display-6'>TRACKING + REPORTING</h3>
              <Sphere />
            </Col>
            <Col md={4} className='mt-5'>
              <p className='text-dull px-5 py-1 m-2 global-insight-text'>Gain global insights with our accurate worldwide tracking. Detecting even the tiniest sample chop, our watermarking ensures precise reporting on your content's usage.</p>
              <p className='text-dull px-5 py-1 m-2 global-insight-text'><strong> Choose periodic or real-time reporting for comprehensive insights. Maximize revenue and make data-driven decisions with our powerful tracking capabilities.</strong></p>
            </Col>
          </Row>
        </Container>
        <Container fluid className='advisors-container mt-5'>
          <Row className='bg-dark-grey'>
            <h3 className='text-light text-center display-6 mt-5 mb-5'>OUR TRUSTED<span className='text-purple'> ADVISORS</span></h3>
          </Row>
          <Row className='bg-dark-grey partners-row'>
            {footerData.map((person, index) => (
              <Col
                key={index}
                className='d-flex flex-column align-items-center p-4 border'
                md={3}
              >
                <a href={person.url} target="_blank" className="image-link">
                  <img src={person.headshot} className={`${person.name.toLowerCase()}-img`} alt={person.name} />
                  <div className="overlay">
                    {/* Add your icon or content here */}
                    <FontAwesomeIcon className='rounded-circle bg-dark p-3 fa-4x text-light-purple overlay' icon={faInstagram} />
                  </div>
                </a>

                <h3 className='text-purple text-center m-0 mt-2'>{person.name}</h3>
                {person.lastName && (
                  <h3 className='text-purple text-center'>{person.lastName}</h3>
                )}
                <p className='text-light'>
                  {person.role}
                </p>
                {person.secondaryRole && (
                  <p className='text-light border-bottom border-secondary m-0'>{person.secondaryRole}</p>
                )}
              </Col>
            ))}
          </Row>
        </Container>
        <Container fluid>
          <Row className='bg-dark-grey footing'>
            <Col className='d-flex flex-column p-4 border' md={6}>
              <h2 className='text-purple px-5 w-100 display-5 mt-4 mb-4'>EMAIL US & LEARN<span className='text-light'> MORE</span> </h2>
              <Form>
                <Form.Group className='mb-3 mt-4'>
                  <Form.Label className='text-secondary'>* Email</Form.Label>
                  <Form.Control type='email' placeholder='username@email.com' />
                </Form.Group>
                <div className='d-grid gap-2'>
                  <Button className='email-submit' type='submit' size="lg">SUBMIT</Button>
                </div>
              </Form>
            </Col>
            <Col className='d-flex flex-column border-bottom justify-content-between pt-4' md={3}>
              <p className='text-purple text-center mb-5'>FOLLOW US ON</p>
              <div className='d-flex justify-content-evenly'>
                <a href="https://www.instagram.com/cryptoloopsapp" target="_blank">
                  <FontAwesomeIcon className='rounded-circle bg-dark p-3 fa-4x text-light-purple' icon={faInstagram} />
                </a>
                <a href="https://twitter.com/Cryptoloopsapp" target="_blank">
                  <FontAwesomeIcon className='rounded-circle bg-dark p-3 fa-4x text-light-purple' icon={faTwitter} />
                </a>
              </div>
              <img className='align-self-end' src={innovated} alt="innovated" />
            </Col>
            <Col className='d-flex flex-column p-4 border-bottom text-secondary align-self-end' md={3}>
              <p className='m-0 mx-5 legal-text'>2023 Copyright</p>
              <p className='m-0 mx-5 legal-text'>CryptoLoops LLC</p>
            </Col>
          </Row>
        </Container>
      </Container >
    </>
  );
}