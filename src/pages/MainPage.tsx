import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { AirportCard } from "../component/AirportCard";
import { AirportFilter } from "../component/AirportFilter";
import { AirportSearch } from "../component/AirportSearch";
import { fetchAirports } from "../store/actions/airportActions";
import { useAppDispatch, useAppSelector } from "../store/hook/redux";


export function MainPage() {
    const dispatch = useAppDispatch()
    const { airports, loading, error, currentPage, total } = useAppSelector(state => state.airport)
    const [page, setPage] = useState(1)
    console.log({page})
    useEffect(() => {
        dispatch(fetchAirports(page))
    }, [dispatch, page])


    const pageCount = total
    const pageChangeHandler = ({ selected }: { selected: number }) => {
        setPage(selected + 1)
    }
    return (
        <div className="container mx-auto max-w-[760px] pt-5">
           
            {loading && <p className="text-center text-lg">Loading...</p>}
            {error && <p className="text-center text-red-500">Error...</p>}
            {!loading &&
                airports.map(airport => <AirportCard airoport={airport} key={airport.id} />)
            }<div className="">
                <ReactPaginate
                    activeClassName="bg-gray-500"
                    containerClassName="flex"
                    previousClassName="py-1 px-2 border mr-2"
                    nextClassName="py-1 px-2 border mr-2"
                    pageClassName="py-1 px-2 border mr-2"
                    breakLabel="..."
                    nextLabel="вперед>"
                    onPageChange={pageChangeHandler}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< назад"

                //renderOnZeroPageCount={null}
                />
            </div>


        </div>
    )
}