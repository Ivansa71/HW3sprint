import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера
                width: '147px',
                height: 4,
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #00CC22',
                    '&:before': {
                        display: 'none',
                    },
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    border: 0,
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
