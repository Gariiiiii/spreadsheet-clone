import { useState } from 'react'

export default function Footer() {
    const [tabs, setTabs] = useState(["All Orders", "Pending", "Reviewed", "Arrived"]);
    const [active, setActive] = useState("All Orders");
    const [sheetCount, setSheetCount] = useState(5);
    const [editingTab, setEditingTab] = useState(null); 
    const [editText, setEditText] = useState("");

    const handleAddSheet = () => {
        const newSheet = `Sheet${sheetCount}`;
        console.log(`Clicked -> create a new sheet`);
        setTabs(prev => [...prev, newSheet]);
        setActive(newSheet);
        setSheetCount(prev => prev + 1);
    };

    const handleRename = (index) => {
        if (editText.trim()) {
            const updatedTabs = [...tabs];
            const oldName = updatedTabs[index];
            const newName = editText.trim();

            updatedTabs[index] = newName;
            setTabs(updatedTabs);
            setEditingTab(null);

            console.log(`Renamed: '${oldName}' to '${newName}'`);
        }
    };

    const handleTabClick = (tab) => {
        console.log(`Clicked: navigate to ${tab}`);
        setActive(tab);
    };

    return (
        <div className="fixed bottom-0 z-10 w-full h-[44px] flex items-center pl-7.5 pr-2 py-1 border-t border-gray-300 bg-white shadow-sm overflow-x-auto overflow-y-hidden">
            {tabs.map((tab, index) => (
                <div key={index}
                    onDoubleClick={() => {
                        setEditingTab(index);
                        setEditText(tab);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer font-medium transition-all duration-400 ease-in-out border-t capitalize ${
                        active === tab
                            ? 'bg-[#E8F0E9] text-[#3E5741] border-[#3E5741] border-t-2'
                            : 'text-[#757575] hover:bg-gray-200 border-transparent'
                    }`}
                    onClick={() => handleTabClick(tab)}
                >
                    {editingTab === index ? (
                        <input
                            autoFocus
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onBlur={() => handleRename(index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleRename(index);
                            }}
                            className="outline-none bg-transparent border-b border-[#3E5741] text-[#3E5741] w-full"
                        />
                    ) : (
                        tab
                    )}
                </div>
            ))}

            <button
                onClick={handleAddSheet}
                className="w-[32px] h-[32px] cursor-pointer transition-all duration-400 ease-in-out text-2xl text-[#757575] hover:bg-gray-200 flex items-center justify-center ml-2"
            >
                +
            </button>
        </div>
    )
}
