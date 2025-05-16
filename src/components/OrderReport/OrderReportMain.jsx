import { useState } from "react";
import Icon from "../shared/Icon";
import OrderTable from "./OrderTable";

function OrderReportMain({ placedOrder, setPlacedOrder }) {
    const [filterType, setFilterType] = useState("all");

    const getFilteredData = () => {
        if (filterType === "delivered") {
            return placedOrder.filter((o) => o.status === "DELIVERED");
        } else if (filterType === "pending") {
            return placedOrder.filter((o) => o.status === "PENDING");
        } else {
            return placedOrder;
        }
    };

    const handleFilterData = (value) => {
        setFilterType(value);
    };

    const filterData = getFilteredData();

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Order Reports</h2>

                <div className="flex gap-4 items-center">
                    <Icon name="filterIcon" />
                    <select
                        value={filterType}
                        onChange={(e) => handleFilterData(e.target.value.toLowerCase())}
                        className="bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm px-2 py-1 text-sm"
                    >
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="delivered">Delivered</option>
                    </select>
                </div>
            </div>

            <OrderTable
                filterData={filterData}
                placedOrder={placedOrder}
                setPlacedOrder={setPlacedOrder}
            />
        </div>
    );
}

export default OrderReportMain;
