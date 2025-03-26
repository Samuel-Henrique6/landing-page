'use client'

import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: 'Royal Canin', logo: royal },
    { name: 'Golden', logo: golden },
    { name: 'Primier', logo: primier },
    { name: 'Formula Natural', logo: natural },
    { name: 'Whiskas', logo: whiskas },
    { name: 'Golden', logo: golden },
]

export function Footer() {
    return (
        <section className='bg-[#E84C3D] py-16 text-white overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {brands.map((item, index) => (
                            <div className='flex justify-center items-center bg-white p-4 rounded-lg' key={index}>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{ width: 'auto', height: 'auto' }}
                                    className='object-contain'
                                />
                            </div>
                        ))}{' '}
                    </div>
                </div>
                <footer className='mb-12 mt-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                            <p>Cuidando do seu melhor amigo com amor e dedicação.</p>
                            <a
                                href='https://wa.me/65993186739?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido?'
                                target='_blank'
                                className='flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md mt-4 w-fit'
                            >
                                <WhatsappLogo className='w-5 h-5' /> Contato via WhatsApp
                            </a>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                            <p>Rua dos Pets, 123</p>
                            <p>Cidade, Estado - CEP: 12345-678</p>
                            <p>Telefone: (11) 1234-5678</p>
                            <p>Email: contato@petshop.com</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                            <div className='flex gap-4'>
                                <a href='#' target='_blank'>
                                    <FacebookLogo className='w-8 h-8' />
                                </a>
                                <a href='#' target='_blank'>
                                    <InstagramLogo className='w-8 h-8' />
                                </a>
                                <a href='#' target='_blank'>
                                    <YoutubeLogo className='w-8 h-8' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <span className='block text-center mt-8'>© 2025 Pet Shop Dev. Todos os direitos reservados.</span>
                </footer>
            </div>
        </section>
    )
}
