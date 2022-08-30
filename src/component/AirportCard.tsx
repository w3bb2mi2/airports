import { useNavigate } from "react-router-dom"
import { IAirport } from "../models/models"
import classes from './AirportCard.module.css'

interface AirportCardProps {
    airoport: IAirport
}

export function AirportCard({ airoport }: AirportCardProps) {
    const navigate = useNavigate()
    const clickHandler = () => navigate(`/airport/${airoport.id}`)
    return (
        <div className={classes.card} onClick={clickHandler}>
            <p className="text-lg font-bold">Аэропорт: {airoport.attributes.name}</p>
            <p className="text-lg ">Город: {airoport.attributes.city}</p>
            <p className="text-lg">Страна: {airoport.attributes.country}</p>
            <p className="text-lg">Время: {airoport.attributes.timezone}</p>
        </div>
    )
}