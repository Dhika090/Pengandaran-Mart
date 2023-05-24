import Image from 'next/image';


export default function page(){
return(

<div className="">
  <nav className="bg-white border-gray-200">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
      <Image src="/images/textnlogo.svg" width={250} height={10} alt="icon" className="items-center mx-auto" />
    </div>
  </nav>

  <div className="relative flex flex-col min-h-screen py-12 overflow-hidden bg-gray-50">
    <div className="relative w-full max-w-lg px-6 pt-10 mx-auto bg-white shadow-xl pb-9 rounded-2xl">
      <div className="flex flex-col w-full max-w-md mx-auto space-y-16">
        <div className="flex flex-col items-center space-y-2 text-black">
          <div className="text-3xl font-semibold">
            <p>Verifikasi Akun</p>
          </div>
          <div className="flex flex-row text-sm font-medium ">
            <p>Silakan cek SMS untuk mendapatkan kode verifikasi yang telah dikirimkan ke nomor telepon 087647389202</p>
          </div>
        </div>

        <div>
          <form action="" method="post">
            <div className="flex flex-col space-y-16 text-black">
              <div className="flex flex-row items-center justify-between w-full max-w-xs mx-auto">
                <div className="w-16 h-16 ">
                  <input
                    className="flex flex-col items-center justify-center w-full h-full mx-auto text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text" name="text" id="text" maxLength={1} />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="flex flex-col items-center justify-center w-full h-full mx-auto text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text" name="text" id="text" maxLength={1}/>
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="flex flex-col items-center justify-center w-full h-full mx-auto text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text" name="text" id="text"maxLength={1} />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="flex flex-col items-center justify-center w-full h-full mx-auto text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text" name="text" id="text" maxLength={1}/>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button
                    className="flex flex-row items-center justify-center w-40 py-4 mx-auto text-sm text-center text-white border-none rounded-lg shadow-sm outline-none bg-blue-950">
                    Masuk
                  </button>
                </div>

                <div
                  className="flex flex-row items-center justify-center space-x-1 text-sm font-medium text-center text-gray-500">
                  <p>Tidak mendapat kode? </p> <a className="flex flex-row items-center font-semibold text-black" href="http://"
                    target="_blank" rel="noopener noreferrer">Kirim Ulang</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

)
}