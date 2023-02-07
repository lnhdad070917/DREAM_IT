import React, { useState } from "react";
import illustrasi1 from "../../../../public/assets/img/illustrasi_1.svg";
import illustrasi2 from "../../../../public/assets/img/illustrasi_2.svg";
import { Icon } from "@iconify/react";
import "tw-elements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function dashboard() {
    console.log(window.innerWidth);
    const bg_1 = (
        <section className="bg-1">
            <div className="md:h-screen pt-10 md:flex md:justify-between mx-12">
                <img
                    src={illustrasi1}
                    alt="Illustrasi"
                    className="md:w-5/12 pl-10"
                />
                <div className="flex md:items-center">
                    <div className="pr-10">
                        <h2 className="md:text-right text-white hidden md:block">
                            Buat Portofolio Onlinemu <br /> Tanpa Ribet
                        </h2>
                        <p className="md:text-right text-white hidden md:block">
                            Ayo Coba Sekarang
                        </p>
                        <button className="md:ml-20 bg-amber-400 border-inherit text-white shadow-lg duration-500 px-8 py-2 mx-3 hover:text-black rounded border-white">
                            Pesan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
    const bg_2 = (
        <section className="bg-mobile">
            <div className="h-[57vh] md:pt-10 md:pt-0 mx-12 flex flex-col justify-center">
                <h2
                    className="text-center md:pt-10 text-white text-sm md:text-2xl"
                    // style={{ fontSize: 15, lineHeight: 1 }}
                >
                    Buat Portofolio Onlinemu Tanpa Ribet
                </h2>
                <p
                    className="text-center text-white text-sm md:text-xl mt-1"
                    // style={{ fontSize: 13, paddingTop: 5, lineHeight: 1 }}
                >
                    Ayo Coba Sekarang
                </p>
                <div className="w-full flex justify-center">
                    <img
                        src={illustrasi1}
                        alt="Illustrasi"
                        className="w-48 md:w-[30rem]"
                    />
                </div>
                <div className="flex justify-center items-center mt-5 md:mt-0">
                    <button className="bg-amber-400 border-inherit text-white shadow-lg duration-500 mx-3 hover:text-black rounded border-white w-16 h-7 md:w-40 md:h-10">
                        <p className="text-sm md:text-xl">Pesan</p>
                    </button>
                </div>
            </div>
        </section>
    );
    const fasilitas_laptop = (
        <div className="flex justify-center flex-col">
            <div className="flex flex-wrap justify-around lg:justify-between md:w-full">
                <div className="items flex">
                    <div className="icon_items1 flex items-center justify-center">
                        <Icon
                            icon="gridicons:share-computer"
                            color="white"
                            width="30"
                            height="30"
                            inline={true}
                        />
                    </div>
                    <p className="flex items-center pl-3">
                        30 days hosting free
                    </p>
                </div>
                <div className="items flex">
                    <div className="icon_items1 flex items-center justify-center">
                        <Icon
                            icon="fluent:design-ideas-16-regular"
                            color="white"
                            width="30"
                            height="30"
                            inline={true}
                        />
                    </div>
                    <p className="flex items-center pl-3">Free Template</p>
                </div>
                <div className="items flex">
                    <div className="icon_items1 flex items-center justify-center">
                        <Icon
                            icon="mdi:monitor-edit"
                            color="white"
                            width="30"
                            height="30"
                            inline={true}
                        />
                    </div>
                    <p className="flex items-center pl-3">Custom Desain</p>
                </div>
                <div className="items flex">
                    <div className="icon_items1 flex items-center justify-center">
                        <Icon
                            icon="bi:database-fill"
                            color="white"
                            width="30"
                            height="30"
                            inline={true}
                        />
                    </div>
                    <p className="flex items-center pl-3">1 GB Web Hosting</p>
                </div>
            </div>
        </div>
    );
    const fasilitas_mobile = (
        <div className="flex justify-center flex-col">
            <div className="flex flex-wrap justify-around lg:justify-between md:w-full">
                <div className="items_mobile flex">
                    <div className="icon_items1_mobile flex items-center justify-center">
                        <Icon
                            icon="gridicons:share-computer"
                            color="white"
                            width="20"
                            height="20"
                            inline={true}
                        />
                    </div>
                    <p
                        className="flex items-center pl-3"
                        style={{ fontSize: 10, lineHeight: 1 }}
                    >
                        30 days hosting free
                    </p>
                </div>
                <div className="items_mobile flex">
                    <div className="icon_items1_mobile flex items-center justify-center">
                        <Icon
                            icon="fluent:design-ideas-16-regular"
                            color="white"
                            width="20"
                            height="20"
                            inline={true}
                        />
                    </div>
                    <p
                        className="flex items-center pl-3"
                        style={{ fontSize: 10, lineHeight: 1 }}
                    >
                        Free Template
                    </p>
                </div>
                <div className="items_mobile flex">
                    <div className="icon_items1_mobile flex items-center justify-center">
                        <Icon
                            icon="mdi:monitor-edit"
                            color="white"
                            width="20"
                            height="20"
                            inline={true}
                        />
                    </div>
                    <p
                        className="flex items-center pl-3"
                        style={{ fontSize: 10, lineHeight: 1 }}
                    >
                        Custom Desain
                    </p>
                </div>
                <div className="items_mobile flex">
                    <div className="icon_items1_mobile flex items-center justify-center">
                        <Icon
                            icon="bi:database-fill"
                            color="white"
                            width="20"
                            height="20"
                            inline={true}
                        />
                    </div>
                    <p
                        className="flex items-center pl-3"
                        style={{ fontSize: 10, lineHeight: 1 }}
                    >
                        1 GB Web Hosting
                    </p>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            {/* jumbotron */}
            {/* WEB Laptop/PC */}
            {/* */}
            <div className="hidden lg:block">{bg_1}</div>
            {/* WEB Mobile */}
            <div className="block lg:hidden">{bg_2}</div>
            {/* Steps */}
            <section className="h-[30vh] lg:h-screen flex items-center justify-center">
                <div>
                    <div className="text-center">
                        <h2 className="text-white text-lg md:text-xl lg:text-5xl">
                            5 Langkah Mudah Untuk Membuat Wesbitemu
                        </h2>
                        <p className="text-white text-sm md:text-xl lg:text-4xl">
                            Ikuti langkahnya
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="block">
                            <div className="my-16">
                                <div className="flex justify-center">
                                    <div className="text-center">
                                        <div className="hidden lg:inline-block pilih_design1"></div>
                                        <div className="lg:hidden pilih_design1-mobile"></div>
                                        <p className="text-white text-steps block lg:hidden">
                                            Pilih Desain
                                        </p>
                                        <p className="text-white text-2xl hidden lg:block">
                                            Pilih Desain
                                        </p>
                                    </div>
                                    <div className="flex items-start mx-[-2px] py-6 lg:py-16">
                                        <div className="hidden lg:inline-block line_steps"></div>
                                        <div className="lg:hidden line_steps-mobile"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="hidden lg:inline-block isi_folmulir"></div>
                                        <div className="lg:hidden isi_folmulir-mobile"></div>
                                        <p className="text-white text-steps block lg:hidden">
                                            Isi Folmulir
                                        </p>
                                        <p className="text-white text-2xl hidden lg:block">
                                            Isi Folmulir
                                        </p>
                                    </div>
                                    <div className="flex items-start mx-[-2px] py-6 lg:py-16">
                                        <div className="hidden lg:inline-block line_steps"></div>
                                        <div className="lg:hidden line_steps-mobile"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="hidden lg:inline-block pembayaran"></div>
                                        <div className="lg:hidden pembayaran-mobile"></div>
                                        <p className="text-white text-steps block lg:hidden">
                                            Pembayaran
                                        </p>
                                        <p className="text-white text-2xl hidden lg:block">
                                            Pembayaran
                                        </p>
                                    </div>
                                    <div className="flex items-start mx-[-2px] py-6 lg:py-16">
                                        <div className="hidden lg:inline-block line_steps"></div>
                                        <div className="lg:hidden line_steps-mobile"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="hidden lg:inline-block jam"></div>
                                        <div className="lg:hidden jam-mobile"></div>
                                        <p className="text-white text-steps block lg:hidden">
                                            Proses <br /> 1x24 Jam
                                        </p>
                                        <p className="text-white text-2xl hidden lg:block">
                                            Proses <br /> 1x24 Jam
                                        </p>
                                    </div>
                                    <div className="flex items-start mx-[-2px] py-6 lg:py-16">
                                        <div className="hidden lg:inline-block line_steps"></div>
                                        <div className="lg:hidden line_steps-mobile"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="hidden lg:inline-block selesai"></div>
                                        <div className="lg:hidden selesai-mobile"></div>
                                        <p className="text-white text-steps block lg:hidden">
                                            Selesai
                                        </p>
                                        <p className="text-white text-2xl hidden lg:block">
                                            Selesai
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pilih Desain */}
            <section id="pilih_desain" className="h-auto mb-16">
                <div className="text-center text-white lg:text-right pt-5 lg:pt-24 pb-5 mx-24 ">
                    <h3 className="text-xl md:text-5xl">
                        Pilih Desain Sesuai Kebutuhan
                    </h3>
                    <p className="text-lg md:text-2xl">Pilih Desainmu</p>
                </div>
                <div className="lg:flex items-center justify-around">
                    <img
                        src={illustrasi2}
                        alt="illustrasi"
                        // style={{ width: "500px" }}
                        className="md:w-[500px] w-[250px] mx-auto"
                    />
                    <div className="md:mr-10">
                        <div className="flex items-center justify-center">
                            <div className="text-white text-lg md:text-2xl text-center">
                                <div className="desain_pilihan hidden md:block"></div>
                                <div className="desain_pilihan_mobile md:hidden"></div>
                                Portofolio
                            </div>
                            <div className="text-white text-lg md:text-2xl text-center">
                                <div className="desain_pilihan hidden md:block"></div>
                                <div className="desain_pilihan_mobile md:hidden"></div>
                                Online Shop
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-white text-lg md:text-2xl text-center">
                                <div className="desain_pilihan hidden md:block"></div>
                                <div className="desain_pilihan_mobile md:hidden"></div>
                                Bio Social Media
                            </div>
                            <div className="text-white text-2xl text-center">
                                <div className="more_desain text-sm text-bold hidden md:block text-black">
                                    <div className="flex justify-around items-center">
                                        <p> More Desain </p>
                                        <Icon
                                            icon="teenyicons:arrow-right-solid"
                                            // color="#ffc93c"
                                            width="20"
                                            height="20"
                                            inline={true}
                                        />
                                    </div>
                                </div>
                                <div className="more_desain_mobile text-sm text-bold md:hidden flex text-black items-center justify-around">
                                    More Desain
                                    <Icon
                                        icon="teenyicons:arrow-right-solid"
                                        // color="#ffc93c"
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fasilitas */}
            <section
                id="fasilitas"
                className="fasilitas h-[25vh] md:h-[35vh] lg:h-screen flex justify-center items-center"
            >
                <div className="md:mx-24 py-10">
                    <div className="md:mb-10 text-white text-center md:text-left">
                        <h1 className="text-white text-lg md:text-5xl">
                            Dapatkan Fasilitas Terbaik Kami
                        </h1>
                        <p className="text-sm md:text-xl">Pilih Paket</p>
                    </div>
                    <div className="hidden lg:block">{fasilitas_laptop}</div>
                    <div className="lg:hidden">{fasilitas_mobile}</div>
                </div>
            </section>
            {/* Testimoni */}
            <section id="testimoni" className="h-[30vh] lg:h-screen md:pb-10">
                <div className="flex flex-col items-center pt-5 lg:pt-32 md:mb-20 justify-center">
                    <h3 className="text-white text-lg md:text-2xl text-center">
                        Bagaimana Pendapat Mereka Tentang Kami
                    </h3>
                    <p className="text-white text-sm md:text-xl">
                        Lihat testimoni
                    </p>
                </div>
                <div className="w-9/12 mx-auto gd-carousel-wrapper">
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={8000}
                        centerMode={false}
                        className="gd-carousel"
                        containerclassName="container-with-dots"
                        dotListclassName=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemclassName=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 3,
                                partialVisibilityGutter: 40,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                            },
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-3">
                            <div className="block p-3 md:p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-sm md:text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p className="text-sm md:text-lg">
                                        Anonymus
                                    </p>
                                    <Icon
                                        icon="mdi:person-circle-outline"
                                        color="#0081c9"
                                        width={35}
                                        inline={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
            {/* Q&A */}
            <section id="qna" className="md:pt-10 lg:pt-24 flex flex-col">
                <div className="text-white text-center md:text-right">
                    <div className="md:mb-10 md:mx-24">
                        <h3 className="text-2xl md:text-5xl">
                            Pertanyaan Umum
                        </h3>
                        <p className="text-lg md:text-2xl">
                            lihat pertanyaan serupa
                        </p>
                    </div>
                    <div className="flex justify-around flex-wrap">
                        <div className="w-auto">
                            <div
                                className="accordion mt-2 md:mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-[290px] md:w-[530px] border border-gray-200">
                                    <h2
                                        className="accordion-header mb-0"
                                        id="headingTwo"
                                    >
                                        <button
                                            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsewhat"
                                            aria-expanded="false"
                                            aria-controls="collapsewhat"
                                        >
                                            <p className="font-bold">
                                                Apa itu DreamIT
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsewhat"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body text-black text-left py-4 px-5">
                                            <strong>
                                                This is the second item's
                                                accordion body.
                                            </strong>{" "}
                                            It is hidden by default, until the
                                            collapse plugin adds the appropriate
                                            classes that we use to style each
                                            element. These classes control the
                                            overall appearance, as well as the
                                            showing and hiding via CSS
                                            transitions. You can modify any of
                                            this with custom CSS or overriding
                                            our default variables. It's also
                                            worth noting that just about any
                                            HTML can go within the{" "}
                                            <code>.accordion-body</code>, though
                                            the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="accordion mt-2 md:mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-[290px] md:w-[530px] border border-gray-200">
                                    <h2
                                        className="accordion-header mb-0"
                                        id="headingTwo"
                                    >
                                        <button
                                            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsehosting"
                                            aria-expanded="false"
                                            aria-controls="collapsehosting"
                                        >
                                            <p className="font-bold">
                                                Apa itu DreamIT
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsehosting"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body text-black text-left py-4 px-5">
                                            <strong>
                                                This is the second item's
                                                accordion body.
                                            </strong>{" "}
                                            It is hidden by default, until the
                                            collapse plugin adds the appropriate
                                            classes that we use to style each
                                            element. These classes control the
                                            overall appearance, as well as the
                                            showing and hiding via CSS
                                            transitions. You can modify any of
                                            this with custom CSS or overriding
                                            our default variables. It's also
                                            worth noting that just about any
                                            HTML can go within the{" "}
                                            <code>.accordion-body</code>, though
                                            the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div
                                className="accordion mt-2 md:mt-8"
                                id="accordionExample1"
                            >
                                <div className="accordion-item bg-white w-[290px] md:w-[530px] border border-gray-200">
                                    <h2
                                        className="accordion-header mb-0"
                                        id="headingTwo"
                                    >
                                        <button
                                            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseporto"
                                            aria-expanded="false"
                                            aria-controls="collapseporto"
                                        >
                                            <p className="font-bold">
                                                Apa itu DreamIT
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseporto"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body text-black text-left py-4 px-5">
                                            <strong>
                                                This is the second item's
                                                accordion body.
                                            </strong>{" "}
                                            It is hidden by default, until the
                                            collapse plugin adds the appropriate
                                            classes that we use to style each
                                            element. These classes control the
                                            overall appearance, as well as the
                                            showing and hiding via CSS
                                            transitions. You can modify any of
                                            this with custom CSS or overriding
                                            our default variables. It's also
                                            worth noting that just about any
                                            HTML can go within the{" "}
                                            <code>.accordion-body</code>, though
                                            the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="accordion mt-2 md:mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-[290px] md:w-[530px] border border-gray-200">
                                    <h2
                                        className="accordion-header mb-0"
                                        id="headingTwo"
                                    >
                                        <button
                                            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsefour"
                                            aria-expanded="false"
                                            aria-controls="collapsefour"
                                        >
                                            <p className="font-bold">
                                                Apa itu DreamIT
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsefour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body text-black text-left py-4 px-5">
                                            <strong>
                                                This is the second item's
                                                accordion body.
                                            </strong>{" "}
                                            It is hidden by default, until the
                                            collapse plugin adds the appropriate
                                            classes that we use to style each
                                            element. These classes control the
                                            overall appearance, as well as the
                                            showing and hiding via CSS
                                            transitions. You can modify any of
                                            this with custom CSS or overriding
                                            our default variables. It's also
                                            worth noting that just about any
                                            HTML can go within the{" "}
                                            <code>.accordion-body</code>, though
                                            the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-2/6 justify-center mt-24 mb-10">
                    <div className="flex items-end">
                        <button className="look-other">
                            <p className="font-bold">
                                Lihat lainnya{" "}
                                <Icon
                                    icon="material-symbols:arrow-right-alt-rounded"
                                    inline={true}
                                    style={{ display: "inline-block" }}
                                />
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
