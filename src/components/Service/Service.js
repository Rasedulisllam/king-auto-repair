import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarBattery } from '@fortawesome/free-solid-svg-icons'


const Service = props => {
    // gett font awasome icon 
    const btnIcon=<FontAwesomeIcon icon={faCarBattery} />

    // destracturing props object
    const {serviceName,img,details,serviceTime,serviceCost,extraService}=props.service;

    // calculate time hour and minute
    const tiemCalculation=min=>{
        let hour=0;
        let minute=0;
        if(min>=60){
            minute=min%60;
            hour=Math.floor(min/60);
            
        }
        else{
            minute=min;
        }
        return {
            minute,
            hour
        }
    }

    // destructure calculate time
    const {hour,minute}=tiemCalculation(serviceTime);
    
    return (
        <div className='service'>
            <div>
                <img className='service-img' src={img} alt="" />
            </div>
            <div className='service-text'>
                <h2>{serviceName}</h2>
                <p className='service-text-details'>{details}</p>
                <p>Estimate time: {hour}:{minute} min</p>              
                <p>Cost: ${serviceCost}</p>
                <p>Extra: {extraService}.</p>
                <button onClick={()=>props.handleAddService(props.service)}  className='service-btn'>{btnIcon} Get service</button>
            </div>
        </div>
    );
};

export default Service;