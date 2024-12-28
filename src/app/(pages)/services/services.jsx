import { services } from '@/lib/database'
import Image from 'next/image'
import React from 'react'

export default function Services() {
    return (
        <section>
            <div className="section-wrapper space-y-base">
                {services.map(item => (
                    <div className=" border md:flex md:gap-sm rounded-md overflow-hidden" key={item.title + "Services"}>
                        <Image
                            className='w-full md:w-2/5 object-cover'
                            src="/images/common/error.png"
                            width={200}
                            height={200}
                            alt='Image'
                        />

                        <div className="flex-1">
                            <h3 className='mt-xs'>{item.title}</h3>
                            <span className='space-y-sm text-muted-foreground'>
                                {item.description.map((subItem, i) => (
                                    <span key={item.title + "Services" + i}>
                                        {subItem}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
