import { Copyright } from "lucide-react"

const footer = () => {
  return (
    <footer>
        <div className="container-layout text-[1.3rem] text-center flex items-center justify-center gap-2 !py-[2rem] bg-[#000] text-white">
            <Copyright size={15}/> 2023 Address Clothing Company. All rights reserved.
        </div>
    </footer>
  )
}

export default footer