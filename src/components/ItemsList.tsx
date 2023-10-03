import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { addItem } from "../redux/selected";

export interface Item {
  id: number;
  title: string;
  subtitle: string;
}

interface Props {
  data: Item[];
}

const ItemsList = ({ data }: Props) => {
  const [filteredList, setFilteredList] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  const handleClick = (id: number, title: string) => {
    dispatch(
      addItem({
        id,
        title,
      })
    );
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let tempData = [...data];
    tempData = tempData.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        item.subtitle.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    });

    setFilteredList(tempData);
  };

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <TextField
          fullWidth
          label="Search..."
          type="search"
          onChange={handleSearch}
        />
      </Box>
      <List sx={{ padding: 4, overflowY: "auto", maxHeight: "100%" }}>
        {filteredList.map((d) => (
          <ListItemButton onClick={() => handleClick(d.id, d.title)}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={d.title} secondary={d.subtitle} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default ItemsList;
