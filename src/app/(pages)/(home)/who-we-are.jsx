import Image from 'next/image'
import React from 'react'

export default function WhoWeAre() {
    return (
        <section>
            <div className="mx-auto container grid md:grid-cols-2">
                <div className="bg-background text-foreground p-6 sm:py-12 md:p-16 lg:p-20">
                    <h2 className='md:text-left'><span className="text-primary underline">Who</span> We Are</h2>
                    <span className='space-y-sm'>
                        <p>
                            Our company is a licensed, bonded,  insured, and practicing general contractor. We are incorporated in Delaware. Our service area is northern Delaware and surrounding counties of Pennsylvania. We are focused on providing residential remodeling services in a professional, detailed, and fair-way.
                        </p>
                        <p>
                            All that said, we are much more than that.
                        </p>
                        <p>
                            We'd love the opportunity to show you.
                        </p>
                    </span>
                </div>

                <div className="bg-neutral-950 text-background p-6 sm:py-12 md:p-16 lg:p-20 grid gap-base grid-cols-2">
                    <Image
                        className='w-full object-cover rounded-md'
                        src="/images/person/8.png"
                        width={200}
                        height={200}
                        alt='Group Image'
                    />
                    <Image
                        className='w-full object-cover rounded-md'
                        src="/images/person/10.png"
                        width={200}
                        height={200}
                        alt='Group Image'
                    />
                    <Image
                        className='w-full object-cover rounded-md'
                        src="/images/person/7.png"
                        width={200}
                        height={200}
                        alt='Group Image'
                    />
                    <Image
                        className='w-full object-cover rounded-md'
                        src="/images/person/9.png"
                        width={200}
                        height={200}
                        alt='Group Image'
                    />
                </div>
            </div>
        </section>
    )
}
