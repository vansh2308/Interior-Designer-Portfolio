

import React, { useEffect, useRef, useState } from "react"


// import { FaLink } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";

import projectThumbnail from "../assets/hero.png"

interface Project {
    thumbnail: string,
    name: string,
    description: string
}


const projectList = [
    {
        thumbnail: projectThumbnail,
        name: "Project Title",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
    }, 
    {
        thumbnail: projectThumbnail,
        name: "Demo Title",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet."
    }, 
    
]


export default function ProjectsContainer(){
    const ratio = 0.4    // y to x scroll ratio
    const wrapperRef = useRef(null)
    const locomotiveRef = useRef(null)
    let distanceFromTop: null | number = null

    const handleScroll = (e: Event) => {
        if(distanceFromTop && window.scrollY >= distanceFromTop ){
            locomotiveRef.current.style.transform = `translateX(-${window.scrollY - distanceFromTop}px)`
        }
    }

    useEffect(() => {
        if(locomotiveRef && locomotiveRef.current) {
            let verScrollDistance: number = locomotiveRef?.current?.clientWidth / ratio
            distanceFromTop = wrapperRef?.current?.getBoundingClientRect().top
            wrapperRef.current.style.height = `${verScrollDistance*2}px` 
        }

        
        window.addEventListener("scroll", handleScroll, { passive: true })
        return(() => {
            window.removeEventListener("scroll", handleScroll)
        })
        
    }, [])



    return(
        // wrapper
        <div className="bg-black text-white w-screen py-10 relative max-[850px]:py-3 max-[850px]:hidden" ref={wrapperRef} >
            {/* bilateral scroller  */}
            <div className="p-20 pt-40 overflow-x-visible flex sticky top-0 items-stretch max-[850px]:p-5" ref={locomotiveRef}>
                {
                    [...Array(28).keys()].map((key) => {
                        return(
                            <ProjectTile  key={key} project={ projectList[key%projectList.length] }/>
                        )
                    })
                }
            </div>

        </div>
    )
}



function ProjectTile( {key, project} : {key: number, project: Project} ) {
    return (
        <div className="project-container min-w-[20rem] bg-white text-black border-3 border-white min-h-fit  rounded-xl  grow self-stretch">

            <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
                <img src = {project.thumbnail} alt="thummbnail" className="size-full object-cover" />
            </div>

            <div className="p-5 flex flex-col gap-2 max-h-full">
                <h4 className=" text-2xl font-semibold max-h-min text-wrap overflow-hidden"> {project.name} </h4>
                {/* <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xs font-medium">Python C++</h5>
                    <div className="flex gap-2 text-lg items-center">
                        <FaLink />
                        <FaGithub />
                    </div>
                </div> */}

                <p className="text-[0.7rem] leading-5 my-2">
                    {/* {project.description.substring(0, 180) + (project.description.length > 180 ? '...' : '')}  */}
                    {project.description}
                </p>

            </div>


        </div>
    )
}
