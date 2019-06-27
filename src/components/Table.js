import React, { useState } from 'react'
import ReactDataGrid from 'react-data-grid'

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title', editable: true, editor: true },
  { key: 'count', name: 'Count' }
];

const Table = () => {
  const initialRows = [{id: 0, title: 2, count: 20}, {id: 1, title: 3, count: 40}, {id: 2, title: 4, count: 60}];

  const [rows, setRows] = useState(initialRows)

  const updateCount = _rows => _rows.map(o => ({ ...o,  count: o.title * 2 }))

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
      let _rows = rows.slice()
      for (let i = fromRow; i <= toRow; i++) {
        _rows[i] = { ..._rows[i], ...updated };
      }
      _rows = updateCount(_rows)
      setRows(_rows)
  };

  return (<ReactDataGrid
  enableCellSelect={true}
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={3}
  minHeight={150}
  onGridRowsUpdated = {handleGridRowsUpdated}
    />);
}

export default Table
