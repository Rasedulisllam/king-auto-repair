import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import './Store.css'

const Store = () => {
    const [services,setServices]=useState([])
    const [selectedServices,setSelectedServices]=useState([])

    // fetching data
    useEffect(()=>{
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    // handle click event
    const handleAddService=service=>{ 
        const newSelectedServices=[...selectedServices,service];
        setSelectedServices(newSelectedServices)
    }

    return (
        <div className='store-main'>    
            <div className="services">
                {
                    services.map(service => <Service
                         service={service} 
                         key={service.id}
                         handleAddService={handleAddService}
                         ></Service>)
                }
            </div>
            <div>
                <Cart selectedServices={selectedServices}></Cart>
            </div>
        </div>
    );
};

export default Store;

// const arra=[
//     {
//         id:1,
//         serviceName:'Full service wash',
//         details:'Clean on both the inside and outside',
//         serviceTime:40,
//         serviceCost:80,
//         extraService:'Tire check',
//         img:'https://securecdn.pymnts.com/wp-content/uploads/2021/06/Mister-Car-Wash-IPO-subscribers-1000x600.jpg'
//     },
//     {
//         id:2,
//         serviceName:'Express extenior wash',
//         details:'In a hurry and need a car wash',
//         serviceTime:20,
//         serviceCost:50,
//         extraService:'No extra service',
//         img:'https://bukovel.com/media/__sized__/pages/comforts/80d20e06ce9942b28aadbc3a7c23a214-crop-c0-5__0-5-860x752-70.jpg'
//     },
//     {
//         id:3,
//         serviceName:'Battery Change',
//         details:'Ballery is gone? signs that you need to replace ballery.',
//         serviceTime:60,
//         serviceCost:250,
//         extraService:'check battery connection',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZxkcdU2RzyUmhvNhI744o09ZnMxRiYfipQ&usqp=CAU'
//     },
//     {
//         id:4,
//         serviceName:'Battery repair',
//         details:'You need to clean outSide of the battery and need some problem fix. then you in right place',
//         serviceTime:40,
//         serviceCost:120,
//         extraService:'Check pluge connection',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHmZupVmPvPtSzpK-SbKtvzX2CW4hPrdWRQ&usqp=CAU'
//     },
//     {
//         id:5,
//         serviceName:'Change brake',
//         details:'Can you replace your car brakes. Need sometime to the wark.',
//         serviceTime:180,
//         serviceCost:500,
//         extraService:'no extra service',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW527K8agWvGSDJ4XeczIPJFfD6LAljFGmQ&usqp=CAU'
//     },
//     {
//         id:6,
//         serviceName:'Tire repair',
//         details:'You likely can get the tire repaired if the punctures are at least 16 inches apart. Otherwise, its time to buy a new tire.',
//         serviceTime:80,
//         serviceCost:180,
//         extraService:'Check tire pressure',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_ukEywzrtcb2zVJkFro-DXzAB0WbiM65yA&usqp=CAU'
//     },
//     {
//         id:7,
//         serviceName:'Bracke repair service',
//         details:'Regular car brake maintanence service is very benefitile',
//         serviceTime:120,
//         serviceCost:200,
//         extraService:'Accelerator system',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYezhHMo3wLlzAzrWyRQoHH9dHSA9PxWGsnQ&usqp=CAU'
//     },
//     {
//         id:8,
//         serviceName:'Tire replacement',
//         details:'Tire change for seasonal maintenance.',
//         serviceTime:120,
//         serviceCost:600,
//         extraService:'No extra service',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWIr9xKZwy-4B-ML-eFjQXDlxA8uReVyAcQ&usqp=CAU'
//     },
//     {
//         id:9,
//         serviceName:'Change Engine oil',
//         details:'Proper lubrication that reduces the amount of heat produced by the engine',
//         serviceTime:20,
//         serviceCost:200,
//         extraService:'No extra service',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxEY4n8TOSdEUuxfnWS90803B2H89fTCnhg&usqp=CAU'
//     },
//     {
//         id:10,
//         serviceName:'Engine Maintenance',
//         details:'Keeping up with the regular maintenance schedule can help my preventing costly repair of engine',
//         serviceTime:180,
//         serviceCost:250,
//         extraService:'Check electric connection',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxl9rQjCKMbe_xVMfm5Uhm126UoIw1FDiRg&usqp=CAU'
//     },
//     {
//         id:11,
//         serviceName:'Cooling system repair and maintenece',
//         details:'Car repuir maintenance of the cooling system to ensure that engine safe over heat.',
//         serviceTime:160,
//         serviceCost:220,
//         extraService:'Air filter check',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YR7KI0EHocXK8OlFzk7seqOiOhLQ44QTHQ&usqp=CAU'
//     },
//     {
//         id:12,
//         serviceName:'Change car paint',
//         details:'Change color and get your vehicale point in this color',
//         serviceTime:4320,
//         serviceCost:1200,
//         extraService:'Body demage',
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjW-RFJ3sTWuuCPQc37XgU2yc2nOTtBLJBjg&usqp=CAU'
//     },
// ]