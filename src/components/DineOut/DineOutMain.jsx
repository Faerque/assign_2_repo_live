import { useState } from "react"
import CreateOrderMain from "../CreateOrder/CreateOrderMain"
import OrderReportMain from "../OrderReport/OrderReportMain"
import OrderSummaryMain from "../OrderSummary/OrderSummaryMain"
import Navbar from "../shared/Navbar"

function DineOutMain() {

    const [placedOrder, setPlacedOrder] = useState([])

    return (
        <>
            <div className="container mx-auto px-4 h-screen flex flex-col">
                <Navbar />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
                    <CreateOrderMain placedOrder={placedOrder} setPlacedOrder={setPlacedOrder} />
                    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                        <OrderSummaryMain placedOrder={placedOrder} />
                        <OrderReportMain placedOrder={placedOrder} setPlacedOrder={setPlacedOrder} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DineOutMain