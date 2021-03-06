import React,{useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'

const Charts = () => {
    const [chartData, setChartData] = useState({})
    const chart = () =>{
        setChartData({
            labels: ['monday','tuesday', 'wednesday','thursday', 'friday'],
            datasets:[
                {
                    label:'level of this',
                    data:[32,45,12,76,66],
                    backgroundColor:['rgba(75,195,192,0.6)'],
                    borderWidth: 4
                },
                {
                    label:'level of this',
                    data:[32,33,12,76,66],
                    backgroundColor:['rgba(75,195,192,0.6)'],
                    borderWidth: 4
                }
            ]
        })
    }
    useEffect(() =>{
        chart()
    },[])
    return (
        <div style={{width:'500px', height:'500px'}}>
            <Bar 
                data={chartData}
                options={{
                    responsive: true
                }}
            />     
        </div>
    )
}

export default Charts
