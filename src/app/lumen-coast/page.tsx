"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import $ from "jquery"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LumenHome() {
    const [play, setPlay] = useState(false);
    const [layout, setLayout] = useState('1');
        
    useEffect(() => {
        const addRipple = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();

            const ripple = document.createElement('span');
            ripple.className = 'ripple';

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const maxDist = Math.hypot(
                Math.max(x, rect.width - x),
                Math.max(y, rect.height - y)
            );
            const base = 20;
            const scale:number = (maxDist / (base/2)) * 1.05;
            ripple.style.setProperty('--ripple-scale', scale.toString());

            ripple.style.left = x + 'px';
            ripple.style.top  = y + 'px';

            target.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        };

        document.querySelectorAll<HTMLElement>('[data-ripple]').forEach((el: HTMLElement) => {
            el.addEventListener('click', addRipple);
        });
    })

    const stopPlaying = () => {
        if(play) {
            const player = document.querySelector('video');
            setPlay(false);
            player?.pause();
        }
    }

    const playVideo = () => {
        if(!play){
            const player = document.querySelector('video');
            setPlay(true);
            player?.play();
        }
    }
  return (
    <>
        <div className="ripple-container h-screen overflow-hidden"
            style={{
                backgroundImage: "url('https://cdn.pixelbin.io/v2/dummy-cloudname/EEM2O3/wrkr/original/619340761ca096a589ca891f/662751fc71363b0faee06b6c_High-Resolution%20Image%20Converter.avif')",
                backgroundSize: "cover",
            }}  data-ripple onClick={stopPlaying}
        >
            <div>
                <video src="/164339-830461201.mp4" className="absolute top-0 h-screen w-screen bg-neutral-200 object-cover" controls={false} loop></video>
            </div>
            <div className="container mx-auto h-full relative">
                <div className={`flex justify-between pt-8 duration-500 ${!play ? 'translate-y-0' : '-translate-y-[200px]'}`}>
                    <div className="lg:flex hidden gap-2">
                        <Button className={`glass-btn playfair-display`}>Journal</Button>
                        <Select>
                            <SelectTrigger className="glass-btn playfair-display data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white text-white">
                                <SelectValue placeholder="Destinations" className="placeholder-white text-white" />
                            </SelectTrigger>
                            <SelectContent className="bg-white/10 backdrop-blur-lg text-white border-transparent">
                                <SelectGroup>
                                    <SelectItem value="apple">Nigeria</SelectItem>
                                    <SelectItem value="banana">Ghana</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button className="glass-btn playfair-display">Gallery</Button>
                    </div>
                    <div className="playfair-display font-semibold text-[35px] leading-7 text-center text-white">
                        <p>Lumen</p>
                        <p>Coast</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={(_e) => setLayout(layout == '1' ? '2' : '1')}>
                            <Icon icon="mynaui:grid-solid" width="24" height="24" className="text-white" />
                        </button>
                        <Button className="primary-btn playfair-display">
                            <p>Book your trip</p>
                            <Icon icon="teenyicons:top-right-outline" width="15" height="15" />
                        </Button>
                    </div>
                </div>
                <div className={`grid justify-center lg:mt-[180px] mt-[90px] duration-1000 ${play ? 'opacity-0 pt-[90px]' : 'opacity-100 pt-[0]'}`}>
                    <div className={`text-center text-white duration-700 ${layout == '2' ? 'lg:absolute bottom-18 lg:text-left' : ''}`}>
                        <p className="playfair-display font-semibold lg:text-[80px] text-[50px] max-w-[800px] lg:leading-24 leading-12">Discover serenity beyond the shore.</p>
                        <p className="poppins mt-6">Experience the coastline like never before with a private boat tour at golden hour.</p>
                        <p className="poppins">Let the rhythm of the waves and the warmth of the setting sun guide youto pure tranquility.</p>
                        <div className={`flex justify-center duration-700 ${layout == '2' ? 'lg:justify-start' : ''} gap-3 mt-8`}>
                            <Button className="primary-btn playfair-display">
                                <p>Book your trip</p>
                                <Icon icon="teenyicons:top-right-outline" width="15" height="15" />
                            </Button>
                            <Button className="glass-btn playfair-display">Explore villas</Button>
                        </div>
                    </div>
                    <div className={`h-[180px] w-[200px] bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-1.5 mx-auto mt-18 text-white duration-700 overflow-hidden ${layout == '2' ? 'lg:absolute right-0 bottom-18 lg:h-[210px] lg:w-[280px]' : ''}`}>
                        <div className={`relative h-[135px] rounded-md border border-white/20 duration-700 ${layout == '2' ? 'lg:h-[165px]' : ''}`}>
                            <Image 
                                src="/Screenshot 2025-08-14 at 13.01.29.png"
                                alt="display"
                                width={500}
                                height={500}
                                priority
                                className="object-cover h-full w-full rounded-md"
                            />
                            <button type="button" className="grid place-content-center size-16 rounded-full border absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] scale-80 hover:scale-100 duration-700 cursor-pointer" onClick={playVideo}>
                                <Icon icon="iconoir:play-solid" width="35" height="35" className="text-white" />
                            </button>
                        </div>
                        <div className="flex justify-between items-center py-2 text-[14px]">
                            <p className="playfair-display">Watch experience</p>
                            <Icon icon="ep:right" width="14" height="14" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
