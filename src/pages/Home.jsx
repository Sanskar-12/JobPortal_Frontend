import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import {
  Box,
  Card,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobactions } from "../redux/actions/jobActions";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import CardElement from "../components/CardElement";
import Footer from "../components/Footer";
import { loadJobTypeactions } from "../redux/actions/jobTypeActions";
import Selection from "../components/Selection";
import SelectLocation from "../components/SelectLocation";

const Home = () => {
  const { jobs, pages, loading } = useSelector(
    (state) => state.loadJobs
  );
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [cat, setCat] = useState("");
  const [location, setLocation] = useState("");
  const { keyword } = useParams();

  useEffect(() => {
    dispatch(loadJobactions(pageNumber, keyword, cat, location));
  }, [dispatch, pageNumber, keyword, cat, location]);

  useEffect(() => {
    dispatch(loadJobTypeactions());
  }, [dispatch]);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  const handleChangeLocation=(e)=>{
    setLocation(e.target.value)
  }

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter job by category
                  </Typography>
                </Box>
                <Selection
                  handleChangeCategory={handleChangeCategory}
                  cat={cat}
                />
              </Card>

              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter job by location
                  </Typography>
                  <SelectLocation
                  handleChangeLocation={handleChangeLocation}
                  location={location}
                />
                </Box>
              </Card>
            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : jobs?.jobs?.length === 0 ? (
                <>
                  <Box
                    sx={{
                      minHeight: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2>No result found!</h2>
                  </Box>
                </>
              ) : (
                jobs?.map((jobs, i) => (
                  <CardElement
                    key={i}
                    id={jobs?._id}
                    jobTitle={jobs?.title}
                    description={jobs?.description}
                    category={
                      jobs?.jobType ? jobs?.jobType?.jobTypeName : "No category"
                    }
                    location={jobs?.location}
                  />
                ))
              )}
              <Stack spacing={2}>
                <Pagination
                  page={pageNumber}
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPageNumber(value)}
                />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
