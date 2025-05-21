interface ServiceCardProps {
    title: string;
    icon: string;
    items: string[];
}

export function ServiceCard({ title, icon, items }: ServiceCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="hidden md:block text-4xl mb-4">{icon}</div>
            <h3 className="font-[Inter] text-xl text-indigo-600 font-bold mb-4">{title}</h3>
            <ul className="space-y-2 text-indigo-600">
                {items.map((item, index) => (
                    <li key={index} className="font-[Poppins] flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}