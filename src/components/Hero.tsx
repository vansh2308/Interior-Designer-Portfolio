
import type React from 'react'
import HeroImg from '../assets/hero.png' 
import { useAnimation, motion } from "framer-motion"

export default function Hero() {
    const imgAnimation = useAnimation()

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        const offsetFactor = 15
        imgAnimation.start({
          x: moveX / offsetFactor,
          y: moveY / offsetFactor
        })
      }

    return (
        
        <section className="w-screen h-screen text-accent-foreground font-bold relative overflow-hidden">
            <motion.img
                animate={imgAnimation}
                onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
                src={HeroImg}
                className="min-w-[110%] min-h-[110%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto"
                alt="Woman in a red dress"
            />

            <div className='px-20 py-10 w-screen min-h-max  text-accent-foreground z-10 left-0 bottom-5 absolute pointer-events-none' >
                <div className='w-full h-full bg-white/80 absolute top-0 -translate-x-20 -z-10 blur-3xl ' />
                <motion.span 
                    className='text-[2rem]' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    Spaces reimagined by 
                </motion.span>
                <motion.h2 
                    className='text-[4rem]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                > 
                    Vanshika Agarwal 
                </motion.h2>
            </div>

        </section>
    )
}