// app/page.tsx
'use client'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from '@chakra-ui/next-js'
import { Box, flexbox } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import './globals.css'

register();

export default function Page() {

  const data = [
    { id: '1', image: './img1.jfif' },
    { id: '2', image: './img2.jfif' },
    { id: '3', image: './img3.jfif' },
    { id: '4', image: './img4.jfif' },
    { id: '5', image: './img5.jfif' },
    { id: '6', image: './img6.jfif' },
    { id: '7', image: './img7.jfif' },
    { id: '8', image: './img8.jfif' },
    { id: '9', image: './img9.jfif' },
    { id: '10', image: './img10.jfif' },
  ]

  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos!')
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send('service_az5mu5z', 'template_2hzmxfq', templateParams, 'r0wxUY5rfKVX0fimo')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')
        alert('Mensagem enviada com sucesso!')
      }, (err) => {
        console.log('FAILED...', err);
      })
  }

  return (
    <>
      <Box bg='#343D3F'>
        <Box >
          <Flex backgroundColor='#343D3F' alignItems='center' justifyContent='space-between'
            display={{ base: 'flex', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'row' }}>

            <Box
              boxSize='150px'
              ml={{ base: '0rem', md: '5rem' }}
              mr={{ base: '0rem', md: '3rem' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <img src="./icone.png" alt="" />
            </Box>

            <Box
              display={{ base: 'flex', md: 'flex' }}
              flexDirection={{ base: 'column', md: 'row' }}
              mr={{ base: '0rem', md: '4rem' }}
              alignItems={{ base: 'center', md: 'flex-end' }}
            >
              <Link href="#objetivo" p='4' textColor='#80ED99'>Objetivo</Link>
              <Link href="#imagens" p='4' textColor='#80ED99'>Imagens</Link>
              <Link href="#cfunciona" p='4' textColor='#80ED99'>Como funciona</Link>
              <Link href="#averde" p='4' textColor='#80ED99'>Agenda Verde</Link>
              <Link href="#contato" p='4' textColor='#80ED99'>Entre em contato</Link>
            </Box>

          </Flex>

          <Box
            display={{ base: 'flex', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='center'
            alignItems='center'
            p='2rem'
            backgroundColor='#343D3F'
          >
            <Image
              boxSize={{ base: '400px', md: '700px' }}
              height='100%'
              objectFit='contain'
              src='./estradaArvore.jpg'
              alt='Dan Abramov'
              mx={{ base: 'auto', md: '0' }}
              my={{ base: '2rem', md: '0' }}
            />

            <Text
              fontSize={{ base: '30px', md: '35px', lg: '40px', xl: '50px' }}
              ml={{ base: '0', md: '3rem' }}
              mt={{ base: '1rem', md: '5rem' }}
              fontFamily='arial'
              textColor='#80ED99'
              textAlign={{ base: 'center', md: 'left' }}
            >
              Plantar mudas de árvores nativas
              <br />
              no Pé da Estaca ao longo das cercas
              <br />
              as margens das estradas rurais do nosso município.
              <Box display='flex' justifyContent='center' mr={{ base: '0rem', md: '4rem' }}>
                <Button variant='outline' colorScheme='green' border='1px' width='100%' fontSize={{ base: '1.4rem', md: '1.6rem' }}>
                  Junte-se a nós
                </Button>
              </Box>
            </Text>
          </Box>

          <div id="objetivo"></div>
          <Box>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              mr={{ base: '1rem', md: '4rem' }}
              ml={{ base: '1rem', md: '6rem' }}>

              <Text
                id='objetivo'
                fontSize={{ base: '2rem', md: '3rem' }}
                fontFamily='roboto'

                mt='2rem'
                as='b'
                textColor='#80ED99'>

                OBJETIVO
              </Text>

              <Text
                fontSize={{ base: '1rem', md: '1.5rem' }}
                fontFamily='arial'
                color='#80ED99'
                textAlign='justify' >
                O projeto Pé da Estaca tem como objetivo desenvolver consciência crítica social e ambiental do sistema que interliga a sociedade com interesse comum.
                Para isso esse projeto ecológico Pé da Estaca visa plantar árvores nativas no pé da estaca a cada 50 ou 100 metros de distância as margens das estradas rurais e divisas em sítios e fazenda da região tendo como meta contribuir para o bem-estar animal, redução de gastos aos produtores, diminuição do aquecimento global, conservação ambiental e etc. no que resulta em qualidade de vida das pessoas, somando forças para preservar o nosso bem mais precioso.
                O projeto piloto foi desenvolvido na fazenda União e no Sítio Cachoeirinha de São Francisco na cidade de Visconde do Rio Branco Estado de Minas Gerais ao todo foram plantadas 200 mudas de arvores de Ipês branco, amarelo e roxo, Angico, Acácia, e árvores frutíferas.
              </Text>
            </Box>
          </Box>

          <Box
            mb='7rem'
            mt='7rem'
          >
            <div id="imagens"></div>
            <Swiper className='swiper-container'
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              navigation
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt='slider'
                    className='slider-item'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <div id="cfunciona"></div>
          <Box>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              ml={{ base: '1rem', md: '4rem' }}
              mr={{ base: '1rem', md: '3rem' }}
              mt='2rem'>
              <Text
                as='b'
                fontSize={{ base: '2rem', md: '3rem' }}
                textColor='#80ED99' >
                <Box as="span" >COMO FUNCIONA</Box>
              </Text>

              <Text
                fontSize={{ base: '1.2rem', md: '1.5rem' }}
                textAlign={{ base: 'justify', md: 'justify' }}
                textColor='#80ED99'
                fontFamily='arial'
                mt='2rem'>
                O projeto convida fazendeiros e sitiantes locais à colaborar cedendo áreas próximas às divisas e margens das estradas para promover mudanças ambientais. Estudantes, ONGs, igrejas e voluntários interessados na conservação ambiental são incentivados a participar. Os voluntários irão plantar e cuidar das mudas nativas até que se tornem adultas, sendo que cada árvore plantada levará o nome do participante.
              </Text>

            </Box >

            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              ml={{ base: '1rem', md: '4rem' }}
              mr={{ base: '1rem', md: '3rem' }}
              mt='2rem'>
              <Text as='b'
                fontSize={{ base: '2rem', md: '3rem' }}
                textColor='#80ED99'>
                ACOMPANHAMENTOVERDE
              </Text>
              <Text
                fontSize={{ base: '1.2rem', md: '1.5rem' }}
                textAlign={{ base: 'justify', md: 'justify' }}
                textColor='#80ED99'
                fontFamily='arial'
                mt='2rem'>O plantio de árvores deve ocorrer durante as estações chuvosas, a partir do mês de setembro. Para garantir o sucesso do desenvolvimento das mudas, é essencial controlar a presença de formigas ou usar proteções físicas para evitar danos.</Text>
            </Box>


            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              ml={{ base: '1rem', md: '4rem' }}
              mr={{ base: '1rem', md: '3rem' }}
              mt='2rem'
            >
              <Text as='b'
                fontSize={{ base: '2rem', md: '3rem' }}

                textColor='#80ED99'>
                COMO PLANTAR E<br />  CUIDAR DA ARVORE
              </Text>
              <Text
                fontSize={{ base: '1.2rem', md: '1.5rem' }}
                textAlign={{ base: 'justify', md: 'justify' }}
                textColor='#80ED99'
                fontFamily='arial'
                mt='2rem'>Para plantar e cuidar de uma árvore, escolha uma muda com mais de 1,5 metros de comprimento afim de minimizar danos por animais. Opte por espécies adequadas ao clima e solo local, como Angico, Araçá Amarelo, Canela, Ipê, Jacarandá, Aroeira, entre outras. Antes do plantio, mantenha a umidade das raízes. Cave um buraco ao lado da estaca contrária ao pasto, com 50 cm de diâmetro e profundidade o dobro do comprimento do torrão. Coloque a planta no buraco e cubra o torrão com 3 cm de terra, compactando ao redor. Regue a base e crie um muro ao redor da árvore para retenção de água. Use a estaca como proteção da muda afim de orientar o crescimento e proteger contra animais e vento.</Text>
            </Box>
          </Box>

          <Flex
            justifyContent='center'
            display={{ base: 'flex', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems='center'
            mt='2rem'>

            <Box
              boxSize='100px' >
              <a href="#"><img src="./LogoPix.png" alt="" /></a>
            </Box>


            <Box
              ml={{ base: '0.3rem', md: '1rem' }}
              mt={{ base: '1rem', md: '2rem' }}
            >

              <Text
                as='b'
                fontSize={{ base: '1.2rem', md: '1.5rem' }}
                textAlign={{ base: 'center', md: 'justify' }}
                ml={{ base: '1rem', md: '4rem' }}
                mr={{ base: '1rem', md: '3rem' }}
                textColor='white'>Apoie o projeto com doações via Pix!<br />
              </Text>
              <Box display='flex'
                flexDirection='column'
                alignItems='center'>
                <Text
                  as='b'
                  fontSize={{ base: '1.2rem', md: '1.5rem' }}
                  textAlign={{ base: 'center', md: 'justify' }}
                  ml={{ base: '1rem', md: '4rem' }}
                  mr={{ base: '1rem', md: '3rem' }}
                  textColor='#80ED99'>
                  Chave: 32 9145-3325
                </Text>
              </Box>
            </Box>
          </Flex>

          <Box
            display={{ base: 'flex', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'column' }}
          >


          </Box>

          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='2rem'
            ml={{ base: '1rem', md: '4rem' }}
            mr={{ base: '1rem', md: '3rem' }}>

            <div id='contato'>

            </div>

            <Text
              fontSize={{ base: '2rem', md: '3rem' }}
              textColor='#80ED99'>Contato</Text>
            <form className="form" onSubmit={sendEmail}>
              <input
                className="input"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                className="input"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <textarea
                className="textarea"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <input className="button" type="submit" value="Enviar" />
            </form>
          </Box>
          <Box display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            mt={{ base: '1.2rem', md: '2.5rem' }}
            ml={{ base: '1rem', md: '4rem' }}
            mr={{ base: '1rem', md: '3rem' }}
            p={{ base: '1rem', md: '2rem' }}
          >
            <Box mt='auto'>
              <Text
                color='#80ED99'
                fontSize={{ base: '1.2rem', md: '1.5rem' }}
                fontFamily='arial'
              >
                “Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível...” São Francisco de Assis.
              </Text>
              <Text
                color='#80ED99'
                fontSize={{ base: '1.2rem', md: '1.5rem' }}
                fontFamily='arial'
              >
                Que São Francisco nos abençoe, amém!O Meio Ambiente, agradece!
              </Text>
            </Box>
            <Box
              display='flex'
              flexDirection={{ base: 'column' }}
              alignItems={{ base: 'center', md: 'flex-end' }}
            >
              <img src="./francisco.jfif" alt="" width='auto' />
            </Box>
          </Box>
        </Box >
      </Box>
    </>
  )
}