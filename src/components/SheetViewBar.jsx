import { Link2, Plus, RefreshCcw } from 'lucide-react';

export default function SheetViewBar() {
    
    const handleClick = (label) => {
        console.log(`${label}`);
    };

    return (
        <div className="flex w-full sticky top-0 z-20 ">
            <div className="px-3.5 py-1 text-sm text-gray-700 truncate border border-gray-200 "></div>

            <div className="flex px-2 py-1 text-sm truncate gap-2 items-center bg-[#e2e2e2] border border-gray-200 w-[750px]">
                <div className="flex items-center gap-1 bg-[#eeeeee] py-1 px-1.5 rounded-md border border-gray-200 cursor-pointer"
                    onClick={()=> handleClick("Open Q3 Financial Overview")}>
                    <Link2 size={16} color="#1A8CFF" />
                    <span className="text-gray-500">Q3 Financial Overview</span>
                </div>
                <RefreshCcw size={16} color="#FA6736" className='cursor-pointer'
                    onClick={()=> handleClick("Refreshed: Sheet Data Updated")}></RefreshCcw>
            </div>

            <div className="px-2 py-1 text-sm text-gray-700 truncate border border-gray-200 w-[150px]" ></div>

            <div className="flex px-2 py-1 text-sm text-gray-600 truncate items-center bg-[#d2e0d4] justify-center gap-1 border border-gray-200 cursor-pointer w-[150px]"
                onClick={() => handleClick("Action: ABC triggered")}>
                <img alt="New Action" className="w-5 h-5 cursor-pointer filter grayscale brightness-0 invert-[50%]" src="/Arrow-Split.svg" />
                <span className="font-[500] tracking-wide">ABC</span>
                <span className="text-gray-400 text-lg tracking-wider ml-2 -translate-1">...</span>
            </div>

            <div className="px-2 py-1 text-sm text-gray-600 truncate flex items-center justify-center gap-1 bg-[#DCCFFC] border border-gray-200 cursor-pointer w-[300px]"
            onClick={() => handleClick("Interaction: Question section opened")} >
                <img alt="Answer a question" className="w-5 h-5 cursor-pointer" src="/Arrow-Split.svg" />
                <span className="font-[500] tracking-wide">Answer a question</span>
                <span className="text-gray-400 text-lg tracking-wider ml-2 -translate-1">...</span>
            </div>

            <div className="px-2 py-1 text-sm text-gray-700 truncate border border-gray-200 flex items-center justify-center bg-[#fac2af] gap-1 cursor-pointer w-[150px]"
                onClick={() => handleClick("Extract command executed")}>
                <img alt="Extract" className="w-5 h-5 cursor-pointer" src="/Arrow-Split.svg" />
                <span className="font-[500] tracking-wide">Extract</span>
                <span className="text-gray-400 text-lg tracking-wider ml-2 -translate-1">...</span>
            </div>

            <div className="px-2 py-1 text-sm text-gray-700 truncate border border-gray-200 bg-[#eeeeee] flex items-center justify-center cursor-pointer w-[150px]"
                onClick={() => handleClick("Add: New formula or action initiated")}>
                <Plus size={24} color="#04071E" />
            </div>
            
        </div>
    );
}
