"use client";
import { FC, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { Languages } from "@/enums/languages";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Locale } from "@/types/locale";
import { Routes } from "@/enums/routes";
import LinkWrap from "../link-wrap";

const locales: string[] = ["en", "ar"];

interface Props {
  locale: Locale;
  activePage: string;
  single?: string;
}

const LangSwitcher: FC<Props> = ({ locale, activePage, single }) => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const getCurrentUrl = (locale: string): string => {
    if (activePage === "home") {
      return Routes.ROOT + locale;
    } else {
      if (single) {
        return (
          Routes.ROOT + locale + Routes.ROOT + activePage + Routes.ROOT + single
        );
      } else {
        return Routes.ROOT + locale + Routes.ROOT + activePage;
      }
    }
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={<KeyboardArrowDown fontSize="small" />}
        disableRipple
        disableFocusRipple
        disableElevation
        sx={{
          color: "inherit",
          textTransform: "capitalize",
          border: "1px solid",
          borderColor: "common.white",
          minWidth: 88,
        }}
      >
        {locale === Languages.ENGLISH ? "English" : "عربى"}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ minWidth: 88, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  disablePadding
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {locales
                    .filter((item: string) => item !== locale)
                    .map((locale: string) => (
                      <Box key={locale} onClick={handleClose} component={"li"}>
                        <LinkWrap
                          href={getCurrentUrl(locale)}
                          sx={{
                            width: 88,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {locale === Languages.ENGLISH ? "English" : "عربى"}
                        </LinkWrap>
                      </Box>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default LangSwitcher;
