import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
    return (
        <Box sx={{minWidth: "20%"}}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                </InputLabel>
                <NativeSelect
                    defaultValue={"(주)가교"}
                    inputProps={{
                        placeholder: "회사를 선택하세요"
                    }}
                >
                    <option value={"(주)가교"}>(주)가교</option>
                    <option value={"(주)가람테크"}>(주)가람테크</option>
                    <option value={"(주)가스트론"}>(주)가스트론</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}