import { ChevronsRight, EyeOff, ArrowDownUp, ListFilter, ArrowDownToLine, ArrowUpToLine } from "lucide-react";

export default function Toolbar() {

    const handleClick = (label) => {
        console.log(`${label} clicked`);
    };

    const leftButtons = [
        { icon: <ChevronsRight size={16} />, label: "Tool bar", extraClass: "border-r-2 border-gray-300 px-3" },
        { icon: <EyeOff size={16} />, label: "Hide fields" },
        { icon: <ArrowDownUp size={16} />, label: "Sort" },
        { icon: <ListFilter size={16} />, label: "Filter" },
        {
            icon: <img alt="Cell view" className="w-5 h-5 cursor-pointer" src="/Arrow-Autofit.svg" />,
            label: "Cell view",
            noIconSize: true
        },
    ];

    return (
        <div className="flex gap-2 px-3 py-1.5 justify-between border-b border-[#eeeeee] text-sm">
            <div className="flex items-center gap-6 text-gray-800">
                {leftButtons.map((btn) => (
                    <button
                        key={btn.label}
                        className={`flex items-center justify-center gap-2 cursor-pointer ${btn.extraClass || ""}`}
                        onClick={() => handleClick(btn.label)} >
                            <span>{btn.label}</span>
                            {btn.label === "Tool bar" && <ChevronsRight size={16} />}
                            {btn.label !== "Tool bar" && btn.icon}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-2">
                <button className="border border-gray-200 flex items-center justify-center cursor-pointer gap-2 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white transition duration-400 ease-in-out"
                    onClick={() => handleClick("Import")} >
                    <ArrowDownToLine size={16} />
                    <span>Import</span>
                </button>
                <button className="border border-gray-200 flex items-center justify-center cursor-pointer gap-2 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white transition duration-400 ease-in-out"
                    onClick={() => handleClick("Export")} >
                    <ArrowUpToLine size={16} />
                    <span>Export</span>
                </button>
                <button className="group border border-gray-200 flex items-center justify-center cursor-pointer gap-2 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white transition duration-400 ease-in-out"
                    onClick={() => handleClick("Share")} >
                    <img alt="Share" className="w-5 h-5 cursor-pointer transition duration-400 ease-in-out group-hover:brightness-0 group-hover:invert" src="/Share.svg" />
                    <span>Share</span>
                </button>
                <button className="bg-[#4B6A4F] text-white flex items-center justify-center cursor-pointer gap-2 py-2 rounded-md px-6"
                    onClick={() => handleClick("New Action")} >
                    <img alt="New Action" className="w-5 h-5 cursor-pointer " src="/Arrow-Split.svg" />
                    <span>New Action</span>
                </button>
            </div>
        </div>
    );
}
