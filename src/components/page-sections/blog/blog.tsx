"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useResponsive from "@/hooks/useResponsive";
import { ArrowForwardIos, Search } from "@mui/icons-material";
import PostCard from "../../post-card";
import { MD_UP_PARAMS } from "@/constants/media-queries";
import { Locale } from "@/types/locale";

interface Props {
  posts: any;
  locale: Locale;
}

const Blog: React.FC<Props> = ({ posts, locale }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }}>
      <Container>
        <Grid
          component={"form"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={3}
        >
          <Typography variant="h4" mr={2}>
            {`I'd like to learn about`}
          </Typography>
          <TextField
            size="small"
            variant="filled"
            sx={{ minWidth: 280 }}
            placeholder="content marketing"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    <Search sx={{ color: "primary.main" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
          Latest Posts
        </Typography>
        <Grid container spacing={3}>
          {posts.data.map((item: any) => (
            <Grid item key={item.id} xs={12} md={4}>
              <PostCard post={item} locale={locale} />
            </Grid>
          ))}
        </Grid>
        {posts.meta.pagination.total > 1 && (
          <ButtonGroup
            variant="outlined"
            aria-label="blog pagination"
            sx={{ mt: 4 }}
          >
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>
              <ArrowForwardIos
                fontSize="small"
                sx={{ transform: "scale(.7)" }}
              />
            </Button>
          </ButtonGroup>
        )}
      </Container>
    </Box>
  );
};

export default Blog;
