import Lottie from "lottie-react"
import loading from "../../assets/loading.json"
const Loading = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full h-full bg-[#18181A] opacity-90 z-50 flex justify-center items-center">
            <Lottie animationData={loading}></Lottie>
        </div>
    </div>
  )
}

export default Loading