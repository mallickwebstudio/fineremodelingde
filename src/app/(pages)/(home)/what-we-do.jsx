import Image from 'next/image'
import React from 'react'

export default function WhatWeDo() {
    return (
        <section>
            <div className="mx-auto container grid md:grid-cols-2">
                <div className="bg-background text-foreground p-6 sm:py-12 md:p-16 lg:p-20 md:order-2">
                    <h2 className='md:text-left'><span className="text-primary underline">What</span> We Do</h2>
                    <span className='space-y-sm'>
                        <p>
                            For more than ten years, we have been on various projects such as kitchen and bathroom remodeling, basement finishing, and home additions. We specialize in whole home renovations and provide customized solutions to fit different budgets and project scopes. Our expertise also includes structural changes and repairs, and we hire specialized tradesmen, including Mechanical, Plumbing, and Electrical contractors. Check out our Pictures & Services pages for more information.
                        </p>
                    </span>
                </div>

                <div className="bg-neutral-950 text-background p-6 sm:py-12 md:p-16 lg:p-20 md:order-1">
                    <Image
                        className='w-full aspect-square object-cover rounded-md'
                        src="/images/person/suite-selfie.png"
                        width={200}
                        height={200}
                        alt='Group Image'
                    />
                </div>
            </div>
        </section>
    )
}
