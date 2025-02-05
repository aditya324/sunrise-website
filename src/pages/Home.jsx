import React from 'react';
import herosection from "../assets/images/herosection.jpg";
import Card from '../components/Card';

const Home = () => {
  return (
    <>


      {/* No margin-top needed on the container in this approach */}
      <div className="relative flex justify-center">
      <div className="relative w-[1321px] h-[648px] flex justify-center bg-white rounded-[72px] [background:linear-gradient(180deg,rgba(88.19,88.19,88.19,0.17)_0%,rgba(34,34,34,0.47)_100%)]">
      <img
        className="absolute w-[236px] h-[60px] top-[35px] left-[490px] object-cover"
        alt="Sunrise logo new"
        src="https://c.animaapp.com/r5wc12GR/img/sunrise-logo-new-white-5@2x.png"
      />

      <div className="absolute w-[274px] h-[60px] top-[35px] left-[996px]">
        <div className="flex w-[180px] items-center justify-center gap-2.5 p-5 left-0 bg-[#ffa314] rounded-[42px] h-[60px] absolute top-0">
          <div className="relative w-fit mt-[-5.97px] mb-[-4.03px] ml-[-1.50px] mr-[-1.50px] [font-family:'Quicksand',Helvetica] font-bold text-[#44433f] text-2xl tracking-[0] leading-[normal]">
            Get In Touch
          </div>
        </div>

        <img
          className="w-[84px] left-[190px] h-[60px] absolute top-0"
          alt="Frame"
          src="https://c.animaapp.com/r5wc12GR/img/frame-1000001855.svg"
        />
      </div>

      <img
        className="absolute w-[43px] h-[42px] top-[38px] left-[52px]"
        alt="Group"
        src="https://c.animaapp.com/r5wc12GR/img/group@2x.png"
      />

      <img
        className="absolute w-[42px] h-[42px] top-[38px] left-[115px]"
        alt="Fi"
        src="https://c.animaapp.com/r5wc12GR/img/fi-3670274.svg"
      />

      <img
        className="absolute w-[42px] h-[42px] top-[38px] left-[177px]"
        alt="Subtract"
        src="https://c.animaapp.com/r5wc12GR/img/subtract.svg"
      />
    </div>
        <div className="flex justify-center">
          {/* <img
            src={herosection}
            alt="Hero Section"
            className="max-w-7xl h-[648.39px] absolute -bottom-[580px]" 
           
          /> */}
          hero section
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 p-4">
      <Card color="#5E4FA2" rotate="-19deg" number="8" text="years" />
      <Card color="#D95D39" rotate="13deg" number="250" text="clients" />
      <Card color="#008C76" rotate="-19deg" number="10m" text="impressions" />
      <Card color="#FFB400" rotate="13deg" number="400" text="projects" />
    </div>
    </>
  );
};

export default Home;






{/* <div className="bg-[#f7f4ea] flex flex-row justify-center w-full">
      <div className="bg-[#f7f4ea] overflow-hidden w-[1440px] h-[7948px] relative">
        <div className="absolute w-[1482px] h-[8639px] top-[-2767px] -left-0.5">
          <div className="absolute w-[1323px] h-[408px] top-[7488px] left-[55px]">
            <div className="absolute top-0 left-0.5 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-8xl tracking-[0] leading-[normal]">
              Clients
            </div>

            <div className="absolute w-[106px] h-[107px] top-[143px] left-0 bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[300px] left-0 bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[143px] left-[202px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[300px] left-[202px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[143px] left-[405px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[300px] left-[405px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[107px] h-[107px] top-[143px] left-[607px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[107px] h-[107px] top-[300px] left-[607px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[143px] left-[810px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[300px] left-[810px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[143px] left-[1013px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[300px] left-[1013px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[143px] left-[1215px] bg-[#eeeae5] rounded-[71.66px]" />

            <div className="absolute w-[106px] h-[107px] top-[300px] left-[1215px] bg-[#eeeae5] rounded-[71.66px]" />
          </div>

          <div className="absolute w-[296px] h-[302px] top-[3636px] left-[414px] bg-[#d95d39] rounded-[42px] rotate-[13.00deg]">
            <div className="relative w-[258px] h-[189px] top-[57px] left-5">
              <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[108.2px] tracking-[0] leading-[normal]">
                250+
              </div>

              <div className="absolute top-[137px] left-[67px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[41.6px] tracking-[0] leading-[normal]">
                clients
              </div>
            </div>
          </div>

          <div className="absolute w-[296px] h-[302px] top-[3635px] left-[89px] rotate-[-19.00deg]">
            <div className="relative h-[302px] rounded-[42px]">
              <div className="absolute w-[296px] h-[302px] top-0 left-0 bg-[#5e4fa2] rounded-[42px]" />

              <div className="absolute w-[126px] h-[198px] top-[53px] left-[86px]">
                <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[108.2px] tracking-[0] leading-[normal]">
                  8+
                </div>

                <div className="absolute top-[146px] left-2.5 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[41.6px] tracking-[0] leading-[normal]">
                  Years
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[296px] h-[302px] top-[3626px] left-[734px] rotate-[-19.00deg]">
            <div className="relative h-[302px] rounded-[42px]">
              <div className="absolute w-[296px] h-[302px] top-0 left-0 bg-[#008c76] rounded-[42px]" />

              <div className="absolute w-[275px] h-[198px] top-[52px] left-[13px]">
                <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[108.2px] tracking-[0] leading-[normal]">
                  10m+
                </div>

                <div className="absolute top-[146px] left-[26px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[41.6px] tracking-[0] leading-[normal]">
                  Impression
                </div>
              </div>
            </div>
          </div>

          <p className="absolute top-[3997px] left-[315px] [font-family:'Quicksand-Medium',Helvetica] font-medium text-[#44433f] text-5xl text-center tracking-[0] leading-[normal]">
            Facts, Figures, and Fabulous Results
          </p>

          <div className="absolute w-[1461px] h-[3256px] top-[4157px] left-0">
            <div className="absolute w-[1325px] h-[1763px] top-[1493px] left-[59px] bg-[#ffa314] rounded-[72px]">
              <img
                className="absolute w-[550px] h-[600px] top-[228px] left-[57px] object-cover"
                alt="Image"
                src={image5}
              />

              <img
                className="absolute w-[550px] h-[600px] top-[975px] left-[57px]"
                alt="Image"
                src={image6}
              />

              <img
                className="absolute w-[550px] h-[600px] top-[346px] left-[720px] object-cover"
                alt="Image"
                src={image7}
              />

              <div className="absolute w-[550px] h-[600px] top-[1113px] left-[720px] rounded-[41.61px] border-2 border-solid border-[#44433f]">
                <div className="absolute w-[392px] top-4 left-[49px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-8xl tracking-[0] leading-[normal]">
                  More case study
                </div>

                <img
                  className="absolute w-[94px] h-[94px] top-[453px] left-[400px]"
                  alt="Arrow"
                  src={arrow15}
                />
              </div>

              <div className="absolute w-[1221px] h-[120px] top-[26px] left-[51px]">
                <div className="absolute w-[1113px] top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-8xl tracking-[0] leading-[normal]">
                  case study
                </div>

                <div className="flex flex-col w-[279px] h-[68px] items-center justify-center gap-2.5 p-5 absolute top-6 left-[942px] bg-[#f7f4ea] rounded-[42px]">
                  <div className="relative w-[242.23px] h-[30px] mt-[-1.00px] mb-[-1.00px] ml-[-0.61px] mr-[-2.61px]">
                    <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                      More case study
                    </div>

                    <img
                      className="absolute w-[43px] h-[26px] top-[3px] left-[199px]"
                      alt="Arrow"
                      src={arrow143}
                    />
                  </div>
                </div>
              </div>

              <p className="absolute top-[148px] left-[55px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                Success Stories That Speak for Themselves
              </p>

              <p className="absolute w-[543px] top-[838px] left-[58px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  Helped
                </span>

                <span className="[font-family:'Quicksand-SemiBold',Helvetica] font-semibold">
                  {" "}
                  Shivamogga MP Elections{" "}
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  hit a <br />
                  historic{" "}
                </span>

                <span className="[font-family:'Quicksand-SemiBold',Helvetica] font-semibold">
                  76.43%{" "}
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  voter turnout with creative social campaigns
                </span>
              </p>

              <p className="absolute w-[550px] top-[956px] left-[720px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  Supercharged{" "}
                </span>

                <span className="[font-family:'Quicksand-SemiBold',Helvetica] font-semibold">
                  CakeZone’s
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  {" "}
                  social media game, growing{" "}
                </span>

                <span className="[font-family:'Quicksand-SemiBold',Helvetica] font-semibold">
                  engagement{" "}
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  and{" "}
                </span>

                <span className="[font-family:'Quicksand-SemiBold',Helvetica] font-semibold">
                  loyalty
                </span>
              </p>

              <p className="absolute w-[540px] top-[1585px] left-[58px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  Expanded
                </span>

                <span className="[font-family:'Quicksand-Medium',Helvetica] font-medium">
                  {" "}
                  Sarji Hospital’s
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl tracking-[0]">
                  {" "}
                  online presence, improving patient connections
                </span>
              </p>
            </div>

            <img
              className="w-[1449px] top-[5971px] left-[720px] absolute h-px"
              alt="Line"
              src={line7}
            />

            <img
              className="w-[1449px] top-[6156px] left-[720px] absolute h-px"
              alt="Line"
              src={line8}
            />

            <img
              className="w-[1449px] top-[6341px] left-[720px] absolute h-px"
              alt="Line"
              src={line9}
            />

            <div className="flex flex-col w-[251px] h-[68px] items-center justify-center gap-2.5 p-5 absolute top-0 left-[1133px] bg-[#f7f4ea] rounded-[42px] border-2 border-solid border-[#44433f]">
              <div className="w-[213.23px] mt-[-1.00px] mb-[-1.00px] ml-[-0.11px] mr-[-2.11px] relative h-[30px]">
                <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                  More Service
                </div>

                <img
                  className="absolute w-[43px] h-[26px] top-[3px] left-[170px]"
                  alt="Arrow"
                  src={arrow144}
                />
              </div>
            </div>
          </div>

          <div className="absolute w-[1329px] h-[644px] top-[7995px] left-[61px]">
            <div className="relative w-[1321px] h-[644px] bg-[#ffa314] rounded-[72px]">
              <div className="absolute w-[371px] h-[345px] top-[181px] left-[900px]">
                <img
                  className="absolute w-[371px] h-[343px] top-0 left-0 object-cover"
                  alt="Image"
                  src={image8}
                />

                <div className="absolute w-[370px] h-[345px] top-0 left-0 rounded-[41.61px] [background:linear-gradient(180deg,rgb(68,67,63)_0%,rgba(68,67,63,0)_100%)]" />

                <p className="absolute w-80 top-[259px] left-[9px] [font-family:'Quicksand-SemiBold',Helvetica] font-semibold text-[#f7f4ea] text-[27.7px] tracking-[0] leading-[normal]">
                  Performance Marketing That Actually Works
                </p>
              </div>

              <div className="absolute w-[779px] h-[503px] top-[23px] left-[49px]">
                <div className="absolute w-[779px] h-[503px] top-0 left-0">
                  <img
                    className="absolute w-[371px] h-[343px] top-[158px] left-[408px] object-cover"
                    alt="Image"
                    src={image9}
                  />

                  <div className="absolute w-[371px] h-[345px] top-[158px] left-[408px] rounded-[41.61px] [background:linear-gradient(180deg,rgb(68,67,63)_0%,rgba(68,67,63,0)_100%)]" />

                  <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-8xl tracking-[0] leading-[normal]">
                    Trending Talks <br />
                    Blogs
                  </div>

                  <p className="absolute w-80 top-[417px] left-[442px] [font-family:'Quicksand-SemiBold',Helvetica] font-semibold text-[#f7f4ea] text-[27.7px] tracking-[0] leading-[normal]">
                    How to Make Your Brand Unforgettable
                  </p>
                </div>

                <p className="absolute w-[268px] top-72 left-[7px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
                  Big Ideas Start Here
                  <br />
                  <br />
                  From branding hacks to marketing tips, we’ve got the insider
                  scoop for U
                </p>
              </div>

              <div className="absolute w-[316px] h-[5px] top-[576px] left-[696px]">
                <div className="absolute w-[165px] h-[5px] top-0 left-0 bg-[#f7f4ea] rounded-[41.61px]" />

                <div className="absolute w-[67px] h-[5px] top-0 left-[173px] bg-[#f7f4ea] rounded-[41.61px]" />

                <div className="absolute w-[67px] h-[5px] top-0 left-[248px] bg-[#f7f4ea] rounded-[41.61px]" />
              </div>

              <div className="flex flex-col w-[220px] h-[68px] items-center justify-center gap-2.5 p-5 absolute top-[50px] left-[1050px] bg-[#f7f4ea] rounded-[42px]">
                <div className="w-[180.23px] mt-[-1.00px] mb-[-1.00px] mr-[-1.11px] relative h-[30px]">
                  <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                    More Blogs
                  </div>

                  <img
                    className="absolute w-[43px] h-[26px] top-0.5 left-[137px]"
                    alt="Arrow"
                    src={arrow14}
                  />
                </div>
              </div>

              <div className="absolute w-[33px] h-8 top-[563px] left-[1218px] bg-[#f7f4ea] rounded-[43.03px]">
                <img
                  className="absolute w-[19px] h-[15px] top-2 left-[7px]"
                  alt="Arrow"
                  src={arrow17}
                />
              </div>

              <div className="absolute w-[33px] h-8 top-[563px] left-[457px] bg-[#f7f4ea] rounded-[43.03px]">
                <img
                  className="absolute w-[19px] h-[15px] top-2 left-[7px]"
                  alt="Arrow"
                  src={arrow18}
                />
              </div>
            </div>
          </div>

          <div className="absolute w-[1479px] h-[8203px] top-0 left-[3px]">
            <div className="absolute w-[1325px] h-[212px] top-[4282px] left-14">
              <img
                className="w-[1325px] top-[185px] left-0 object-cover absolute h-px"
                alt="Line"
                src={line2}
              />

              <div className="absolute w-[1113px] top-[66px] left-3.5 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
                Branding
              </div>

              <p className="absolute top-[78px] left-[486px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
                Your brand deserves to stand out.
                <br /> Let’s craft a vibe that sticks
              </p>

              <img
                className="absolute w-52 h-[212px] top-0 left-[1090px] object-cover"
                alt="Image"
                src={image}
              />
            </div>

            <img
              className="w-[1325px] top-[4647px] left-14 object-cover absolute h-px"
              alt="Line"
              src={line3}
            />

            <img
              className="w-[1325px] top-[4827px] left-14 object-cover absolute h-px"
              alt="Line"
              src={line4}
            />

            <img
              className="w-[1325px] top-[5007px] left-14 object-cover absolute h-px"
              alt="Line"
              src={line5}
            />

            <img
              className="w-[1325px] top-[5187px] left-14 object-cover absolute h-px"
              alt="Line"
              src={line6}
            />

            <img
              className="w-[1325px] top-[5367px] left-14 absolute h-px"
              alt="Line"
              src={line10}
            />

            <img
              className="w-[1325px] top-[5547px] left-14 object-cover absolute h-px"
              alt="Line"
              src={line11}
            />

            <div className="top-[4129px] left-14 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-8xl absolute tracking-[0] leading-[normal]">
              Our service
            </div>

            <div className="absolute top-[4497px] left-[70px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
              Digital <br />
              Marketing
            </div>

            <div className="absolute top-[4677px] left-[70px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
              Social Media <br />
              Management
            </div>

            <div className="absolute w-[1113px] h-[120px] top-[4857px] left-[70px]">
              <div className="absolute w-[1113px] top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
                Performance <br />
                Marketing
              </div>

              <p className="absolute w-[520px] top-[43px] left-[472px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
                More leads. More sales. More of what U need to grow
              </p>
            </div>

            <div className="absolute w-[1113px] h-[120px] top-[5037px] left-[70px]">
              <div className="absolute w-[1113px] top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
                SEO &amp; Content
                <br />
                Marketing
              </div>

              <p className="absolute w-[520px] top-[43px] left-[472px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
                Get your business noticed with words that work and strategies
                that win.
              </p>
            </div>

            <div className="absolute top-[5247px] left-[70px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
              OOH Branding
            </div>

            <div className="absolute top-[5427px] left-[70px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-5xl tracking-[0] leading-[normal]">
              IT Development
            </div>

            <p className="absolute top-[4540px] left-[542px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
              Boost your brand’s presence and make <br />
              waves online with smart strategies.
            </p>

            <p className="absolute w-[520px] top-[4720px] left-[542px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
              Keep your audience scrolling and loving what they see
            </p>

            <p className="absolute w-[520px] top-[5260px] left-[542px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
              From billboards to buses, we put your brand in all the right
              places
            </p>

            <p className="absolute w-[520px] top-[5440px] left-[540px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
              Websites, apps, chatbots—we build tech that works as hard as U do
            </p>
          </div>

          <img
            className="absolute w-[1321px] h-[648px] top-[2794px] left-[62px]"
            alt="Mask group"
            src={maskGroup}
          />

          <div className="absolute w-[296px] h-[302px] top-[3643px] left-[1063px] rotate-[13.00deg]">
            <div className="relative h-[302px] rounded-[42px]">
              <div className="absolute w-[296px] h-[302px] top-0 left-0 bg-[#ffb400] rounded-[42px]" />

              <div className="absolute w-[264px] h-[197px] top-[52px] left-[18px]">
                <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[108.2px] tracking-[0] leading-[normal]">
                  400+
                </div>

                <div className="absolute top-[145px] left-[47px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-[41.6px] tracking-[0] leading-[normal]">
                  Projects
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[1321px] h-[648px] top-[2794px] left-[62px] rounded-[72px] [background:linear-gradient(180deg,rgba(88.19,88.19,88.19,0.17)_0%,rgba(34,34,34,0.47)_100%)]">
            <img
              className="absolute w-[236px] h-[60px] top-[35px] left-[490px] object-cover"
              alt="Sunrise logo new"
              src={sunriseLogoNewWhite5}
            />

            <div className="absolute w-[274px] h-[60px] top-[35px] left-[996px]">
              <div className="flex w-[180px] h-[60px] items-center justify-center gap-2.5 p-5 absolute top-0 left-0 bg-[#ffa314] rounded-[42px]">
                <div className="relative w-fit mt-[-5.97px] mb-[-4.03px] ml-[-1.50px] mr-[-1.50px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-2xl tracking-[0] leading-[normal]">
                  Get In Touch
                </div>
              </div>

              <img
                className="absolute w-[84px] h-[60px] top-0 left-[190px]"
                alt="Frame"
                src={frame1000001855}
              />
            </div>

            <img
              className="absolute w-[43px] h-[42px] top-[38px] left-[52px]"
              alt="Group"
              src={group}
            />

            <img
              className="absolute w-[42px] h-[42px] top-[38px] left-[115px]"
              alt="Fi"
              src={fi3670274}
            />

            <img
              className="absolute w-[42px] h-[42px] top-[38px] left-[177px]"
              alt="Subtract"
              src={subtract}
            />
          </div>

          <div className="absolute w-[510px] h-[236px] top-[3314px] left-[815px]">
            <div className="relative h-[236px]">
              <div className="flex w-[468px] h-[221px] items-center justify-around gap-10 px-10 py-5 absolute top-0 left-0 bg-[#44433f] rounded-[72px] border border-solid">
                <p className="relative w-[386px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#fff9f2] text-2xl tracking-[0] leading-[normal]">
                  We’re your creative besties for all things branding, social
                  media, and digital. From brainstorming big ideas to making
                  them a reality,
                  <br />
                  we help your business shine.
                </p>
              </div>

              <div className="absolute w-[109px] h-[109px] top-[127px] left-[401px] bg-[#ffa314] rounded-[54.32px]" />

              <img
                className="absolute w-[47px] h-[47px] top-[158px] left-[432px]"
                alt="Arrow"
                src={arrow6}
              />
            </div>
          </div>

          <div className="absolute top-[3082px] left-[113px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-8xl tracking-[0] leading-[normal]">
            Turning Ideas
          </div>

          <div className="absolute top-[3197px] left-[113px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#fff9f2] text-5xl tracking-[0] leading-[normal]">
            IntoClick-Worthy Magic
          </div>

          <p className="absolute w-[856px] top-[3270px] left-[113px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#fff9f2] text-2xl tracking-[0] leading-[normal]">
            Creativity that clicks. Strategy that works. Results that wow
          </p>

          <Frame
            arrow="arrow-14-5.svg"
            className="!border-[#f7f4ea] !h-[55px] !border-2 !border-solid !absolute !left-28 !bg-[unset] !top-[3354px]"
            divClassName="!text-[#f7f4ea]"
            groupClassName="!mt-[-7.50px] !mb-[-7.50px]"
          />
        </div>

        <div className="absolute w-[1455px] h-[602px] top-[7416px] left-[-15px] bg-[#44433f]">
          <div className="absolute top-[455px] left-[576px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-2xl tracking-[0] leading-[normal]">
            © 2024 Sunrise Digital Media
          </div>

          <img
            className="absolute w-[43px] h-[42px] top-[114px] left-[1224px]"
            alt="Group"
            src={group2}
          />

          <img
            className="absolute w-[42px] h-[42px] top-[114px] left-[1287px]"
            alt="Fi"
            src={image1}
          />

          <img
            className="absolute w-[42px] h-[42px] top-[114px] left-[1349px]"
            alt="Subtract"
            src={subtract2}
          />

          <img
            className="absolute w-[236px] h-[60px] top-[59px] left-[72px] object-cover"
            alt="Sunrise logo new"
            src={sunriseLogoNewWhite52}
          />

          <div className="absolute top-36 left-[463px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#f7f4ea] text-2xl tracking-[0] leading-[normal]">
            Quick Link
          </div>

          <div className="absolute top-[65px] left-[1280px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#f7f4ea] text-2xl tracking-[0] leading-[normal]">
            Follow Us
          </div>

          <div className="w-[134px] top-[196px] left-[468px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-2xl whitespace-nowrap absolute tracking-[0] leading-[normal]">
            Our Story
          </div>

          <p className="absolute w-[342px] top-[156px] left-[73px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-xl tracking-[0] leading-[normal]">
            Sunrise Digital is a full-service digital marketing agency that
            spends quality time to understand your business and develops a
            strategy to drive business goals. We can help you accelerate your
            online growth and boost your digital marketing returns by working
            together.
          </p>

          <p className="absolute w-[342px] top-[138px] left-[748px] [font-family:'Quicksand-SemiBold',Helvetica] font-normal text-[#f7f4ea] text-2xl tracking-[0] leading-6">
            <span className="font-semibold leading-[30.0px]">Address-</span>

            <span className="[font-family:'Quicksand-Regular',Helvetica] leading-[30.0px]">
              {" "}
              <br />
            </span>

            <span className="[font-family:'Quicksand-Regular',Helvetica] leading-[30.0px]">
              MEHTA ARCADE, 2nd
              Floor,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15th
              Cross, Outer Ring Rd, near&nbsp;&nbsp;Sarakki Signal, Sarakki
              Kere, Bengaluru, Karnataka 560078
              <br />
            </span>

            <span className="[font-family:'Quicksand-Regular',Helvetica]">
              <br />
            </span>

            <span className="[font-family:'Quicksand-Regular',Helvetica]">
              Mon-Sat | 10AM - 7PM
              <br />
            </span>

            <span className="[font-family:'Quicksand-Regular',Helvetica]">
              Phone: 7259620234
            </span>
          </p>

          <div className="absolute w-16 top-[353px] left-[468px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Blog
          </div>

          <div className="absolute w-[91px] top-[314px] left-[468px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Carees
          </div>

          <div className="absolute w-[108px] top-[236px] left-[468px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Services
          </div>

          <div className="absolute top-[251px] left-[1264px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-xl tracking-[0] leading-[normal]">
            Privacy Policy
          </div>

          <div className="absolute top-[289px] left-[1236px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-xl tracking-[0] leading-[normal]">
            Term &amp; condition
          </div>

          <div className="absolute top-[327px] left-[1271px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-xl tracking-[0] leading-[normal]">
            Refund Policy
          </div>

          <div className="absolute top-[365px] left-[1296px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-xl tracking-[0] leading-[normal]">
            Contact Us
          </div>

          <div className="absolute w-[140px] top-[275px] left-[468px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#f7f4ea] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Case Study
          </div>
        </div>

        <div className="absolute w-[1333px] h-[601px] top-[6713px] left-[59px]">
          <div className="relative w-[1321px] h-[601px] bg-[#ffa314] rounded-[72px]">
            <div className="absolute top-[35px] left-11 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-8xl tracking-[0] leading-[normal]">
              Let’s Make
              <br />
              Magic
            </div>

            <div className="absolute w-[618px] h-[83px] top-[51px] left-[651px] bg-[#f7f4ea] rounded-[42px]">
              <div className="absolute top-6 left-[49px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#6c757d] text-[27.7px] tracking-[0] leading-[normal]">
                Name
              </div>
            </div>

            <div className="absolute w-[620px] h-[68px] top-[476px] left-[651px] bg-[#44433f] rounded-[42px]">
              <div className="absolute top-[19px] left-[281px] [font-family:'Quicksand-Medium',Helvetica] font-medium text-[#f7f4ea] text-2xl tracking-[0] leading-[normal]">
                Send
              </div>
            </div>

            <div className="absolute w-[618px] h-[187px] top-[265px] left-[651px] bg-[#f7f4ea] rounded-[42px]">
              <div className="absolute top-[27px] left-[49px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#6c757d] text-[27.7px] tracking-[0] leading-[normal]">
                Message
              </div>
            </div>

            <div className="absolute w-[618px] h-[83px] top-[158px] left-[651px] bg-[#f7f4ea] rounded-[42px]">
              <div className="absolute top-6 left-[49px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#6c757d] text-[27.7px] tracking-[0] leading-[normal]">
                Email
              </div>
            </div>

            <div className="absolute w-[392px] top-[299px] left-[57px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-5xl tracking-[0] leading-[normal]">
              Get in touch
            </div>
          </div>
        </div>

        <div className="absolute w-[1330px] h-[671px] top-[5943px] left-[55px]">
          <div className="absolute w-[653px] h-[168px] top-0 left-[3px]">
            <div className="absolute top-0 left-0 [font-family:'Quicksand-Bold',Helvetica] font-bold text-[#44433f] text-[111px] tracking-[0] leading-[normal]">
              testimonials
            </div>

            <p className="absolute w-[617px] top-[133px] left-3.5 [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-[27.7px] tracking-[0] leading-[normal]">
              What They’re Saying About Us
            </p>
          </div>

          <div className="absolute w-[428px] h-[473px] top-[198px] left-0">
            <div className="flex flex-col w-[428px] h-[402px] items-center justify-end gap-5 px-[46px] py-5 absolute top-[71px] left-0 rounded-[42px] border-2 border-solid border-[#ffa314]">
              <p className="relative w-[335px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl text-center tracking-[0] leading-[normal]">
                Sunrise Digital Media nailed it! Their creativity helped us
                reach more people than ever before
              </p>

              <p className="relative w-[335px] [font-family:'Quicksand-SemiBold',Helvetica] font-normal text-[#44433f] text-2xl text-center tracking-[0] leading-[normal]">
                <span className="font-semibold">Pavan,</span>

                <span className="[font-family:'Quicksand-Regular',Helvetica]">
                  {" "}
                  <br />
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] text-xl">
                  CEO, CakeZone
                </span>
              </p>
            </div>

            <img
              className="absolute w-[216px] h-[216px] top-0 left-[106px] object-cover"
              alt="Image"
              src={image2}
            />
          </div>

          <div className="absolute w-[428px] h-[473px] top-[198px] left-[897px]">
            <div className="flex flex-col w-[428px] h-[402px] items-center justify-end gap-5 px-[46px] py-5 absolute top-[71px] left-0 rounded-[42px] border-2 border-solid border-[#ffa314]">
              <p className="relative w-[335px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl text-center tracking-[0] leading-[normal]">
                Sunrise Digital Media nailed it! Their creativity helped us
                reach more people than ever before
              </p>

              <p className="relative w-[335px] [font-family:'Quicksand-SemiBold',Helvetica] font-normal text-[#44433f] text-2xl text-center tracking-[0] leading-[normal]">
                <span className="font-semibold">Pavan,</span>

                <span className="[font-family:'Quicksand-Regular',Helvetica]">
                  {" "}
                  <br />
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] text-xl">
                  CEO, CakeZone
                </span>
              </p>
            </div>

            <img
              className="absolute w-[216px] h-[216px] top-0 left-[106px] object-cover"
              alt="Image"
              src={image3}
            />
          </div>

          <div className="absolute w-[428px] h-[473px] top-[198px] left-[445px]">
            <div className="flex flex-col w-[428px] h-[402px] items-center justify-end gap-5 px-[46px] py-5 absolute top-[71px] left-0 rounded-[42px] border-2 border-solid border-[#ffa314]">
              <p className="relative w-[335px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#44433f] text-2xl text-center tracking-[0] leading-[normal]">
                Sunrise Digital Media nailed it! Their creativity helped us
                reach more people than ever before
              </p>

              <p className="relative w-[335px] [font-family:'Quicksand-SemiBold',Helvetica] font-normal text-[#44433f] text-2xl text-center tracking-[0] leading-[normal]">
                <span className="font-semibold">Pavan,</span>

                <span className="[font-family:'Quicksand-Regular',Helvetica]">
                  {" "}
                  <br />
                </span>

                <span className="[font-family:'Quicksand-Regular',Helvetica] text-xl">
                  CEO, CakeZone
                </span>
              </p>
            </div>

            <img
              className="absolute w-[216px] h-[216px] top-0 left-[106px] object-cover"
              alt="Image"
              src={image4}
            />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[31px] left-[1226px] bg-[#f7f4ea] rounded-[50px] border-[1.16px] border-solid border-[#44433f]">
            <img
              className="absolute w-[65px] h-[43px] top-7 left-4"
              alt="Arrow"
              src={arrow19}
            />
          </div>
        </div>
      </div>
    </div> */}

