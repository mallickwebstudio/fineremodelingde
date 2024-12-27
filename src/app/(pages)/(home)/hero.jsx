"use client";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden z-0">
            <div className="absolute inset-0 z-0 flex justify-center items-center">
                <video
                    className="min-w-full min-h-full object-cover select-none"
                    src="/videos/landscape/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 to-transparent z-0" />

            <div className="relative section-wrapper z-10">
                <div className="grid gap-8 md:grid-cols-5">
                    {/* Hero Text Content */}
                    <div className="md:col-span-3 text-background">

                        <h1 className="text-left">
                            Skip the small talk, <br />
                            let's get down to <br />
                            <span className="text-primary/ underline">brass tacks!</span>
                        </h1>

                        <p className="md:w-4/5 text-muted-foreground">

                        </p>
                        <div className="mt-base">
                            <Link className={buttonVariants()} href="/contact">
                                Cleak Here to Schedule a Call
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative md:col-span-2">
                        {/* <Image
                            className="object-contain object-center rounded"
                            width={500}
                            height={500}
                            src="/hero.svg"
                            alt="Illustration of a person working on design and development"
                            priority
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
