import { Box } from "@mui/material";
import CourseModule from "./course-module";

interface Props {
  data: any;
}

const CourseModuleList: React.FC<Props> = ({ data }) => {
  const { list, margin, padding } = data;

  return (
    <Box
      mt={margin ? margin.top : 0}
      mb={margin ? margin.bottom : 0}
      ml={margin ? margin.left : 0}
      mr={margin ? margin.right : 0}
      pt={padding ? padding.top : 0}
      pb={padding ? padding.bottom : 0}
      pl={padding ? padding.left : 0}
      pr={padding ? padding.right : 0}
    >
      {list.map((item: any) => (
        <CourseModule key={item.id} data={item} />
      ))}
    </Box>
  );
};

export default CourseModuleList;
