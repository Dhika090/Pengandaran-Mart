export default function DeskripsiProduct(){
return(
    // className="relative block w-full max-w-6xl pt-10 mx-auto bg-white shadow-xl h-2/4 pb-9 rounded-2xl"
<>
    <div
        className="relative overflow-hidden px-6 transition-transform duration-500 rounded-lg bg-white  text-gray-900 text-sm block max-w-6xl mx-auto p-2.5 md:w-full">
        <input type="checkbox"
            className="absolute inset-x-0 top-0 z-10 w-full h-12 bg-black opacity-0 cursor-pointer peer" />
        <div className="flex items-center w-full h-12 pl-5 text-lg font-bold bg-gray-50">
            <h1>Deskripsi Product</h1>
        </div>
        <div
            className="absolute text-white transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" className="bg-black" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </div>
        <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-40">
            <div className="p-4 text-black">
                <span>
                    Nikmati kelezatan dan kenikmatan autentik dari iklan Jambal! Menggabungkan cita rasa lezat dan aroma
                    kaya, iklan Jambal menghadirkan pengalaman kuliner yang tak terlupakan. Setiap suapan Jambal
                    membangkitkan sensasi luar biasa di lidah Anda, mengangkat selera makan Anda ke tingkat yang baru.
                    Jambal, hidangan khas tradisional yang berasal dari daerah selatan Louisiana, Amerika Serikat, telah
                    menjadi favorit bagi penikmat makanan di seluruh dunia. Iklan Jambal mempersembahkan hidangan ini
                    dengan sentuhan yang unik dan tak tertandingi. Dari bahan-bahan berkualitas tinggi hingga proses
                    pengolahan yang cermat, setiap langkah dalam pembuatan Jambal dipenuhi dengan keahlian dan
                    kecintaan.
                </span>
            </div>
        </div>

    </div>
</>




)
}