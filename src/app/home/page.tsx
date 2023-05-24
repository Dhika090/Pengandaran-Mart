import type { NextPage } from "next";
import { useCallback } from "react";
import Image from 'next/image';
// import Home from './page';

const Home: NextPage = () => {
  const onFrameContainer13Click = useCallback(() => {
    // Please sync "Metode Pembayaran" to the project
  }, []);

  return (
    <div className="relative bg-foundation-grey-light w-full h-[64rem] overflow-hidden text-left text-[4rem] text-foundation-blue-light font-montserrat">
       <Image src="/images/textnlogo.svg" width={250} height={10} alt="icon" className="items-center mx-auto" />
      <div className="absolute top-[116.19rem] left-[21.88rem] rounded-3xs bg-foundation-blue-dark-active w-[68.88rem] h-[11.38rem] flex flex-row p-[1.25rem] box-border items-center justify-center text-center">
        <b className="relative">LANJUT</b>
      </div>
      <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-white w-[90rem] flex flex-row p-[1.25rem] box-border items-center justify-center text-[1.56rem] text-lightskyblue">
        <div className="flex flex-row items-center justify-start gap-[1.56rem]">
          {/* <img
            className="relative w-[4.34rem] h-[3.53rem]"
            alt=""
            src="/group-9.svg"
          /> */}
          <b className="relative">
            <span>Pangandaran</span>
            <span className="text-foundation-blue-dark-active">Mart</span>
          </b>
        </div>
      </div>
      <div className="absolute top-[6rem] left-[6.25rem] flex flex-row py-[3.13rem] px-[0rem] items-start justify-center gap-[1.56rem] text-[1.25rem] text-black">
        <div className="flex flex-col items-start justify-center gap-[1.56rem]">
          <div className="rounded-3xs bg-white flex flex-col p-[1.25rem] items-start justify-center gap-[0.94rem]">
            <div className="w-[45.94rem] flex flex-row items-center justify-start gap-[6.25rem]">
              <b className="relative inline-block w-[32.63rem] shrink-0">
                Pesanan Anda akan dikirim ke alamat
              </b>
              <div className="relative text-[1rem]">Ubah Alamat</div>
            </div>
            <div className="rounded-3xs box-border w-[45.94rem] flex flex-row p-[1.25rem] items-center justify-start text-[1rem] border-[1px] border-solid border-foundation-grey-light-active">
              <div className="relative leading-[1.88rem] inline-block w-[43.31rem] shrink-0">
                <p className="m-0">
                  <b>Bapak Sugandi</b>
                </p>
                <p className="m-0">
                  Jln. Sukabirus Desa Buahlaya Kec. Pangandaran Kab.Pangandaran
                  4567
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-white h-[15.75rem] flex flex-col p-[1.25rem] box-border items-start justify-center gap-[0.94rem] text-foundation-grey-dark-hover">
            <b className="relative">Pesanan</b>
            <div className="rounded-3xs bg-foundation-grey-light box-border w-[45.94rem] flex flex-row py-[1.25rem] px-[0rem] items-center justify-start border-[1px] border-solid border-foundation-grey-light-active">
              <div className="bg-white box-border w-[45.94rem] flex flex-row py-[0.63rem] px-[0rem] items-center justify-start border-[1px] border-solid border-foundation-grey-light-active">
                <div className="w-[42.25rem] flex flex-row py-[0rem] px-[1.25rem] box-border items-center justify-start gap-[1.69rem]">
                  {/* <img
                    className="relative rounded-[20px] w-[6.69rem] h-[5.88rem] object-cover"
                    alt=""
                    src="/rectangle-4@2x.png"
                  /> */}
                  <div className="relative w-[32.31rem] h-[2.81rem]">
                    <div className="absolute top-[0rem] left-[0rem]">
                      Ikan Jambal Segar
                    </div>
                    <b className="absolute top-[1.88rem] left-[0rem] text-[1rem]">
                      Rp25.000
                    </b>
                  </div>
                  <div className="relative text-[1rem]">1x</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[48.44rem] flex flex-col p-[1.25rem] box-border items-start justify-start gap-[1.25rem]">
            <b className="relative">Metode Pengiriman</b>
            <div
              className="rounded-3xs bg-foundation-grey-light box-border w-[45.81rem] flex flex-col p-[1.25rem] items-center justify-center cursor-pointer text-[1rem] border-[1px] border-solid border-foundation-grey-light-active"
              
            >
              <div className="bg-white box-border w-[45.88rem] flex flex-col p-[1.25rem] items-start justify-center border-[1px] border-solid border-foundation-grey-light-active">
                <div className="w-[43.31rem] flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                    alt=""
                    src="/carbondelivery.svg"
                  />
                  <div className="relative inline-block w-[36.44rem] shrink-0">
                    Pilih Metode Pengiriman
                  </div>
                  {/* <img
                    className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                    alt=""
                    src="/materialsymbolsnavigatenext.svg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xs bg-white flex flex-col py-[1.25rem] px-[0rem] items-center justify-center gap-[1.56rem] text-[1rem] text-foundation-grey-dark-hover">
          <div className="flex flex-col items-start justify-start gap-[1.56rem]">
            <div className="flex flex-col py-[0rem] px-[1.25rem] items-start justify-start gap-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[9.81rem]">
                <div className="relative">Total Harga Pesanan</div>
                <div className="relative">Rp25.000</div>
              </div>
              <div className="relative box-border w-[24.94rem] h-[0.06rem] border-t-[1px] border-solid border-foundation-grey-light-active" />
              <div className="flex flex-row items-center justify-start gap-[17rem]">
                <div className="relative">Diskon</div>
                <div className="relative text-right inline-block w-[4.5rem] shrink-0">
                  Rp2.500
                </div>
              </div>
              <div className="relative box-border w-[25rem] h-[0.06rem] border-t-[1px] border-solid border-foundation-grey-light-active" />
            </div>
            <div className="rounded-3xs bg-white w-[27.44rem] flex flex-col p-[1.25rem] box-border items-start justify-start">
              <div className="flex flex-row items-end justify-start gap-[3.5rem]">
                <div className="flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="relative w-[13.19rem] h-[1.25rem]">
                    <div className="absolute top-[0rem] left-[0rem] inline-block w-[13.19rem]">
                      Masukkan kode voucher
                    </div>
                  </div>
                  <div className="relative box-border w-[14.88rem] h-[0.06rem] border-t-[1px] border-solid border-black" />
                </div>
                <div className="rounded-[5px] bg-foundation-blue-light-active flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center">
                  <div className="relative">Gunakan</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-[0rem] px-[1.25rem] items-start justify-start gap-[10.81rem]">
              <b className="relative inline-block w-[9.5rem] shrink-0">
                Total Pembayaran
              </b>
              <div className="relative text-right">Rp27.500</div>
            </div>
          </div>
          <div className="rounded-3xs bg-foundation-blue-dark-active w-[25rem] flex flex-row p-[1.25rem] box-border items-center justify-center text-[1.25rem] text-foundation-grey-light">
            <b className="relative">Pilih Metode Pembayaran</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
