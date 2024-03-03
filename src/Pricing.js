import './Pricing.css';
import { useState } from 'react';

export default function Pricing() {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = (event) => {
        if (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            setIsActive(!isActive);;
        } else if (event.type === 'click') {
            setIsActive(!isActive);;
        }
    };
    return <div className="app-container">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
        <div className='graphic1'><img alt='Wavy graphic 1 in background'/></div>
        <div className='graphic2'><img alt='Wavy graphic 2 in background'/></div>
        <div className='heading'>Our Pricing</div>
        <div className='termType1'>Anually</div>
        <div className='termType2'>Monthly</div>
        <div className={`toggleButton ${isActive ? 'active' : ''}`} onClick={handleToggle} onKeyDown={handleToggle}>
            <div className='toggleCircle'></div>
        </div>
        <div className='leftBox'>
            <div className='leftBoxTitle'>Master</div>
            <div className='leftDollar'>$</div>
            <div className='leftPrice'>19.99</div>
            <table className='leftBoxItems'>
                <tr><td>500 GB Storage</td></tr>
                <tr><td>5 Users Allowed</td></tr>
                <tr><td>Send up to 3 GB</td></tr>
            </table>
            <button className='leftBoxBottom'>LEARN MORE</button>
        </div>
        <div className='rightBox'>
            <div className='rightBoxTitle'>Master</div>
            <div className='rightDollar'>$</div>
            <div className='rightPrice'>39.99</div>
            <table className='rightBoxItems'>
                <tr><td>2 TB Storage</td></tr>
                <tr><td>10 Users Allowed</td></tr>
                <tr><td>Send up to 20 GB</td></tr>
            </table>
            <button className='rightBoxBottom'>LEARN MORE</button>
        </div>
        <div className='midBox'>
            <div className='midBoxTitle'>Professional</div>
            <div className='midDollar'>$</div>
            <div className='midPrice'>24.99</div>
            <table className='midBoxItems'>
                <tr><td>1 TB Storage</td></tr>
                <tr><td>5 Users Allowed</td></tr>
                <tr><td>Send up to 10 GB</td></tr>
            </table>
            <button className='midBoxBottom'>LEARN MORE</button>
        </div>
    </div>
}