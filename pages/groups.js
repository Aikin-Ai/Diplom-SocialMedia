import { Grid, Typography, Divider, Avatar, Button, Card, CardContent, Tabs, Tab } from "@mui/material";
import React from "react";

export async function getServerSideProps(context) {

    const groups = [
        {
            id: 1,
            name: "Группа 1",
            icon: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            memberAmount: 10,
            isUserInGroup: false,
        },
        {
            id: 2,
            name: "Группа 2",
            icon: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
            memberAmount: 51,
            isUserInGroup: true,
        },
    ]

    return {
        props: {
            groups
        },
    }
}

export default function Groups({ groups }) {

    const [onlyUserGroups, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <Grid container justifyContent="center" alignItems="center" item xs>
                <Tabs value={onlyUserGroups} onChange={handleChange}>
                    <Tab label="Все группы" />
                    <Tab label="Мои группы" />
                </Tabs>
                <Button variant="contained">Создать группу</Button>
            </Grid>
            {groups.map(group => {
                var toShow = true;
                if (onlyUserGroups === 1) {
                    toShow = group.isUserInGroup;
                }
                if (toShow) {
                    return (
                        <React.Fragment key={group.id}>
                            <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
                            <Card>
                                <CardContent>
                                    <Grid container spacing={2} className="group">
                                        <Grid item>
                                            <Avatar
                                                src={group.icon}
                                                alt="avatar"
                                                sx={{ width: 120, height: 120 }}
                                            />
                                        </Grid>
                                        <Grid container direction="column" item xs zeroMinWidth spacing={2}>
                                            <Grid item>
                                                <Typography>{group.name}</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography>Участников: {group.memberAmount}</Typography>
                                            </Grid>
                                            <Grid container spacing={2} item>
                                                <Grid item>
                                                    {group.isUserInGroup ? (
                                                        <Button variant="contained" color="secondary">Покинуть</Button>
                                                    ) : (
                                                        <Button variant="contained" color="primary">Вступить</Button>
                                                    )}
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="outlined" color="primary">Подробнее</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </React.Fragment>
                    )
                }
            })}
        </Grid>
    )
}