
import EmployeesAddForm from '../emp-add-form/emp-add-form';
import EmployeesList from '../emp-list/emp-list';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';

import './app.css';


function App() {
    return(
        <div className="app">
            <AppInfo/>
            <div className='search-panel'>
               <SearchPanel/>
               <AppFilter/> 
            </div>
            <EmployeesList/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App; 