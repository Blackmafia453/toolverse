"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiFileText,
  FiDownload,
  FiGlobe,
  FiLock,
  FiCpu,
  FiZap,
  FiStar,
} from "react-icons/fi";


const features = [
  {
    icon: FiCpu,
    title: "Smart Generic Parser",
    description:
      "Extract transactions from bank PDFs without using bank-specific templates.",
  },
  {
    icon: FiShield,
    title: "Private Processing",
    description:
      "Your financial files stay inside your browser with no cloud uploads.",
  },
  {
    icon: FiDownload,
    title: "Excel Export",
    description:
      "Generate clean XLSX spreadsheets ready for accounting and analysis.",
  },
];


const highlights = [
  "Worldwide bank statement support",
  "Browser based processing",
  "Automatic transaction extraction",
  "Excel XLSX export",
  "No account required",
  "Secure workflow",
];


const badges = [
  {
    icon: FiLock,
    label:"Privacy First",
  },
  {
    icon: FiZap,
    label:"Fast Processing",
  },
  {
    icon:FiGlobe,
    label:"Worldwide",
  },
];



export default function Hero(){


return (

<section
className="
relative
overflow-hidden
bg-gradient-to-br
from-indigo-50
via-white
to-blue-50
"
>


<div className="
absolute
left-0
top-0
h-96
w-96
rounded-full
bg-indigo-500/10
blur-3xl
"
/>


<div className="
absolute
right-0
bottom-0
h-96
w-96
rounded-full
bg-blue-500/10
blur-3xl
"
/>



<div className="
relative
mx-auto
max-w-7xl
px-6
py-20
lg:px-8
">


<div className="
grid
items-center
gap-14
lg:grid-cols-2
">



<div>


<div className="
inline-flex
items-center
gap-2
rounded-full
border
border-indigo-200
bg-white
px-4
py-2
text-sm
font-semibold
text-indigo-700
shadow-sm
">

<FiStar/>

Enterprise Finance Tool

</div>





<h1 className="
mt-8
text-4xl
font-extrabold
leading-tight
tracking-tight
text-slate-950
sm:text-5xl
xl:text-6xl
">

Convert Bank Statement PDF

<span className="
block
bg-gradient-to-r
from-indigo-600
via-purple-600
to-blue-600
bg-clip-text
text-transparent
">

Into Excel Instantly

</span>


</h1>





<p className="
mt-6
max-w-2xl
text-lg
leading-8
text-slate-600
">

Soupxor converts bank statement PDFs into structured Excel files using smart extraction technology designed for worldwide formats.

</p>




<div className="
mt-8
flex
gap-4
flex-wrap
">


<a
href="#converter"
className="
group
flex
items-center
gap-2
rounded-xl
bg-indigo-600
px-6
py-3.5
font-semibold
text-white
shadow-xl
shadow-indigo-500/30
hover:bg-indigo-700
"
>

Start Converting

<FiArrowRight className="
transition
group-hover:translate-x-1
"/>

</a>



<Link
href="/tools"
className="
rounded-xl
border
border-slate-300
bg-white
px-6
py-3.5
font-semibold
text-slate-700
hover:border-indigo-400
hover:text-indigo-600
"
>

Browse Tools

</Link>


</div>





<div className="
mt-10
grid
gap-3
sm:grid-cols-2
">


{
highlights.map(item=>(

<div
key={item}
className="
flex
items-center
gap-3
rounded-xl
border
border-indigo-100
bg-white
px-4
py-3
shadow-sm
"
>

<FiCheckCircle
className="
text-emerald-600
"
/>


<span className="
text-sm
font-medium
text-slate-700
">

{item}

</span>


</div>

))

}


</div>





<div className="
mt-8
flex
flex-wrap
gap-3
">


{
badges.map((badge)=>{


const Icon=badge.icon;


return (

<div
key={badge.label}
className="
flex
items-center
gap-2
rounded-full
border
border-indigo-200
bg-indigo-50
px-4
py-2
text-sm
font-semibold
text-indigo-700
"
>

<Icon/>

{badge.label}


</div>

)


})

}


</div>




</div>









<div
className="
rounded-3xl
border
border-indigo-100
bg-white
p-8
shadow-2xl
"
>


<div className="
flex
items-center
justify-between
mb-8
">


<div>

<p className="
text-sm
font-bold
uppercase
tracking-widest
text-indigo-600
">

Soupxor Finance

</p>


<h2 className="
mt-2
text-2xl
font-bold
text-slate-950
">

Smart PDF Converter

</h2>


</div>


<div className="
rounded-2xl
bg-indigo-600
p-4
text-white
">

<FiFileText size={28}/>

</div>


</div>





<div className="
space-y-5
">


{
features.map(feature=>{


const Icon=feature.icon;


return (

<div
key={feature.title}
className="
rounded-2xl
border
border-slate-200
bg-slate-50
p-5
hover:border-indigo-300
transition
"
>


<div className="
flex
gap-4
">


<div className="
rounded-xl
bg-indigo-600
p-3
text-white
">

<Icon/>

</div>



<div>

<h3 className="
font-bold
text-slate-950
">

{feature.title}

</h3>


<p className="
mt-2
text-sm
leading-6
text-slate-600
">

{feature.description}

</p>


</div>


</div>


</div>

)


})

}


</div>





<div className="
mt-8
rounded-2xl
bg-gradient-to-r
from-indigo-600
to-purple-600
p-6
text-white
">


<h3 className="
text-xl
font-bold
">

Secure Client-Side Processing

</h3>


<p className="
mt-2
text-indigo-100
">

Your PDFs are processed securely inside your browser.

</p>


</div>




</div>





</div>

</div>


</section>

);


}