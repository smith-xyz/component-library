import React from 'react'
import './Styles/base.scss'
import './Styles/sizes.scss'
import './Styles/colors.scss'

export interface Header {
    key: string 
    label?: string 
}

interface DataTableProps<T> {
    headers: Header[]
    rows: Object[]
    size?: string
    dark?: boolean
    hover?: boolean
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
        return <tr className={props.hover ? "hover-effect" : ""} key={i}>{Object.keys(row).map((k, id) => {
            return <td key={id}>{row[k]}</td>
        })}</tr>
    }) : null

    const size = props.size ? props.size : "sm"

    return (
        <React.Fragment>
            <div className="data-table-container">
                <table className={props.dark ? "dark-table " + size : "light-table " + size}>
                    <thead>
                        <tr>
                            {columnHeaders}
                        </tr>
                    </thead>
                    <tbody className="data-rows">
                        {rows}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default DataTable