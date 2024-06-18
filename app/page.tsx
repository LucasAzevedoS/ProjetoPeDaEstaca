// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, flexbox } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import './globals.css'



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
                  <Link href="/about" p='4'textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4'textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4'textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4'textColor='white'>Teste</Link>
                </li>
                <li>
                  <Link href="/about" p='4'textColor='white'>Teste</Link>
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
          <Box display='flex' justifyContent='center'><Button variant='outline' colorScheme='green' border='1px'   width='100%'>Junte-se a nós</Button></Box>
        </Text> 
      </Box>
      



      <Box bg='#343D3F' >
          <Text  fontFamily='roboto' fontSize='1.5rem' color='white' textAlign='justify' mr='4rem' ml='6rem'  letterSpacing={3} >
            O projeto Pé da Estaca tem como objetivo desenvolver consciência critica social e ambiental do sistema que interliga a sociedade com interesse comum.<br></br>
            Para isso esse projeto ecológico Pé da Estaca visa plantar arvores nativas no pé da estaca a cada 50 ou 100 metros de distância as margens das estradas rurais e divisas em sítios e fazenda da região tendo como meta contribuir para o bem-estar animal, redução de gastos aos produtores, diminuição do aquecimento global, conservação ambiental e etc. no que resulta em qualidade de vida das pessoas, somando forças para preservar o nosso bem mais precioso.
            O projeto piloto foi desenvolvido na fazenda União e no Sitio Cahoeirinha de São Francisco na cidade de Visconde do Rio Branco Estado de Minas Gerais ao todo foram plantadas 200 mudas de arvores de Ipês branco, amarelo e roxo, Angico, Acácia, e árvores frutíferas.
          </Text>
      </Box>

      <Flex bg='#343D3F' alignItems='center' justifyContent='space-around' >
        <Box p='1rem' mt='2rem'>

          <Text fontFamily='roboto' textColor='white'  fontSize='1.1rem' as='cite'  textAlign='left' mr='2rem' ml='2rem'>
            “Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível...” São Francisco de Assis.<br></br>
          </Text>
          <Text fontFamily='roboto' textColor='white' fontSize='1.1rem' as='cite'  textAlign='left' mr='2rem' ml='2rem'>
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