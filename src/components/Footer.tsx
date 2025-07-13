
import { SparklesCore } from "./ui/sparkles";

import QR from "../assets/qr.jpg"

export function Footer() {
    return (
        <div className="h-screen w-screen relative bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.8}
                    maxSize={2}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#000"
                />
            </div>

            <div className="flex flex-col gap-12 items-center justify-center">
                <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-black relative z-20"> Thanks. Do Visit Again! </h1>

                <img src={QR} className="aspect-square h-[35vh]" />
            </div>

        </div>
    );
}
