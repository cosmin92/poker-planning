import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { NewGame } from "../types/NewGame";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grow,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { addNewGame } from "../service/Games";
import React from "react";

export const CreateGame = () => {
  const history = useHistory();
  const [gameName, setGameName] = useState("Prova");
  const [createdBy, setCreatedBy] = useState("Adrian");
  const [gameType, setGameType] = useState("Fibonacci");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const game: NewGame = {
      name: gameName,
      createdBy: createdBy,
      gameType: gameType,
    };
     const newGameId = await addNewGame(game);
     history.push(`/game/${newGameId}`);
  };

  return (
    <Grow in={true} timeout={1000}>
      <form onSubmit={handleSubmit}>
        <Card variant="outlined" className="CreateGameCard">
          <CardHeader
            className="CreateGameCardHeader"
            title="Create New Session"
            titleTypographyProps={{ variant: "h4" }}
          />
          <CardContent className="CreateGameCardContent">
            <TextField
              className="CreateGameTextField"
              required
              id="filled-required"
              label="Session Name"
              placeholder="Enter a session name"
              defaultValue={gameName}
              variant="outlined"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setGameName(event.target.value)
              }
            />
            <TextField
              className="CreateGameTextField"
              required
              id="filled-required"
              label="Your Name"
              placeholder="Enter your name"
              defaultValue={createdBy}
              variant="outlined"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setCreatedBy(event.target.value)
              }
            />
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gameType}
              onChange={(
                event: ChangeEvent<{
                  name?: string | undefined;
                  value: any;
                }>
              ) => setGameType(event.target.value)}
            >
              <FormControlLabel
                value={"Fibonacci"}
                control={<Radio color="primary" size="small" />}
                label="Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)"
              />
            </RadioGroup>
          </CardContent>
          <CardActions className="CreateGameCardAction">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="CreateGameButton"
            >
              Create
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grow>
  );
};
