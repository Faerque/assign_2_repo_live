function Card({ count, label, color }) {
    const textColor = `text-${color}-500`;
    const bgColor = `bg-${color}-800 bg-opacity-50 text-${color}-200`;

    return (
        <div
            key={count}
            className="bg-cardbg rounded-lg p-4 relative overflow-hidden animate-flash"
        >
            <div className={`text-5xl font-bold ${textColor} mb-2`}>
                {count}
            </div>
            <div className={`${bgColor} text-xs font-medium px-3 py-1 rounded-full inline-block`}>
                {label}
            </div>
        </div>
    );
}

export default Card;
