import { ChevronRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react'

export default function Header() {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    const handleClick = (label) => {
        console.log(`${label}`);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer); 
    }, [search]);

    useEffect(() => {
        if (debouncedSearch) {
            console.log(`Search input: ${debouncedSearch}`);
        }
    }, [debouncedSearch]);

    const breadcrumbItems = [
        { label: 'WorkSpace', log: 'Navigate to WorkSpace' },
        { label: 'Folder 2', log: 'Navigate to Folder 2' },
        { label: 'Spreadsheet 3', log: 'Open to Spreadsheet 3' },
    ];


    return (
        <header className="w-full flex justify-between items-center px-4 py-2 bg-white border-b-2 border-gray-200 text-sm">
            <div className="font-semibold flex items-center gap-2">
                <img alt="Sidebar Icon" className="px-2" src="/Panel.svg" onClick={() => handleClick('Clicked Panel')} />
                    {breadcrumbItems.map((item, index) => (
                        <div key={item.label} className='flex items-center gap-1'>
                            <span className="text-gray-400 cursor-pointer hover:underline"
                                 onClick={() => handleClick(item.log)} >
                                    {item.label}
                            </span>
                            {index !== breadcrumbItems.length - 1 && (
                                <span className="flex items-center text-gray-400">
                                    <ChevronRight size={16} />
                                </span>
                            )}
                        </div>
                    ))}
                    <span className="text-gray-400 text-lg tracking-wider ml-1 -translate-1 leading-none">...</span>
            </div>

            <div className="flex items-center gap-2 pr-3">
                <div className="bg-[#F6F6F6] flex items-center gap-2 p-2.5 rounded-lg text-gray-500 w-[165px]">
                    <Search size={16} />
                    <input placeholder="Search within sheet"
                        className="text-xs bg-transparent outline-none placeholder:text-gray-400 w-[105px]"
                        type="text" value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <img alt="Notifications" className="cursor-pointer" src="/Notification_bell.svg" onClick={() => handleClick('Opening Notifications...')} />
                <img alt="Profile" className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer" src="/Ellipse-1.svg" onClick={() => handleClick('Opening profile picture...')} />
                <div className="flex flex-col leading-tight cursor-pointer" onClick={() => handleClick('Opening profile info of John Doe...')}>
                    <div className="text-xs">John Doe</div>
                    <div className="text-gray-400 text-[10px]">john.doe...</div>
                </div>
            </div>
            
        </header>
    )
}