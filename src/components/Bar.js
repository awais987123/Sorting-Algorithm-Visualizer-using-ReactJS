import React ,{useState,useEffect} from 'react'
import './Bar.css';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
function Bar({index,length, colorKey, changeArray}) {
    const [len , setLen]=useState(length);

    useEffect(()=>{
setLen(length);
    },[length]);

    const colors = ['#3d5af1', '#ff304f', '#83e85a']; 
    const handleChange = (e) => {
		let val = e.target.value;
		if (val === '') {
			setLen(0);
            changeArray(index,0);
			
		} else {
			val = parseInt(val);
			if (val > 200) {
				setLen(200);
                changeArray(index,200);
			
			} else {
				setLen(val);
                changeArray(index,val);
			
			}
		}
	};
    let bStyle ={
        background: colors[colorKey],
		height: length,
		marginTop: 200 - length,
    };

    let textStyle = {
		width: length,
		top: Math.floor(length / 2) - 10,
		left: -Math.floor(length / 2) + 11,
	};
    const increment = () => {
        setLen(len + 1);
        changeArray(index, len + 1);
    }

    const decrement = () => {
        setLen(len - 1);
        changeArray(index, len - 1);
    }
    let quantityBtnStyle = {
        top: length - 10
    }
    
    return (
        <div className="bar"  style={bStyle}>
        <input 
        className='text'
		style={textStyle}
        
        type="number" value={len} onChange={handleChange} />
        <div className='quatityNav'>
        <div className='quantity-btn quantity-up' style={quantityBtnStyle} onClick={increment}>
            <PlusOneIcon/>
        </div>
        <div className='quantity-btn quantity-down' style={quantityBtnStyle} onClick={decrement}>
            <ExposureNeg1Icon />
        </div>
    </div>
            
        </div>
    )
}
export default Bar;
