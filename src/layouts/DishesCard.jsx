import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import Button from './Button'

const DishesCard = (props) => {
    return (
        <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
            <img className='' src={props.img} alt="image" />
            <div className='space-y-4'>
                <h3 className='font-semibold text-xl pt-6'>{props.title}</h3>
                <div className='flex flex-row'>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarHalf className='text-brightColor'/>
                </div>
                <div className='flex flex-row justify-between items-center gap-4'>
                    <h3 className=' font-semibold text-lg text-brightColor'>{props.price}</h3>
                    <Button title="Buy Now" />
                </div>
            </div>
        </div>
    )
}

export default DishesCard
