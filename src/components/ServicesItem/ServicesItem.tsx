import React from 'react'
import classes from './ServicesItem.module.css'

type ServicesItemProps = {
    id: number
    icon: string
    title: string
    description: string
    price: string
}

const ServicesItem = ({ id, icon, title, description, price }: ServicesItemProps) => {
    return (
        <div className={classes.services_item}>
            <div className="d-f jc-sb">
                <div className={classes.services_item_caption}>
                    <div><img src={icon} alt="services-item" /></div>
                    <h3 className={classes.services_item_title}>{title}</h3>
                </div>
                <div className={classes.services_item_call}>
                    <a href="" className="d-b"><img src="/images/call.png" alt="Call" /></a>
                    <div className={classes.call_title}>Book A Call</div>
                </div>
            </div>
            <p className={classes.services_item_desc}>{description}</p>
            <h4 className={classes.services_item_price}>Starts From ${price}</h4>
        </div>
    )
}

export default ServicesItem