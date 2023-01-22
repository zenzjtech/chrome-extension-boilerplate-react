import React from 'react';
import './Options.css';
import {Typography} from "@mui/material";

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
      <>
        <div className="OptionsContainer">{title} Page</div>
        <Typography
            variant={"h1"}
            color={"primary"}
            className={"OptionsContainer"}
        >
          Hello from MaterialUI
        </Typography>
      </>
  )
};

export default Options;
