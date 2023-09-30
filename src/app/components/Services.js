import React from "react";
import Image from "next/image";

const servicesContent = {
  heading: {
    headingSubTitle: "Our Awesome Services",
    headingTitle: "Our Services",
    descripton:
      "we understand that protecting your loved ones is of utmost importance. Thats why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
  },
  items: [
    {
      icon: "/images/icon-1.svg",
      title: "Child Safety Solutions",
      descripton:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/images/icon-2.svg",
      title: "Elderly Care Monitoring",
      descripton:
        "Innovative technologies for monitering and caring for elderly family members, promoting thier safety and independence.",
    },
    {
      icon: "/images/icon-3.svg",
      title: "Home Fire Safety",
      descripton:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/images/icon-4.svg",
      title: "Financial Planning",
      descripton:
        "Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security.",
    },
    {
      icon: "/images/icon-5.svg",
      title: "Personal Safety Devices",
      descripton:
        "Wearable personal safety device equipped with GPS tracking and emergency alerts for family members on the go.",
    },
    {
      icon: "/images/icon-1.svg",
      title: "Insurance Coverage",
      descripton:
        "Tailored insurance policies to protect your familie's financial future, including life insurance, health insurance, and property insurance.",
    },
  ],
};

export const Services = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          {servicesContent.heading.headingSubTitle && (
            <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10">
              {servicesContent.heading.headingSubTitle}
            </span>
          )}

          {servicesContent.heading.headingTitle && (
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
              {servicesContent.heading.headingTitle}
            </h2>
          )}

          {servicesContent.heading.descripton && (
            <p className="text-body leading">
              {servicesContent.heading.descripton}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((item, idx) => (
            <div className="flex space-x-10" key={item.title}>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                  <Image
                    src={item.icon}
                    width={62}
                    height={62}
                    alt="rickycodes.com"
                  />
                </span>
              </div>
              <div className="">
                {item.title && (
                  <h3 className="text-heading font-bold text-md md-3">
                    {item.title}
                  </h3>
                )}
                {item.descripton && (
                  <p className="leading-relaxed">{item.descripton}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
