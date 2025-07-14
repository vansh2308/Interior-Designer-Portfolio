
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Resume from "../assets/resume_sde.pdf"
import { Button } from "./ui/button";

export function About() {
    const tools = [
        {
            name: "Adobe Photoshop"
        },
        {
            name: "Illustrator"
        },
        {
            name: "Figma"
        },
        {
            name: "Autodesk Fusion 360"
        },
        {
            name: "AutoCAD"
        }
    ]


    return (
        <div className={`about h-max min-h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center py-28`}>
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-semibold ")}>
                Know about me
            </h1>
            <p className="text-center mt-8 text-primary-foreground relative z-20 max-w-[50vw] leading-8 ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>

            <a href={Resume} download>
                <Button variant={'secondary'} className="relative mt-7 z-20" onMouseOver={(e) => e.stopPropagation()}> Download Resume </Button>
            </a>



            <InfiniteMovingCards
                items={tools}
                direction="right"
                speed="slow"
                className="mt-36"
            />
            <InfiniteMovingCards
                items={tools}
                direction="left"
                speed="slow"
            />
        </div>
    );
}
