import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { SiFiverr } from 'react-icons/si'
import { UnstyledLink } from './ui/link/Link'
const Footer = () => {
    return (
        <footer className="mt-20 flex h-12 w-full items-center justify-center bg-opacity-5 p-5">
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex gap-5">
                    <UnstyledLink href="https://www.instagram.com/naufal.rafianto/">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:bg-gradient-to-br hover:from-pink-500 hover:to-violet-500 hover:text-white">
                            <BsInstagram />
                        </div>
                    </UnstyledLink>
                    <UnstyledLink href="https://github.com/naufalRafianto">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:bg-gradient-to-br hover:from-pink-500 hover:to-violet-500 hover:text-white">
                            <BsGithub />
                        </div>
                    </UnstyledLink>
                    <UnstyledLink href="https://www.linkedin.com/in/naufal-rafianto-4159a8206/">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:bg-gradient-to-br hover:from-pink-500 hover:to-violet-500 hover:text-white">
                            <BsLinkedin />
                        </div>
                    </UnstyledLink>
                    <UnstyledLink href="https://www.fiverr.com/emener">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:bg-gradient-to-br hover:from-pink-500 hover:to-violet-500 hover:text-white">
                            <SiFiverr />
                        </div>
                    </UnstyledLink>
                </div>
                <p>&copy; 2023 All rights reserved. Create by Naufal</p>
            </div>
        </footer>
    )
}

export default Footer
