import React, { useState } from "react";
import "../../../../assets/style.css";
import illustrasi1 from "../../../../assets/img/illustrasi_1.svg";
import illustrasi2 from "../../../../assets/img/illustrasi_2.svg";
import { Icon } from "@iconify/react";
import "tw-elements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function dashboard() {
    return (
        <div>
            {/* jumbotron */}
            <section className="background-1">
                <div className="md:h-screen pt-10 md:flex md:justify-between mx-12">
                    <img
                        src={illustrasi1}
                        alt="Illustrasi"
                        className="md:w-5/12 pl-10"
                    />
                    <div className="flex md:items-center">
                        <div className="pr-10">
                            <h2 className="md:text-right text-white">
                                Buat Portofolio Onlinemu <br /> Tanpa Ribet
                            </h2>
                            <p className="md:text-right text-white">
                                Ayo Coba Sekarang
                            </p>
                            <button className="md:ml-20 bg-amber-400 border-inherit text-white shadow-lg duration-500 px-8 py-2 mx-3 hover:text-black rounded border-white">
                                Pesan
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Steps */}
            <section className="h-screen flex items-center justify-center">
                <div>
                    <div className="text-center">
                        <h2 className="text-white">
                            5 Langkah Mudah Untuk Membuat Wesbitemu
                        </h2>
                        <p className="text-white">Ikuti langkahnya</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="hidden md:inline-block">
                            <div className="my-16">
                                <div className="flex justify-center">
                                    <div className="text-center">
                                        <div className="pilih_design1"></div>
                                        <p className="text-white">
                                            Pilih Desain
                                        </p>
                                    </div>
                                    <div className="flex items-start py-16">
                                        <div className="line_steps"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="isi_folmulir"></div>
                                        <p className="text-white">
                                            Isi Folmulir
                                        </p>
                                    </div>
                                    <div className="flex items-start py-16">
                                        <div className="line_steps"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="pembayaran"></div>
                                        <p className="text-white">Pembayaran</p>
                                    </div>
                                    <div className="flex items-start py-16">
                                        <div className="line_steps"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="jam"></div>
                                        <p className="text-white">
                                            Proses <br /> 1x24 Jam
                                        </p>
                                    </div>
                                    <div className="flex items-start py-16">
                                        <div className="line_steps"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="selesai"></div>
                                        <p className="text-white">Selesai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pilih Desain */}
            <section id="pilih_desain" className="h-screen mb-16">
                <div className="text-center text-white md:text-right pt-24 pb-5 mx-24 ">
                    <h3>Pilih Desain Sesuai Kebutuhan</h3>
                    <p>Pilih Desainmu</p>
                </div>
                <div className="flex items-center justify-around">
                    <img
                        src={illustrasi2}
                        alt="illustrasi"
                        style={{ width: "500px" }}
                    />
                    <div className="md:mr-10">
                        <div className="flex items-center justify-center">
                            <div className="text-white text-2xl text-center">
                                <div className="desain_pilihan"></div>
                                Portofolio
                            </div>
                            <div className="text-white text-2xl text-center">
                                <div className="desain_pilihan"></div>
                                Online Shop
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-white text-2xl text-center">
                                <div className="desain_pilihan"></div>
                                Bio Social Media
                            </div>
                            <div className="text-white text-2xl text-center">
                                <div className="more_desain flex text-black items-center justify-around">
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
                className="h-screen flex justify-center items-center"
            >
                <div className="mx-24">
                    <div className="mb-10 text-white">
                        <h1 className="text-white">
                            Dapatkan Fasilitas Terbaik Kami
                        </h1>
                        <p>Pilih Paket</p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <div className="flex justify-between w-full">
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
                                <p className="flex items-center pl-3">
                                    Free Template
                                </p>
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
                                <p className="flex items-center pl-3">
                                    Custom Desain
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between">
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
                                <p className="flex items-center pl-3">
                                    1 GB Web Hosting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimoni */}
            <section id="testimoni" className="h-screen">
                <div className="flex flex-col items-center pt-32 mb-20 justify-center">
                    <h3 className="text-white">
                        Bagaimana Pendapat Mereka Tentang Kami
                    </h3>
                    <p className="text-white">Lihat testimoni</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div className="flex justify-end items-center">
                                    <p style={{ fontSize: "18px" }}>Anonymus</p>
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
            <section id="qna" className="h-screen pt-24">
                <div className="flex flex-col text-white text-right">
                    <div className="mb-10 mx-24">
                        <h3>Pertanyaan Umum</h3>
                        <p>lihat pertanyaan serupa</p>
                    </div>
                    <div className="flex justify-around">
                        <div className="">
                            <div
                                className="accordion mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-accordion border border-gray-200">
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
                                className="accordion mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-accordion border border-gray-200">
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
                                className="accordion mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-accordion border border-gray-200">
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
                                className="accordion mt-8"
                                id="accordionExample"
                            >
                                <div className="accordion-item bg-white w-accordion border border-gray-200">
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
                <div className="flex h-2/6 justify-center">
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
