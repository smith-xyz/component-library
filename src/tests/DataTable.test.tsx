import React from 'react'
import { render, screen } from '@testing-library/react';
import DataTable from '../components/Table/DataTable'

describe('DataTable tests', () => {

    const headers = [
        { key: 'id', label: 'ID' },
        { key: 'column1', label: 'Column 1' }
    ]

    const dataRows = [
        { id: 1, column1: 'Test 1' },
        { id: 2, column1: 'Test 2' },
        { id: 3, column1: 'Test 3' }
    ]

    it('renders data table with default size of sm and theme of light' , () => {
        const component = render(<DataTable headers={headers} rows={dataRows} />)
        const style = component.getByRole('table')
        expect(style).toHaveClass("light-table sm")
    })

    it('renders with dark theme and size if provided', () => {
        const component = render(<DataTable dark size={"lg"} headers={headers} rows={dataRows} />)
        const style = component.getByRole('table')
        expect(style).toHaveClass("dark-table lg")
    })

    it('renders correct data as table rows', () => {
        const component = render(<DataTable dark size={"lg"} headers={headers} rows={dataRows} />)
        const rows = component.queryAllByRole('row')
        expect(rows.length).toEqual(dataRows.length + 1) // plus 1 for the column header row
    })
})