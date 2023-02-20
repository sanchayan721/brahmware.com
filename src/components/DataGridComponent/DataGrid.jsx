import { styled } from "@mui/material";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { colors } from "../../muiTheme/theme";


const DataGrid = styled(MuiDataGrid)(() => (
    {
        "& .MuiDataGrid-row:hover": {
            backgroundColor: colors.primary__hover_bg,
            // color: "red"
        },

        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        },

        '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none',
        },
    }));

export default DataGrid;