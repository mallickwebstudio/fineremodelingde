import Link from "next/link";
import { Facebook, Github, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/datas/metaDatas";
import { navigationLinks } from "@/lib/datas/const";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-section-secondary">
      <div className="section-wrapper">
        <div className="grid gap-block md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-base">
            <Link className="block" href="/">
              <Image
                className="h-full object-contain"
                src="/images/common/logo.png"
                width={200}
                height={100}
                alt="Logo"
              />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>

            <p >
              <span>
                Delaware Real Estate Answers LLC DBA <br />
              </span>

              <span className="mt-sm flex items-start">
                <MapPin className="inline mt-1 mr-2 size-base" />
                <span className="leading-5">
                  Fine Remodeling, <br />
                  2516 W 3rd St, <br />
                  Wilmington, Delaware - 19805 <br />
                </span>
              </span>

              <span className="flex items-center">
                <Phone className="inline mr-2 size-base" />
                <a className="text-link" href="tel:+13026350375">+1 302-635-0375</a><br />
              </span>

              <span className="flex items-center">
                <Mail className="inline mr-2 size-base" />
                <a className="text-link" href="mailto:randy@fineremodelingde.com">randy@fineremodelingde.com</a>
              </span>
            </p>

            <div className="flex gap-base">
              <Link className={cn(buttonVariants({ variant: "outline", size: "icon" }), "aspect-square")} href={siteConfig.links.facebook}>
                <Facebook className="size-xl text-muted-foreground hover:text-primary" />
                <span className="sr-only">Visit my Facebook</span>
              </Link>

              <Link className={cn(buttonVariants({ variant: "outline", size: "icon" }), "aspect-square")} href={siteConfig.links.instagram}>
                <Instagram className="size-xl text-muted-foreground hover:text-primary" />
                <span className="sr-only">Visit my Instagram</span>
              </Link>

              <Link className={cn(buttonVariants({ variant: "outline", size: "icon" }), "aspect-square")} href={siteConfig.links.youtube}>
                <Youtube className="size-xl text-muted-foreground hover:text-primary" />
                <span className="sr-only">Visit my Youtube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-sm font-bold">Quick Links</div>
            <ul>
              {navigationLinks.map((item) => (
                <li key={item.title}>
                  <Link className="text-link" href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <div className="mb-sm font-bold">Area Licenses: Active/Inactive <br />
              <span className="text-muted-foreground">
                we can explore becoming licensed for your area for your project
              </span>
            </div>
          </div>

          {/* Services */}
          {/* <div>
            <div className="mb-sm font-bold">Services</div>
            <ul>
              {services.map((item) => (
                <li key={item.title}>
                  <Link className="text-link" href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div >

      <div className="container mx-auto p-base">
        <div className="text-muted-foreground md:flex gap-base justify-between">
          <div className="" > &copy;{currentYear} {siteConfig.nameCapitalize} All Rights Reserved</div>
          <div className="md:flex gap-base">
            <Link className="block text-link" href="/terms-of-services">Terms Of Services</Link>
            {/* <Link className="block hover:text-foreground hover:underline" href="/credits">Credits</Link> */}
          </div>
        </div>
      </div>
    </footer >
  )
}
