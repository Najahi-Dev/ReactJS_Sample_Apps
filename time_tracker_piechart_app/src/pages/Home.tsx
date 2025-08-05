import TimeChart from "@/components/TimeChart";
import TimeForm from "@/components/TimeForm"
import { useState } from "react";

const Home = () => {

  const [data, setData] = useState<{activity:string; hours:number}[]>([]);

  const handleAdd = (activity: string, hours:number) =>{
    setData((prev) => [...prev,{activity,hours}])
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 rounded shadow bg-white space-y-6">
        <h1 className="text-2xl font-semibold">⏳ Time Tracker App</h1>
        <TimeForm onAdd={handleAdd}/>
        <TimeChart data={data}/>
    </div>
  )
}

export default Home