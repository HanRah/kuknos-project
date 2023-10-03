import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { RootState } from "../redux/store";
import { removeItem } from "../redux/selected";

const SelectedList = () => {
  const selected = useSelector((state: RootState) => state.selected.data);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Box>
        <Typography variant="body1">Tap to delete</Typography>
      </Box>
      <Stack spacing={1} direction={"row"} useFlexGap flexWrap={"wrap"}>
        {selected.map((s) => (
          <Chip
            color="primary"
            label={s.title}
            onClick={() => handleDelete(s.newId)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SelectedList;
