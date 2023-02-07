import React from "react";
import { Icon } from "@iconify/react";
export default function footer() {
    const styleh3 = {
        fontSize: 23,
    };
    const stylep = {
        fontSize: 12,
        lineHeight: 2,
    };
    return (
        <div style={{ background: "#0081C9" }}>
            <footer className="h-3/6 pt-10 pb-20 lg:mx-32 text-white">
                <div className="flex flex-col justify-between flex-warp">
                    <div className="lg:w-1/3 px-10">
                        <h3 style={styleh3}>Tentang Kami</h3>
                        <p className="text-justify" style={stylep}>
                            DreamIT merupakan platform penyedia jasa pembuatan
                            website yang memberikan layanan mulai dari desain
                            website, developing hingga hosting. Pilih desain
                            website yang kamu inginkan maka kami akan wujudkan
                            website impianmu.
                        </p>
                    </div>
                    <div className="flex flex-col lg:w-1/3 px-10">
                        <h3 style={styleh3}>Tautan Langsung</h3>
                        <a href="#" style={stylep}>
                            Home
                        </a>
                        <a href="#" style={stylep}>
                            Desain
                        </a>
                        <a href="#" style={stylep}>
                            Fasilitas
                        </a>
                        <a href="#" style={stylep}>
                            Testimoni
                        </a>
                    </div>
                    <div className="lg:w-1/3 px-10">
                        <h3 style={styleh3}>Kontak Kami</h3>
                        <p style={stylep}>
                            <span>
                                <Icon
                                    icon="mdi:map-marker"
                                    color="white"
                                    inline={true}
                                    style={{ display: "inline-block" }}
                                />
                            </span>
                            &ensp;Purwokerto, Banyumas, Jawa Tengah
                        </p>
                        <p style={stylep}>
                            <span>
                                <Icon
                                    icon="ic:baseline-local-phone"
                                    color="white"
                                    inline={true}
                                    style={{ display: "inline-block" }}
                                />
                            </span>
                            &ensp;+6281 2345 6789
                        </p>
                        <p style={stylep}>
                            <span>
                                <Icon
                                    icon="ic:baseline-email"
                                    color="white"
                                    inline={true}
                                    style={{ display: "inline-block" }}
                                />
                            </span>
                            &ensp;engineering.dreamit@gmail.com
                        </p>
                    </div>
                </div>
                <hr className="mt-8" />
                <div className="copyright">
                    Copyright &copy; 2023.
                    <strong>
                        <span>DreamIT </span>
                    </strong>
                    All Right Reserved | This template is made with by DreamIT
                </div>
            </footer>
        </div>
    );
}
