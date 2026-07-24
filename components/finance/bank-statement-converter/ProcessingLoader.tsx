"use client";

import {
  FiFileText,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiCheckCircle,
} from "react-icons/fi";


const steps = [
  {
    icon: FiFileText,
    title: "Reading PDF Statement",
    description: "Analyzing document structure",
  },
  {
    icon: FiCpu,
    title: "Extracting Transactions",
    description: "Finding dates, amounts and descriptions",
  },
  {
    icon: FiDatabase,
    title: "Smart Parsing",
    description: "Organizing financial data",
  },
  {
    icon: FiDownload,
    title: "Generating Excel",
    description: "Preparing downloadable spreadsheet",
  },
];


interface ProcessingLoaderProps {
  currentStep?: number;
}


export default function ProcessingLoader({
  currentStep = 0,
}: ProcessingLoaderProps) {


  return (

    <section className="mx-auto mt-10 w-full max-w-3xl px-4 sm:px-0">

      <div
        className="
        rounded-3xl
        border
        border-indigo-100
        bg-white
        p-8
        shadow-[0_20px_50px_rgba(79,70,229,0.12)]
        "
      >


        <div className="text-center">


          <div
            className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-indigo-600
            to-purple-600
            text-white
            shadow-xl
            "
          >

            <FiCpu className="h-10 w-10 animate-pulse"/>

          </div>



          <h2
            className="
            mt-6
            text-2xl
            font-bold
            text-slate-950
            "
          >
            Processing Your Bank Statement
          </h2>



          <p
            className="
            mt-3
            text-sm
            leading-7
            text-slate-600
            "
          >
            Soupxor is extracting transactions and converting your PDF into a
            structured Excel spreadsheet.
          </p>


        </div>




        <div className="mt-8 space-y-4">


          {steps.map((step,index)=>{


            const Icon = step.icon;

            const completed = index < currentStep;

            const active = index === currentStep;



            return (

              <div
                key={step.title}
                className={`
                flex
                items-center
                gap-4
                rounded-2xl
                border
                p-4
                transition-all
                
                ${
                  active
                  ?
                  "border-indigo-300 bg-indigo-50"
                  :
                  completed
                  ?
                  "border-emerald-200 bg-emerald-50"
                  :
                  "border-slate-200 bg-slate-50"
                }
                `}
              >



                <div
                  className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl

                  ${
                    completed
                    ?
                    "bg-emerald-500 text-white"
                    :
                    active
                    ?
                    "bg-indigo-600 text-white"
                    :
                    "bg-slate-200 text-slate-500"
                  }
                  `}
                >

                  {
                    completed
                    ?
                    <FiCheckCircle className="h-6 w-6"/>
                    :
                    <Icon
                      className={`
                      h-6
                      w-6
                      ${active ? "animate-pulse" : ""}
                      `}
                    />
                  }


                </div>




                <div>

                  <h3
                    className="
                    font-semibold
                    text-slate-950
                    "
                  >
                    {step.title}
                  </h3>


                  <p
                    className="
                    mt-1
                    text-sm
                    text-slate-600
                    "
                  >
                    {step.description}
                  </p>


                </div>



                {
                  active && (

                    <div className="ml-auto flex gap-1">

                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600"/>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:150ms]"/>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:300ms]"/>

                    </div>

                  )
                }


              </div>

            );


          })}


        </div>





        <div
          className="
          mt-8
          rounded-2xl
          border
          border-indigo-200
          bg-indigo-50
          p-5
          text-center
          "
        >

          <p
            className="
            text-sm
            font-medium
            text-indigo-700
            "
          >

            Processing happens securely in your browser. Your financial data
            never leaves your device.

          </p>


        </div>


      </div>


    </section>

  );

}