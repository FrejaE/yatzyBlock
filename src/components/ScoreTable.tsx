import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const players = ["Anna", "Emil"];

const upperCategories = ["Ettor", "Tvåor", "Treor", "Fyror", "Femmor", "Sexor"];
const lowerCategories = [
  "Ett par",
  "Två par",
  "Tre par",
  "Triss",
  "Fyrtal",
  "Femtal",
  "Liten stege",
  "Stor stege",
  "Full stege",
  "Kåk",
  "Hus",
  "Torn",
  "Chans",
  "Yatzy",
];

export const ScoreTable = () => {
  return (
    <>
      <Table
        stickyHeader
        aria-label="sticky table"
        sx={{ backgroundColor: "white" }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: "4px" }}> Spelare </TableCell>
            {players.map((p) => (
              <TableCell key={p}>{p}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* övre sektionen */}
        <TableBody>
          {upperCategories.map((upperCat) => (
            <TableRow key={upperCat}>
              <TableCell sx={{ padding: "4px" }}>{upperCat}</TableCell>

              {/* varje spelares input */}
              {players.map((p) => (
                <TableCell key={p} sx={{ padding: "4px" }}>
                  <TextField
                    type="number"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        padding: 0,
                        width: "40px",
                        textAlign: "center",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#fff",
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {/* här slutar övre sektion */}
        {/* bonus och summa */}
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ padding: "4px", borderTop: "2px solid #454545ff" }}
            >
              Total
            </TableCell>
            {players.map((p) => (
              <TableCell
                key={p}
                sx={{ padding: "4px", borderTop: "2px solid #454545ff" }}
              >
                {/* <TextField> {Här kommer uträkningen vara }</TextField> */}
                <TextField
                  type="number"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    sx: {
                      padding: 0,
                      width: "40px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "#fff",
                      fontSize: "0.9rem",
                    },
                  }}
                ></TextField>
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ padding: "4px", borderBottom: "2px solid #454545ff" }}
            >
              Bonus
            </TableCell>
            {players.map((p) => (
              <TableCell
                key={p}
                sx={{ padding: "4px", borderBottom: "2px solid #454545ff" }}
              >
                {/* <TextField> {Här kommer booelan för bonus va}</TextField> */}
                <TextField
                  type="number"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    sx: {
                      padding: 0,
                      width: "40px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "#fff",
                      fontSize: "0.9rem",
                    },
                  }}
                >
                  {" "}
                  33{" "}
                </TextField>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>

        <TableBody>
          {lowerCategories.map((lowCat) => (
            <TableRow key={lowCat}>
              <TableCell sx={{ padding: "4px" }}> {lowCat} </TableCell>

              {players.map((p) => (
                <TableCell key={p} sx={{ padding: "4px" }}>
                  <TextField
                    type="number"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        padding: 0,
                        width: "40px",
                        textAlign: "center",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#fff",
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
