// import { Button } from 'flowbite-react';
// import pics from "../assets/images.jpg"
// export default function CallToAction() {
//   return (
//     <div className='flex flex-col sm:flex-row p-3 border border-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'
//     // style={{
//     //     backgroundColor: "#f2f0ef",
//     //     margin: "auto"
//     // }}
//     >
//         <div className="flex-1 justify-center flex flex-col">
//             <h2 className='text-3xl'>
//                 Want Live Pro Help ?
//             </h2>
//             <p className='text-gray-500 my-2'>
//                 Reach out to a professional Security Personnel !!
//             </p>
//             <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
//                 <a href="/chat/:chatId" target='' rel='noopener noreferrer'>
//                    Live Now 
//                 </a>
//             </Button>
//         </div>
//         <div className="p-7 flex-1"
//         style={{
//             objectFit: "cover",
//         }}>
//             <img src={pics} />
//         </div>
//     </div>
//   )
// }


import { Button } from "flowbite-react";
import pics from "../assets/images.jpg";

export default function CallToAction() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center p-6 border border-gray-300 rounded-tl-3xl rounded-br-3xl text-center bg-gray-50"
      style={{
        minHeight: "60vh",
      }}
    >
      {/* Text Section */}
      <div
        className="flex-1 flex flex-col justify-center items-center p-6 lg:text-left"
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2 className="text-4xl font-bold mb-4 text-purple-700">
          Want Live Pro Help?
        </h2>
        <p className="text-gray-600 mb-6">
          Reach out to a professional Security Personnel today!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-br-xl px-6 py-3 text-lg"
        >
          <a href="http://localhost:5174/"  target="" rel="noopener noreferrer">

            Live Now
          </a>
        </Button>
      </div>

      {/* Image Section */}
      <div
        className="flex-1 p-6 flex justify-center items-center"
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <img
          src={pics}
          alt="Professional Help"
          className="rounded-lg shadow-lg"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
