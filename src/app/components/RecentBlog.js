"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogContent = {
  heading: {
    headingSubTitle: "Our Writeups",
    headingTitle: "Our Latest Articles",
    description:
      "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
  },
  recentBlog: [
    {
      permalink: "#_",
      featuredImg: "/images/post-1-min.jpg",
      title: "10 Essential Tips for Protecting Your Home From Burglaries",
      excerpt:
        "Learn the best practicies and simple steps to safeguard your home and loved ones from potential break-ins  and theft.",
      author: {
        img: "/images/person-1-min.jpg",
        name: "Alisa Richardson",
        titleRole: "Editor, CEO, Co-Founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-2-min.jpg",
      title:
        "The Ultimate Guide to Choosing The Right Life Insurance For Your Family",
      excerpt:
        "Understanding the varoius types of life insurance policies and finding the perfect coverage to ensure...",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Jane Cooper",
        titleRole: "Editor, COO",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-3-min.jpg",
      title:
        "A Comprehensive Guide to Choosing the Right Family Health Insurance Plan",
      excerpt:
        "Understanding the varoius types of life insurance policies and finding the perfect coverage to ensure...",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Davon McKenny",
        titleRole: "Editor, Product Designer",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-1-min.jpg",
      title: "Understanding Homeowners Insurance",
      excerpt:
        "Understanding the varoius types of life insurance policies and finding the perfect coverage to ensure...",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Jane Cooper",
        titleRole: "Editor, COO",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-3-min.jpg",
      title: "Securing Your Family's with Disability Insurance",
      excerpt:
        "Understanding the varoius types of life insurance policies and finding the perfect coverage to ensure...",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Davon McKenny",
        titleRole: "Editor, Product Designer",
      },
    },
  ],
  cta: {
    href: "#_",
    label: "To view all posts",
    labelSuffix: "click here",
  },
};

const RecentBlog = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBegining, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsEnd(sliderRef.current?.swiper.isEnd);
    setIsBeginning(sliderRef.current?.swiper.isBegining);
    console.log(slideIndex);
    console.log(isEnd);
    console.log(isBegining);
  });

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  });

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  });

  return (
    <section className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {blogContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10">
                {blogContent.heading.headingSubTitle}
              </span>
            )}
            {blogContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text lg:text-4xl font-bold mb-5">
                {blogContent.heading.headingTitle}
              </h2>
            )}
            {blogContent.heading.description && (
              <p className="text-body leading-relaxed">
                {blogContent.heading.description}
              </p>
            )}
          </div>

          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBegining == true
                    ? "opacity-30 bg-[#E1EFEA] cursor-auto"
                    : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronLeft
                  className={`text 3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isBegining == true
                      ? "group-hover:!text-primary"
                      : "group-hover:text-white"
                  }`}
                />
              </div>

              <div
                onClick={nextHandler}
                className={`${
                  isEnd == true
                    ? "opacity-30 bg-[#E1EFEA] cursor-auto"
                    : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isEnd == true
                      ? "group-hover:!text-primary"
                      : "group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            968: {
              width: 968,
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={30}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex iteems-strecth !overflow-visible before-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {blogContent.recentBlog.map((blog, idx) => (
            <SwiperSlide className="overflow-visible h-full" key={blog.title}>
              <div className="p-5 rounded-lg bg-white relative mt-10">
                <Link
                  href={blog.permalink}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4"
                >
                  <Image
                    src={blog.featuredImg}
                    width={782}
                    height={467}
                    alt="rickycode.com"
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link href={blog.permalink} className="relative text-heading">
                    {blog.title}
                  </Link>
                </h2>
                <p className="relative mb-6">{blog.excerpt}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={blog.author.img}
                      width={50}
                      height={50}
                      alt="rickycode.com"
                      className="rounded-full object-cover w-14 h-14"
                    />
                  </div>
                  <div className="leading-5">
                    <strong className="text-primary">{blog.author.name}</strong>
                    <span className="block text-sm">
                      {blog.author.titleRole}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mx-auto flex items-center justify-center ">
          <Link
            href={blogContent.cta.href}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            {blogContent.cta.label}{" "}
            <strong className="text-primary pl-1 font-semibold">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className="text-gray-300"></span>
            <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
