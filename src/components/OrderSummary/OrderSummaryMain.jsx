import Card from '../shared/Card';

function OrderSummaryMain({ placedOrder }) {
    const pendingOrder = placedOrder.filter((o) => o.status === 'PENDING').length;
    const deliveredOrder = placedOrder.filter((o) => o.status === 'DELIVERED').length;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <Card count={placedOrder.length} label="Total Order" color="yellow" />
                <Card count={pendingOrder} label="Pending" color="red" />
                <Card count={deliveredOrder} label="Delivered" color="green" />
            </div>
        </div>
    );
}

export default OrderSummaryMain;
