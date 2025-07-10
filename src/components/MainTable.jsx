import { useEffect, useState } from 'react';

export default function MainTable() {
    const [activeCell, setActiveCell] = useState({ row: 8, col: 2});

    const data = [
        {
            task: 'Launch social media campaign for product',
            date: '15-11-2024',
            status: 'In-process',
            assignee: 'Aisha Patel',
            website: 'www.aishapatel.com',
            manager: 'Sophie Choudhury',
            priority: 'Medium',
            deadline: '20-11-2024',
            budget: '6,200,000 ₹',
        },
        {
            task: 'Update press kit for company redesign',
            date: '28-10-2024',
            status: 'Need to start',
            assignee: 'Irfan Khan',
            website: 'www.irfankhan.com',
            manager: 'Tejas Pandey',
            priority: 'High',
            deadline: '30-10-2024',
            budget: '3,500,000 ₹',
        },
        {
            task: 'Finalize user testing feedback for application',
            date: '05-12-2024',
            status: 'In-process',
            assignee: 'Mark Johnson',
            website: 'www.markjohnson.com',
            manager: 'Rachel Lee',
            priority: 'Medium',
            deadline: '10-12-2024',
            budget: '4,750,000 ₹',
        },
        {
            task: 'Design financial report for Q4',
            date: '10-01-2025',
            status: 'Complete',
            assignee: 'Emily Green',
            website: 'www.emilygreen.com',
            manager: 'Tom Wright',
            priority: 'Low',
            deadline: '15-01-2025',
            budget: '5,900,000 ₹',
        },
        {
            task: 'Prepare financial report for Q4',
            date: '25-01-2025',
            status: 'Blocked',
            assignee: 'Jessica Brown',
            website: 'www.jessicabrown.com',
            manager: 'Kevin Smith',
            priority: 'Low',
            deadline: '30-01-2025',
            budget: '2,800,000 ₹',
        }
    ];

    useEffect(() => {
        const handleArrowNavigation = (e) => {
            if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;

            e.preventDefault();
            let { row, col } = activeCell;

            if (e.key === 'ArrowRight') col++;
            else if (e.key === 'ArrowLeft') col = col > 0 ? col - 1 : 0;
            else if (e.key === 'ArrowDown') row++;
            else if (e.key === 'ArrowUp') row = row > 1 ? row - 1 : 1;

            setActiveCell({ row, col });
        };

        window.addEventListener('keydown', handleArrowNavigation);
        return () => window.removeEventListener('keydown', handleArrowNavigation);
    }, [activeCell]);



    const statusStyles = {
        'In-process': 'bg-[#FFF3D6] text-[#85640B]',
        'Need to start': 'bg-[#E2E8F0] text-[#475569]',
        'Complete': 'bg-[#D3F2E3] text-[#0A6E3D]',
        'Blocked': 'bg-[#FFE1DE] text-[#C02727]',
    };

    const priorityStyles = {
        'High': 'text-[#D43D1E]',
        'Medium': 'text-[#C29210]',
        'Low': 'text-[#1087C2]',
    };

    const emptyRows = [];
    for (let i = data.length + 1; i <= 1000; i++) {
        emptyRows.push(
            <div className="flex text-sm h-[36px]" key={`empty-${i}`}>
                <div
                    onClick={() => {
                        console.log(`Clicked cell [Row ${i}, Col 1]`);
                        setActiveCell({ row: i, col: 0 });
                    }}
                    className={`px-2 py-1 text-center bg-gray-50 border-r border-[#eeeeee] text-[#757575] font-medium w-[30px] ${
                        activeCell.row === i && activeCell.col === 0 ? 'inset 0 0 0 2px #6C8B70' : ''
                    }`}>

                    {i}
                </div>

                {Array(10).fill().map((_, idx) => {
                    const isLastCol = idx === 9;
                    return (
                        <div
                            key={idx}
                            onClick={() => {
                                console.log(`Clicked cell [Row ${i}, Col ${idx + 2}]`);
                                setActiveCell({ row: i, col: idx + 1 });
                            }}
                            className="px-2 py-1 border border-[#f6f6f6]"
                            style={{
                                width: idx === 0 ? '300px' : '150px',
                                ...(isLastCol && {
                                    borderStyle: 'solid dashed',
                                    borderColor: 'rgb(246, 246, 246) rgb(203, 203, 203)',
                                    borderLeftWidth: '2px',
                                    borderRightWidth: '2px'
                                }),
                                boxShadow: activeCell.row === i && activeCell.col === idx + 1 ? 'inset 0 0 0 2px #6C8B70' : ''
                            }}
                        >
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="overflow-y-auto mb-10">
            <div className="w-full max-h-[calc(100vh-180px)] overflow-y-scroll scrollbar-hide">
                {data.map((row, i) => (
                    <div className="flex text-sm h-[36px]" key={i}>
                        {[
                            { val: i + 1, width: '30px' },
                            { val: row.task, width: '300px' },
                            { val: row.date, width: '150px', align: 'text-right' },
                            {
                                val: (
                                    <span className={`font-medium py-1 px-2 text-xs rounded-2xl ${statusStyles[row.status] || ''}`}>
                                        {row.status}
                                    </span>
                                ), width: '150px', center: true
                            },
                            { val: row.assignee, width: '150px' },
                            { val: <span className="underline">{row.website}</span>, width: '150px' },
                            { val: row.manager, width: '150px' },
                            {
                                val: (
                                    <span className={`font-semibold ${priorityStyles[row.priority] || ''}`}>
                                        {row.priority}
                                    </span>
                                ), width: '150px', center: true
                            },
                            { val: row.deadline, width: '150px', align: 'text-right' },
                            { val: row.budget, width: '150px', align: 'text-right' },
                            {
                                val: <span className="italic text-sm text-white">...</span>,
                                width: '150px',
                                extraStyle: {
                                    borderStyle: 'solid dashed',
                                    borderColor: 'rgb(246, 246, 246) rgb(203, 203, 203)',
                                    borderLeftWidth: '2px',
                                    borderRightWidth: '2px'
                                },
                                center: true
                            }
                        ].map((cell, colIdx) => (
                            <div
                                key={colIdx}
                                onClick={() => {
                                    console.log(`Clicked cell [Row ${i + 1}, Col ${colIdx + 1}]`);
                                    setActiveCell({ row: i + 1, col: colIdx });
                                }}
                                className={`px-2 py-1 truncate border border-[#f6f6f6] ${cell.align || 'text-left'} ${cell.center ? 'flex items-center justify-center' : ''}`}
                                style={{
                                    width: cell.width,
                                    ...(cell.extraStyle || {}),
                                    boxShadow: activeCell.row === i + 1 && activeCell.col === colIdx ? 'inset 0 0 0 2px #6C8B70' : ''
                                }}
                            >
                                {cell.val}
                            </div>
                        ))}
                    </div>
                ))}

                {emptyRows}
            </div>
        </div>
    );
}
