import { Box, Grid, Typography } from "@mui/material";
import { CategoryBasedExpense } from "../services/transaction.interface";
import { colorArray, colorConfig } from "../config/colors";

interface Props {
  category: CategoryBasedExpense[];
}

export default function MonthlyCategoryExpense({ category }: Props) {
  function totalExpense() {
    console.log(category);
    let tE = 0;
    category.map((c) => (tE += c.value));
    console.log(tE);
    return tE;
  }

  return (
    <Box>
      <Typography
        sx={{
          bgcolor: colorConfig.secondary,
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
        }}
        fontWeight={"bold"}
        color={colorConfig.bg}
      >{`Total Expense : ${totalExpense()}₹`}</Typography>
      <Grid
        my={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        rowGap={2}
        columnGap={1}
        container
      >
        {category.map((c, i) => (
          <Grid sx={{ position: "relative" }} item xs={5.5} key={i}>
            <Typography color="secondary">
              {`${c.key} : ${c.value.toFixed(2)}₹`}{" "}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                height: "32px",
                borderRadius: ".2rem",
                width: `100%`,
                backgroundColor: "#392467",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                height: "32px",
                borderRadius: ".2rem",
                width: `100%`,
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"#FFD1E3"} textAlign={"center"}>
                {c.percent.toFixed(2)}%
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                height: "32px",
                borderRadius: ".2rem",
                width: `${c.percent}%`,
                backgroundColor: colorArray[i],
                display: "flex",
              }}
            ></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
