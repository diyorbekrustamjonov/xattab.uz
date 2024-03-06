'use client';
import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';
import { notFound } from "next/navigation";
import { BiExpand, BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import CloseIcon from "@/app/components/shared/CloseIcon";
import ImageFader from "@/app/components/shared/ImageFader";
import { Slide } from "../../animation/Slide";
import { projects } from "../../data/data";

type Props = {
    params: {
        project: string;
    };
};

const fallbackImage: string =
    "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/projects.png";

type BadgeProps = {
    href: string;
    imageSrc: string;
    alt: string;
};

const Badge: React.FC<BadgeProps> = ({ href, imageSrc, alt }) => (
    <div className="w-42 flex justify-center mt-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Image src={imageSrc} alt={alt} width={0} height={0} sizes="100vw" className="badge-size" style={{ width: 'auto', height: 'auto' }} />
        </a>
    </div>
);

export default function Project({ params }: Props) {
    const slug = params.project;
    const project = projects.find(project => project.slug === slug);

    if (!project) {
        notFound();
    }

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    function openLightbox(index: number) {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    }

    function changeImage(direction: 'next' | 'prev') {
        if (direction === 'next') {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project!.screenshots.length);
        } else {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project!.screenshots.length) % project!.screenshots.length);
        }
    }

    function nextImage() {
        changeImage('next');
    }

    function prevImage() {
        changeImage('prev');
    }


    useEffect(() => {
        const handleKeydown = (e: any) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <main className="max-w-7xl mx-auto lg:px-20 px-10">
            <Slide>
                <div className="max-w-5xl ml-4 lg:ml-20 py-10">
                    <div className="flex flex-col lg:flex-row items-center mb-6 space-y-4 lg:space-y-0 lg:space-x-8">
                        <div className="rounded-3xl w-40 h-40 lg:w-auto lg:h-auto">
                            <Image src={project.logo} alt="App Logo" width={222} height={222} className="lg:w-222 lg:h-222 rounded-3xl" />
                        </div>

                        <div className="text-center lg:text-left">
                            <h1 className="font-incognito font-black text-5xl">{project.name}</h1>
                            <p className="text-lg mt-8">{project.tagline || 'A super tagline for the mobile app'}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start mt-12">
                                {project.googlePlay ? (
                                    <Badge href={project.googlePlay} imageSrc="/images/store/google-play.png" alt="Google Play" />
                                ) : null}

                                {project.appStore ? (
                                    <Badge href={project.appStore} imageSrc="/images/store/app-store.png" alt="App Store" />
                                ) : null}

                                {project.webApp ? (
                                    <Badge href={project.webApp} imageSrc="/images/store/pwa.png" alt="Web App" />
                                ) : null}

                                {project.github ? (
                                    <Badge href={project.github} imageSrc="/images/store/github.png" alt="Github" />
                                ) : null}

                                {!project.googlePlay && !project.appStore && !project.webApp && !project.github ? (
                                    <div className="bg-transparent h-[52px]"></div>
                                ) : null}
                            </div>

                        </div>
                    </div>

                    {
                        project?.screenshots?.length !== 0 && (
                            <><h2 className="font-black text-3xl mt-32 mb-6 ">Screenshots</h2>
                                <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-hide">
                                    {project.screenshots && project.screenshots.map((screenshot, index) => (
                                        <div key={index} className="relative flex-shrink-0" style={{width: '200px'}}>
                                            <Image
                                                onClick={() => openLightbox(index)}
                                                src={screenshot || fallbackImage}
                                                alt="App Screenshot"
                                                width={200}
                                                height={355}
                                                className="rounded-xl self-stretch"/>
                                            <BiExpand
                                                className="text-white absolute top-2 right-2 z-10 cursor-pointer"
                                                size={32}
                                                onClick={() => openLightbox(index)}/>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                    }

                    {lightboxOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                            onClick={closeLightbox}
                        >
                            <div onClick={e => e.stopPropagation()}>
                                <ImageFader src={project.screenshots[currentImageIndex]} />
                            </div>

                            <div className="absolute left-4 top-4 text-white text-xl">
                                {currentImageIndex + 1}/{project.screenshots.length}
                            </div>
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
                                <BiLeftArrowAlt size={50} onClick={prevImage} className="text-white text-3xl cursor-pointer" />
                            </div>

                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
                                <BiRightArrowAlt size={50} onClick={nextImage} className="text-white text-3xl cursor-pointer" />
                            </div>
                            <CloseIcon size={40} onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl cursor-pointer" />
                        </div>
                    )}

                    {project?.description && (
                        <><h2 className="font-black text-3xl mt-24">Description</h2>
                            <div
                                className="project-description mt-10 dark:text-zinc-400 text-zinc-600 leading-relaxed"
                                dangerouslySetInnerHTML={{__html: project.description}}/>
                        </>
                    )}
                </div>
            </Slide>
        </main>
    );
}
