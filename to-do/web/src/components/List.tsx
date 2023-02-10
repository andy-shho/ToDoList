import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function List(props) {
  const [items, setItems] = useState([]);

  const columns: GridColDef[] = [
    {field: 'item', headerName: 'Task', width: 150},
    {field: 'comments', headerName: 'Comments', width: 200}
  ]

  return(
    <div style= {{height: 400, width: '100%'}}>
      <DataGrid
        rows = {items}
        columns = {columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  )
}