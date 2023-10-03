import React,{useState,useEffect} from "react";

const BlockInputCustom = (props) => {
	const { 
        id, 
        setIsValid, 
        setIsAnswered, 
        setValidationErr, 
        val, 
        setVal, 
        attributes, 
        setAttributes
    } = props;

    const [value,onChange]=useState(1);

    useEffect(()=>{
        const ele = document.querySelector('#buble');
        if (ele) {
            console.log('movimiento');
            ele.classList.add(`${Number(value / 4)}px`)
        /* ele.style.left = `${Number(value / 4)}px`; */
        }
    })
	
	/* console.log(attributes) */
	return (
        <>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value)
          }}
          className='border-b-[1px] py-2 bg-red-500 rounded-sm placeholder-digital-1/40 border-digital-1/40 focus:border-b-2 focus:border-digital-1 focus:outline-0 text-digital-1 text-base'
          placeholder="Ingresa sólo números"
        />
        <div className="bg-red-600 h-28">
            <div className="bg-green-200 absolute">
                123123123
            </div>
            <input type="range" name="" id="" value={val} min={1} max={500} className=""/>
            {/* <div className="relative w-[50vw]">
                <input 
                className="w-[50vw] bg-red-500"
                type="range" 
                min="1" 
                max="500" 
                value={value}
                    onChange={({ target: { value: radius } }) => {
                                onChange(radius);
                            }}
                />
                <div id="buble" className="absolute"> 
                    {value}
                </div>
            </div> */}
        </div>
        </>
	);
};

export default BlockInputCustom;
