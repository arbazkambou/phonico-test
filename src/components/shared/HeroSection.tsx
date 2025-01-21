import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./HeroSection.module.css";
import Link from "next/link";

interface HeroSectionPropsType {
  underlineText: string;
  title: React.ReactNode;
  description: string;
  btn: {
    title: string;
    href: string;
  };
  imgSrc: string;
}
function HeroSection({ heroData }: { heroData: HeroSectionPropsType }) {
  return (
    <section>
      <Container>
        <Row>
          <Col xl={6} className="mb-5">
            <div className="d-flex flex-column gap-3 mt-5">
              <div>
                <p className="font16 fontWeight300">{heroData.underlineText}</p>
                <Image
                  src={"/images/blueLine.svg"}
                  width={210}
                  height={4}
                  alt="line"
                  className={`${styles.line}`}
                />
                <h1
                  className="font50 fontWeight500 text-capitalize "
                  style={{ marginTop: "-8px" }}
                >
                  {heroData.title}
                </h1>
              </div>

              <p className="font20 fontWeight300">{heroData.description}</p>

              <div className="d-flex align-items-center">
                <Link
                  className="myButton myButtonColored textWhite fontWeight500"
                  href={heroData.btn.href}
                >
                  {heroData.btn.title}
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex justify-content-end">
            <div className={`position-relative ${styles.heroImg} ms-0 ms-md-5`}>
              <Image
                src={heroData.imgSrc}
                fill
                style={{ objectFit: "contain" }}
                alt="Phonico is here to connect you to the world"
                loading="eager"
                priority={true}
                quality={85}
              />
            </div>

            {/* <div className={`${styles.heroImg}`}></div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;

// <section>
// <Container>
//   <Row>
//     <Col xl={6} className="mb-5">
//       <div className="d-flex flex-column gap-3 mt-5">
//         <div>
//           <p className="font16 fontWeight300">
//             USA&apos;s Most Affordable 5G eSIM Solution
//           </p>
//           <Image
//             src={"/images/blueLine.svg"}
//             width={210}
//             height={4}
//             alt="line"
//             className={`${styles.line}`}
//           />
//           <h1
//             className="font50 fontWeight500 text-capitalize "
//             style={{ marginTop: "-8px" }}
//           >
//             <span className="primaryColor">Phonico</span> is here to
//             connect you to the world
//           </h1>
//         </div>

//         <p className="font20 fontWeight300">
//           Our main goal is to help our customer and partners accelerate
//           development and excelerate deployment of their services.
//         </p>

//         <div>
//           <button className="myButton myButtonColored textWhite fontWeight500">
//             Find your plan
//           </button>
//         </div>
//       </div>
//     </Col>
//     <Col xl={6} className="d-flex justify-content-end">
//       <div className={`position-relative ${styles.heroImg} ms-0 ms-md-5`}>
//         <Image
//           src={"/images/femaleHeroImg.png"}
//           fill
//           style={{ objectFit: "contain" }}
//           alt="Phonico is here to connect you to the world"
//         />
//       </div>
//     </Col>
//   </Row>
// </Container>
// </section>
