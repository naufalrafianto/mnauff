'use client'
import LottiePlayer from '@/components/Lottie'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import React from 'react'
import AnimationData from '../../public/assets/lottie/404/data_not_found.json'
import { UnstyledLink } from '@/components/ui/link/Link'

interface ProjectDetails {
    data: Project[]
}

const ProjectContainer = ({ data }: ProjectDetails) => {
    const type = ['all', 'website', 'mobile']
    const [selectedFilter, setSelectedFilter] = React.useState<string | string[]>('all')
    const [filteredData, setFilteredData] = React.useState<Project[]>(data)

    React.useEffect(() => {
        if (selectedFilter === 'all') {
            setFilteredData(data)
        } else {
            const filtered = data.filter((data) => data.type === selectedFilter)
            setFilteredData(filtered)
        }
    }, [selectedFilter])

    return (
        <div className="flex flex-col gap-5">
            <div className="mx-auto flex h-[3rem] w-2/3  items-center justify-center space-x-1 rounded bg-white bg-opacity-10 px-5 max-md:w-4/5">
                {type.map((type) => {
                    return (
                        <div key={type}>
                            {selectedFilter === type ? (
                                <Button
                                    color="first"
                                    className="px-20 py-2 capitalize max-md:px-10"
                                    type="button"
                                    onClick={() => setSelectedFilter(type)}
                                >
                                    {type}
                                </Button>
                            ) : (
                                <button
                                    className="rounded px-10 py-2 capitalize hover:bg-blue-500 focus:outline-none max-md:px-5"
                                    onClick={() => setSelectedFilter(type)}
                                >
                                    {type}
                                </button>
                            )}
                        </div>
                    )
                })}
            </div>
            <ul className="max-md:flex max-md:flex-col max-md:items-center">
                {filteredData.map((item) => {
                    return (
                        <li key={item.id}>
                            <UnstyledLink
                                href={`/project/${item.id}`}
                                className="flex h-[405px] w-[305px] items-center justify-center rounded bg-pink-700 bg-gradient-to-br from-pink-500 via-blue-500 to-cyan-500"
                            >
                                <div className="grid h-[400px] w-[300px] cursor-pointer grid-rows-2 rounded  bg-black p-7 hover:bg-opacity-75 ">
                                    <div className="h-1/2 w-full cursor-pointer bg-white duration-300 hover:scale-110 hover:shadow">
                                        <Image
                                            width={480}
                                            height={320}
                                            src={item.thumbnail}
                                            alt="project image"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="mt-[-12.5px] space-y-4  ">
                                        <h1 className="font-secondary text-center text-2xl font-bold">{item.title}</h1>
                                        <p className=" text-justify text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            </UnstyledLink>
                        </li>
                    )
                })}
                {filteredData.length <= 0 && (
                    <div className="mx-auto flex w-1/2 flex-col space-y-2">
                        <LottiePlayer AnimationData={AnimationData} />
                        <p className="text-center text-xl">Project is not found!</p>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default ProjectContainer
