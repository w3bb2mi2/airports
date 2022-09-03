import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchAirportPage } from "../../store/actions/airportActions"
import { useAppSelector } from "../../store/hook/redux"



export function AirportDetailPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, error, loading } = useAppSelector(state => state.airportPage)
    const { airportCity, airportCountry, airportName } = data
    useEffect(() => {
        dispatch(fetchAirportPage(id))
    }, [])
    return (
        <>
            {loading && <p className="text-center text-lg">Loading...</p>}
            {!loading &&
                <div className="container mx-auto pt-5 max-w-[760px]">
                    <h2>Местонахождение: {airportCity}</h2>
                    <h2>Страна: {airportCountry}</h2>
                    <h2>Название Аэропорта: {airportName}</h2>

                    <div>
                        <Link to="/" >Домой</Link>
                    </div>
                </div>

            }



        </>

    )
}