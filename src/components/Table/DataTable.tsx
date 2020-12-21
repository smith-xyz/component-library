import React from 'react'
import './Styles/base.scss'
import './Styles/sizes.scss'
import './Styles/colors.scss'

export interface Header {
    key: string 
    label?: string 
}

interface TableStyle {
    size: string
}

interface DataTableProps<T> {
    headers: Header[]
    rows: any
    style: TableStyle
}

const DataTable = <T extends {[x in string | number]: any}>(props: DataTableProps<T>) => {
    const columnHeaders = props.headers.map(h =>
        <th key={h.key}>
            <span>
                {h.label ?? h.key}
            </span>
        </th>
    )

    const rows = props.rows.length > 0 ? props.rows.map((row: any, i: number) => {
        return <tr key={i}>{Object.keys(row).map((k, id) => {
            return <td key={id}>{row[k]}</td>
        })}</tr>
    }) : null

    return (
        <div className="data-table-container">
            <table className={props.style.size ?? ""}>
                <thead>
                    <tr>
                        {columnHeaders}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable