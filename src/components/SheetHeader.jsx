import { ChevronDown, Globe } from 'lucide-react'

const columns = [
    { label: 'Job Request', icon: '/Briefcase.svg', isImage: true, bg: 'bg-gray-100', width: 'w-[300px]' },
    { label: 'Submitted', icon: '/Calendar.svg', isImage: true, bg: 'bg-gray-100' },
    { label: 'Status', icon: <ChevronDown size={16} color="#ffffff" />, isImage: false, isLucide: true, rounded: true, bg: 'bg-gray-100' },
    { label: 'Submitter', icon: '/Briefcase.svg', isImage: true, bg: 'bg-gray-100' },
    { label: 'URL', icon: <Globe size={16} color="#AFAFAF" />, isImage: false, isLucide: true, bg: 'bg-gray-100' },
    { label: 'Assigned', icon: '/Emoji.svg', isImage: true, bg: 'bg-[#E8F0E9]' },
    { label: 'Priority', bg: 'bg-[#EAE3FC]' },
    { label: 'Due Date', bg: 'bg-[#EAE3FC]' },
    { label: 'Est. Value', bg: 'bg-[#FFE9E0]' },
];


export default function SheetHeader() {

    const handleClick = (label) => {
        console.log(`Clicked: ${label}`);
    };

    const noChevronLabels = ['Assigned', 'Priority', 'Due Date', 'Est. Value'];

    return (
        <div className="flex sticky top-10 z-20 bg-white">
            <div className="px-2 py-1 text-lg text-[#BCBCBC] bg-gray-100 border border-gray-50 text-center w-[30px]">#</div>

            {columns.map((col, idx) => {
                const width = col.width || 'w-[150px]';
                const showChevron = !noChevronLabels.includes(col.label);

                return (
                    <div key={idx}
                        onClick={() => handleClick(col.label)}
                        className={`relative flex items-center justify-between px-2 py-1 text-sm border border-gray-50 truncate ${col.bg} ${width} cursor-pointer`} >
                        
                        <div className="flex items-center gap-1 text-gray-500 font-medium">
                            {/* {col.icon && !col.isLucide && (
                                <span>
                                <img className="w-5" src={col.icon} alt={col.label} />
                                </span>
                            )} */}

                            {col.isImage && typeof col.icon === "string" && (
                                <span>
                                    <img className="w-5" src={col.icon} alt={col.label} />
                                </span>
                            )}

                            {col.isLucide && (
                                <span className={col.rounded ? 'bg-[#BCBCBC] rounded-full p-[2px]' : ''}>
                                {col.icon}
                                </span>
                            )}

                            <span>{col.label}</span>
                        </div>

                        {showChevron && (
                            <span>
                                <ChevronDown size={16} color="#AFAFAF" />
                            </span>
                        )}

                        <div className="absolute top-0 right-0 h-full w-2 cursor-col-resize"></div>
                    </div>
                );
            })}

            <div className="relative flex items-center justify-between px-2 py-1 text-sm border border-gray-50 truncate w-[150px]">
                <div className="flex items-center gap-1 cursor-pointer">
                    <span></span>
                </div>
                <div className="absolute top-0 right-0 h-full w-2 cursor-col-resize"></div>
            </div>
        </div>
    );
}
