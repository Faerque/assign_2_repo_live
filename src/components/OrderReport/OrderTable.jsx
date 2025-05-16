
function OrderTable({ filterData, placedOrder, setPlacedOrder }) {


    const handleDelete = (id) => {
        const updated = placedOrder.filter((order) => order.id !== id);
        setPlacedOrder(updated);
    };

    const handleDeliver = (id) => {
        const updated = placedOrder.map((order) =>
            order.id === id ? { ...order, status: 'DELIVERED' } : order
        );
        setPlacedOrder(updated);
    };

    const calculateItemCount = (order) => order.items.length;
    const calculateAmount = (order) =>
        order.items.reduce((sum, item) => sum + item.price, 0);

    const latestCreatedAt =
        filterData.length > 0
            ? filterData.reduce((latest, order) =>
                new Date(order.createdAt) > new Date(latest.createdAt)
                    ? order
                    : latest
            ).createdAt
            : null;

    const sortedData =
        filterData.length > 0
            ? [...filterData].sort((a, b) => {
                if (a.status === 'PENDING' && b.status !== 'PENDING') return -1;
                if (a.status !== 'PENDING' && b.status === 'PENDING') return 1;
                return 0;
            })
            : [];

    return (
        <div className="bg-cardbg rounded-lg p-4">
            <div className="reports-container">
                <table className="min-w-full">
                    <thead>
                        <tr className="text-left text-sm">
                            <th className="pb-3 font-medium">ID</th>
                            <th className="pb-3 font-medium">Customer Name</th>
                            <th className="pb-3 font-medium">Items</th>
                            <th className="pb-3 font-medium">Amount</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {sortedData.map((order) => (
                            <tr
                                key={order.id}
                                className={`border-t border-gray-700 ${order.createdAt === latestCreatedAt ? "animate-flash" : ""
                                    }`}
                            >
                                <td className="py-3">{order.id}</td>
                                <td className="py-3">{order.customer}</td>
                                <td className="py-3">{calculateItemCount(order)}</td>
                                <td className="py-3">{calculateAmount(order)}</td>
                                <td className="py-3">
                                    <span
                                        className={
                                            order.status === "PENDING"
                                                ? "text-red-500"
                                                : "text-green-500"
                                        }
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-3">
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                    {order.status === "PENDING" && (
                                        <button
                                            onClick={() => handleDeliver(order.id)}
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer"
                                        >
                                            DELIVER
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}

                        {filterData.length === 0 && (
                            <tr className="border-t border-gray-700">
                                <td colSpan="6" className="py-6 text-center text-gray-400">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default OrderTable;
