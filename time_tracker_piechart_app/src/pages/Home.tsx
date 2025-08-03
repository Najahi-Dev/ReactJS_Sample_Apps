import TimeForm from "@/components/TimeForm"

const Home = () => {
  return (
    <div className="max-w-md mx-auto p-6 mt-10 rounded shadow bg-white space-y-6">
        <h1 className="text-2xl font-semibold">⏳ Time Tracker App</h1>
        <TimeForm/>
    </div>
  )
}

export default Home