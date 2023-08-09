import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingBox from "../components/LoadingBox";

import Button from "@mui/material/Button";
import { loadsingleJobactions } from "../redux/actions/jobActions";
import { userApplyJobActions } from "../redux/actions/userActions";
import { toast } from "react-toastify";

const SingleJob = () => {
  const dispatch = useDispatch();
  const { loading, job } = useSelector((state) => state.singleJob);
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadsingleJobactions(id));
  }, [dispatch, id]);

  const applyForAJob = () => {
    dispatch(
      userApplyJobActions(
        {
          title: job?.title,
          description: job?.description,
          salary: job?.salary,
          location: job?.location,
        },
        toast.success("Applied Successfully")
      )
    );
  };
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa" }}>
        <Navbar />
        <Box sx={{ height: "85vh" }}>
          <Container sx={{ pt: "30px" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 4, p: 2 }}>
                {loading ? (
                  <LoadingBox />
                ) : (
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        {job?.title}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Salary
                        </Box>
                        : ${job?.salary}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Category
                        </Box>
                        :{" "}
                        {job?.jobType
                          ? job?.jobType.jobTypeName
                          : "No category"}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Location
                        </Box>
                        : {job?.location}
                      </Typography>
                      <Typography variant="body2" sx={{ pt: 2 }}>
                        <h3>Job description:</h3>
                        {job?.description}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2 }}>
                  <Button
                    onClick={applyForAJob}
                    sx={{ fontSize: "13px" }}
                    variant="contained"
                  >
                    Apply for this Job
                  </Button>
                </Card>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default SingleJob;
