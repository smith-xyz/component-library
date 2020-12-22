import CustomNavBar from './components/Navbar/CustomNavBar'
import DataTable from './components/Table/DataTable'
import './App.scss'

const headers = [
  { key: 'id', label: 'Id' },
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
  { key: 'col1', label: 'col1' },
  { key: 'col2', label: 'col2' },
  { key: 'col3', label: 'col3' },
  { key: 'col4', label: 'col4' },
  { key: 'col5', label: 'col5' },
]


const testData = [
  { id: 1, name: 'Philo', type: 'beagle-lab', col1: 1234, col2: 12345, col3: 12345, col4: 12345, col5: 12345 },
  { id: 2, name: 'Henry', type: 'pitbull', col1: 1234, col2: 12345, col3: 12345, col4: 12345, col5: 12345 },
  { id: 3, name: 'Jackson', type: 'golden-retriever', col1: 1234, col2: 12345, col3: 12345, col4: 12345, col5: 12345 },
  { id: 4, name: 'Franky', type: 'korgy', col1: 1234, col2: 12345, col3: 12345, col4: 12345, col5: 12345 }
]

const App = () => {
  return (
    <div className="App">
      <CustomNavBar />
      <DataTable dark headers={headers} rows={testData} size="sm" />
      <DataTable headers={headers} rows={testData} size="md" />
      <DataTable headers={headers} rows={testData} size="lg" />
    </div>
  );
}

export default App;
