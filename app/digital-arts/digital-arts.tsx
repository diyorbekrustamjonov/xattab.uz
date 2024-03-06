'use client';
import Image from "next/image";
import { Metadata } from "next";
import { useState, useEffect } from 'react';
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import CloseIcon from "@/app/components/shared/CloseIcon";
import { images } from "../data/data";
import { Slide } from "../animation/Slide";
import ImageFader from "../components/shared/ImageFader";

export const metadata: Metadata = {
    title: "Digital Arts | Diyorbek Rustamjonov",
    metadataBase: new URL("https://xattab.uz/digital-arts"),
    description: "Explore digital arts images by Diyorbek Rustamjonov",
    openGraph: {
        title: "Digital Arts | Diyorbek Rustamjonov",
        url: "https://xattab.uz/digital-arts",
        description: "Explore digital arts by Diyorbek Rustamjonov",
        images: "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/digital-arts.png",
    },
};

export const imgs = Array.from({ length: images }, (_, index) => ({
    id: index,
    src: `/images/digital-arts/${index}.png`
}));

export default function DigitalArts() {
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
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        } else {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
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
        <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
            <div className="lg:max-w-2xl max-w-2xl">
                <Slide>
                    <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-3 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                        Digital Arts
                    </h1>
                    <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                        Explore a collection of {imgs.length} digital creations, made with DALL·E.
                    </p>
                </Slide>
            </div>
            <figure className="my-6">
                <Slide delay={0.12} className="flex flex-wrap gap-8">
                    {imgs.slice().reverse().map((image) => (
                        <div
                            key={image.id}
                            className="image-container dark:bg-primary-bg bg-secondary-bg"
                            style={{ width: '350px', height: '350px' }}
                        >
                            <Image
                                src={image.src}
                                alt="Digital Art"
                                onClick={() => openLightbox(image.id)}
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </Slide>
            </figure>

            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div onClick={e => e.stopPropagation()}>
                        <ImageFader src={imgs[currentImageIndex].src} />
                    </div>

                    <div className="absolute left-4 top-4 text-white text-xl">
                        {currentImageIndex + 1}/{imgs.length}
                    </div>

                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <BiLeftArrowAlt
                            size={50}
                            onClick={nextImage}
                            className="text-white text-3xl cursor-pointer"
                        />
                    </div>

                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <BiRightArrowAlt
                            size={50}
                            onClick={prevImage}
                            className="text-white text-3xl cursor-pointer"
                        />
                    </div>

                    <CloseIcon
                        size={40}
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                    />
                </div>
            )}

        </main>
    );
}
