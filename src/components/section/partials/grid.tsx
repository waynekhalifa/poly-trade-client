import { Fragment } from "react";
import Image from "next/image";
import { Box, Grid as MuiGrid } from "@mui/material";

import Content from "../../content";
import { linearGradient } from "@/utils/bg-gradient";
import { getStrapiURL } from "@/utils/api-helpers";
import { ISessionUser } from "@/types/session";
import { Locale } from "@/types/locale";

interface Props {
  content: any;
  grid: any;
  listings: any[];
  activePage: string;
  searchParams: any;
  session: ISessionUser | null;
  locale: Locale;
}

const Grid: React.FC<Props> = ({
  content,
  grid,
  listings,
  activePage,
  searchParams,
  session,
  locale,
}) => {
  const { rows } = grid;

  const renderGridContent = (
    rowNum: number,
    columnNum: number
  ): React.ReactNode => {
    return (
      <>
        {content
          .filter(
            (item: any) =>
              item.position.rowNum === rowNum &&
              item.position.columnNum === columnNum
          )
          .map((item: any, index: number) => (
            <Content
              component={item}
              key={index}
              listings={listings}
              activePage={activePage}
              locale={locale}
              searchParams={searchParams}
              session={session}
            />
          ))}
      </>
    );
  };

  return (
    <>
      {rows.map((row: any, rowIndex: number) => (
        <Fragment key={rowIndex}>
          <MuiGrid
            container
            spacing={row.spacing}
            pt={{
              xs: row.padding && row.padding.top ? row.padding.top.xs : 0,
              sm: row.padding && row.padding.top ? row.padding.top.sm : 0,
              md: row.padding && row.padding.top ? row.padding.top.md : 0,
              lg: row.padding && row.padding.top ? row.padding.top.lg : 0,
            }}
            pb={{
              xs: row.padding && row.padding.bottom ? row.padding.bottom.xs : 0,
              sm: row.padding && row.padding.bottom ? row.padding.bottom.sm : 0,
              md: row.padding && row.padding.bottom ? row.padding.bottom.md : 0,
              lg: row.padding && row.padding.bottom ? row.padding.bottom.lg : 0,
            }}
            pl={{
              xs: row.padding && row.padding.left ? row.padding.left.xs : 0,
              sm: row.padding && row.padding.left ? row.padding.left.sm : 0,
              md: row.padding && row.padding.left ? row.padding.left.md : 0,
              lg: row.padding && row.padding.left ? row.padding.left.lg : 0,
            }}
            pr={{
              xs: row.padding && row.padding.right ? row.padding.right.xs : 0,
              sm: row.padding && row.padding.right ? row.padding.right.sm : 0,
              md: row.padding && row.padding.right ? row.padding.right.md : 0,
              lg: row.padding && row.padding.right ? row.padding.right.lg : 0,
            }}
            boxShadow={row.boxShadow ? row.boxShadow : "none"}
            minHeight={{
              xs: row.height ? row.height.xs : 1,
              sm: row.height ? row.height.sm : 1,
              md: row.height ? row.height.md : 1,
              lg: row.height ? row.height.lg : 1,
            }}
          >
            {row.columns.map((column: any, columnIndex: number) => (
              <MuiGrid
                key={column.id}
                item
                xs={column.span ? column.span.xs : 12}
                sm={column.span ? column.span.sm : 12}
                md={column.span ? column.span.md : 12}
                lg={column.span ? column.span.lg : 12}
              >
                <Box
                  position={"relative"}
                  height={{
                    xs: column.height ? column.height.xs : "auto",
                    sm: column.height ? column.height.sm : "auto",
                    md: column.height ? column.height.md : "auto",
                    lg: column.height ? column.height.lg : "auto",
                  }}
                >
                  {column.background &&
                    column.background.image &&
                    column.background.image.data && (
                      <Box position={"absolute"} sx={{ inset: 0 }}>
                        <Image
                          src={getStrapiURL(
                            column.background.image.data.attributes.url
                          )}
                          alt="bg-image"
                          fill
                        />
                      </Box>
                    )}
                  <Box
                    position={"relative"}
                    top={{
                      xs:
                        column.alignment && column.alignment.xs === "center"
                          ? "50%"
                          : "0%",
                      sm:
                        column.alignment && column.alignment.sm === "center"
                          ? "50%"
                          : "0%",
                      md:
                        column.alignment && column.alignment.md === "center"
                          ? "50%"
                          : "0%",
                      lg:
                        column.alignment && column.alignment.lg === "center"
                          ? "50%"
                          : "0%",
                    }}
                    zIndex={1}
                    bgcolor={
                      column.background && column.background.color
                        ? column.background.color
                        : "transparent"
                    }
                    pt={{
                      xs:
                        column.padding && column.padding.top
                          ? column.padding.top.xs
                          : 0,
                      sm:
                        column.padding && column.padding.top
                          ? column.padding.top.sm
                          : 0,
                      md:
                        column.padding && column.padding.top
                          ? column.padding.top.md
                          : 0,
                      lg:
                        column.padding && column.padding.top
                          ? column.padding.top.lg
                          : 0,
                    }}
                    pb={{
                      xs:
                        column.padding && column.padding.bottom
                          ? column.padding.bottom.xs
                          : 0,
                      sm:
                        column.padding && column.padding.bottom
                          ? column.padding.bottom.sm
                          : 0,
                      md:
                        column.padding && column.padding.bottom
                          ? column.padding.bottom.md
                          : 0,
                      lg:
                        column.padding && column.padding.bottom
                          ? column.padding.bottom.lg
                          : 0,
                    }}
                    pl={{
                      xs:
                        column.padding && column.padding.left
                          ? column.padding.left.xs
                          : 0,
                      sm:
                        column.padding && column.padding.left
                          ? column.padding.left.sm
                          : 0,
                      md:
                        column.padding && column.padding.left
                          ? column.padding.left.md
                          : 0,
                      lg:
                        column.padding && column.padding.left
                          ? column.padding.left.lg
                          : 0,
                    }}
                    pr={{
                      xs:
                        column.padding && column.padding.right
                          ? column.padding.right.xs
                          : 0,
                      sm:
                        column.padding && column.padding.right
                          ? column.padding.right.sm
                          : 0,
                      md:
                        column.padding && column.padding.right
                          ? column.padding.right.md
                          : 0,
                      lg:
                        column.padding && column.padding.right
                          ? column.padding.right.lg
                          : 0,
                    }}
                    mb={{
                      xs: column.bottomMargin ? column.bottomMargin.xs : 0,
                      sm: column.bottomMargin ? column.bottomMargin.sm : 0,
                      md: column.bottomMargin ? column.bottomMargin.md : 0,
                      lg: column.bottomMargin ? column.bottomMargin.lg : 0,
                    }}
                    height={{
                      xs: column.innerHeight ? column.innerHeight.xs : "auto",
                      sm: column.innerHeight ? column.innerHeight.sm : "auto",
                      md: column.innerHeight ? column.innerHeight.md : "auto",
                      lg: column.innerHeight ? column.innerHeight.lg : "auto",
                    }}
                    sx={{
                      transform: {
                        xs:
                          column.alignment && column.alignment.xs === "center"
                            ? "translateY(-50%)"
                            : "translateY(0%)",
                        sm:
                          column.alignment && column.alignment.sm === "center"
                            ? "translateY(-50%)"
                            : "translateY(0%)",
                        md:
                          column.alignment && column.alignment.md === "center"
                            ? "translateY(-50%)"
                            : "translateY(0%)",
                        lg:
                          column.alignment && column.alignment.lg === "center"
                            ? "translateY(-50%)"
                            : "translateY(0%)",
                      },
                      backgroundImage:
                        column.background && column.background.gradient
                          ? linearGradient(
                              column.background.gradient.startColor,
                              column.background.gradient.endColor,
                              column.background.gradient.degree
                            )
                          : "none",
                    }}
                  >
                    {renderGridContent(rowIndex + 1, columnIndex + 1)}
                  </Box>
                </Box>
              </MuiGrid>
            ))}
          </MuiGrid>
        </Fragment>
      ))}
    </>
  );
};

export default Grid;
