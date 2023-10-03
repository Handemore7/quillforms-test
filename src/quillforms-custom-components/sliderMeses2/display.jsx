/**
 * QuillForms Dependencies
 */
import { useMessages } from '@quillforms/renderer-core';

/**
 * WordPress Dependencies
 */
import { useEffect } from 'react';

/**
 * External Dependencies
 */

import Slider from '@mui/material/Slider';

const SingleRangeSliderDisplay = (props) => {
	const {
		id,
		attributes,
		setIsValid,
		setIsAnswered,
		setValidationErr,
		showNextBtn,
		blockWithError,
		val,
		setVal,
		showErrMsg,
		inputRef,
		isTouchScreen,
		setFooterDisplay,
		isPreview,
		isReviewing,
	} = props;
	const messages = useMessages();

	let {
		min,
		max,
		step,
		marks,
		customMarks,
		prefix,
		suffix,
		required,
	} = attributes;

	const checkfieldValidation = (value) => {
		if (required === true && (!value || value === '') && value !== 0) {
			setIsValid(false);
			setValidationErr(messages['label.errorAlert.required']);
		} else {
			setIsValid(true);
			setValidationErr(null);
		}
	};


	useEffect(() => {
		if (isPreview || !isReviewing) checkfieldValidation(val);
	}, [attributes]);

	let valyears;
	let valmeses;

	valyears = Math.floor(val / 12)
	valmeses = val - (valyears*12)

	prefix = `${valyears} año${valyears >= 2 ? 's' : ''} ${valmeses != 0 ? 'y ':''}`
	suffix = valmeses != 0 ? `${valmeses} mes${valmeses === 1 ? '':'es'}` : ''

	return (
		<div className={'my-[40px]'}>
			<Slider
                min={parseFloat(min)}
                max={parseFloat(max)}
                step={parseFloat(step)}
                renderMark={mark => {
                    return prefix + mark + suffix;
                }}
                valueLabelDisplay="on"
                valueLabelFormat={val => {
					if (!valyears && !valmeses) {
						return '0 meses'
					}
					if (valyears === 0) {
						return suffix;
					}
					if (val === 60) {
						return 'Más de 5 años'
					}
					return prefix + suffix
                }}
                marks={marks === 'yes' ? true : marks === 'no' ? false : customMarks}
                renderTooltip={mark => {
                    return prefix + mark + suffix;
                }}
                value={typeof val === 'undefined' ? 0 : parseFloat(val)}
                onChange={e => {
                    setVal(e.target.value);
                    checkfieldValidation(e.target.value);
                }}
			/>
		</div>
	);
};
export default SingleRangeSliderDisplay;