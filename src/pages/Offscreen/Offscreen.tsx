import React from 'react';
import './Offscreen.css';

interface Props {
  title: string;
}

const Offscreen: React.FC<Props> = ({ title }: Props) => {
  return <div className="OptionsContainer">{title} Page</div>;
};

export default Offscreen;
