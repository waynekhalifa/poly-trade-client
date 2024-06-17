import { Facebook, Instagram, LinkedIn, X, YouTube } from "@mui/icons-material";
import LinkWrap from "../link-wrap";

// import XIcon from '@mui/icons-material/X';

interface Props {
  data: any;
}

const SocialLink: React.FC<Props> = ({ data }) => {
  const { name, url, newTab } = data;

  return (
    <LinkWrap blank={newTab} href={url} sx={{ p: "4px" }}>
      <>
        {name === "facebook" && (
          <Facebook
            fontSize="small"
            sx={{ color: "common.white", transform: "scale(.8)" }}
          />
        )}
      </>
      <>
        {name === "twitter" && (
          <X
            fontSize="small"
            sx={{ color: "common.white", transform: "scale(.8)" }}
          />
        )}
      </>
      <>
        {name === "instagram" && (
          <Instagram
            fontSize="small"
            sx={{ color: "common.white", transform: "scale(.8)" }}
          />
        )}
      </>
      <>
        {name === "youtube" && (
          <YouTube
            fontSize="small"
            sx={{ color: "common.white", transform: "scale(.8)" }}
          />
        )}
        {name === "linkedin" && (
          <LinkedIn
            fontSize="small"
            sx={{ color: "common.white", transform: "scale(.8)" }}
          />
        )}
      </>
    </LinkWrap>
  );
};

export default SocialLink;
