import Head from "next/head";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import { QRCodeCanvas } from "qrcode.react";
import { BASE_URL } from "../../lib/constants";
import certificateStyles from "./certificate.module.css";

export default function CertificateLayout({ allData, preview, children, align }) {
  const [data, ...rest] = allData;
  const locations = Array.from(new Set(allData.map(d => d['filename'].split('Save ')[1].split(' -')[0])));
  const dates = Array.from(new Set(allData.map(d => d['Timestamp'].slice(0, 10))));
  const router = useRouter();
  const handleDownload = () => {
    document.querySelector('#co').style.width = '50%';
    document.querySelector('#fn').style.paddingBottom = '2em';
    const input = document.getElementById('main');
    html2canvas(input, { scale: 5, useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF("l", "mm", "a4");
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', -60, -2, width + 120, height - 10);
        doc.save("certificate - tineb.pdf");
      });
    document.querySelector('#co').style.width = '550px';
    document.querySelector('#fn').style.paddingBottom = '0';
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="There Is No Earth B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is a digitally signed certificate, that can be authenticated by scanning the QR code given" />
        <meta name="keywords" content="LOR, efficiency, ethics" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Noto%20Serif%3A400%2C700%2C400italic%7CPlayfair%20Display%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
        <link rel="icon" href="https://thereisno.earth/b/TINEB_LOGO.jpeg" type="image/x-icon" />
        <title>{data['Full name']}</title>
        <meta property="og:title" content={data['Full name']} />
        <meta property="og:description" content="This is a digitally signed certificate, that can be authenticated by scanning the QR code given" />
        <meta property="og:image" content="http://thereisnoearthb.org/shravya/Social%20Preview%20of%20Links.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet" />
      </Head>

      <main id="main" className={certificateStyles["main"]}>
        <div id="page" className="hfeed site">
          <header>
            <h1 className={certificateStyles["title"] + " playfair"}>
              <a href="https://thereisno.earth/b" rel="home">
                There Is No Earth B
              </a>
            </h1>
          </header>
        </div>
        <div id="co" className={certificateStyles["container"]}>
          <div id="primary" className="content-area">
            <article className="cert-main">
              <header className={certificateStyles["header"]}>
                <h2 className={certificateStyles["header-title"] + " playfair"}>
                  <b>Certificate of Appreciation</b>
                </h2>
              </header>

              <div className={certificateStyles["cert-content-actual"]}>
                <p className="noto pb-3 text-center">This is presesented to</p>
                <h2 className={certificateStyles["full-name"] + " playfair"}>
                  <em className="playfair"><strong>{data['Full name']}</strong></em>
                </h2>
                <p className="noto pb-3 text-center">
                  <em>
                    for participating in the Cleanup cum Awareness drive held in <strong>{locations.map(l => l)}</strong> on {dates.map((d, i) => dates.length > 1 ? i === dates.length - 1 ? ' and ' + d : d + ', ' : d)}.
                  </em>
                </p>
                <p className="noto pb-3 flex justify-between"><em>Sincerely,</em><em>Place: New Delhi</em></p>
                <p className="noto pb-3 flex justify-between"><em>There Is No Earth B</em> <em>Date: {allData[allData.length - 1]['Timestamp'].slice(0, 10)}</em></p>

                <QRCodeCanvas value={BASE_URL + router.asPath} level='H' size={128} className={certificateStyles["qr-code"]} />

                <hr />
                <p className="noto pt-3 text-center" id="fn" style={{ fontSize: 'small' }}>This is a digitally verifiable certificate, that can be authenticated by scanning the QR code given above.</p>
              </div>
            </article>
          </div>
        </div >
      </main >

      <footer className={certificateStyles["footer"]}>
        <div id="dwb" className="w-100 m-auto text-center mt-0 pb-3 mb-5">
          <button onClick={handleDownload} className="bg-transparent py-2 px-4 border border-black rounded mt-3">
            Download Certificate
          </button>
        </div>

        <div className={certificateStyles["socials"]}>
          <a className="iconic" href="https://t.me/thereisnoearthb" target="_blank"><img src="https://thereisnoearthb.com/icons/telegram.svg" alt="Telegram icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="https://youtube.com/thereisnoearthb" target="_blank"><img src="https://thereisnoearthb.com/icons/youtube.svg" alt="YouTube icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="https://www.facebook.com/thereisnoearthb" target="_blank"><img src="https://thereisnoearthb.com/icons/facebook.svg" alt="Facebook icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="https://instagram.com/thereisnoearthb" target="_blank"><img src="https://thereisnoearthb.com/icons/instagram.svg" alt="Instagram icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="https://twitter.com/thereisnoearthb" target="_blank"><img src="https://thereisnoearthb.com/icons/twitter.svg" alt="Twitter icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="mailto:hope@thereisnoearthb.com" target="_blank"><img src="https://thereisnoearthb.com/icons/envelope.svg" alt="Email icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="https://www.pinterest.com/thereisnoearthb/" target="_blank"><img src="https://thereisnoearthb.com/icons/pinterest.svg" alt="Pinterest icon" width="35" height="35" /></a>&nbsp;&nbsp;
          <a className="iconic" href="https://www.linkedin.com/company/thereisnoearthb/" target="_blank"><img src="https://thereisnoearthb.com/icons/linkedin.svg" alt="Linkedin icon" width="35" height="35" /></a>&nbsp;&nbsp;
        </div>

        <div className="c-footer__copyright-text">
          © There Is No Earth B Environment Foundation
        </div>
      </footer >
    </>
  );
};
