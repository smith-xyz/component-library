import React, { useState } from 'react'
import DataTable from './DataTable'

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

type Sizes = "sm" | "md" | "lg"

const TableIndex = () => {
    const [size, setSize] = useState<Sizes>("sm")
    const [darkTheme, setDarkTheme] = useState(false)

    const sizeChangeHandler = (size: HTMLSelectElement["value"]) => {
        switch (size) {
            case "sm":
                setSize("sm")
                break
            case "md":
                setSize("md")
                break
            case "lg":
                setSize("lg")
                break
        }
    }

    return (
        <React.Fragment>
            <div className="index-options-container">
                <h1>Set different Props!</h1>
                <button onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? "Light Theme" : "Dark Theme"}</button>
                <select value={size} onChange={e => sizeChangeHandler(e.target.value)}>
                    <option>sm</option>
                    <option>md</option>
                    <option>lg</option>
                </select>
            </div>
            <DataTable dark={darkTheme} headers={headers} rows={testData} size={size} />
        </React.Fragment>
    )
}

export default TableIndex