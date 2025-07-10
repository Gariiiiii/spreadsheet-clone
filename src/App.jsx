import './App.css'
import Header from './components/Header'
import SpreadsheetTable from './components/SpreadSheetTable'
import Toolbar from './components/Toolbar'

function App() {

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <Toolbar />
            <SpreadsheetTable />
        </div>
    )
}

export default App
