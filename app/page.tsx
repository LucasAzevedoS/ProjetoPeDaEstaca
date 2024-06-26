// app/page.tsx
'use client'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Link } from '@chakra-ui/next-js'
import { Box, flexbox } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import './globals.css'

register();

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
export default function Page() {

  return (
    <>
      <header>
        <Box display='flex' alignItems='center' justifyContent='space-between' width='100%' h='120px' backgroundColor='#343D3F' >
          <div>
            <img src="./icone.png" alt="" />
          </div>
          <nav>

            <ul>
              <Box display='flex'>
                <li>
                  <Link href="#objetivo" p='4' textColor='white'>Objetivo</Link>
                </li>
                <li>
                  <Link href="/about" p='4' textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4' textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4' textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4' textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4' textColor='white'>Teste</Link>
                </li>
              </Box>
            </ul>

          </nav>
        </Box>
      </header>
      <Box display='flex' justifyContent='center' p='2rem' backgroundColor='#343D3F'>
        <Image
          boxSize='500px'
          height='100%'
          objectFit='cover'
          src='./estradaArvore.jpg'
          alt='Dan Abramov'

        />

        <Text fontSize='50px' ml='3rem' mt='12rem' fontFamily='roboto' textColor='white' justifyContent='center' textAlign='left'>

          Plantar mudas de árvores nativas  <br />no Pé da Estaca ao longo das cercas <br /> as  margens das estradas rurais do nosso município.
          <Box display='flex' justifyContent='center'><Button variant='outline' colorScheme='green' border='1px' width='100%'>Junte-se a nós</Button></Box>
        </Text>
      </Box>


      <Box bg='#343D3F' >
        <Text fontFamily='roboto' fontSize='1.5rem' color='white' textAlign='justify' mr='4rem' ml='6rem' letterSpacing={3} >
          O projeto Pé da Estaca tem como objetivo desenvolver consciência critica social e ambiental do sistema que interliga a sociedade com interesse comum.<br></br>
          Para isso esse projeto ecológico Pé da Estaca visa plantar arvores nativas no pé da estaca a cada 50 ou 100 metros de distância as margens das estradas rurais e divisas em sítios e fazenda da região tendo como meta contribuir para o bem-estar animal, redução de gastos aos produtores, diminuição do aquecimento global, conservação ambiental e etc. no que resulta em qualidade de vida das pessoas, somando forças para preservar o nosso bem mais precioso.
          O projeto piloto foi desenvolvido na fazenda União e no Sitio Cahoeirinha de São Francisco na cidade de Visconde do Rio Branco Estado de Minas Gerais ao todo foram plantadas 200 mudas de arvores de Ipês branco, amarelo e roxo, Angico, Acácia, e árvores frutíferas.
        </Text>
      </Box>

      <Swiper className='swiper-container'
        slidesPerView={4}
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


      <Box bg='#343D3F' p='3rem'>
        <Box ml='4rem' mr='3rem' mt='2rem'>
          <Text as='b' fontSize='5xl' textColor='white' >COMO FUNCIONA </Text>
          <Text fontSize='3xl' textColor='white' mt='2rem'>O projeto convida fazendeiros e sitiantes locais a colaborar cedendo áreas próximas às divisas e margens das estradas para promover mudanças ambientais. Estudantes, ONGs, igrejas e voluntários interessados na conservação ambiental são incentivados a participar. Os voluntários plantarão e cuidarão de árvores nativas até que se tornem adultas, sendo que cada árvore plantada levará o nome do participante.</Text>
        </Box >
        <Box ml='4rem' mr='3rem' mt='2rem'>
          <Text as='b' fontSize='5xl' textColor='white'>ACOMPANHAMENTO VERDE</Text>
          <Text fontSize='3xl' textColor='white'mt='2rem'>O plantio de árvores deve ocorrer durante as estações chuvosas, a partir de setembro. Para garantir o sucesso do desenvolvimento das mudas, é essencial controlar a presença de formigas ou usar proteções físicas para evitar danos.</Text>
        </Box>
        <Box ml='4rem' mr='3rem' textAlign='justify'mt='2rem'>
          <Text as='b' fontSize='5xl' textColor='white'>Como Plantar e Cuidar de uma Arvore</Text>
          <Text fontSize='3xl' textColor='white'mt='2rem'>Para plantar e cuidar de uma árvore, escolha uma muda com mais de 1,5 metros de comprimento para minimizar danos por animais. Opte por espécies adequadas ao clima e solo local, como Angico, Araçá Amarelo, Canela, Ipê, Jacarandá, Aroeira, entre outras. Antes do plantio, mantenha a umidade das raízes. Cave um buraco ao lado da estaca contrária ao pasto, com 50 cm de diâmetro e profundidade o dobro do comprimento do torrão. Coloque a planta no buraco e cubra o torrão com 3 cm de terra, compactando ao redor. Regue a base e crie um muro ao redor da árvore para retenção de água. Use a estaca como protetor florestal para orientar o crescimento e proteger contra animais e vento.</Text>
        </Box>
      </Box>
        
      <Flex  bg='#343D3F'>
        <Box boxSize='150px' ml='5rem' mr='3rem' >
          <img src="./LogoPix.png" alt=""  />
        </Box>
        <Box ml='1rem' >
            <Text as='b' fontSize='3xl' textColor='white'>DOAÇÕES</Text>
            <Text fontSize='2xl' textColor='white'>Para doar, basta acessar o aplicativo do seu banco e realizar uma transferência via Pix para a chave: 1234567890. Agradecemos a sua contribuição!</Text>
        </Box>
      </Flex>


      <Flex bg='#343D3F' alignItems='center' justifyContent='space-around' >
        <Box p='1rem' mt='2rem'>

          <Text fontFamily='roboto' textColor='white' fontSize='1.1rem' as='cite' textAlign='left' mr='2rem' ml='2rem'>
            “Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível...” São Francisco de Assis.<br></br>
          </Text>
          <Text fontFamily='roboto' textColor='white' fontSize='1.1rem' as='cite' textAlign='left' mr='2rem' ml='2rem'>
            ‎ Que São Francisco nos abençoe, amém!
            O Meio Ambiente, agradece!
          </Text>
        </Box>

        <Box p='1rem'>
          <img src="./francisco.jfif" alt="imagem de Sáo Francisco de Assis" />
        </Box>
      </Flex>



    </>
  )
}