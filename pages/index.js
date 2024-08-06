import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Img from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import moment from "moment-timezone";



const useAudio = (url) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);


  const toggle = () => setPlaying(!playing);




  useEffect(() => {
    const toggleMusic = async () =>
      playing ? await audio.play() : await audio.pause();

    if (audio) {
      toggleMusic();
    }
  }, [playing, audio]);

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio(url));
    }
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false));
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", () => setPlaying(false));
        setAudio(null);
      }
    };
  }, [audio, url]);

  return [playing, toggle];
};



async function submitForm(e, params, setName = null) {
  e.preventDefault();

  if (params && params.constructor === Object) {
    if (!Boolean(params.name)) {
      alert("Harap isi nama");
      return false;
    }
    const res = await fetch(`/api/attend`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (res.ok) {
      setName("");
      alert("Terima kasih telah mengisi " + params.name || null);
    }

    if (res.status === 429) {
      alert("Maaf, kamu sudah mengisi nama");
    }

    return true;
  }



}



export default function Home() {
  const [playing, toggle] = useAudio("/music/wedding.mp3");
  const [name, setName] = useState("");

  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const modalData = {
    dressCode: {
      title: "Dress Code",
      content: "Formal attire is required.",
    },
    tipsNotas: {
      title: "Tips y Notas",
      content: "Be sure to arrive on time and enjoy the celebration.",
    },
  };



  const startDatetime = moment("2021-10-10 13:00").tz("Asia/Jakarta");
  const endDatetime = startDatetime.clone().add(4, "hours");
  const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();

  const [event, setEvent] = useState({
    title: "Acara Nikah Rianti & Afif",
    description:
      "Event acara resepsi nikah rianti & afif yang diselenggarakan pada tanggal 10 oktober 2021",
    location: "Jl. Ploso IX-A no. 10, Surabaya, Jawa Timur",
    startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
    endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
    duration,
  });

  const Button = ({ children, onClick }) => (
    <a className="btn btn-default btn-sm" onClick={onClick}>
      {children}
    </a>
  );
  const Dropdown = ({ children }) => (
    <ul className="dropdown animated-fast fadeInUpMenu">{children}</ul>
  );
  const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);




  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Boda &mdash; Mika & Rami</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rianti & Afif Wedding Website" />
        <meta
          name="keywords"
          content="afif, rianti, wedding, nikah, kawin, nikahan, afif abdillah jusuf, rianti dwi lestari, akad, akad nikah, landing page, resepsi, resepsi nikah"
        />
        <meta name="author" content="afif.dev" />

      </Head>
      {/* modernizr */}
      <Script
        strategy="beforeInteractive"
        src="/js/modernizr-2.6.2.min.js"
      ></Script>
      {/* // jQuery */}
      <Script strategy="beforeInteractive" src="/js/jquery.min.js"></Script>
      {/* // jQuery Easing */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.easing.1.3.js"
      ></Script>
      {/* // Bootstrap */}
      <Script strategy="beforeInteractive" src="/js/bootstrap.min.js"></Script>
      {/* // Waypoints */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.waypoints.min.js"
      ></Script>
      {/* // Carousel */}
      <Script
        strategy="beforeInteractive"
        src="/js/owl.carousel.min.js"
      ></Script>
      {/* // countTo */}
      <Script strategy="beforeInteractive" src="/js/jquery.countTo.js"></Script>

      {/* // Stellar */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.stellar.min.js"
      ></Script>
      {/* // Magnific Popup */}
      <Script
        strategy="beforeInteractive"
        src="/js/jquery.magnific-popup.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/magnific-popup-options.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/js/simplyCountdown.js"
      ></Script>
      {/* // Main */}
      <Script strategy="beforeInteractive" src="/js/main.js"></Script>
      <Script id="my-script">
        {`
        var d = new Date("2024-10-10");

        // default example
        simplyCountdown('.simply-countdown-one', {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
        });

        //jQuery example
        $('#simply-countdown-losange').simplyCountdown({
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate(),
            enableUtc: false
        });`}
      </Script>

      <div className="fh5co-loader" />

      <div id="page">
        <header
          id="wedding-header"
          className="wedding-cover"
          role="banner"
          data-stellar-background-ratio="0.5"
        >
          <div className="wedding-overlay"></div>

          <div className="wedding-container">
            <div className="wedding-row">
              <div className="wedding-col text-center">
                <div className="display-table">
                  <div className="display-table-cell animate-box" >
                    <h1 className="wedding-title">Mika & Rami</h1>
                    <div className="divider"></div>

                    <h2 className="wedding-subtitle">
                      "Como llama divina es el fuego ardiente del amor. Ni las muchas aguas pueden apagarlo, ni los ríos pueden extinguirlo" Cantares 8:6
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="icon-left">
            <img src="/images/iconright.png" alt="Left Icon" />
          </div>
          <div className="icon-right">
            <img src="/images/iconleft.png" alt="Right Icon" />
          </div>
        </header>



        <div className="invitation-container">
          <div className="logo"></div>
          <div className="header">
            <h1>Ceremonia y Fiesta</h1>
          </div>
          <div className="details">
            <div className="detail">
              <h2>Día</h2>
              <p>Sábado 4 de noviembre de 2023<br />20:15 hs</p>
              <button>AGENDAR</button>
            </div>
            <div className="detail">
              <h2>Lugar</h2>
              <p>Salón María Luisa</p>
              <button>CONFIRMAR ASISTENCIA</button>
            </div>
            <div className="detail">
              <h2>Dirección</h2>
              <p>Av. Bartolomé de Castro 2100, Catamarca</p>
              <button className="inactive">¿CÓMO LLEGAR?</button>
            </div>
            <div className="detail">
              <h2>Tarjeta</h2>
              <p>Conoce todos los detalles sobre la tarjeta</p>
              <button>VER MÁS</button>
            </div>
          </div>
        </div>

        <div className="party-details-container">
          <h1>Fiesta</h1>
          <p>Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.</p>
          <div className="party-details-cards">
            <div className="card">
              <div className="icon music-icon"></div>
              <h2>Música</h2>
              <p>¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?</p>
              <button>SUGERIR CANCIÓN</button>
            </div>
            <div className="card">
              <div className="icon dress-code-icon"></div>
              <h2>Dress Code</h2>
              <p>Una orientación para tu vestuario</p>
              <button className="button" onClick={() => openModal(modalData.dressCode)}>VER MÁS</button>
            </div>
            <div className="card">
              <div className="icon tips-icon"></div>
              <h2>Tips y Notas</h2>
              <p>Información adicional para tener en cuenta</p>
              <button onClick={() => openModal(modalData.tipsNotas)}>+ INFO</button>
            </div>
          </div>
        </div>

        {modalContent && (
          <div className="modal fade in" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={closeModal}>
                    <span>&times;</span>
                  </button>
                  <h4 className="modal-title">{modalContent.title}</h4>
                </div>
                <div className="modal-body">
                  <p>{modalContent.content}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}



        <div className="love-portraits-container">
          <h1>Retratos de Nuestro Amor</h1>
          <p>Un minuto, un segundo, un instante que queda en la eternidad</p>
          <div className="photos">
            <div className="photo">
              <img src="images\img1.jpeg" alt="Foto 1" />
            </div>
            <div className="photo">
              <img src="images\bg2.jpeg" alt="Foto 2" />
            </div>
            <div className="photo">
              <img src="/images/img3.jpeg" alt="Foto 3" />
            </div>
          </div>
        </div>



        {/* Gallery Coming Soon (Ngenteni Post Wedding disik) */}
        <div id="fh5co-gallery" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Confirma tu asistencia!</h2>
                <p>Coming Soon!</p>
                <p>(Ditunggu ya, kita belum foto post weddingnya)</p>
              </div>
            </div>

          </div>
        </div>




        {/* footer */}
        <footer id="fh5co-footer" role="contentinfo">
          <div className="container">
            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">
                    &copy; {new Date().getFullYear()} {""}
                    <Link href="https://afif.dev" passHref>
                      <a>afif.dev</a>
                    </Link>
                    . All Rights Reserved.
                  </small>
                  <small className="block">
                    Thanks for Design{" "}
                    <Link href="https://freehtml5.co/" passHref>
                      <a target="_blank" rel="noreferrer">
                        FREEHTML5.co
                      </a>
                    </Link>
                  </small>
                  <small className="block">
                    Thanks for Music{" "}
                    <Link href="https://youtu.be/_pR_cW4bDeE" passHref>
                      <a target="_blank" rel="noreferrer">
                        Ungu Feat. Andien - Saat Bahagia | VC Trinity
                      </a>
                    </Link>
                  </small>
                  <small>
                    Thanks for Backgrounds{" "}
                    <Link
                      href="https://www.freepik.com/photos/background"
                      passHref
                    >
                      <a target="_blank" rel="noreferrer">
                        Background photo created by jcomp - www.freepik.com
                      </a>
                    </Link>
                  </small>
                </p>
                <ul className="fh5co-social-icons">
                  <li>
                    <Link href="https://twitter.com/bungambohlah" passHref>
                      <a target="_blank" rel="noreferrer">
                        <i className="icon-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagr.am/afif.abdillah.j" passHref>
                      <a target="_blank" rel="noreferrer">
                        <i className="icon-instagram"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://fb.me/afifabdillahj"
                      passHref
                    >
                      <a target="_blank" rel="noreferrer">
                        <i className="icon-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com/in/afifjusuf/" passHref>
                      <a target="_blank" rel="noreferrer">
                        <i className="icon-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtube.com/@afifdev" passHref>
                      <a target="_blank" rel="noreferrer">
                        <i className="icon-youtube"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://afif.dev" passHref>
                      <a>
                        <i className="icon-globe2"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* go to top button */}
        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="icon-arrow-up"></i>
          </a>
        </div>

        {/* music button */}
        <div className="musicbtn">
          <a onClick={toggle}>
            {playing ? (
              <i className="icon-pause"></i>
            ) : (
              <i className="icon-play"></i>
            )}
          </a>
        </div>
      </div >
    </>
  );
}
