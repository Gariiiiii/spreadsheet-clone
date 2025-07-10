import SheetViewBar from './SheetViewBar'
import SheetHeader from './SheetHeader'
import Footer from './Footer'
import MainTable from './MainTable'

export default function SpreadsheetTable() {
    
    return (
        <div className='flex-1 overflow-x-auto w-[99%] scrollbar-hide'>
            <SheetViewBar />
            <SheetHeader />
            <MainTable />
            <Footer />
        </div>
    )
}
