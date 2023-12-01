import { useEffect, useState } from 'react'
import axios from 'axios'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import { format } from 'date-fns'


const baseUrl = "http://127.0.0.1:5000"

function Home() {
  const [count, setCount] = useState(0)
  const [description, setDescription] = useState("")
  const [events, setEvent] = useState([])

  const fetchEvents = async() => {
    const data = await axios.get(`${baseUrl}/events`)
    console.log("response", data.data.events)
    setEvent(data.data.events);
  }

  const handleChange = () =>{
      setDescription(e.target.value)
  }

  const handleSubmit =  e => {
    e.preventDefault();
    console.log(description)
  }

  useEffect(() =>{
    fetchEvents();
  },[]);


  const [waterData, setWater] = useState({
    labels: ['Water intake'],
    datasets: [
      {
        data: [60, 50], 
        backgroundColor: ['#fffffff1', '#daedf8f1'],      
      }
    ]
  });

  const data = {
    labels: ['Weight', 'Height', 'Temperature', 'Bmi'],
    datasets: [
      {
        label: 'Values',
        data: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],        
        backgroundColor: [
            "#f4f4f5",
            "#f4f4f5",
            "#f4f4f5",
            "#f4f4f5",                
          ],
          borderColor: "black",
          borderWidth: 2,
      }
    ]
  };

  return (
    <>
    <div className='bg-yellow-300'>
        <div className='h-40 w-40'>
          <PieChart  data={waterData}/>
        </div>

        <header className='flex justify-end'>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Description</label>
            <input 
              onChange={handleChange}
              type="text" 
              name='description'
              id="description"
              value={description}
              />
              <button>submit</button>
          </form>
        </header>

        <div className="h-96 w-69 px-2">
            <BarChart                                         
                chartData={data}
                // options={options}
            />                                      
        </div>  

        {/* <div>
          {events?.map((event, index)=>(
            <div key={index}>
              {event}
            </div>
          ))}
        </div> */}
    </div> 
    </>
  )
}

export default Home
