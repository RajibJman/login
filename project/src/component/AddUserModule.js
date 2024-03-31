import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)({
  minWidth: 200,
  marginBottom: 16,
});

const StyledButton = styled(Button)({
  marginTop: 16,
});

function AddUserModule() {
  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/allData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user); // Logging user data to check structure
        setUsers(data.user);
      })
      .catch((error) => console.error("Error fetching user data:", error));

    fetch("http://localhost:3000/api/auth/topic")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error("Error fetching topic data:", error));
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const addUserModule = () => {
    if (selectedUser && selectedTopic) {
      const moduleData = {
        modules: [{ topicId: selectedTopic }] // Include the topic _id in the modules array
      };

      fetch(`http://localhost:3000/api/auth/allData/${selectedUser}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(moduleData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Modules updated for user:", data);
          handleDialogClose(); // Close the dialog after successful update
        })
        .catch((error) => console.error("Error updating modules:", error));
    }
  };

  return (
    <div>
      <StyledButton variant="contained" color="primary" onClick={handleDialogOpen}>
        Open Dialog
      </StyledButton>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Add Module for User</DialogTitle>
        <DialogContent>
          <StyledFormControl>
            <InputLabel id="userDropdownLabel">Select User</InputLabel>
            <Select
              labelId="userDropdownLabel"
              id="userDropdown"
              value={selectedUser}
              onChange={handleUserChange}
              fullWidth
            >
              {users.map((user) => (
                <MenuItem key={user._id} value={user._id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="topicDropdownLabel">Select Topic</InputLabel>
            <Select
              labelId="topicDropdownLabel"
              id="topicDropdown"
              value={selectedTopic}
              onChange={handleTopicChange}
              fullWidth
            >
              {topics.map((topic) => (
                <MenuItem key={topic._id} value={topic._id}>
                  {topic.topic}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addUserModule} color="primary">
            Add Module
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddUserModule;
